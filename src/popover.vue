<template>
    <div ref="popover" class="popover" @click="onClick">
        <div v-if="visible" ref="contentWrapper" class="content-wrapper" :class="{[`position-${position}`]: true}">
            <slot name="content"></slot>
        </div>
        <!-- span标签增加display: inline-block; 解决包裹元素高度一致的问题 -->
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "tPopover",
        components: {},

        props: {
            position: {
                type: String,
                default: 'top',
                validaor(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            }
        },

        data() {
            return {
                visible: false,
            }
        },

        mounted() {
        },

        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                const {contentWrapper,triggerWrapper} = this.$refs
                const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
                let x = {
                    top: {
                        top: top + window.scrollY,
                        left: left + window.scrollX,
                    },
                    bottom: {
                        top: top + height + window.scrollY,
                        left: left + window.scrollX,
                    },
                    left: {
                        top: top + window.scrollY,
                        left: left + window.scrollX,
                    },
                    right: {
                        top: top + window.scrollY,
                        left: left+ width + window.scrollX,
                    },
                }
                contentWrapper.style.left = x[this.position].left + 'px'
                contentWrapper.style.top = x[this.position].top + 'px'
            },
            onClickDocument(e) { // 如果点击在popover 则让popover自己去处理，document不管
                if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) {return}
                this.close()
            },
            open() {
                this.visible = true
                 setTimeout(() => {
                    this.positionContent()
                     document.addEventListener('click', this.onClickDocument)
                 })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) { // 找到点击事件的元素
                    if (this.visible) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #ddd;
    $border-radius: 4px;
    .popover {
        position: relative;
        display: inline-block;
        vertical-align: top;
    }
    .content-wrapper {
        position: absolute;
        padding: .5em 1em;
        background: white;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5)); // 伪类增加阴影，兼容性差IE、Opera Mini不支持
        max-width: 20em;
        word-wrap: break-word;
        &::before {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }
        &.position-top {
            margin-top: -10px;
            transform: translateY(-100%);
            &::before {
                left: 10px;
                top: 100%;
                border-top-color: white;
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before {
                left: 10px;
                bottom: 100%;
                border-bottom-color: white;
            }
        }
        &.position-left {
            margin-left: -10px;
            transform: translateX(-100%);
            &::before {
                left: 100%;
                top: 7px;
                border-left-color: white;
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before {
                right: 100%;
                top: 7px;
                border-right-color: white;
            }
        }
    }
</style>

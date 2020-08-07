<template>
    <div ref="popover" class="popover">
        <div v-if="visible" ref="contentWrapper" class="content-wrapper" :class="{[`position-${position}`]: true}">
            <slot name="content" :close="close"></slot>
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
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover', 'focus'].indexOf(value) >= 0
                }
            },
            container: {
                type: Element
            }
        },

        data() {
            return {
                visible: false,
            }
        },

        computed: {},

        mounted() {
            const popover = this.$refs.popover
            if (this.trigger === 'click') {
                popover.addEventListener('click', this.onClick)
            } else if (this.trigger === 'hover') {
                popover.addEventListener('mouseenter', this.open)// 添加hover监听事件
                popover.addEventListener('mouseleave', this.close)// 取消hover监听事件
            } else {
                popover.addEventListener('mousedown', this.open)// 添加hover监听事件
                popover.addEventListener('mouseup', this.close)// 取消hover监听事件
            }
        },

        beforeDestroy() { // 页面销毁的时候去掉监听
            this.putBackContent()
            const popover = this.$refs.popover
            if (this.trigger === 'click') {
                popover.removeEventListener('click', this.open())
            } else if (this.trigger === 'hover') {
                popover.removeEventListener('mouseenter', this.open)// 添加hover监听事件
                popover.removeEventListener('mouseleave', this.close)// 取消hover监听事件
            } else {
                popover.removeEventListener('mousedown', this.open())
                popover.removeEventListener('mouseup', this.close())
            }
        },

        methods: {
            positionContent() {
                if (this.$refs.contentWrapper) {
                    const {contentWrapper,triggerWrapper} = this.$refs;
                    (this.container || document.body).appendChild(contentWrapper)
                    const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
                    let positions = {
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
                    contentWrapper.style.left = positions[this.position].left + 'px'
                    contentWrapper.style.top = positions[this.position].top + 'px'
                }
            },
            onClickDocument(e) { // 如果点击在popover 则让popover自己去处理，document不管
                if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) {return}
                this.close()
            },
            open() {
                this.visible = true
                this.$emit('open')
                 setTimeout(() => {
                    this.positionContent()
                     document.addEventListener('click', this.onClickDocument)
                 })
            },
            close() {
                this.visible = false
                this.$emit('close')
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
            putBackContent () {
                const {contentWrapper, popover} = this.$refs
                if (!contentWrapper) {return}
                popover.appendChild(contentWrapper)
            }
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
                border-bottom: none;
                border-top-color: white;
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before {
                left: 10px;
                bottom: 100%;
                border-top: none;
                border-bottom-color: white;
            }
        }
        &.position-left {
            margin-left: -10px;
            transform: translateX(-100%);
            &::before {
                left: 100%;
                top: 7px;
                border-right: none;
                border-left-color: white;
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before {
                right: 100%;
                top: 7px;
                border-left: none;
                border-right-color: white;
            }
        }
    }
</style>

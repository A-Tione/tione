<template>
    <div ref="popover" class="popover" @click="onClick">
        <div v-if="visible" ref="contentWrapper" class="content-wrapper">
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

        props: {},

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
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
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
        margin-top: -10px;
        background: white;
        transform: translateY(-100%);
        border: 1px solid $border-color;
        border-radius: $border-radius;
        /*box-shadow: 0 0 1 px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5)); // 伪类增加阴影，兼容性差IE、Opera Mini不支持
        max-width: 20em;
        word-wrap: break-word;
        &::before {
            content: '';
            display: block;
            border: 10px solid transparent;
            border-top-color: white;
            width: 0;
            height: 0;
            position: absolute;
            left: 10px;
            top: 100%;
        }
    }
</style>

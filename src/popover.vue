<template>
    <div ref="popover" class="popover" @click="onClick">
        <div v-if=" visible" ref="contentWrapper" class="content-wrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
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
                this.$refs.contentWrapper.style.left = left+ window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            onClickDocument(e) { // 如果点击在popover 则让popover自己去处理，document不管
                if (this.$refs.popover
                    && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) { return }
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
    .popover {
        position: relative;
        display: inline-block;
        vertical-align: top;
    }
    .content-wrapper {
        position: absolute;
        transform: translateY(-100%);
        border: 1px solid red;
        box-shadow: 0 0 3px 0 #666666;

    }
</style>

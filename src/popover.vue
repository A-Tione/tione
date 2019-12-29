<template>
    <div class="popover" @click.stop="xxx">
        <div v-if="visible" ref="contentWrapper" class="content-wrapper" @click.stop>
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
            xxx() {
                this.visible = !this.visible
                if (this.visible) {
                    setTimeout(() => {
                    document.body.appendChild(this.$refs.contentWrapper)
                        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left = left + 'px'
                        this.$refs.contentWrapper.style.top = top + 'px'
                        let x = () => {
                            this.visible = false
                            document.removeEventListener('click', x)
                        }
                        document.addEventListener('click', x)
                    })
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

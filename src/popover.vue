<template>
    <div class="popover" @click.stop="xxx">
        <div v-if="visible" class="content-wrapper" @click.stop>
            <slot name="content"></slot>
        </div>
       <slot></slot>
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
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
            box-shadow: 0 0 3px 0 #666666;

        }
    }
</style>
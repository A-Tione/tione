<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tLayout",

        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },

        mounted() {
            console.log(this.$children)
            this.$children.forEach(vm => {
                if (vm.$options.name === 'tSider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        border: 1px solid black ;
        &.hasSider {
            flex-direction: row;
        }
        &.hasSider {
            flex-direction: row;
        }
    }

</style>
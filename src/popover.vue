<template>
    <div class="popover" @click="xxx">
        <div v-if="visible" class="content-wrapper">
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
            bottom: 1000%;
            left: 0;
            background: red;
            box-shadow: 0 0 3px 0 #666666;

        }
    }
</style>
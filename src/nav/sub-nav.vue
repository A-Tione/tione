<template>
    <div class="sub-nav-content">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="sub-nav-content-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sub-nav',
        props: {},
        data() {
            return {
                open: false
            }
        },
        methods: {
            onClick() {
                this.open = !this.open
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sub-nav-content {
        position: relative;
        >span {
            padding: 10px 30px;
            display: inline-block;
            vertical-align: top;
        }
        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
        }
    }
    .sub-nav-content .sub-nav-content .sub-nav-content-popover {
        top: 0;
        left: 100%;
        margin-left: 4px;
    }

</style>
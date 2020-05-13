<template>
    <div class="sub-nav-content">
        <span>
            <slot name="title"></slot>
        </span>
        <div class="sub-nav-content-popover">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sub-nav',
        props: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .sub-nav-content {
        position: relative;
        padding: 10px 30px;
        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
        }
    }

</style>
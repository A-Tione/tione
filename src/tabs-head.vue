<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="right">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tTabsHead",
        inject: ['eventBus'], // 注入

        created() {
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid orange;
        margin: 4px ;
        .right {
            margin-left: auto;
        }

    }
</style>
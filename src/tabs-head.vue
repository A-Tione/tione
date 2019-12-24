<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
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
    .tabs-head {

    }
</style>
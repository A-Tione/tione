<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tTabsBody",
        inject: ['eventBus'], // 注入

        created() {
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-body {

    }
</style>
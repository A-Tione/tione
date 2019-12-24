<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tTabsPane",
        inject: ['eventBus'], // 注入

        created() {
            this.eventBus.$on('update:selected', (name) => {
                console.log(name);
            })
        },

        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    .tabs-pane {

    }
</style>
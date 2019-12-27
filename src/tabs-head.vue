<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
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
            this.eventBus.$on('update:selected', (item,vm) => {
                // console.log(item);
                // console.log(vm);
            })
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head {
        position: relative;
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid orange;
        margin: 4px ;
        .line {
            position: absolute;
            bottom: 0;
            width: 100px;
            border-bottom: 1px solid black;
        }
        .right {
            margin-left: auto;
        }

    }
</style>
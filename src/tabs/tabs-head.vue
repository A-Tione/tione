<template>
    <div class="tabs-head">
        <slot></slot>
        <div v-show="xxxx" class="line" ref="line"></div>
        <div class="right">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tTabsHead",
        inject: ['eventBus'], // 注入

        data() {
            return {
                xxxx: false
            }
        },

        mounted() {
            const head = this.$el.getBoundingClientRect()
            this.eventBus.$on('update:selected', (item,vm) => {
                this.xxxx = true
                let {height, width, top, left} = vm.$el.getBoundingClientRect()  // 获取元素宽高上左
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.transform = `translateX(${left - head.left}px)`
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
        margin: 4px 0;
        border-bottom: 1px solid #ddd;
        .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid orange;
            transition: all .3s;
        }
        .right {
            margin-left: auto;
            padding-right: 1em;
        }

    }
</style>
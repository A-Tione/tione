<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue/types'

    export default {
        name: "collapse",
        components: {},

        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array
            }
        },

        data() {
            return {
                eventBus: new Vue(),
            }
        },

        provide() {
            return {
                eventBus: this.eventBus
            }
        },

        mounted() {
            this.eventBus.$emit('update:selected', this.selected) // 初始状态通知所有的儿子
            this.eventBus.$on('update:addSelected', name => { // 监听儿子传来的动作
                let selectedCopy = JSON.parse(JSON.stringify(this.selected)) // vue不支持直接修改props
                if (this.single) {
                    selectedCopy = [name]
                } else {
                    selectedCopy.push(name)
                }
                this.$emit('update:selected', selectedCopy)
                this.eventBus.$emit('update:selected', selectedCopy) // 传值给儿子，告诉儿子该如何做
            })
            this.eventBus.$on('update:removeSelected', name => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index,1)
                this.$emit('update:selected', selectedCopy)
                this.eventBus.$emit('update:selected', selectedCopy)
            })
        },

        methods: {}
    }
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }

</style>
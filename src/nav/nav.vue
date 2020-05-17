<template>
    <div class="nav-content" :class="{vertical}">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: 't-nav',
        props: {
            selected: {
                type: String,
                default: ''
            },
            multiple: {
                type: Boolean,
                default: false
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                items: [],
                namePath: [] //存下拉数组
            }
        },
        provide() {
            return {
                root: this,
                vertical: this.vertical
            }
        },
        mounted() {
            this.updateChildren()
            this.listenToChildren()
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            addItem(vm) {
                this.items.push(vm)
            },
            updateChildren() {
                this.items.forEach(vm => {
                    vm.selected = vm.name === this.selected;
                })
            },
            listenToChildren() {
                this.items.forEach(vm => {
                    vm.$on('update:selected', name => {
                        this.$emit('update:selected', name)
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/var";
    .nav-content {
        display: flex;
        border-bottom: 1px solid $grey;
        color: $color;
        cursor: default;
        &.vertical {
            flex-direction: column;
            border: 1px solid $grey;
        }
    }

</style>
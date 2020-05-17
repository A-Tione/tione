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
                type: Array,
                default: ()=> []
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
                namePath: []
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
                    vm.selected = this.selected.indexOf(vm.name) >= 0;
                })
            },
            listenToChildren() {
                this.items.forEach(vm => {
                    vm.$on('add:selected', name => {
                        if (this.multiple) {
                            if (this.selected.indexOf(name)<0) {
                                let copy = JSON.parse(JSON.stringify(this.selected))
                                copy.push(name)
                                this.$emit('update:selected', copy)
                            }
                        } else {
                            this.$emit('update:selected', [name])
                        }
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
        }
    }

</style>
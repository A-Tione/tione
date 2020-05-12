<template>
    <div class="nav-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'nav',
        props: {
            selected: {
                type: Array,
                default: ()=> []
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            items() {
                return this.$children.filter(vm => vm.$options.name === 't-nav-item')
            }
        },
        mounted() {
            this.updateChildren()
            this.listenToChildren()
        },
        updated() {
            this.listenToChildren()
        },
        methods: {
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


</style>
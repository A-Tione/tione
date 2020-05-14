<template>
    <div class="nav-item-content" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 't-nav-item',
        inject: ['root'],
        props: {
            name: {
                type: String,
                required: true
            },
        },
        mounted() {
            this.root.addItem(this)
        },
        data() {
            return {
                selected: false
            }
        },
        methods: {
            onClick() {
                this.$emit('add:selected', this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav-item-content {
        padding: 10px 30px;
        &.selected {
            background: red;
        }
    }

</style>
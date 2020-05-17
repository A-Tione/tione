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
                this.root.namePath = []
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/var";
    .nav-item-content {
        position: relative;
        padding: 10px 20px;
        &:not(.vertical) {
            &.selected {
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: $grey;
                    border-bottom: 2px solid $blue;
                }
            }
        }
    }
    .sub-nav-content .nav-item-content:not(.vertical) {
        &.selected {
            color: $color;
            background: $grey;
            &::after {
                display: none;
            }
        }
    }

</style>
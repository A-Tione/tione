<template>
    <div class="tabs-item" @click="xxx">
        <div class="item-box" :class="activeClass">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tTabsItem",
        inject: ['eventBus'], // 注入

        data() {
            return {
                active: false,
            }
        },

        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String,Number],
                required: true
            }
        },

        computed: {
            activeClass() {
                return {
                    active: this.active
                }
            }
        },

        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name
            })
        },

        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 1em;
        cursor: pointer;
        border: 1px solid green;
        .item-box {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .active {
            background: red;
        }

    }
</style>
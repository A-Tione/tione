<template>
    <div class="tabs-item" :class="activeClass" :data-name="name" @click="onClick">
        <div class="item-box">
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
                    active: this.active,
                    disabled: this.disabled
                }
            },
        },

        mounted() {
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name) => {
                    this.active = name === this.name
                })
            }
        },

        methods: {
            onClick() {
                if (!this.disabled) {
                    this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                    this.$emit('click', this)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $blue: orange;
    $disable-test-color: gray;
    .tabs-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 1em;
        cursor: pointer;
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled {
            color: gray;
            cursor: not-allowed;
        }
        .item-box {
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
</style>
<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">{{title}}</div>
        <div v-if="open" class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collapse-item",
        components: {},
        inject: ['eventBus'],

        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: [String, Number],
                required: true
            }
        },

        data() {
            return {
                open: false
            }
        },

        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', name => {
                if (name != this.name) {
                    this.close()
                }else {
                    this.show()
                }
            })
        },

        methods: {
            toggle() {
                if (this.open) {
                    this.open = false
                } else {
                    this.eventBus &&  this.eventBus.$emit('update:selected', this.name)
                }
            },
            show() {
                this.open = true
            },
            close() {
                this.open = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse-item {
        .title {
            display: flex;
            align-items: center;
            padding: 0 8px;
            border: 1px solid $grey;
            margin: -1px;
        }
        &:first-child {
            >.title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            >.title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        .content {
            padding: 0 8px;
        }
    }

</style>
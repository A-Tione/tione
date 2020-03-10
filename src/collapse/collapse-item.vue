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
                open: false,
                single: false
            }
        },

        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', names => { // 监听，等爸爸的指令
                this.open = names.indexOf(this.name) >= 0;
            })
        },

        methods: {
            toggle() {
                if (this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
                } else {
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
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
            cursor: pointer;
            &:hover {
                background: #E6E6E6;
            }
        }
        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        .content {
            padding: 8px;
            min-height: 60px;
        }
    }

</style>
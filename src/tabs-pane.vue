<template>
    <div class="tabs-pane">
        <div v-if="active" :class="activeClass">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tTabsPane",
        inject: ['eventBus'], // 注入

        props: {
            name: {
                type: [String,Number],
                required: true
            }
        },

        data() {
            return {
                active: false,
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

        },
    }
</script>

<style lang="scss" scoped>
    .tabs-pane {
        .active {
            background: red;
        }
    }
</style>
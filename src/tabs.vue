<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tTabs",
        props: {
            selected: {
                type: String,
                required: true,
                default() {
                    return ''
                }
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }

            }
        },

        created() {
            // this.$emit('update:selected', 'xxx')
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>
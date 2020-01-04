<template>
    <div class="collapse-item">
        <div class="title" @click="open=!open">{{title}}</div>
        <div v-if="open" class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collapse-item",
        components: {},

        props: {
            title: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                open: false
            }
        },

        mounted() {

        },

        methods: {}
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
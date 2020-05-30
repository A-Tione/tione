<template>
    <div class="pages-content">
        <table></table>
    </div>
</template>

<script>
    export default {
        name: 'pages',
        props: {
            colums: {
                type: Array,
                required: true
            },
            dataSource: {
                type: Array,
                required: true
            }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .pages-content {

    }

</style>
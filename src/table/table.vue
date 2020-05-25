<template>
    <div class="table-content">
        <table></table>
    </div>
</template>

<script>
    export default {
        name: 'table',
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
    .table-content {

    }

</style>
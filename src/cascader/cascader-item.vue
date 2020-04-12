<template>
    <div class="cascader-item-content">
        {{sourceItem.name}}
        <cascader-item
            v-if="sourceItem.children"
            v-for="item in sourceItem.children"
            :sourceItem="item">
        </cascader-item>
    </div>
</template>

<script>
    export default {
        name: 'cascaderItem',
        props: {
            sourceItem: {
                type: Object
            }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .cascader-item-content {
        border: 1px solid orange;
        margin: 10px;
    }

</style>
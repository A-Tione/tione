<template>
    <div class="cascader-content">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
<!--        递归组件-->
            <cascader-item v-for="(item, index) in source" :key="index" :sourceItem="item"></cascader-item>
        </div>
    </div>
</template>

<script>
    import cascaderItem from './cascader-item'

    export default {
        name: 'cascader',
        components: {cascaderItem},
        props: {
            source: {
                type: Array
            }
        },
    }
</script>

<style lang="scss" scoped>
    .cascader-content {

    }

</style>
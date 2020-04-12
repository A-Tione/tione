<template>
    <div class="cascader-content">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <!--递归组件-->
            <cascader-items :recursionItem="source"></cascader-items>
        </div>
    </div>
</template>

<script>
    import cascaderItems from './cascader-items'

    export default {
        name: 'cascader',
        components: {cascaderItems},
        props: {
            source: {
                type: Array
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>
    .cascader-content {
        .trigger {
            border: 1px solid red;
            height: 32px;
            width: 100px;
        }

        .popover {
            border: 1px solid red;
            height: 200px;
            display: flex;

            > div {
                margin-right: 10px;
            }

        }
    }

</style>
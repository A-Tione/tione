<template>
    <div class="cascader-content">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <!--递归组件-->
            <cascader-items
                :selected="selected"
                :recursionItem="source"
                :height="height"
                @updateSelected="updateSelected">
            </cascader-items>
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
            },
            height: {
                type: String
            },
            selected: {
                type: Array,
                default: ()=> {return []}
            }
        },
        computed: {},
        data() {
            return {
                popoverVisible: false,
            }
        },
        methods: {
            updateSelected(newItem) {
                this.$emit('updateSelected', newItem)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'styles/var';
    .cascader-content {
        position: relative;
        .trigger {
            height: 32px;
            width: 100px;
            border: 1px solid black;
        }

        .popover {
            position: absolute;
            top: 100%;
            left: 0;
            display: flex;
            background: white;
            @extend .box-shadow;

            > div {
                margin-right: 10px;
                white-space: nowrap;
            }

        }
    }

</style>
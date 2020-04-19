<template>
    <div class="cascader-content">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            {{result || ''}}
        </div>
        <div class="popover" v-if="popoverVisible">
            <!--递归组件-->
            <cascader-items
                :selected="selected"
                :recursionItem="source"
                :height="height"
                @update:selected="updateSelected">
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
        computed: {
            result() {
                return this.selected.map(item => item.name).join('/')
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        },
        methods: {
            updateSelected(newItem) {
                this.$emit('update:selected', newItem)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'styles/var';
    .cascader-content {
        position: relative;
        height: $input-height;
        .trigger {
            height: $input-height;
            display: inline-flex;
            align-items: center;
            padding: 0 1em;
            min-width: 10em;
            border: 1px solid $border-color;
            border-radius: $border-radius;
        }

        .popover {
            position: absolute;
            margin-top: 2px;
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
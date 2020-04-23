<template>
    <div class="cascader-content">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            {{result || ''}}
        </div>
        <div class="popover" v-if="popoverVisible">
            <!--递归组件-->
            <cascader-items
                :selected="selected"
                :items="source"
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
                default: () => {
                    return []
                }
            },
            loadData: {
                type: Function
            }
        },
        computed: {
            result() {
                return this.selected.map(item => item.name).join('/')
            }
        },
        data() {
            return {
                popoverVisible: false
            }
        },
        methods: {
            updateSelected(newItem) {
                this.$emit('update:selected', newItem)
                let lastItem = newItem[newItem.length - 1]// 最后一项就是用户选中的
                let simplest = (children, id) => {
                    return children.filter(item => item.id === id)[0]
                }
                let complex = (children, id) => {
                    let noChildren = []
                    let hasChildren = []
                    children.forEach(item => {
                        if (item.children) {
                            hasChildren.push(item)
                        } else {
                            noChildren.push(item)
                        }
                    })
                    let found = simplest(noChildren, id)
                    if (found) {
                        return found
                    } else {
                        for (let i = 0; i < hasChildren.length; i++) {
                            found = complex(hasChildren[i].children, id)
                            if (found) {
                                return found
                            }
                        }
                        return undefined
                    }
                }
                let updateSource = (result) => {
                    let copy = JSON.parse(JSON.stringify(this.source))
                    let last = complex(copy, lastItem.id)
                    last.children = result
                    this.$emit('update:source', copy)
                }
                this.loadData(lastItem, updateSource)// 将监听的值回调出去
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
            overflow: auto;
            min-height: 200px;
            @extend .box-shadow;

            > div {
                margin-right: 10px;
                white-space: nowrap;
            }

        }
    }

</style>
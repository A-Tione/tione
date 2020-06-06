<template>
    <div class="t-table-content">
        <table class="t-table-content-table" :class="{bordered, compact, striped: striped}">
            <thead>
            <tr>
                <th><input ref="allChecked" type="checkbox" @change="onChangeAllItems"
                           :checked="areAllItemsSelected"/></th>
                <th v-if="numberVisible">#</th>
                <th v-for="column in column" :key="column.field">
                    {{column.text}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in dataSource" :key="item.id">
                <td>
                    <input type="checkbox" @change="onChangeItem(item, index, $event)"
                    :checked="inSelectedItems(item)">
                </td>
                <td v-if="numberVisible">{{index+1}}</td>
                <template v-for="column in columns">
                    <td :key="column.field">{{item[column.field]}}</td>
                </template>
            </tr>
            </tbody>
        </table>
        <div v-if="loading" class="t-table-content-loading">
            <t-icon name="loading"></t-icon>
        </div>
    </div>
</template>

<script>
    import TIcon from 'src/icon'
    export default {
        name: 'table',
        components: {
            TIcon
        },
        props: {
            striped: {
                type: Boolean,
                default: true
            },
            selectedItems: {
                type: Array,
                default: ()=> []
            },
            compact: {
                type: Boolean,
                default: false
            },
            columns: {
                type: Array,
                required: true
            },
            loading: {
                type: Boolean,
                default: false,
            },
            dataSource: {
                type: Array,
                required: true,
                validator(array) {
                    return !(array.filter(item => item.id === undefined).length > 0)
                }
            },
            numberVisible: {
                type: Boolean,
                default: false
            },
            bordered: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {}
        },

        watch: {
            selectedItems() {
                if (this.selectedItems.length === this.dataSource.length) {
                    this.$refs.allChecked.indeterminate = false
                } else this.$refs.allChecked.indeterminate = this.selectedItems.length !== 0;
            }
        },

        computed: {
            areAllItemsSelected() { //判断所有元素是否被选中
                const a = this.dataSource.map(item => item.id).sort()
                const b = this.selectedItems.map(item => item.id).sort()
                let equal = true
                if (a.length !== b.length) { return equal }
                for (let i = 0; i < a.length; i++) {
                    if (a[i] !== b[i]) {
                        equal = false
                        break
                    }
                }
                return equal
            }
        },

        methods: {
            inSelectedItems(item) {
                return this.selectedItems.filter(value => value.id === item.id).length > 0
            },
            onChangeItem(item, index, e) {
                let selected = e.target.checked
                let copy = JSON.parse(JSON.stringify(this.selectedItems))
                if (selected) {
                    copy.push(item)
                } else {
                    copy = copy.filter(i => i.id !== item.id)
                }
                this.$emit('update:selectedItems', copy)
            },
            onChangeAllItems (e) {
                let selected = e.target.checked
                 this.$emit('update:selectedItems', selected? this.dataSource : [])
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'styles/var';
    $grey: darken($grey, 10%);

    .t-table-content {
        position: relative;
        &-table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            border-bottom: 1px solid $grey;
            &.bordered {
                border: 1px solid $grey;
                td, th {
                    border: 1px solid $grey;
                }
            }
            &.compact {
                td, th {
                    padding: 4px;
                }
            }
            td, th {
                border-bottom: 1px solid $grey;
                text-align: left;
                padding: 8px;
            }
            &.striped {
                tbody {
                    > tr {
                        &:nth-child(odd) {
                            background: white;
                        }
                        &:nth-child(even) {
                            background: lighten($grey, 10%);
                        }
                    }
                }
            }
        }
        &-loading {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.5);
            svg {
                width: 50px;
                height: 50px;
                @include spin
            }
        }
    }

</style>
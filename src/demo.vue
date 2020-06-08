<template>
    <div class="box">
        <div style="margin: 20px;">
            <t-table :columns="columns"
                     :data-source="dataSource"
                     bordered-items.sync="selected"
                     :order-by.sync="orderBy"
                     :loading="loading"
                     :selectedItems.sync="selected"
                     extendField="description"
                     :striped="true"
                     bordered
                     checkable
                     compact
                     numberVisible
                     :height="400"
                     @update:orderBy="sort">
                <template slot-scope="row">
                    <button @click="look(row.item)">查看</button>
                    <button @click="edit(row.item)">编辑</button>
                </template>
            </t-table>
        </div>
        <div style="margin: 20px;">
            <t-pager :total="10" :current="1" :current.sync="currentPage" :hide-one-page="false"></t-pager>
        </div>
    </div>
</template>

<script>
    import tTable from './table/table'
    import tPager from './pager/pager'

    export default {
        name: 'demo',
        components: {
            tTable,
            tPager
        },

        computed: {},

        data() {
            return {
                currentPage: 1,
                selected: [],
                columns: [
                    {text: '姓名', field: 'name', width: 100},
                    {text: '分数', field: 'score'},
                ],
                orderBy: {
                    score: 'desc'
                },
                loading: false,
                dataSource: [
                    {id:1, name:'A-Tione1', score: 99, description: '11111'},
                    {id:2, name:'A-Tione2', score: 98, description: '22222'},
                    {id:3, name:'A-Tione3', score: 97},
                    {id:4, name:'A-Tione4', score: 96},
                    {id:5, name:'A-Tione5', score: 90},
                    {id:6, name:'A-Tione6', score: 105},
                    {id:7, name:'A-Tione7', score: 80},
                    {id:8, name:'A-Tione8', score: 150},
                    {id:9, name:'A-Tione9', score: 60},
                    {id:10, name:'A-Tione10', score: 107},
                ],
            }
        },
        methods: {
            sort() {
                this.loading = true
                setTimeout(()=> {
                    this.dataSource.sort((a, b) => a.score - b.score)
                    this.loading = false
                },1000)
            },
            look(item) {
                console.log('查看', item)
            },
            edit(item) {
                console.log('编辑', item)
            }
        },
    }
</script>

<style lang="scss">
    .box {
        padding: 100px;
        display: flex;
        flex-direction: column;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }

    .wrapper {
        margin: 40px;
    }
    .box {
        display: flex;
    }

</style>
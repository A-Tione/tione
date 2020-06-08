<template>
    <div class="box">
        <div style="margin: 20px;">
            <t-table :columns="columns"
                     :data-source="dataSource"
                     bordered-items.sync="selected"
                     :order-by.sync="orderBy"
                     :loading="loading"
                     :height="400"
                     @update:orderBy="x">
                <template slot-scope="xxx">
                    <button @click="look(xxx.item)">查看</button>
                    <button @click="edit(xxx.item)">编辑</button>
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
                    {id:1, name:'阳阳1', score: 99, description: '11111'},
                    {id:2, name:'阳阳2', score: 98, description: '22222'},
                    {id:3, name:'阳阳3', score: 97},
                    {id:4, name:'阳阳4', score: 96},
                    {id:5, name:'阳阳5', score: 90},
                    {id:6, name:'阳阳6', score: 105},
                    {id:7, name:'阳阳7', score: 80},
                    {id:8, name:'阳阳8', score: 150},
                    {id:9, name:'阳阳9', score: 60},
                    {id:10, name:'阳阳10', score: 107},
                    {id:11, name:'阳阳11', score: 100},
                    {id:12, name:'阳阳12', score: 100},
                ],
            }
        },
        methods: {
            x() {
                this.loading = true
                setTimeout(()=> {
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
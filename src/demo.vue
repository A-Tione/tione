<template>
    <div class="demo-content">
        <p>11111</p>
        <t-cascader
            :selected.sync="selected"
            :source="source"
            :height="'100px'"></t-cascader>
        <p>22222</p>
    </div>
</template>

<script>
    import tButton from './button/button'
    import tIcon from './icon'
    import tButtonGroup from './button/button-group'
    import tInput from './input/input'
    import tRow from './grid/row'
    import tCol from './grid/col'
    import tLayout from './layout/layout'
    import tSider from './layout/sider'
    import tHeader from './layout/header'
    import tContent from './layout/content'
    import tFooter from './layout/footer'
    import tToast from './toast/toast'
    import tTabs from './tabs/tabs'
    import tTabsHead from './tabs/tabs-head'
    import tTabsBody from './tabs/tabs-body'
    import tTabsItem from './tabs/tabs-item'
    import tTabsPane from './tabs/tabs-pane'
    import tPopover from './popover/popover'
    import tCollapse from './collapse/collapse'
    import tCollapseItem from './collapse/collapse-item'
    import tCascader from './cascader/cascader'
    import db from './collapse/db'

    export default {
        name: 'demo',
        components: {
            tButton,
            tCascader
        },
        props: {},
        computed: {},

        mounted() {
            this.source = this.ajax()
            console.log(this.source)
        },

        data() {
            return {
                selected: [],
                source: []
            }
        },
        methods: {
            ajax(parent_id = 0) {
                return db.filter(item => item.parent_id == parent_id)
            }
        }
    }
</script>

<style lang="scss">
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

    body {
        font-size: var(--font-size);
    }
    #app {
        padding: 100px;
    }
    .demo-content {

    }

</style>
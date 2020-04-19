<template>
    <div class="demo-content">
        <p>1111</p>
        <t-cascader :source="source" :height="'100px'">联级选择框</t-cascader>
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

    export default {
        name: 'demo',
        components: {
            tButton,
            tCascader
        },
        props: {},
        data() {
            return {
                source: [
                    {
                        name: '浙江',
                        children: [
                            {
                                name: '杭州',
                                children: [
                                    {name: 'shang'},
                                    {name: 'xia'},
                                    {name: 'jianggan',
                                        children: [
                                            {name: 'shang'},
                                            {name: 'xia'},
                                            {name: 'jianggan'}
                                        ]
                                    }
                                ]
                            },
                            {
                                name: '嘉兴',
                                children: [
                                    {name: 'shang'},
                                    {name: 'xia'},
                                    {name: 'jianggan'}
                                ]
                            }
                        ]
                    },
                    {
                        name: '湖南',
                        children: [
                            {
                                name: '长沙',
                                children: [
                                    {name: 'shang'},
                                    {name: 'xia'},
                                    {name: 'jianggan'}
                                ]
                            },
                            {
                                name: '湘潭',
                                children: [
                                    {name: 'shang'},
                                    {name: 'xia'},
                                    {name: 'jianggan'}
                                ]
                            }
                        ]
                    },
                ]
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .demo-content {

    }

</style>
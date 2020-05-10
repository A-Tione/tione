<template>
    <div>
        <t-slides class="wrapper" width="300px" height="200px"
                  :autoPlay="autoPlay"
                  :selected.sync="selected">
            <t-slides-item name="1">
                <div class="box">1</div>
            </t-slides-item>
            <t-slides-item name="2">
                <div class="box">2</div>
            </t-slides-item>
            <t-slides-item name="3">
                <div class="box">3</div>
            </t-slides-item>
        </t-slides>
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
    import tSlides from './sildes/sildes'
    import tSlidesItem from './sildes/sildes-item'

    export default {
        name: 'demo',
        components: {
            tSlides,
            tSlidesItem
        },
        props: {},
        computed: {},

        data() {
            return {
                selected: 2,
                autoPlay: false
            }
        },
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

    .wrapper {
        margin: 40px;
    }
    .box {
        width: 100%;
        height: 350px;
        background: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }

</style>
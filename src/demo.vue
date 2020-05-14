<template>
    <div>
        <t-nav class="box" :selected.sync="selected">
            <nav-item name="home">首页</nav-item>
            <sub-nav>
                <template slot="title">关于</template>
                <nav-item name="culture">企业文化</nav-item>
                <nav-item name="developers">开发团队</nav-item>
                <nav-item name="contacts">联系电话</nav-item>
                <sub-nav>
                    <template slot="title">联系方式</template>
                    <nav-item name="cm">移动</nav-item>
                    <nav-item name="cu">联通</nav-item>
                    <nav-item name="cn">电信</nav-item>
                </sub-nav>
            </sub-nav>
            <nav-item name="hire">招聘</nav-item>
        </t-nav>
    </div>
</template>

<script>
    import TNav from './nav/t-nav'
    import NavItem from './nav/nav-item'
    import SubNav from './nav/sub-nav'

    export default {
        name: 'demo',
        components: {
            TNav,
            NavItem,
            SubNav

        },
        computed: {},

        data() {
            return {
                selected: ['developers'],
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
        display: flex;
        border: 1px solid red;
    }

</style>
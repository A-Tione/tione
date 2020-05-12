<template>
    <div>
        <nav class="box" :selected.sync="selected">
            <nav-item name="home">首页</nav-item>
            <nav-item name="about">关于</nav-item>
            <nav-item name="hire">招聘</nav-item>
        </nav>
    </div>
</template>

<script>
    import Nav from './nav/nav'
    import NavItem from './nav/nav-item'
    import SubNav from './nav/sub-nav'

    export default {
        name: 'demo',
        components: {
            Nav,
            NavItem,
            SubNav

        },
        computed: {},

        data() {
            return {
                selected: ['home'],
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
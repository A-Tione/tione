<template>
    <div>
        <T-pager :total="20" :current="3"></T-pager>
    </div>
</template>

<script>
    import TPager from './pager/pager'

    export default {
        name: 'demo',
        components: {
            TPager

        },

        computed: {},

        data() {
            return {

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
    }

</style>
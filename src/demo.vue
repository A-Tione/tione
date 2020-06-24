<template>
    <div class="box">
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <t-sticky :distance="30">
            <div class="sticky-box">这是一段很长的代码这是一段很长的代码这是一段很长的代码</div>
        </t-sticky>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
        <div>内容一</div>
    </div>
</template>

<script>
    import TSticky from './sticky/sticky'

    export default {
        name: 'demo',
        components: {
            TSticky,
        },


        data() {
            return {
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss">
    .box {
        padding: 100px;
        .sticky-box {
            padding: 4px;
            border: 2px solid green;
            background: #42b983;
        }
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

</style>
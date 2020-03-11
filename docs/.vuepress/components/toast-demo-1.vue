<template>
    <div style="padding-top: 16px;">
        <h2>简单示例</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-button @click="$toast('点击弹出提示')">上方弹出</t-button>
        <t-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</t-button>
        <t-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</t-button>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style>
    .tione-toast {
        z-index: 30 !important;
    }
</style>
<style scoped>
    * {
        box-sizing: border-box;
    }

</style>
<script>
    import plugin from '../../../src/toast/plugin'
    import TButton from '../../../src/button/button'
    import Vue from 'vue'
    Vue.use(plugin);
    
    export default {
        components: {
            TButton,
        },
        data() {
            return {
                content: `
       <t-button @click="$toast('点击弹出提示')">上方弹出</t-button>
    <t-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</t-button>
    <t-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</t-button>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
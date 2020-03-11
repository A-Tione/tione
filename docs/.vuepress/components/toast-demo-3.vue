<template>
    <div style="padding-top: 16px;">
        <h2>支持 html</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-button @click="onClickButton">上方弹出</t-button>
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
                <t-button @click="onClickButton">上方弹出</t-button>

            methods: {
                    onClickButton(){
                        this.$toast('<storng style="color: red">粗体警示！！</storng>',{
                        enableHtml: true
                    })
                }
    }
      `.replace(/^ {8}/gm, '').trim()
            }
        },
        methods: {
            onClickButton(){
                this.$toast('<storng style="color: red">粗体警示！！</storng>',{
                    enableHtml: true,
                })
            }
        }
    }
</script>
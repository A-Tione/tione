<template>
    <div style="padding-top: 16px;">
        <h2>双向绑定</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-input v-model="value"></t-input>
        <div>value: {{value}}</div>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import TInput from '../../../src/input/input'

    export default {
        components: {TInput,},
        data() {
            return {
                value: '示例',
                content: `
        data:{
                value:'示例'
    }
    <t-input v-model="value"></t-input>
    <div>value: {{value}}</div>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
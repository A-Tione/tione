<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-input value="示例"></t-input>
        <t-input value="示例" disabled></t-input>
        <t-input value="示例" readonly></t-input>

        <p>
            <strong>代码</strong>
        </p>
        <div class="code-content" v-highlight>
            <div class="code-content-height">
                <pre><code class="html">{{content}}</code></pre>
            </div>
        </div>
    </div>
</template>
<script>
    import TInput from '../../../src/input/input'

    export default {
        components: {TInput,},
        data() {
            return {
                content: `
        <t-input value="示例"></t-input>
    <t-input value="示例" disabled></t-input>
    <t-input value="示例" readonly></t-input>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
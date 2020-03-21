<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-collapse :selected.sync="selectedArray" single>
            <t-collapse-item name="1" title="标题一">内容1</t-collapse-item>
            <t-collapse-item name="2" title="标题二">内容2</t-collapse-item>
            <t-collapse-item name="3" title="标题三">内容3</t-collapse-item>
        </t-collapse>
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
    import Collapse from '../../../src/collapse/collapse'
    import CollapseItem from '../../../src/collapse/collapse-item'

    export default {
        components: {
            't-collapse': Collapse,
            't-collapse-item': CollapseItem,
        },
        data() {
            return {
                selectedArray: ['1', '2'],
                content: `
        <t-collapse :selected.sync="selectedArray" single>
                <t-collapse-item name="1" title="标题一">内容1</t-collapse-item>
                <t-collapse-item name="2" title="标题二">内容2</t-collapse-item>
                <t-collapse-item name="3" title="标题三">内容3</t-collapse-item>
       </t-collapse>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
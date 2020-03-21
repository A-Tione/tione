<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-tabs :selected="sports">
            <t-tabs-head>
                <t-tabs-item name="1">标签一</t-tabs-item>
                <t-tabs-item name="2">标签二</t-tabs-item>
                <t-tabs-item name="3">标签三</t-tabs-item>
            </t-tabs-head>
            <t-tabs-body>
                <t-tabs-pane name="1">内容一</t-tabs-pane>
                <t-tabs-pane name="2">内容二</t-tabs-pane>
                <t-tabs-pane name="3">内容三</t-tabs-pane>
            </t-tabs-body>
        </t-tabs>
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
    import Tabs from '../../../src/tabs/tabs'
    import TabsBody from '../../../src/tabs/tabs-body'
    import TabsHead from '../../../src/tabs/tabs-head'
    import TabsItem from '../../../src/tabs/tabs-item'
    import TabsPane from '../../../src/tabs/tabs-pane'

    export default {
        components: {
            't-tabs': Tabs,
            't-tabs-body': TabsBody,
            't-tabs-head': TabsHead,
            't-tabs-item': TabsItem,
            't-tabs-pane': TabsPane,
        },
        data() {
            return {
                sports: '2',
                content: `
        <t-tabs :selected="selected">
                <t-tabs-head>
                    <t-tabs-item name="1">标签一</t-tabs-item>
                    <t-tabs-item name="2">标签二</t-tabs-item>
                    <t-tabs-item name="3">标签三</t-tabs-item>
                </t-tabs-head>
                <t-tabs-body>
                    <t-tabs-pane name="1">内容一</t-tabs-pane>
                    <t-tabs-pane name="2">内容二</t-tabs-pane>
                    <t-tabs-pane name="3">内容三</t-tabs-pane>
                </t-tabs-body>
    </t-tabs>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
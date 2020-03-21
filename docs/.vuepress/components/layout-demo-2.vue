<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <t-header style="height: 50px; background:orange;">
                header
            </t-header>
            <t-layout>
                <t-sider style="height: 100px; background:#efefef; width:200px; color: black;">
                    sider
                </t-sider>
                <t-content style="height: 100px; background:orangered;">
                    content
                </t-content>
            </t-layout>
            <t-footer style="height: 50px; background:orange;">
                footer
            </t-footer>
        </t-layout>

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
    import TContent from '../../../src/layout/content'
    import TFooter from '../../../src/layout/footer'
    import THeader from '../../../src/layout/header'
    import TLayout from '../../../src/layout/layout'
    import TSider from '../../../src/layout/sider'

    export default {
        components: {
            TContent,
            TFooter,
            THeader,
            TLayout,
            TSider
        },
        data() {
            return {
                content: `
        <t-layout style="color: white; margin-bottom:50px;">
                <t-header style="height: 50px; background:orange;">
                    header
                </t-header>
                <t-content style="height: 100px; background:orangered;">
                    content
                </t-content>
                <t-footer style="height: 50px; background:orange;">
                    footer
                </t-footer>
    </t-layout>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
<template>
    <div style="paddint-top: 16px;">
        <h2>触发方式改为 hover</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-popover trigger="hover">
            <t-button>上方弹出</t-button>
            <template slot="content">
                弹出内容
            </template>
        </t-popover>
        <t-popover position="bottom" trigger="hover">
            <t-button>下方弹出</t-button>
            <template slot="content">
                弹出内容
            </template>
        </t-popover>
        <t-popover position="left" trigger="hover">
            <t-button>左边弹出</t-button>
            <template slot="content">
                弹出内容
            </template>
        </t-popover>
        <t-popover position="right" trigger="hover">
            <t-button>右边弹出</t-button>
            <template slot="content">
                <div>这是一段<strong>html</strong>内容</div>
            </template>
        </t-popover>

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
    import TPopover from '../../../src/popover/popover'
    import TButton from '../../../src/button/button'

    export default {
        components: {
            TPopover,
            TButton,
        },
        data() {
            return {
                content: `
       <t-popover trigger="hover">
                <t-button>上方弹出</t-button>
                <template slot="content">
                    弹出内容
                </template>
            </t-popover>
            <t-popover position="bottom" trigger="hover">
                <t-button>下方弹出</t-button>
                <template slot="content">
                    弹出内容
                </template>
            </t-popover>
            <t-popover position="left" trigger="hover">
                <t-button>左边弹出</t-button>
                <template slot="content">
                    弹出内容
                </template>
            </t-popover>
            <t-popover position="right" trigger="hover">
                <t-button>右边弹出</t-button>
                <template slot="content">
                    <div>这是一段<strong>html</strong>内容</div>
                </template>
    </t-popover>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
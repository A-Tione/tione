<template>
    <div style="padding-top: 16px;">
        <h2>24格网格</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-row class="demoRow">
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
                <div class="demoCol">8</div>
            </t-col>
        </t-row>
        <t-row class="demoRow">
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
                <div class="demoCol">6</div>
            </t-col>
        </t-row>
        <t-row class="demoRow">
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
                <div class="demoCol">4</div>
            </t-col>
        </t-row>
        <t-row class="demoRow">
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
                <div class="demoCol">2</div>
            </t-col>
        </t-row>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #efefef;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import TRow from '../../../src/grid/row'
    import TCol from '../../../src/grid/col'

    export default {
        components: {TRow, TCol},
        data () {
            return {
                content: `
          * {
            box-sizing: border-box;
          }

          <t-row class="demoRow">
            <t-col span="8">
              <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
              <div class="demoCol">8</div>
            </t-col>
            <t-col span="8">
              <div class="demoCol">8</div>
            </t-col>
          </t-row>

          <t-row class="demoRow">
            <t-col span="6">
              <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
              <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
              <div class="demoCol">6</div>
            </t-col>
            <t-col span="6">
              <div class="demoCol">6</div>
            </t-col>
          </t-row>

          <t-row class="demoRow">
            <t-col span="4">
              <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="demoCol">4</div>
            </t-col>
            <t-col span="4">
              <div class="demoCol">4</div>
            </t-col>
          </t-row>

          <t-row class="demoRow">
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
            <t-col span="2">
              <div class="demoCol">2</div>
            </t-col>
          </t-row>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
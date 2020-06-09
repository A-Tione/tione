<template>
    <div class="box">
        <t-upload
            accept="image/*"
            action="http://frank.com/upload"
            name="avatar"
            :fileList="fileList"
            fileList.sync="fileList"
        >
            <button>上传</button>
            <div>只能上传300KB以内的png，jpeg文件</div>
            <button>保存</button>
        </t-upload>
    </div>
</template>

<script>
    import TUpload from './upload/upload'

    export default {
        name: 'demo',
        components: {
            TUpload,
        },

        computed: {},

        data() {
            return {
                fileList: []
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss">
    .box {
        padding: 100px;
        display: flex;
        flex-direction: column;
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
    .box {
        display: flex;
    }

</style>
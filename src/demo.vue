<template>
    <div class="box">
        <t-upload
            accept="image/*"
            method="POST"
            action="http://127.0.0.1:3000/upload"
            name="file"
            :fileList.sync="fileList"
            :parseResponse="parseResponse"
            @update:fileList="xxx"
        >
            <template>
                <t-button icon="upload">上传</t-button>
            </template>
        </t-upload>
    </div>
</template>

<script>
    import TUpload from './upload/upload'
    import TButton from './button/button'

    export default {
        name: 'demo',
        components: {
            TUpload,
            TButton,
        },

        computed: {},

        data() {
            return {
                fileList: []
            }
        },
        methods: {
            parseResponse(response) {
                let object = JSON.parse(response)
                return `http://127.0.0.1:3000/preview/${object.id}`
            },
            xxx(fileList) {
                // console.log('监听到了 update:fileList 事件')
                // console.log(fileList, 'fileList')
            }
        },
    }
</script>

<style lang="scss">
    .box {
        padding: 100px;
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

</style>
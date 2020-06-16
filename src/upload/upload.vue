<template>
    <div class="t-uploader">
        <div @click="onClickUpload">
            <slot></slot>
        </div>
        <ol class="t-uploader-fileList">
            <li v-for="file in fileList" :key="file.name">
                <template v-if="file.status === 'uploading'">
                    <t-icon name="loading" class="t-uploader-spin"></t-icon>
                </template>
                <template v-else-if="file.type.indexOf('image') === 0">
                    <img class="t-uploader-image" :src="file.url" width="32" height="32" alt="">
                </template>
                <template v-else>
                    <div class="t-uploader-defaultImage"></div>
                </template>
                <span class="t-uploader-name" :class="{[file.status]: file.status}">{{file.name}}</span>
                <button class="t-uploader-remove" @click="onRemoveFile(file)">X</button>
            </li>
        </ol>
        <div ref="box" style="height:0; height: 0; overflow: hidden;"></div>
    </div>
</template>

<script>
    import tIcon from '../icon'
    import $http from './http'

    export default {
        name: 'upload',
        components: {tIcon},
        props: {
            name: {
                type: String,
                required: true
            },
            action: {
                type: String,
                required: true
            },
            accept: {
                type: String,
                default: 'image/*'
            },
            method: {
                type: String,
                default: 'POST'
            },
            parseResponse: {
                type: Function,
                required: true
            },
            fileList: {
                type: Array,
                default: ()=> []
            },
            sizeLimit: {type: Number}
        },
        data() {
            return {
                url: '',
            }
        },
        methods: {
            onClickUpload() {
                let input = this.createInput()
                input.addEventListener('change', ()=> {
                    this.uploadFiles(input.files) //单文件
                    input.remove()
                })
                input.click()
            },
            uploadFiles(rawFiles) {
                let newNames = []
                for (let i=0; i<rawFiles.length; i++) {
                    let rawFile = rawFiles[i]
                    let {name, size, type} = rawFile
                    newNames[i] = this.generateName(name)
                }
                if (!this.beforeUploadFiles(rawFiles, newNames)) {return}
                for (let i=0; i<rawFiles.length; i++) {
                    let rawFile = rawFiles[i]
                    let newName = newNames[i]
                    let formData = new FormData()
                    formData.append(this.name, rawFile)
                    this.doUploadFile(formData, (response)=> {
                        let url = this.parseResponse(response)
                        this.url = url
                        this.afterUploadFiles(newName, url)
                    }, (xhr)=> {
                        this.uploadError(xhr, newName)
                    })
                }
            },
            beforeUploadFiles(rawFiles, newNames) {
                rawFiles = Array.from(rawFiles)
                for (let i=0; i< rawFiles.length; i++) {
                    let {size, type} = rawFiles[i]
                    if (size > this.sizeLimit) {
                        this.$emit('error', `文件不能大于${this.sizeLimit * 1024}M`)
                        return false
                    }
                }
                let x = rawFiles.map((rwaFile, i)=> {
                    let {type, size} = rwaFile
                    return {name: newNames[i], type, size, status: 'uploading'}
                })
                console.log(this.fileList,'fileList');
                console.log(x,'x');
                this.$emit('update:fileList', [...this.fileList, ...x])
                return true
            },
            afterUploadFiles(newName, url) {
                let file = this.fileList.filter(f=> f.name === newName[0])
                let index = this.fileList.indexOf(file)
                let fileCopy = JSON.parse(JSON.stringify(file))
                fileCopy.status = 'success'
                let fileListCopy = [...this.fileList]
                fileListCopy.splice(index, 1, fileCopy)
                this.$emit('update:fileList', fileListCopy)
                this.$emit('uploaded')
            },
            generateName(name) {
                while (this.fileList.filter(f => f.name === name).length > 0) {
                    let duIndexOf = name.lastIndexOf('.')
                    let nameBefore = name.substring(0, duIndexOf)
                    let nameAfter = name.substring(duIndexOf)
                    name = nameBefore + '(1)' + nameAfter
                }
                return name
            },
            uploadError(xhr, newName) {
                let file = this.fileList.filter(f => f.name === newName) [0]
                let index = this.fileList.indexOf(file)
                let fileCopy = JSON.parse(JSON.stringify(file))
                fileCopy.status = 'fail'
                let fileListCopy = [...this.fileList]
                fileListCopy.splice(index, 1, fileCopy)
                this.$emit('update:fileList', fileListCopy)
                let error = ''
                if (xhr.status === 0) {
                    error = '网络无法连接'
                }
                this.$emit('error', error)
            },
            onRemoveFile(file) {
                let answer = window.confirm('你确定要删除它吗？')
                if (answer) {
                    let copy = [...this.fileList]
                    let index = copy.indexOf(file)
                    copy.splice(index, 1)
                    this.$emit('update:fileList', copy)
                }
            },
            createInput() {
                this.$refs.box.innerHTML = ''
                let input = document.createElement('input')
                input.accept = this.accept
                input.type= 'file'
                input.multiple = true
                this.$refs.box.appendChild(input)
                return input
            },
            doUploadFile(formData, success, fail) {
                $http[this.method.toLowerCase()](this.action, {success, fail, data: formData})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/var";
    .t-uploader {
        &-fileList {
            list-style: none;
            > li {
                display: flex;
                align-items: center;
                margin: 8px 0;
                border: 1px solid darken($grey, 10%);
            }
        }
        &-defaultImage {
            width: 32px;
            height: 32px;
            margin-right: 8px;
        }
        &-image {
            margin-right: 8px;
            border: none;
        }
        &-name {
            margin-right: auto;
            &.success {
                color: green;
            }
            &.fail {
                color: red;
            }
        }
        &-remove {
            width: 32px;
            height: 32px;
        }
        &-spin {
            box-sizing: border-box;
            width: 32px;
            height: 32px;
            padding: 8px;
            @include spin;
        }
    }

</style>
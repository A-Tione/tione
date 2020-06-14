<template>
    <div class="upload-content">
        <div @click="onClickUpload" ref="trigger">
            <slot></slot>
        </div>
        <div ref="box" style="height:0; height: 0; overflow: hidden;"></div>
    </div>
</template>

<script>
    export default {
        name: 'upload',
        props: {
            name: {
                type: String,
                required: true
            },
            action: {
                type: String,
                required: true
            },
            method: {
                type: String,
                default: 'POST'
            }
        },
        data() {
            return {
                url: '',
                parseResponse: ''
            }
        },
        methods: {
            onClickUpload() {
                let input = this.createInput()
                input.addEventListener('change', ()=> {
                    let file = input.files[0]
                    this.updateFile(file)
                    input.remove()
                })
                input.click()
            },
            createInput() {
                let input = document.createElement('input')
                input.type= 'file'
                this.$refs.box.appendChild(input)
                return input
            },
            updateFile(file) {
                let formData = new FormData()
                formData.append(this.name, file)
                let {name, size, type} = file
                this.doUploadFile(formData, (response)=> {
                    let url = this.parseResponse(response) //反序列化
                    this.url = url
                    while (this.fileList.filter(f => f.name === name).length > 0) {
                        let duIndexOf = name.lastIndexOf('.')
                        let nameBefore = name.substring(0, duIndexOf)
                        let nameAfter = name.substring(duIndexOf)
                        name = nameBefore + '(1)' + nameAfter
                    }
                    this.$emit('update:fileList', [...this.fileList, {name, size, type, url}])
                })
            },
            doUploadFile(formData, callback) {
                let xhr = new XMLHttpRequest()
                xhr.open(this.method, this.action)
                xhr.onload = function () {
                    console.log(xhr.response)
                    callback(xhr.response)
                    // img.src = `https://node-servers-tione.herokuapp.com/image/${xhr.response}`

                }
                xhr.send(formData)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .upload-content {

    }

</style>
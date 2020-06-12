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
            return {}
        },
        methods: {
            onClickUpload() {
                let input = document.createElement('input')
                input.type= 'file'
                this.$refs.box.appendChild(input)
                input.addEventListener('change', ()=> {
                    let file = input.files[0]
                    input.remove()
                    console.log(file)
                    let formData = new FormData()
                    formData.append(this.name, file)
                    let xhr = new XMLHttpRequest()
                    xhr.open(this.method, this.action)
                    xhr.onload = function () {
                        console.log(xhr.response)
                        // img.src = `https://node-servers-tione.herokuapp.com/image/${xhr.response}`

                    }
                    xhr.send(formData)

                })
                input.click()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .upload-content {

    }

</style>
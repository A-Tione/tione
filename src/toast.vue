<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span class="box-border" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "tToast",
        props: {
            autoClose: {
                type: Boolean,
                default() {
                    return true;
                }
            },
            autoCloseDelay: {
                type: Number,
                default: 2
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text:'关闭',
                        callback: undefined
                    }
                }
            }
        },

        created() {

        },

        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                },this.autoCloseDelay * 100000)
            }
        },

        methods: {
            close() {
                this.$el.remove() //删掉当前组件DOM节点
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this) // this === toast实例
                }
            },
            log() {
                console.log('测试');
            }
        }
    }
</script>

transform: translateX(-50%);
border: 1px solid red;
<style lang="scss" scoped>
    $font-size: 14px;
    $height: 40px;
    $toast-bg: rgba(0,0,0,0.75);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        display: flex;
        align-items: center;
        font-size: $font-size;
        height: $height;
        line-height: 1.2;
        background: $toast-bg;
        color: #fff;
        padding: 0 16px;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        .line {
            height: 100%;
            margin-left: 16px;
            border-left: 1px solid #666;
        }
        .box-border {
            padding-left: 16px;
            cursor: pointer;
        }
    }

</style>

<template>
    <div class="toast" :class="position">
        <div class="messages" ref="wrapper">
            <div v-if="enableHtml" v-html="$slots.default[0]"></div>
            <slot v-if="!enableHtml"></slot>
        </div>
        <div class="line" ref="line"></div>
        <span class="box-border" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "tToast",
        props: {
            autoClose: { //是否自动关闭弹框
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
            },
            enableHtml: {  //默认不开启传html
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) >= 0
                }
            }
        },

        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },

        methods: {
            updateStyles() {
                this.$nextTick(() => {
                    // mounted是拿不到高度的，需要在下一次DOM队列执行的时候才能拿到，
                    // 因为是先mount挂载，再appendChild添加到body元素中的
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    },this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove() //删掉当前组件DOM节点
                this.$emit('close')
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this) // this === toast实例
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $height: 40px;
    $toast-bg: rgba(0,0,0,0.75);
    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }
    .toast {
        animation: fade-in .5s;
        position: fixed;
        left: 50%;
        display: flex;
        align-items: center;
        font-size: $font-size;
        min-height: $height;
        line-height: 1.2;
        background: $toast-bg;
        color: #fff;
        padding: 0 16px;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        transform: translateX(-50%);
        &.top {
            top: 0;
        }
        &.middle {
            top: 40%;
            transform: translateY(-50%);
        }
        &.bottom {
            bottom: 0;
        }
        .messages {
            padding: 8px 0;
        }
        .line {
            height: 100%;
            margin-left: 16px;
            border-left: 1px solid #666;
        }
        .box-border {
            padding-left: 16px;
            cursor: pointer;
            flex-shrink: 0;
        }
    }

</style>

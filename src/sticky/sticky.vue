<template>
    <div class="t-sticky-content" ref="wrapper" :style="{height}">
        <div class="t-sticky-content-box" :class="classes" :style="{width, left, top}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 't-sticky',
        props: {
            distance: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                sticky: false,
                left: undefined,
                width: undefined,
                height: undefined,
                top: undefined,
                timerId: null
            }
        },

        computed: {
            classes() {
                return {
                    sticky: this.sticky
                }
            }
        },

        mounted() {
            this.windowScrollHandler = this._windowScrollHandler.bind(this)
            window.addEventListener('scroll', this.windowScrollHandler)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.windowScrollHandler)
        },

        methods: {
            offsetTop() {
                let {top} = this.$refs.wrapper.getBoundingClientRect()
                return {top: top + window.scrollY}
            },
            _windowScrollHandler() {
                let {top} = this.offsetTop()
                if (window.scrollY > top - this.distance) {
                    let {height, left, width} = this.$refs.wrapper.getBoundingClientRect()
                    this.height = height + 'px'
                    this.width = width + 'px'
                    this.top = this.distance + 'px'
                    this.left = left + 'px'
                    this.sticky = true
                } else {
                    this.height = undefined
                    this.width = undefined
                    this.top = undefined
                    this.left = undefined
                    this.sticky = false
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .t-sticky-content {
        &-box {
            &.sticky {
                position: fixed;
            }
        }
    }

</style>
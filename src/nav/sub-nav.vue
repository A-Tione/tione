<template>
    <div class="sub-nav-content" :class="{active}" v-click-outside="close">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="sub-nav-content-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import clickOutside from './click-outside'

    export default {
        name: 'sub-nav',
        directives: {clickOutside},
        inject: ['root'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false
            }
        },

        computed: {
            active() {
                return this.root.namePath.indexOf(this.name) > -1
            }
        },

        methods: {
            onClick() {
                this.open = !this.open
            },
            close() {
                this.open = false
            },
            updateNamePath() {
                this.root.namePath.unshift(this.name)
                this.$parent.updateNamePath && this.$parent.updateNamePath()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/var';
    .sub-nav-content {
        position: relative;
        &.active {
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $blue;
                width: 100%;
            }
        }
        > span {
            padding: 10px 30px;
            display: inline-block;
            vertical-align: top;
        }
        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
            background: white;
            margin-top: 4px;
            box-shadow: 0 0 3px fade_out(black, 0.8);
            border-radius: $border-radius;
            font-size: $font-size;
            color: $light-color;
            min-width: 8em;
        }
    }
    .sub-nav-content .sub-nav-content .sub-nav-content-popover {
        top: 0;
        left: 100%;
        margin-left: 4px;
    }

</style>
<template>
    <div class="sub-nav-content" :class="{active, vertical}" v-click-outside="close">
        <span class="sub-nav-content-label" @click="onClick">
            <slot name="title"></slot>
            <span class="sub-nav-content-icon" :class="{open, vertical}">
                <t-icon name="right"></t-icon>
            </span>
        </span>
        <template v-if="vertical">
            <transition @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
                <div class="sub-nav-content-popover" v-show="open" :class="{vertical}">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="sub-nav-content-popover" v-show="open">
                <slot></slot>
            </div>
        </template>
    </div>
</template>

<script>
    import clickOutside from './click-outside'
    import tIcon from '../icon'

    export default {
        name: 'sub-nav',
        components: {tIcon},
        directives: {clickOutside},
        inject: ['root', 'vertical'],
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
            },
        },

        methods: {
            enter(el, done) {
                let {height} = el.getBoundingClientRect()
                el.style.height = 0
                el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.addEventListener('transitionend', ()=>{
                    done()
                })
            },
            afterEnter(el) {
                el.style.height = 'auto'
            },
            leave(el, done) {
                let {height} = el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.getBoundingClientRect()
                el.style.height = 0
                el.addEventListener('transitionend', ()=>{
                    done()
                })
            },
            afterLeave(el) {
                el.style.height = 'auto'
            },
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
        &:not(.vertical) {
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
        }
        &-label {
            display: block;
            padding: 10px 20px;
        }
        &-icon {
            display: none;
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
            &.vertical {
                position: static;
                border-radius: 0;
                border: none;
                box-shadow: none;
                transition: height .3s;
                overflow: hidden;
            }
        }
    }
    .sub-nav-content .sub-nav-content {
        &.active {
            &::after {
                display: none;
            }
        }
        .sub-nav-content-popover {
            top: 0;
            left: 100%;
            margin-left: 8px;
        }
        .sub-nav-content-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .sub-nav-content-icon {
            transition: transform .3s;
            display: inline-flex;
            margin-left: 1em;
            svg {fill: $light-color;}
            &.vertical {
                transform: rotate(90deg);
                &.open {
                    transform: rotate(270deg);
                }
            }
            &.open {
                transform: rotate(180deg);
            }
        }
    }

</style>
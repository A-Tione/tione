<template>
    <div>
        <template v-if="animationEnabled">
            <transition name="slide">
                <div class="t-slides-item" v-if="visible" :class="{reverse}">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="t-slides-item" v-if="visible" :class="{reverse}">
                <slot></slot>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: 't-sildes-item',
        props: {
            name: {
                type: String,
                required: true
            }
        },
        computed: {
            visible() {
                return this.selected === this.name
            }
        },
        data() {
            return {
                selected: undefined,
                reverse: false,
                animationEnabled: false
            }
        },
        updated() {
            this.animationEnabled = true
        }
    }
</script>

<style lang="scss" scoped>
    .slide-leave-active {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .slide-enter-active, .slide-leave-active {
        transition: all 0.5s;
    }

    .slide-enter {
        transform: translateX(100%);
    }

    .slide-enter.reverse {
        transform: translateX(-100%);
    }

    .slide-leave-to {
        transform: translateX(-100%);
    }

    .slide-leave-to.reverse {
        transform: translateX(100%);
    }

</style>
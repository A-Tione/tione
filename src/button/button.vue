<template>
    <button class="t-button"
            :class="{[`icon-${iconPosition}`]: true}"
            @click="$emit('click')">
        <t-icon v-if="!loading && icon" class="icon" :name="icon"></t-icon>
        <t-icon v-if="loading" class="icon loading" name="loading"></t-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from '../icon'


    export default {
        name: "tButton",
        components: {
            't-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {//属性检查器
                    return value === 'left' || value === 'right';
                }
            }
        },
    }
</script>


<style lang="scss" scoped>
    @import '../../styles/var';
    .t-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
            &:focus {
                outline: none;
            }
            > .icon {
                order: 1;
                margin-right: .1em;
                margin-left: 0;
            }
            > .content {
                order: 2;
                line-height: 100%;
            }
        }
        &.icon-left {
            > .content {
                order: 2;
                line-height: 100%;
            }
            > .icon {
                order: 1;
                margin-right: .1em;
                margin-left: 0;
            }
        }
        &.icon-right {
            > .content {
                order: 1;
                line-height: 100%;
            }
            > .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg)
            }
        }
        .loading {
            animation: spin 2s infinite linear;
        }
        & + & {
            margin-left: 4px;
        }
    }
</style>

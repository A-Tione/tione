<template>
    <button class="t-button" :class="{[`icon-${iconPosition}`]: true}">
        <t-icon class="icon" v-if="icon" :name="icon"></t-icon>
        <t-icon class="loading"  name="loading"></t-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {//属性检查器
                    return value === 'left' || value === 'right';
                }
            }
        },
        name: "button",
    }
</script>

<style lang="scss" scoped>
    .t-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: top;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
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
        animation: spin 1.5s infinite linear;
    }
</style>
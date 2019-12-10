<template>
    <div class="wrapper" :class="{error}">
        <input type="text"
               :value="value"
               :disabled="disabled"
               :readonly="readonly">
        <template>
            <icon name="settings"></icon>
            <span>{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        components:{
            Icon
        },
        name: "tInput",
        props: {
            value: {
                type: String,
                default() {
                    return '';
                }
            },
            disabled: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            readonly: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: rgba(0,0,0,0.6);
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #cc0000;
    .wrapper {
        font-size: $font-size;
        display: inline-block;
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled] {
                border-color: #909090;
                color: #909090;
                background: #eeeeee;
                cursor: not-allowed;
            }
            &[readonly] {
                cursor: not-allowed;
            }
        }
        &.error{
            >input{
                border-color: $red;
                &:focus {
                    box-shadow: 0 0 2px 0 $red;
                }
            }
        }
    }
</style>
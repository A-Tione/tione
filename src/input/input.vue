<template>
    <div class="wrapper" :class="{error}">
        <input type="text"
               ref="input"
               :value="value"
               :disabled="disabled"
               :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from '../icon'

    export default {
        components: {
            Icon
        },
        name: "tInput",
        props: {
            value: {
                type: [String,Date],
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
        },

        methods: {
            setRawValue(value) {
                this.$refs.input.value = value
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/var';
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        margin-bottom: 10px;
        > input {
            height: $input-height;
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
        &.error {
            *:not(:last-child) {
                margin-right: .5em;
            }
            > input {
                border-color: $red;
                &:focus {
                    box-shadow: 0 0 2px 0 $red;
                }
            }
            .icon-error {
                font-size: 16px;
                fill: $red;
            }
            .errorMessage {
                color: $red;
            }
        }
    }
</style>

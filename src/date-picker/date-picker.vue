<template>
    <div class="t-date-picker-content">
        <t-input type="text" @focus="onFocusInput" @blur="onBlurInput"/>
        <div class="t-date-picker-content-pop" v-if="popVisible">
            <div class="t-date-picker-content-nav">

            </div>
            <div class="t-date-picker-content-content">

            </div>
            <div class="t-date-picker-actions">

            </div>
        </div>
    </div>
</template>

<script>
    import TInput from '../input/input'

    export default {
        name: 'date-picker',
        components: {
            TInput
        },
        data() {
            return {
                popVisible: false
            }
        },
        methods: {
            onFocusInput() {
                this.popVisible = true
            },
            onBlurInput () {
                this.popVisible = false
            },
        }
    }
</script>

<style lang="scss" scoped>
    .date-picker-content {

    }

</style>
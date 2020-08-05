<template>
    <div>
        <t-date-picker :value="d" @input="d = $event"></t-date-picker>
    </div>
</template>

<script>
    import TDatePicker from './date-picker/date-picker'

    export default {
        name: 'demo',
        components: {
            TDatePicker,
        },

        data() {
            return {
                d: new Date()
            }
        },

    }
</script>

<style lang="scss">
    .box {
        padding: 100px;
        .sticky-box {
            padding: 4px;
            border: 2px solid green;
            background: #42b983;
        }
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }

    .wrapper {
        margin: 40px;
    }

</style>

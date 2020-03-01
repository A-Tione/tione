<template>
    <svg class="t-icon">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
    import './svg'

    export default {
        name: 'TIcon',
        props: {
            name: {
                type: String,
                default: 'settings'
            }
        },
        computed: {
            iconName() {
                return `#i-${this.name}`
            }
        },
    }
</script>

<style lang="scss" scoped>
    .t-icon {
        width: 1em;
        height: 1em;
    }
</style>
<template>
    <div class="nav-item-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 't-nav-item',
        props: {
            name: {
                type: String,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .nav-item-content {
        padding: 10px 20px;
    }

</style>
<template>
   <div class="col" :class="[`col-${span}`]">
       <slot></slot>
   </div>
</template>

<script>
    export default {
        name: "tioneCol",
        props: {
            span: {
                type: String,Number
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 100px;
        background: orange;
        border: 1px solid orangered;
        $class-prefix: col-;
        @for $in from 1 through 24 {
            &.#{$class-prefix}#{$in} {
                width: ($in / 24) * 100%;
            }
        }

    }

</style>
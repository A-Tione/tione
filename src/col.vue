<template>
   <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
       <slot></slot>
   </div>
</template>

<script>
    export default {
        name: "tioneCol",
        props: {
            span: {
                type: String,Number,
                default () {
                    return 0
                }
            },
            offset: {
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
        $class-offset: offset-;
        @for $in from 1 through 24 {
            &.#{$class-prefix}#{$in} {
                width: ($in / 24) * 100%;
            }
        }
        @for $in from 1 through 24 {
            &.#{$class-offset}#{$in} {
                margin-left: ($in / 24) * 100%;
            }
        }

    }

</style>
<template>
   <div class="col"
        :class="[span && `col-${span}`, offset && `offset-${offset}`]"
        :style="{paddingLeft: gutter/2+'px',paddingRight: gutter/2+'px'}">
       <div style="border: 1px solid green; height: 100px">
           <slot></slot>
       </div>

   </div>
</template>

<script>
    export default {
        name: "tioneCol",
        props: {
            span: {
                type: [String,Number]
            },
            offset: {
                type: [String,Number]
            },
        },
        data() {
            return {
                gutter: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 100px;
        /*background: orange;*/
        /*border: 1px solid orangered;*/
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
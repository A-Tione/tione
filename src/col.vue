<template>
   <div class="col" :class="colClass" :style="colStyle">
       <slot></slot>
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
        computed: {
            colClass() {
                let {span, offset} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`
                ]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter/2+'px',
                    paddingRight: this.gutter/2+'px'
                }
            }
        },

        data() {
            return {
                gutter: 0,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
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
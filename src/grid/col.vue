<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if (!(['span', 'offset', 'ipad', 'narrow', 'pc', 'wide'].indexOf(key) >= 0)) {
                valid = false
            }
        })
        return valid
    }

    export default {
        name: "tioneCol",
        props: {
            span: {
                type: [String, Number]
            },
            offset: {
                type: [String, Number]
            },
            ipad: {
                type: Object,
                validator,
            },
            narrow: {
                type: Object,
                validator,
            },
            pc: {
                type: Object,
                validator,
            },
            wide: {
                type: Object,
                validator,
            }
        },
        computed: {
            colClass() {
                let {span, offset, ipad, narrow, pc, wide} = this
                let creteClasses = this.creteClasses
                return [
                    ...creteClasses({span, offset}),
                    ...creteClasses(ipad, 'ipad-'),
                    ...creteClasses(narrow, 'narrow-pc-'),
                    ...creteClasses(pc, 'pc-'),
                    ...creteClasses(wide, 'wide-pc-'),
                ]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }
        },

        data() {
            return {
                gutter: 0,
            }
        },
        methods: {
            creteClasses (obj, str = '') {
                if (!obj) {return []}
                let array = []
                if (obj.span) {
                    array.push(`col-${str}${obj.span}`)
                }
                if (obj.offset) {
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
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
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            $class-offset: offset-ipad-;
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
        @media (min-width: 769px) {
            $class-prefix: col-narrow-pc-;
            $class-offset: offset-narrow-pc-;
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
        @media (min-width: 993px)  {
            $class-prefix: col-pc-;
            $class-offset: offset-pc-;
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
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            $class-offset: offset-wide-pc-;
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
    }

</style>
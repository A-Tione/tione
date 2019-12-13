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
            if (!['span', 'offset', 'phone', 'ipad', 'narrow', 'pc', 'wide'].includes(key)) {
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
            phone: {
                type: Object,
                validator,
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
                let {span, offset, phone, ipad, narrow, pc, wide} = this
                console.log(this)
                console.log(
                    [
                        span && `col-${span}`,
                        offset && `offset-${offset}`,
                        phone && `col-phone-${phone.span}`,
                        ipad && `col-ipad-${ipad.span}`,
                        narrow && `col-narrow-pc-${narrow.span}`,
                        pc && `col-pc-${pc.span}`,
                        wide && `col-wide-pc-${wide.span}`
                    ]
                )
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    phone && `col-phone-${phone.span}`,
                    ipad && `col-ipad-${ipad.span}`,
                    narrow && `col-narrow-pc-${narrow.span}`,
                    pc && `col-pc-${pc.span}`,
                    wide && `col-wide-pc-${wide.span}`
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
        @media (max-width: 576px) {
            $class-prefix: col-phone-;
            $class-offset: offset-phone-;
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
        @media (min-width: 577px) and (max-width: 768px) {
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
        @media (min-width: 769px) and (max-width: 992px) {
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
        @media (min-width: 993px) and (max-width: 1200px) {
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
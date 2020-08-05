<template>
    <div :class="className" ref="wrapper">
        <t-popover position="bottom" :container="wrapperElement">
            <t-input type="text" :value="value"/>
            <template slot="content">
                <div :class="`${className}-pop`">
                    <div :class="`${className}-nav`">
                        <span><t-icon name="settings"></t-icon></span>
                        <span><t-icon name="settings"></t-icon></span>
                        <span @click="onClickYear">2020年</span>
                        <span @click="onClickMonth">8月</span>
                        <span><t-icon name="settings"></t-icon></span>
                        <span><t-icon name="settings"></t-icon></span>
                    </div>
                    <div :class="`${className}-panels`">
                        <div v-if="mode==='years'" :class="`${className}-content`">年</div>
                        <div v-else-if="mode==='months'" :class="`${className}-content`">月</div>
                        <div v-else :class="`${className}-content`">
                            <div :class="`${className}-weekdays`">
                                <span v-for="i in [1,2,3,4,5,6,0]">{{weekdays[i]}}</span>
                            </div>
                            <div :class="`${className}-row`" v-for="i in 6" :key="i">
                                <span
                                    :class="`${className}-col`"
                                    v-for="j in 7"
                                    :key="j"
                                    @click="onClickCell(getVisibleDay(i,j))">
                                    {{getVisibleDay(i,j).getDate()}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div :class="`${className}-actions`">

                    </div>
                </div>
            </template>
        </t-popover>
    </div>
</template>

<script>
    import TInput from '../input/input'
    import TIcon from '../icon'
    import TPopover from '../popover/popover'
    import ClickOutside from '../click-outside'
    import helper from './helper'

    export default {
        name: 'date-picker',
        directives: {ClickOutside},
        components: {
            TInput,
            TIcon,
            TPopover
        },

        props: {
            firstDayOfWeek: {
                type: Number,
                default: 1
            },
            value: {
                type: Date,
                default:()=> new Date()
            }
        },

        data() {
            return {
                className: 't-date-picker-content',
                weekdays: ['日','一','二','三','四','五','六'],
                mode: 'days',
                helper: helper,
                wrapperElement: null,
            }
        },

        computed: {
            visibleDays() {
                let date = this.value
                let first = helper.firstDayOfMonth(date)
                let n = first.getDay()
                let x = first - (n === 0 ? 6 : n -1) * 86400 * 1000
                let array = []
                for (let i = 0; i < 42; i++) {
                    array.push(new Date(x + i * 86400 * 1000))
                }
                return array
            },
            formattedValue() {
                const [year, month, day] = helper.getYearMonthDate(this.value)
                return `${year}-${month+1}-${day}`
            },
        },

        mounted() {
            this.wrapperElement = this.$refs.wrapper
        },

        methods: {
            onClickMonth() {
                this.mode = 'months'
            },
            onClickYear() {
                this.mode = 'years'
            },
            onClickCell(date) {
                this.$emit('input', date)
            },
            getVisibleDay(row, col) {
                return this.visibleDays[(row - 1) * 7 + col - 1]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .date-picker-content {

    }

</style>

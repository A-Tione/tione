<template>
    <div :class="className" ref="wrapper">
        <t-popover position="bottom" :container="wrapperElement">
            <t-input type="text" :value="formattedValue"/>
            <template slot="content">
                <div :class="`${className}-pop`">
                    <div :class="`${className}-nav`">
                        <span @click="onClickPrevYear"><t-icon name="settings"></t-icon></span>
                        <span @click="onClickPrevMonth"><t-icon name="settings"></t-icon></span>
                        <span @click="onClickYear">{{display.year}}年</span>
                        <span @click="onClickMonth">{{display.month}}月</span>
                        <span @click="onClickNextMonth"><t-icon name="settings"></t-icon></span>
                        <span @click="onClickNextYear"><t-icon name="settings"></t-icon></span>
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
                                    :class="[`${className}-col`, {currentMonth: isCurrentMonth(getVisibleDay(i,j))}]"
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
            let [year, month] = helper.getYearMonthDate(this.value)
            return {
                className: 't-date-picker-content',
                weekdays: ['日','一','二','三','四','五','六'],
                mode: 'days',
                helper: helper,
                wrapperElement: null,
                display: {year, month}
            }
        },

        computed: {
            visibleDays() {
                let date = new Date(this.display.year, this.display.month, 1)
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
                const [year, month, day] = helper.getYearMonthDate(new Date(this.display.year, this.display.month, 1))
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
                if (this.isCurrentMonth(date)) {
                    this.$emit('input', date)
                }
            },
            getVisibleDay(row, col) {
                return this.visibleDays[(row - 1) * 7 + col - 1]
            },
            isCurrentMonth(date) {
                let [year1, month1] = helper.getYearMonthDate(date)
                return year1 === this.display.year && month1 === this.display.month
            },
            onClickPrevYear() {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = helper.addYear(oldDate, -1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = {year, month}
            },
            onClickPrevMonth() {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = helper.addMonth(oldDate, -1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = {year, month}
            },
            onClickNextYear() {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = helper.addYear(oldDate, 1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = {year, month}
            },
            onClickNextMonth() {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = helper.addMonth(oldDate, 1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = {year, month}
            },
        }
    }
</script>

<style lang="scss" scoped>
    .t-date-picker-content {
        &-col {
            color: rgba(0,0,0,0.2);
            &.currentMonth {
                color: rgba(0,0,0,0.85);
            }
        }

    }

</style>

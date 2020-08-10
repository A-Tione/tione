<template>
    <div :class="className" ref="wrapper">
        <t-popover position="bottom" :container="wrapperElement" @open="onOpen">
            <t-input type="text" :value="formattedValue" @input="onInput" @change="onChange" ref="input"/>
            <template slot="content">
                <div :class="`${className}-pop`" @selectstart.prevent>
                    <div :class="`${className}-nav`">
                        <span @click="onClickPrevYear" :class="[`${className}-preYear`,`${className}-navItem`]">
                            <t-icon name="settings"></t-icon>
                        </span>
                        <span @click="onClickPrevMonth" :class="[`${className}-preMonth`,`${className}-navItem`]">
                            <t-icon name="settings"></t-icon>
                        </span>
                        <span :class="`${className}-yearAndMonth`" @click="onClickMonth">
                            <span>{{display.year}}年</span>
                            <span>{{display.month + 1}}月</span>
                        </span>
                        <span @click="onClickNextMonth" :class="[`${className}-nextMonth`,`${className}-navItem`]">
                            <t-icon name="settings"></t-icon>
                        </span>
                        <span @click="onClickNextYear" :class="[`${className}-nextYear`,`${className}-navItem`]">
                            <t-icon name="settings"></t-icon>
                        </span>
                    </div>
                    <div :class="`${className}-panels`">
                        <div :class="`${className}-content`">
                            <template v-if="mode===`month`">
                                <div :class="`${className}-selectMonth`">
                                    <div :class="`${className}-selects`">
                                        <select @change="onSelectYear" :value="display.year">
                                            <option v-for="year in years" :value="year" :key="year">{{year}}</option>
                                        </select>年
                                        <select @change="onSelectMonth" :value="display.month">
                                            <option v-for="month in [0,1,2,3,4,5,6,7,8,9,10,11]"
                                                    :value="month" :key="month">{{month + 1}}</option>
                                        </select>
                                    </div>
                                    <div :class="`${className}-returnToDayMode`">
                                        <button @click="mode='day'">返回</button>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <div :class="`${className}-weekdays`">
                                    <span v-for="i in [1,2,3,4,5,6,0]">{{weekdays[i]}}</span>
                                </div>
                                <div :class="`${className}-row`" v-for="i in 6" :key="i">
                                <span
                                    :class="[`${className}-cell`
                                    , {currentMonth: isCurrentMonth(getVisibleDay(i,j))}
                                    ,{selected: isSelected(getVisibleDay(i,j))}
                                    ,{today: isToday(getVisibleDay(i,j))}
                                    ]"
                                    v-for="j in 7"
                                    :key="j"
                                    @click="onClickCell(getVisibleDay(i,j))">
                                    {{getVisibleDay(i,j).getDate()}}
                                </span>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div :class="`${className}-actions`">
                        <t-button @click="onClickToday">今天</t-button>
                        <t-button @click="onClickClear">清除</t-button>
                    </div>
                </div>
            </template>
        </t-popover>
    </div>
</template>

<script>
    import TInput from '../input/input'
    import TButton from '../button/button'
    import TIcon from '../icon'
    import TPopover from '../popover/popover'
    import ClickOutside from '../click-outside'
    import helper from './helper'

    export default {
        name: 'date-picker',
        directives: {ClickOutside},
        components: {
            TInput,
            TButton,
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
            },
            scope: {
                type: Array,
                default: ()=> [new Date(1950, 0, 1), helper.addYear(new Date(), 100)]
            }
        },

        data() {
            let [year, month] = helper.getYearMonthDate(this.value || new Date())
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
                if (!this.value) {return ''}
                const [year, month, day] = helper.getYearMonthDate(this.value)
                return `${year}-${helper.pad2(month + 1)}-${helper.pad2(day)}`
            },
            years() {
                return helper.range(
                    this.scope[0].getFullYear(),
                    this.scope[1].getFullYear() + 1
                )
            }
        },

        mounted() {
            this.wrapperElement = this.$refs.wrapper
        },

        methods: {
            onInput(value) {
                let regex = /^\d{4}-\d{2}-\d{2}$/g;
                if (value.match(regex)) {
                    let [year, month, day] = value.split('-')
                    month = month - 1
                    year = year - 0
                    this.display = {year, month}
                    this.$emit('input', new Date(year, month, day))
                }
            },
            onChange() {
                this.$refs.input.setRawValue(this.formattedValue)
            },
            onClickMonth() {
                if (this.mode !== 'month') {
                    this.mode = 'months'
                } else {
                    this.mode = 'day'
                }
            },
            onClickCell(date) {
                if (this.isCurrentMonth(date)) {
                    this.$emit('input', date)
                    this.$refs.popover.close()
                }
            },
            getVisibleDay(row, col) {
                return this.visibleDays[(row - 1) * 7 + col - 1]
            },
            isCurrentMonth(date) {
                let [year1, month1] = helper.getYearMonthDate(date)
                return year1 === this.display.year && month1 === this.display.month
            },
            isSelected(date) {
                if (!this.value) {
                    return false
                }
                let [y, m, d] = helper.getYearMonthDate(date)
                let [y2, m2, d2] = helper.getYearMonthDate(this.value)
                return y===y2 && m===m2 && d===d2
            },
            isToday(date) {
                let [y, m, d] = helper.getYearMonthDate(date)
                let [y2, m2, d2] = helper.getYearMonthDate(new Date())
                return y===y2 && m===m2 && d===d2
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
            onSelectYear(e) {
                const year = e.target.value - 0
                const d = new Date(year, this.display.month)
                if (d >= this.scope[0] && d <= this.scope[1]) {
                    this.display.year = year
                } else {
                    alert('no')
                    e.target.value = this.display.year
                }
            },
            onSelectMonth(e) {
                const month = e.target.value - 0
                const d = new Date(display.year, month)
                if (d >= this.scope[0] && d <= this.scope[1]) {
                    this.display.month = month
                } else {
                    alert('no')
                    e.target.value = this.display.month
                }
            },
            onClickToday() {
                const now = new Date()
                const [year, month, day] = helper.getYearMonthDate(now)
                this.display = {year, month}
                this.$emit('input', new Date(year, month, day))
            },
            onClickClear() {
                this.$emit('input', undefined)
                this.$refs.popover.close()
            },
            onOpen() {
                this.mode = 'day'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'styles/var';
    .t-date-picker-content {
        &-nav {
        }
        &-popWrapper {
            padding: 0;
        }
        &-navItem,
        &-cell,
        &-weekday {
            width: 32px;
            height: 32px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }
        &-cell {
            color: #ddd;
            cursor: not-allowed;
            border-radius: $border-radius;
            &.currentMonth {
                color: black;
                &:hover {
                    background: $blue;
                    cursor: pointer;
                    color: white;
                }
            }
            &.today {
                background: $grey;
            }
            &.selected {
                border: 1px solid $blue;
            }
        }
        &-nav {
            display: flex;
        }
        &-yearAndMonth {
            margin: auto;
        }
        &-selectMonth {
            width: 224px;
            height: 224px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        &-selects {
        }
        &-returnToDayMode {
            margin-top: 8px;
        }
        /deep/ .gulu-popover-content-wrapper {
            padding: 0;
        }
        &-actions {
            padding: 8px;
            text-align: right;
        }
    }

</style>

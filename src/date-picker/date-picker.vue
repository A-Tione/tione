<template>
    <div :class="className">
        <t-popover position="bottom">
            <t-input type="text"/>
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
                                <span :class="`${className}-col`" v-for="j in 7" :key="j">
                                    {{visibleDays[(i-1)*7+j-1].getDate()}}
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

        data() {
            return {
                className: 't-date-picker-content',
                weekdays: ['日','一','二','三','四','五','六'],
                mode: 'days',
                value: new Date(),
                helper: helper,
            }
        },

        computed: {
            visibleDays() {
                let date = this.value
                let first = helper.firstDayOfMonth(date)
                let last = helper.lastDayOfMonth(date)
                let array = []
                let [year, month, day] = helper.getYearMonthDate(date)
                for (let i = first.getDate(); i <= last.getDate(); i++) {
                    array.push(new Date(year, month, i))
                }
                let n = first.getDay() === 0 ? 6 : first.getDay() - 1
                let array2 = []
                for (let i = 0; i < n; i++) {
                    array2.push(new Date(year, month, -i))
                }
                array2 = array2.reverse()
                let m = 42 - array.length - array2.length
                let array3 = []
                for (let i= 1; i <= m; i++) {
                    array3.push(new Date(year, month + 1, i))
                }
                return [...array2, ...array, ...array3]
            }
        },

        methods: {
            onClickMonth() {
                this.mode = 'months'
            },
            onClickYear() {
                this.mode = 'years'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .date-picker-content {

    }

</style>

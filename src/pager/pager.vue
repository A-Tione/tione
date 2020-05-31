<template>
    <div class="pager-content">
        <span class="pager-content-nav prev" :class="{disabled: current === 1}">
            <t-icon name="left"></t-icon>
        </span>
        <template v-for="page in pages">
            <template v-if="page === current">
                <span class="pager-content-item current">{{page}}</span>
            </template>
            <template v-else-if="page === '...'">
                <span class="pager-content-item separator">...</span>
            </template>
            <template v-else>
                <span class="pager-content-item other">{{page}}</span>
            </template>
        </template>
        <span class="pager-content-nav next" :class="{disabled: current === total}">
            <t-icon name="right"></t-icon>
        </span>
    </div>
</template>

<script>
    import TIcon from '../icon'

    export default {
        name: 'pager',

        components: {
            TIcon
        },

        props: {
            total: {
                type: Number,
                default: 1
            },
            current: {
                type: Number,
                default: 1
            },
            hideOnePage: {
                type: Boolean,
                default: true
            }
        },
        data() {
            let pages = [1, this.total, this.current, this.current-1, this.current-2, this.current+1, this.current+2]
            let u = pages.filter(n => n >= 1 && n <= this.total)
            let u1 = this.unique(u.sort((a, b) => a - b))
            let u2 = u1.reduce((a, b, index, array) => { // 过滤，添加...
                a.push(b)
                if (array[index + 1] !== undefined && array[index+1] - array[index] > 1) {
                    a.push('...')
                }
                return a
            }, [])
            return {
                pages: u2
            }
        },
        methods: {
            unique(array) { //数组去重
                const object = {}
                array.map(item => {
                    object[item] = true
                })
                return Object.keys(object).map(value => parseInt(value, 10))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'styles/var';

    .pager-content {
        $width: 20px;
        $height: 20px;
        $font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        &-item {
            border: 1px solid $grey;
            border-radius: $border-radius;
            padding: 0 4px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: $font-size;
            min-width: $width;
            height: $height;
            margin: 0 4px;
            cursor: pointer;
            &.separator {
                border: none;
            }
            &.active, &:hover {
                border-radius: $blue;
            }
            &.active {
                cursor: default;
            }
        }
        &-nav {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin: 0 4px;
            background: $grey;
            width: $width;
            height: $height;
            font-size: $font-size;
            border-radius: $border-radius;
            cursor: pointer;
            &.disabled {
                fill: darken($grey, 20%);
                cursor: default;
            }
        }
    }

</style>
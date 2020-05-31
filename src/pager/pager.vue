<template>
    <div class="pager-content">
        <span v-for="page in pages"
              :class="{active: page === current, separator: page === '...'}"
              class="pager-content-item">
            {{page}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'pager',
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
            let u = this.unique(pages.sort((a, b) => a - b))
            let u2 = u.reduce((a, b, index, array) => { // 过滤，添加...
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
        &-item {
            border: 1px solid $grey;
            border-radius: $border-radius;
            padding: 0 4px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            min-width: 20px;
            height: 20px;
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
    }

</style>
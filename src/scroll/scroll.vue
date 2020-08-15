<template>
    <div ref="parent" class="t-scroll-content"
         @mouseenter="onMouseEnter"
         @mousemove="onMouseMove"
         @mouseleave="onMouseLeave"
         @wheel="onWheel">
        <div ref="child" class="t-scroll-content-box" :style="{transform: `translateY(${this.contentY}px)`}">
            <slot></slot>
        </div>
        <div class="t-scroll content-track" v-show="scrollBarVisible">
            <div class="t-scroll-content-bar" ref="bar" @mousedown="onMouseDownScrollBar" @selectstart="onSelectStartScrollBar">
                <div class="t-scroll-content-inner"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TScroll',
        data() {
            return {
                scrollBarVisible: false,
                isScrolling: false,
                startPosition: undefined,
                endPosition: undefined,
                scrollBarY: 0,
                contentY: 0,
                barHeight: undefined,
                parentHeight: undefined,
                mouseIn: false
            }
        },

        computed: {
            maxScrollHeight() {
                return this.parentHeight - this.barHeight
            },
            childHeight() {
                return this.$refs.child.getBoundingClientRect().height
            }
        },

        mounted() {
            this.listenToDocument()
            this.parentHeight = this.$refs.parent.getBoundingClientRect().height
            this.updateScrollBar()
            this.listenToRemoteResources()
            this.listenToDomChange()
        },

        methods: {
            listenToDocument() {
                document.addEventListener('mousemove', ev => this.onMouseMoveScrollBar(ev))
                document.addEventListener('mouseup', ev => this.onMouseUpScrollBar())
            },
            updateScrollBar() {
                let parentHeight = this.parentHeight
                let childHeight = this.childHeight
                this.barHeight = parentHeight * parentHeight / childHeight
                this.$refs.bar.style.height = this.barHeight + 'px'
                this.scrollBarY = -parentHeight * this.contentY / childHeight
                this.$refs.bar.style.transform = `translateY(${this.scrollBarY}px)`
            },
            listenToRemoteResources() {
                let tags = this.$refs.parent.querySelectorAll('img, video, audio')
                Array.from(tags).map(tag => {
                    if (tag.hasAttribute(`data-t-listened`)) {return}
                    tag.setAttribute(`data-t-listened`, 'yes')
                    tag.addEventListener('load', ()=> {
                        this.updateScrollBar()
                    })
                })
            },
            listenToDomChange() {
                const targetNode = this.$refs.child
                const config = {attributes: true, childList: true, subtree: true} //配置，监听元素中的所以节点变化
                const callback = () => {
                    this.listenToRemoteResources()
                }
                const observer = new MutationObserver(callback) //指定DOM发生变化时被调用
                observer.observe(targetNode, config)
            },
            onMouseMoveScrollBar(e) {
                if (!this.isScrolling) {return}
                this.endPosition = {x: e.screenX, y: screenY}
                let delta = {x: this.endPosition.x - this.startPosition.x, y: this.endPosition.y - this.startPosition.y}
                this.scrollBarY = this.calculateScrollBarY(delta)
                this.contentY = -(this.childHeight * this.scrollBarY / this.parentHeight)
                this.startPosition = this.endPosition
                this.$refs.bar.style.transform = `translate(0px, ${this.scrollBarY}px)`
            },
            calculateScrollBarY(delta) {
                let newValue = parseInt(this.scrollBarY) + delta.y
                if (newValue < 0) {
                    newValue = 0
                } else if (newValue > this.maxScrollHeight) {
                    newValue = this.maxScrollHeight
                }
                return newValue
            },
            onWheel(e) {
                this.updateContentY(e.deltaY, ()=> e.preventDefault())
                this.updateScrollBar()
            },
            updateContentY(deltaY, fn) {
                let maxHeight = this.calculateContentYMax()
                this.contentY = this.calculateContentYFromDeltaY(deltaY)
                if (this.contentY > 0) {
                    this.contentY = 0
                } else if (this.contentY < -maxHeight) {
                    this.contentY = -maxHeight
                } else {
                    fn && fn()
                }
            },
            onMouseUpScrollBar() {
                this.isScrolling = false
                if (!this.mouseIn) {
                    this.scrollBarVisible = false
                }
            },
            calculateContentYMax() {
                let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(this.$refs.parent)
                borderTopWidth = parseInt(borderTopWidth)
                borderBottomWidth = parseInt(borderBottomWidth)
                paddingTop = parseInt(paddingTop)
                paddingBottom = parseInt(paddingBottom)
                return this.childHeight - this.parentHeight + (borderTopWidth + borderTopWidth + paddingTop + paddingBottom)
            },
            calculateContentYFromDeltaY(deltaY) {
                let contentY = this.contentY
                if (deltaY > 20) {
                    contentY -= 20 * 3
                } else if (deltaY < -20) {
                    contentY -= -20 * 3
                } else {
                    contentY -= deltaY * 3
                }
                return contentY
            },
            onMouseEnter() {
                this.scrollBarVisible = true
                this.mouseIn = true
            },
            onMouseMove() {
                this.mouseIn = true
            },
            onMouseLeave() {
                this.mouseIn = false
                if (!this.isScrolling) {
                    this.scrollBarVisible = false
                }
            },
            onMouseDownScrollBar(e) {
                this.isScrolling = true
                let {screenX, screenY} = e
                this.startPosition = {x: screenX, y: screenY}
            },
            onSelectStartScrollBar(e) {
                e.preventDefault()
            }

        }
    }
</script>

<style lang="scss" scoped>
    .t-scroll-content {
        border: 1px solid red;
        overflow: hidden;
        position: relative;
        &-box {
            transition: transform 0.05s ease;
        }
        &-track { position: absolute; top: 0; right: 0; width: 14px; height: 100%;
            background: #FAFAFA; border-left: 1px solid #E8E7E8; opacity: 0.9;
        }
        &-bar {
            position: absolute; top: -1px; left: 50%; height: 40px; width: 8px;
            margin-left: -4px; padding: 4px 0;
        }
        &-inner {
            height: 100%; border-radius: 4px; background: #C2C2C2;
            &:hover {
                background: #7D7D7D;
            }
        }
    }

</style>
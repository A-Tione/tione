import chai, {expect} from 'chai'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Slides from '../../src/sildes/sildes'
import SlidesItem from '../../src/sildes/sildes-item'
import Button from "../../src/button/button";
chai.use(sinonChai)

describe('Slides.vue', () => {

    it('存在', () => {
        expect(Slides).to.exist
    })

    it('接收 SlidesItem，默认展示第一个', (done) => {
        Vue.component('tSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false
            },
            slots: {
                default: `
                <t-slides-item name="1">
                    <div class="box1">1</div>
                </t-slides-item>
                <t-slides-item name="2">
                    <div class="box2">2</div>
                </t-slides-item>
                <t-slides-item name="3">
                    <div class="box3">3</div>
                </t-slides-item>
                `
            }
        })
        setTimeout(()=> {
             expect(wrapper.find('.box1')).to.be.ok
            done()
        })
    })
})
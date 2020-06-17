import chai, {expect} from 'chai'
import sinon, {stub} from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Upload from '../../src/upload/upload'
import http from '../../src/upload/http'
chai.use(sinonChai)

describe('upload.vue', () => {

    it('存在', () => {
        expect(Upload).to.exist
    })
    xit('可以上传一个文件', (done) => {
        let stub = sinon.stub(http, 'post').callsFake((url, options) => {
            setTimeout(() => {
                options.success(`{"id": "123456"}`)
            },100)
        })
        const wrapper = mount(Upload, {
            propsData: {
                name: 'file',
                action: '/upload',
                method: 'post',
                parseResponse: (response)=> {
                    let object = JSON.parse(response)
                    return `/preview/${object.id}`
                },
                fileList: []
            },
            slots: {default: `<button id="x">click me </button>`},
            listeners: {
                'update:fileList': (fileList) => { wrapper.setProps({fileList}) },
                'uploaded': ()=> {
                    expect(wrapper.find('use').exists()).to.eq(false)
                    expect(wrapper.props().fileList[0].url).to.eq('/preview/123456')
                    stub.restore() //将模拟的http还原
                    done()
                }
            },
        })
        wrapper.find('#x').trigger('click')
        let inputWrapper = wrapper.find('input[type="file"]')
        let input = inputWrapper.element
        let file1 = new File(['cccc'], 'ccc.txt')

        // new DataTransfer 可模拟多文件上传，但暂不支持
        const data = new DataTransfer()
        data.items.add(file1)
        input.files = data.files

        let use = wrapper.find('use').element
        expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
    })
})
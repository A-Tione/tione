import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import validate from '../../src/validate'

describe('validate', ()=> {
    it('存在', ()=> {
        expect(validate).to.exist
    })
    it('required true 报错', ()=> {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', required: true}
        ]
        let errors = validate(data, rules)
        expect(errors.email.required).to.eq('必填')
    })
    it('required true 通过', ()=> {
        let data = {
            email: 0
        }
        let rules = [
            {key: 'email', required: true}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('attern 正则 报错', ()=> {
        let data = {
            email: '@go.com'
        }
        let rules = [
            {key: 'email', pattern: /^.+@.+$/}
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    })
    it('pattern 正则 通过', ()=> {
        let data = {
            email: '1@go.com'
        }
        let rules = [
            {key: 'email', pattern: /^.+@.+$/}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('pattern email 报错', ()=> {
        let data = {
            email: '@go.com'
        }
        let rules = [
            {key: 'email', pattern: 'email'}
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    })
    it('pattern email 通过', ()=> {
        let data = {
            email: '1@go.com'
        }
        let rules = [
            {key: 'email', pattern: 'email'}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('required & pattern', ()=> {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', pattern: 'email', required: true}
        ]
        let errors = validate(data, rules)
        expect(errors.email.required).to.exist
        expect(errors.email.pattern).to.not.exist
    })
    it('pattern & minLength', ()=> {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', pattern: 'email', minLength: 6}
        ]
        let errors = validate(data, rules)
        expect(errors.email.minLength).to.exist
        expect(errors.email.pattern).to.exist
    })

})
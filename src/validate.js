class Validator {
    constructor() {}

    validate(data, rules) {
        let errors = {}
        rules.forEach(rule => {
            let value = data[rule.key]
            if (rule.required) {
                let error = this.required(value)
                if (error) {
                    this.ensureObject(errors, rule.key)
                    errors[rule.key].required = error
                    return
                }
            }
            // 遍历validators，并逐一调用对应的函数
            let validators = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
            validators.forEach(item => {
                if (this[item]) {
                    let error = this[item] && this[item](value, rule[item])
                    if (error) {
                        this.ensureObject(errors, rule.key)
                        errors[rule.key][item] = error
                    }
                } else {
                    throw `不存在的校验器：${item}`
                }
            })
        })
        return errors
    }

    required(value) {
        if (value !== 0 && !value) {
            return '必填'
        }
    }

    pattern(value, pattern) {
        if (value !== 'email') {
            pattern = /^.+@.+$/
        }
        if (pattern.test(value) === false) {
            return '格式不正确'
        }
    }

    minLength(value, pattern) {
        if (value.length < pattern) {
            return '太短'
        }
    }

    ensureObject(obj, key) {
        if (typeof obj[key] !== 'object') {
            obj[key] = {}
        }
    }
}

export default Validator
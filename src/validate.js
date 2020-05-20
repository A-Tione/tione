export default function validate (data, rules) {
    let errors = {}
    rules.forEach(rule => {
        let value = data[rule.key]
        if (rule.required) {
            let error = validate.required(value)
            if (error) {
                ensureObject(errors, rule.key)
                errors[rule.key].required = error
                return
            }
        }
        // 遍历validators，并逐一调用对应的函数
        let validators = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
        validators.forEach(item => {
            let error = validate[item] && validate[item](value, rule[item])
            if (error) {
                ensureObject(errors, rule.key)
                errors[rule.key][item] = error
            }
        })
    })
    return errors
}

validate.required = (value) => {
    if (value !== 0 && !value) {
        return '必填'
    }
}
validate.pattern = (value, pattern) => {
    if (value !== 'email') {
        pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
        return '格式不正确'
    }
}
validate.minLength = (value, pattern) => {
    if (value.length < pattern) {
        return '太短'
    }
}

function ensureObject (obj, key) {
    if (typeof obj[key] !== 'object') {
        obj[key] = {}
    }
}
export default function validate (data, rules) {
    let errors = {}
    rules.forEach(rule => {
        let value = data[rule.key]
        if (rule.required) {
            let error = validate.required(value)
            if (error) {
                ensureObject(errors, rule.key)
                errors[rule.key].required = error
            }
        }
        if (rule.pattern) {
            let error = validate.pattern(value, rule.pattern)
            if (error) {
                ensureObject(errors, rule.key)
                errors[rule.key].pattern = error
            }
        }
        if (rule.minLength) {
            let error = validate.minLength(value, rule.pattern)
            if (error) {
                ensureObject(errors, rule.key)
                errors[rule.key].minLength = error
            }
        }
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
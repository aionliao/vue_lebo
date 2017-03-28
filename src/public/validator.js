/**
 * 验证方法
 */

let strategies = {
    isNonEmpty (value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },
    minLength (value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    isMobile (value, errorMsg) {
        if (!/^1[358][0-9]{9}$/.test(value)) {
            return errorMsg;
        }
    }
};
let validator = {
    cache: [], // 保存校验规则
    add (dom, rule, errorMsg) {
        let ary = rule.split(':'); // 把strategy和参数分开
        this.cache.push(() => {
            let strategy = ary.shift();
            ary.unshift(dom.value);
            ary.push(errorMsg);
            return strategies[strategy].apply(dom, ary);
        });
    },
    start () {
        for (let i = 0, validatorFunc = this.cache[i]; i < this.cache.length; i++) {
            let msg = validatorFunc();
            if (msg) {
                return msg;
            }
        }
    }
};

export default validator;

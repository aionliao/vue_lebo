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
    add (obj) {
        // let value = obj.value;
        // let rule = obj.rule;
        // let errorMsg = obj.errorMsg;
        // console.log('rule', rule);
        // let ary = rule.split(':'); // 把strategy和参数分开
        this.cache.push(() => {
            strategies['isMobile'](1, 2);
            var a = {
                b (obj) {
                    return JSON.stringify(obj);
                }
            };
            return a.b.call(null, obj);
            // let valiArguments = [];
            // console.log('ary: ', ary);
            // let strategy = ary.shift();
            // console.log('typeof: ', typeof strategy);
            // console.log(strategy);
            // // ary.unshift(value);
            // // ary.push(errorMsg);
            // valiArguments = [value];
            // valiArguments = valiArguments.concat(ary);
            // valiArguments.push(errorMsg);
            // console.log('valiArguments', valiArguments);
            // return strategies[strategy].apply(null, valiArguments);
        });
    },
    start () {
        console.log('this.cache');
        console.log(this.cache);
        for (let i = 0, validatorFunc = this.cache[i]; i < this.cache.length; i++) {
            let msg = validatorFunc();
            if (msg) {
                return msg;
            }
        }
    }
};

export default validator;

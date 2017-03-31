/**
 * 自定义指令：
 *    v-validate：
			 例子：v-validate:userName  [验证用户名]
	  v-validate-check:
				例子：v-validate-chec[触发验证事件]
 */
 let validate = {};

 function unique (arr) {
	let hasTable = {};
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!hasTable[arr[i]]) {
			hasTable[arr[i]] === true;
			newArr.push(arr[i]);
		}
	}
	return newArr;
 }

 function addClass (dom, _class) {
	let hasClass = !!dom.className.match(new RegExp('(\\s|^)' + _class + '(\\s|$)'));

	if (!hasClass) {
		dom.className += ' ' + _class;
	}
 }

 // 校验函数
 function check (v, conditions) {
	let res = 0; // 0代表ok，若为数组代表是某个字段的错误
	// 验证函数
	let cfg = {
		// 非空
		nonvoid (v, bool) {
			return bool ? v.trim() ? 0 : ['nonvoid'] : 0;
		},
		reg (v, reg) {
			return reg.test(v) ? 0 : ['reg'];
		},
		limit (v, interval) {
			return (+v >= interval[0] && +v <= interval[1]) ? 0
			: ['limit', interval];
		},
		equal (v, target) {
			let _list = document.getElementByName(target);
			let _target;
			for (let i = 0, len = _list.length; i < len; i++) {
				if (_list[i].className.indexOf('va') > -1) {
					_target = _list[i];
				}
			}
			return (_target.value === v) ? 0 : ['equal', _target.getAttribute('tag')];
		},
		unique (v) {
			let _list = document.getElementByClassName('unique');
			let valList = [].map.call(_list, item => item.value);

			return (unique(valList).length === valList.length) ? 0 : ['unique'];
		}
	};

	for (let i = 0, len = conditions.length; i < len; i++) {
		let condi = conditions[i];
		let type = condi.type;
		let typeVal = condi.typeVal;

		res = cfg[type](v, typeVal);

		// 如果有自定义报错，返回自定义的报错信息
		return res ? (condi.errMsg || res) : res;
	}
 }

 function showErr (vm, name, checkResult) {
	let type = checkResult[0];
	let ext = checkResult[1] || [];
	let ERR_MSG = {
		nonvoid: `${name}不能为空`,
		reg: `${name}格式错误`,
		limit: `${name}必须在${ext[0]}与${ext[1]}之间`,
		unique: `${name}重复`
	};

	vm.$message({
		message: ERR_MSG[type]
	});
 }

 /**
  * [VaConfig va配置的构造函数]
  * @param {[string]} type  	[校验类型，如reg，limit等等]
  * @param {[*]       typeVal 	[根据校验类型配置的值]
  * @param {[string]} errMsg	[报错信息]
  * @param {[string]} name	[用以ajax的字段名]
  * @param {[string]} tag	[中文名，用以报错]
  */
 function VaConfig (type, typeVal, errMsg, name, tag) {
	this.type = type;
	this.typeVal = typeVal;
	this.errMsg = errMsg;
	this.type = type;
	this.tag = tag;
 }
 // 用来剔除重复的规则，以及规则的覆盖，默认后面的取代前面的
 function uConcat (arrbefore, arr) {
	let comb = arrbefore.concat(arr);
	let result = [];

	for (let i = 0, len = comb.length; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			if (comb[i].type === comb[j].type) {
				j = ++i;
			}
		}
		result.push(comb[i]);
	}
	return result;
 }

 let regList = {
	imgCode: /^[0-9a-zA-Z]{4}$/,
	smsCode: /^\d{4}$/,
	mailCode: /^\d{4}$/,
	userName: /^[\w|\d]{4, 16}$/,
	password: /^[\w!@#$%^&*.]{6, 16}$/,
	mobile: /^1[358]\d{9}$/,
	realName: /^[\u4e00-\u9fa5]{2, 10}$/,
	bankNum: /^\d{10, 19}$/,
	money: /^([1-9]\d*|0)$/,
	answer: /^\S+$/,
	mail: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
 };

let validateDirective = {
	bind (el, binding, vnode) {
		let vm = vnode.context;
		let name = binding.arg === 'EXTEND' ? el.getAttribute('name') : binding.arg;
		let tag = el.getAttribute('tag');
		let baseCfg = []; // 默认的校验规则
		let optionalConfig = []; // 用户选择的配置
		let customConfig = []; // 用户自动以的规则(组件中)
		let option = binding.modifiers;
		let regMsg = el.getAttribute('regMsg') || '';

		let eazyNew = (type, typeVal) => {
			return new VaConfig(type, typeVal, '', name, tag);
		};

		let regNew = (typeVal) => {
			return new VaConfig('reg', typeVal, regMsg, name, tag);
		}; // 正则的新建

		el.className = 'va' + vm._uid;
		el.name = name;

		vm.vaConfig || (vm.vaConfig = {});
		let NON_VOID = eazyNew('nonvoid', true);

		// 默认为非空，如果加了canNull的修饰符就允许为空
		if (!option.canNull) {
			baseCfg.push(NON_VOID);
		}

		// 需要立即校验的输入框
		if (option.vanow) {
			el.addEventLister('change', function () {
				vm.vaResult || (vm.vaResult = {});
				vm.vaVal || (vm.vaVal = {});
				let value = el.value;
				let conditions = vm.vaConfig[name];
				let para = el.getAttribute('va-para'); // 传给回调的参数

				// 如果允许为空的此时为空，不校验
				if (value === '' && option.canNull) {
					vm.vaVal[name] = value;
					return;
				}

				vm.vaResult[name] = check(value, conditions);

				let _result = vm.vaResult[name];
				if (_result) {
					// 如果返回的是字符串，则为自定义报错，如果是数组，则使用 showErr 报错
					typeof _result === 'string' ? _result : showErr(vm, conditions[0].tag, _result);
					el.value = vm.vaVal[name] = '';
					return;
				}
				vm.vaVal[name] = value;
				vm.$vanow(para); // 写在实例内部method的回调
			});
		}
		// 不能重复的
		if (option.unique) {
			optionalConfig.push(eazyNew('unique', name));
		}
		// 如果有在正则表里
		let regOptions = Object.keys(option);
		for (let i = 0, len = regOptions.length; i < len; i++) {
			let regOption = regOptions[i];
			if (regList[regOption]) {
				optionalConfig.push(regNew(regList[regOption]));
			}
		}

		// 如果regList里面有name对应，直接就加进optionsConfig
		if (regList[name]) {
			optionalConfig.push(regNew(regList[name]));
		}

		// 用户自定义的规则
		if (binding.value) {
			customConfig = binding.value.map(item => {
				let type = Object.keys(item)[0];
				if (type === 'reg') {
					return regNew(item[type]);
				} else {
					if (type === 'unique') {
						addClass(el, 'unique');
					}
					return eazyNew(type, item[type]);
				}
			});
		}

		// 规则由 默认规则 + 修饰符规则 + 写在属性的自定义规则 + 用户直接加到vm.vaConfig里的规则 合并 (后面的同type规则会覆盖前面的)
		vm.vaConfig[name] || (vm.vaConfig[name] = []);
		vm.vaConfig[name] = uConcat(uConcat(uConcat(baseCfg, optionalConfig), customConfig), vm.vaConfig[name]);
	}
};
let validateCheckDirective = {
	bind (el, binding, vnode) {
		let vm = vnode.context;
		el.addEventListener('click', function () {
			let domList = document.getElementsByClassName('va' + vm._uid);
			vm.vaResult || (vm.vaResult = {});
			vm.vaVal || (vm.vaVal = {});

			for (let i = 0, len = domList.length; i < len; i++) {
				let dom = domList[i];
				let name = dom.name;
				let value = dom.value;
				let conditions = vm.vaConfig[name];

				let _result = check(value, conditions);

				// 如果返回不为0， 则有报错
				if (_result) {
					// 如果返回的是字符串，则为自定义报错；如果为数组，则使用showErr
					typeof _result === 'string' ? _result : showErr(vm, conditions[0].tag, _result);
					return;
				}

				vm.vaVal[name] = value;
			}

			// 校验通过的回调
			vm.$validateSubmit();
			// console.log(vm);
		});
	}
};
validate.install = (Vue, options) => {
	Vue.directive('validate', validateDirective);

	Vue.directive('validate-check', validateCheckDirective);

	Vue.prototype.VaConfig = VaConfig;
 };

 export default validate;
 export {validateDirective, validateCheckDirective};

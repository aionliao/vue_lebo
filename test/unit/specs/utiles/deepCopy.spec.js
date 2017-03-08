import deepCopy from 'src/utils/deepCopy.js';
var obj = {a: 1};

describe('deepCopy 方法测试', () => {
	it('复制对象, 对象应该不相等', () => {
		assert.notEqual(deepCopy(obj), obj);
	});
});

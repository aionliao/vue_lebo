import isEmptyObject from 'src/utils/isEmptyObject.js';
var obj = {};
var obj2 = {a: 1};

describe('isEmptyObject 方法测试', () => {
	it('为空对象', () => {
		expect(isEmptyObject(obj)).to.be.true;
	});
	it('为非空对象', () => {
		expect(isEmptyObject(obj2)).to.be.false;
	});
});

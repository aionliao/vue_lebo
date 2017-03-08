import isArray from 'src/utils/isArray.js';
var arr = [1, 2];
var str = '1';

describe('isArray 方法测试', () => {
	it('判断是否为数组', () => {
		expect(isArray(arr)).to.be.true;
		expect(isArray(str)).to.be.false;
	});
});

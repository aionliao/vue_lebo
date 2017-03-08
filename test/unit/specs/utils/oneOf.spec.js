import oneOf from 'src/utils/oneOf.js';
var prop = 'test01';
var prop2 = 'test04';
var propsArr = ['test01', 'test02', 'test03'];

describe('oneOf 方法测试', () => {
	it('是oneOf中的一个方法', () => {
		expect(oneOf(prop, propsArr)).to.be.true;
	});
	it('不是oneOf中的一个方法', () => {
		expect(oneOf(prop2, propsArr)).to.be.false;
	});
});

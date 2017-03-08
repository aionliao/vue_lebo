import formatTime from 'src/utils/formatTime.js';
// var nowTime = new Date('2017-03-08 09:17:28').getTime();
var nowTime = 1488935848000;
console.log(nowTime);

describe('formatTime 方法测试', () => {
	it('ymdhm格式', () => {
		expect(formatTime('ymdhm', nowTime)).equal('2017-03-08 09:17');
	});
	it('ymd格式', () => {
		expect(formatTime('ymd', nowTime)).equal('20170308');
	});
	it('hm格式', () => {
		expect(formatTime('hm', nowTime)).equal('09:17');
	});
	it('md hm格式', () => {
		expect(formatTime('md hm', nowTime)).equal('03-08 09:17');
	});
	it('ymdhms格式', () => {
		expect(formatTime('ymdhms', nowTime)).equal('2017-03-08 09:17:28');
	});
	it('y-m-d', () => {
		expect(formatTime('y-m-d', nowTime)).equal('2017-03-08');
	});
});

/**
 * 获取start-end之间的随机整数
 */
 export default (start, end) => {
	return Math.floor(Math.random() * (end - start + 1) + start);
 };

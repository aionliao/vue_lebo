/**
 * 获取某个范围内数字集合，排好序，适用于随机一注
 */
import getRandom from '../utils/getRandom';
import formatSolo from '../utils/formatSolo';
function getRandomBalls (times, start, end) {
	let len = 0;
	let	i = 0;
	let	j = 0;
	let	value = '';
	let	arrNums = [];
	for (; j < times; j++) {
		value = getRandom(start, end);
		len = arrNums.length;

		if (len === 0) {
			arrNums.push(formatSolo(value));
		} else {
			for (; i < len; i++) {
				if (arrNums.indexOf(formatSolo(value)) === -1) {
					arrNums.push(formatSolo(value));
				} else {
					j -= 1;
					break;
				}
			}
		}
	}
	arrNums.sort(function (a, b) {
		return a - b;
	});
	return arrNums;
}

export default getRandomBalls;

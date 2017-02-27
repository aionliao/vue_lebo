/**
 * [dealKjAjaxData 处理最新开奖返回的数据]
 * @param  {[Object]} obj [数据]
 *      data: {[Object]} ajax返回数据的list
 *      orderArr: {[Array]} 返回的开奖数据顺序
 * @return  {[Object]}  needObjArr   [经过处理和排序的开奖数据]
 */
function dealKjAjaxData (obj) {
	let list = obj.data;
	let needObjArr = [];
	let orderArr = obj.orderArr;
	let orderIndex = {};
	for (let i = 0, len = list.length; i < len; i++) {
		let listI = list[i];
		let winCode = listI.winCode || '';
		orderIndex[listI.gameNo] = i;
		if (winCode.indexOf(' ') > -1) {
			let winCodeArr = winCode.split(' ');
			listI.firstBalls = winCodeArr[0].split(',');
			listI.secondBalls = winCodeArr[1].split(',');
		} else {
			listI.firstBalls = winCode.split(',');
		}
	}

	for (let i = 0, len = orderArr.length; i < len; i++) {
		needObjArr.push(list[orderIndex[orderArr[i]]]);
	}
	return needObjArr;
}

export default dealKjAjaxData;

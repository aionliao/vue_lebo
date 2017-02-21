/**
 * 判断参数value是否在validList种
 * return {Boolean}
 */
export default (value, validList) => {
	for (let i = 0; i < validList.length; i++) {
		if (value === validList[i]) {
			return true;
		}
	}
	return false;
};

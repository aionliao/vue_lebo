/**
 * 复制一个对象的属性到另一个对象上
 */
 export default (orignObj, copyObj) => {
	for (let prop in copyObj) {
		if (copyObj.hasOwnProperty(prop)) {
			orignObj[prop] = copyObj[prop];
		}
	}
 };

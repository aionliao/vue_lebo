/**
 * 判断对象是否为空对象
 */
export default (e) => {
	let t;
    for (t in e) {
		return !1;
	}
    return !0;
};

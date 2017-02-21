const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase (name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
export default (element, styleName) => {
	if (!element || !styleName) {
		return null;
	}
	styleName = camelCase(styleName);
	if (styleName === 'float') {
		styleName = 'cssFloat';
	}
	try {
		const computed = document.defaultView.getComputedStyle(element, '');
        console.log('输出宽度');
        console.log(element.style[styleName] || computed ? computed[styleName] : null);
		return element.style[styleName] || computed ? computed[styleName] : null;
	} catch (e) {
        console.log('这里输出');
		return element.style[styleName];
	}
};

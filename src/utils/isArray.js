export default (o) => {
	return Object.prototype.toString.call(o) === '[object Array]';
};

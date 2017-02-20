export default (resCode) => {
	return typeof resCode === 'string' ? resCode : (resCode + '');
};

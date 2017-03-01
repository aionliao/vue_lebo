/**
 *  @description: vue的ajax请求封装
 *  @option: {Object}
 *      method: {string} 请求的方法
 *      url: {string} 请求的地址
 *      headers：{Object} 请求带的header头信息
 *      that:
 */
function vueAjax (option) {
    let that = option.that;
    let method = option.method && (option.method).toLowerCase() || 'get';
    let transactionType = option.data.transactionType;

    if (transactionType === '10103017') {
        transactionType = `${transactionType}_${option.data.gameNo}`;
    }
    let getUrl = '/static/data/' + transactionType + '.json';

    let ajaxObject = {
        'get': () => {
            return that.$http.get(getUrl);
        },
        'post': () => {
            return that.$http.post('./h5.do', option.data || {});
        }
    };
    return ajaxObject[method]();
}

export default vueAjax;

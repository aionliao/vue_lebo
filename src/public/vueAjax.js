/**
 *  @description: vue的ajax请求封装
 *  @option: {Object}
 *      method: {string} 请求的方法
 *      url: {string} 请求的地址
 *      headers：{Object} 请求带的header头信息
 *      that:
 */
import oneOf from '../utils/oneOf.js';

function vueAjax (option) {
    let that = option.that;
    let method = option.method && (option.method).toLowerCase() || 'get';
    let transactionType = option.data.transactionType;
    let gameNo = option.data.gameNo || option.data.lotteryNo;

    console.log('发起请求的参数');
    console.log(option);
    if (oneOf(transactionType, ['10103017', '10105002', '10105027'])) {
        transactionType = `${transactionType}_${gameNo}`;
    }
    let getUrl = './static/data/' + transactionType + '.json';

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

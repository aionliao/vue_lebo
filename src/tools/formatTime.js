/**
 *  @description: 格式化时间
 *  @option:
 *      type: {string} 返回时间的格式
 *      timSp: {string} 时间戳
 */
import formatSolo from './formatSolo.js';

function formatTime (type, timSp) {
    timSp = timSp ? new Date(timSp) : new Date();
    let year = timSp.getFullYear();
    let month = formatSolo(timSp.getMonth() + 1);
    let date = formatSolo(timSp.getDate());
    let hour = formatSolo(timSp.getHours());
    let minute = formatSolo(timSp.getMinutes());
    let second = formatSolo(timSp.getSeconds());

    if (type === 'ymdhm') {
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute;
    } else if (type === 'ymd') {
        return year + month + date + '';
    } else if (type === 'hm') {
        return hour + ':' + minute;
    } else if (type === 'md hm') {
        return month + '-' + date + ' ' + hour + ':' + minute;
    } else if (type === 'ymdhms') {
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
    } else if (type === 'y-m-d') {
        return year + '-' + month + '-' + date;
    }
}
export default formatTime;

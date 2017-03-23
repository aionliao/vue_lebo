import formatSolo from '../utils/formatSolo.js';

function countDown (timeSp) {
    let days = Math.floor(timeSp / 86400);
    let hours = Math.floor((timeSp - 24 * days * 60 * 60) / 3600);
    let minutes = Math.floor((timeSp - 24 * days * 60 * 60 - 3600 * hours) / 60);
    let seconds = Math.floor(timeSp - 24 * days * 60 * 60 - 3600 * hours - 60 * minutes);
    return days + '天' + formatSolo(hours) + ':' + formatSolo(minutes) + ':' + formatSolo(seconds);
}
export default countDown;

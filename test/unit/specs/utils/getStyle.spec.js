import getStyle from 'src/utils/getStyle.js';
import {createElm} from '../../utils.js';

var div = createElm();
div.style.width = '90px';
div.style.cssFloat = 'left';

describe('getStyle 方法测试', () => {
	it('获取样式宽度', () => {
        assert.equal(getStyle(div, 'width'), '90px');
	});
    it('获取float', () => {
        assert.equal(getStyle(div, 'float'), 'left');
	});
    it('获取cssFloat', () => {
        assert.equal(getStyle(div, 'cssFloat'), 'left');
	});
    it('参数为空返回null', () => {
        assert.equal(getStyle(), null);
	});
});

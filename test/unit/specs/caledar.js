import Vue from 'vue';
import calendar from 'src/components/calendar/calendar.vue';

//  挂载元素并返回已渲染的文本的工具函数
function getRenderedText (component, propsData) {
	const Ctor = Vue.extend(component);
	const vm = new Ctor({propsData}).$mount();
	return vm.$el.className;
}
describe('sub.vue', () => {
	// 检查原始组件选项
	it('render correctly with top-left', () => {
		expect(getRenderedText(calendar, {
			type: 'top-left'
		})).equal('ivue-sub ivue-sub-top-left');
	});
});

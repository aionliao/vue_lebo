import Vue from 'vue';
import {PopupManager} from '../../../utils/popup';
let MessageConstructor = Vue.extend(require('./main.vue'));

let instance;
let instances = [];
let seed = 1;

var Message = function (options) {
	if (Vue.prototype.$isServer) return;
	options = options || {};
	if (typeof options === 'string') {
		options = {
			message: options
		};
	}

	let id = 'message_' + seed++;

	instance = new MessageConstructor({
		data: options
	});
	instance.id = id;
	instance.vm = instance.$mount();
	document.body.appendChild(instance.vm.$el);

	instance.vm.visible = true;
	instance.dom = instance.vm.$el;
	instance.dom.style.zIndex = PopupManager.nextZIndex();
	instances.push(instance);
	return instance.vm;
};

export default Message;

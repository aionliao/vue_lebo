<template>
	<div :class="classes" class="ui-slider">
		<!-- <button :class="arrowClasses" class="left" @click="arrowEvent(-1)"></button> -->
        <div>
        	<ul class="ui-slider-content" :class="[prefixCls + '-track']" :style="trackStyles" ref="slides">
				<slot></slot>
        	</ul>
        </div>
		<!-- <button :class="arrowClasses" class="right" @click="arrowEvent(1)"></button> -->
		<ul :class="dotsClasses" class="ui-slider-indicators">
			<template v-for="n in slides.length">
				<li :class="{'current': n === currentIndex}" @click="dotsEvent('click'), n" @mouseover="dotsEvent('hover', n)"></li>
				<button></button>
			</template>
		</ul>
    </div>
</template>
``
<script>
import oneOf from '../../utils/oneOf.js';
import getStyle from '../../utils/getStyle.js';
const prefixCls = 'ivu-carousel';

export default {
	name: 'Carousel',
	props: {
		arrow: {
			type: String,
			default: 'hover',
			validator (value) {
				return oneOf(value, ['hover', 'always', 'never']);
			}
		},
		autoplay: {
			type: Boolean,
			default: false
		},
		autoplaySpeed: {
			type: Number,
			default: 2000
		},
		easing: {
			type: String,
			default: 'ease'
		},
		dots: {
			type: String,
			default: 'inside',
			validator (value) {
				return oneOf(value, ['inside', 'outside', 'none']);
			}
		},
		trigger: {
			type: String,
			default: 'click',
			validator (value) {
				return oneOf(value, ['click', 'hover']);
			}
		},
		currentIndex: {
			type: Number,
			default: 0
		},
		height: {
			type: [String, Number],
			default: 'auto',
			validator (value) {
				return value === 'auto' || Object.prototype.toString.call(value) === '[object Number]';
			}
		}
	},
	data () {
		return {
			prefixCls: prefixCls,
			listWidth: 0,
			trackWidth: 0,
			trackOffset: 0,
			slides: [],
			sliderInstances: [],
			timer: null,
			ready: false
		};
	},
	computed: {
		classes () {
			return [
				`${prefixCls}`
			];
		},
		trackStyles () {
			return {
				width: `${this.trackWidth}px`,
				transform: `translate3d(-${this.trackOffset})px`,
				transition: `transform 500ms ${this.easing}`
			};
		},
		arrowClasses () {
			return [
				`${prefixCls}-arrow`,
				`${prefixCls}-arrow-${this.arrow}`
			];
		},
		dotsClasses () {
			return [
				`${prefixCls}-dots`,
				`${prefixCls}-dots-${this.dots}`
			];
		}
	},
	methods: {
		findChild (cb) {
			const find = function (child) {
				const name = child.$options.componentName;
				console.log('name');
				// console.log(name);
				console.log(child.$children);
				if (name) {
					// console.log('cb');
					// console.log(cb);
					cb(child);
				} else if (child.$children.length) {
					child.$children.forEach((innerChild) => {
						find(innerChild, cb);
					});
				}
			};

			console.log('this.sliderInstances');
			// console.log(this.sliderInstances);
			// console.log(this.$children[0]);
			console.log(this.sliderInstances.length || !this.$children);
			if (this.sliderInstances.length || !this.$children) {
				this.sliderInstances.forEach((child) => {
					find(child);
				});
			} else {
				this.$children.forEach((child) => {
					find(child);
				});
			}
		},
		updateSlides (init) {
			let slides = [];
			let index = 1;

			this.findChild((child) => {
				slides.push({
					$el: child.$el
				});
				child.index = index++;

				if (init) {
					this.sliderInstances.push(child);
				}
			});

			this.slides = slides;

			this.updatePos();
		},
		updatePos () {
			this.findChild((child) => {
				child.width = this.listWidth;
				child.height = typeof this.height === 'number' ? `${this.height}px` : this.height;
			});

			this.trackWidth = (this.slides.length || 0) * this.listWidth;
			console.log('this.trackWidth');
			console.log(this.trackWidth);
		},
		slotChange () {
			this.$nextTick(() => {
				this.slides = [];
				this.sliderInstances = [];

				this.updateSlides(true, true);
				this.updatePos();
				this.updateOffset();
			});
		},
		handleResize () {
			console.log('this.listWidth');
			this.listWidth = parseInt(getStyle(document.body, 'width'));
			console.log(this.listWidth);
			this.updatePos();
			this.updateOffset();
		},
		add (offset) {
			let index = this.currentIndex;
			index += offset;
			while (index < 0) {
				index += this.slides.length;
			}
			index = index % this.slides.length;
			this.currentIndex = index;
		},
		arrowEvent (offset) {
			this.setAutoplay();
			this.add(offset);
		},
		dotsEvent (event, n) {
			if (event === this.trigger && this.currentIndex !== n) {
				this.currentIndex = n;
				this.setAutoplay();
			}
		},
		setAutoplay () {
			window.clearInterval(this.timer);
			if (this.autoplay) {
				this.timer = window.setInterval(() => {
					this.add(1);
				}, this.autoplaySpeed);
			}
		},
		updateOffset () {
			this.$nextTick(() => {
				this.trackOffset = this.currentIndex * this.listWidth;
			});
		}
	},
	watch: {
		autoplay () {
			this.setAutoplay();
		},
		autoplaySpeed () {
			this.setAutoplay();
		},
		currentIndex (val, oldVal) {
			this.$emit('on-change', oldVal, val);
			this.updateOffset();
		},
		height () {
			this.updatePos();
		}
	},
	mounted () {
		console.log('created');
		console.log(this.$children);
		this.updateSlides(true);
		this.handleResize();
		this.setAutoplay();
		window.addEventListener('resize', this.handleResize, false);
	},
	beforeDestory () {
		window.removeEventListener('resize', this.handleResize, false);
	}
};
</script>

<style lang="css">
.ui-slider img{
	width: 100%;
	min-height: 109px;
}
</style>

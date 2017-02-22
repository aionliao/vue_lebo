<template>
	<div :class="classes">
		<!-- <button :class="arrowClasses" class="left" @click="arrowEvent(-1)"></button> -->
        <div>
        	<ul :class="[prefixCls + '-content']" :style="trackStyles" ref="slides">
				<slot name="body"></slot>
        	</ul>
        </div>
		<!-- <button :class="arrowClasses" class="right" @click="arrowEvent(1)"></button> -->
		<ul :class="[prefixCls + '-indicators']">
			<template v-for="n in slides.length">
				<!-- <li>{{n}}{{myCurrentIndex}}{{trackStyles}}</li> -->
				<li :class="(n - 1) === myCurrentIndex ? 'current' : ''" @click="dotsEvent('click', n - 1)" @mouseover="dotsEvent('hover', n-1)">
					<!-- {{indicatorsShowType}} -->
					<span v-if="indicatorsShowType === 'number'">{{n}}</span>
					<span v-if="indicatorsShowType === 'array'">{{indicatorsShow[n - 1]}}</span>
				</li>
			</template>
		</ul>
    </div>
</template>
``
<script>
import oneOf from '../../utils/oneOf.js';
import getStyle from '../../utils/getStyle.js';
import isArray from '../../utils/isArray.js';
import prefix from '../../config/prefix.js';

const prefixCls = `${prefix}-carousel`;

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
			default: true
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
		},
		indicatorsShow: {
			type: [String, Array],
			default: ''
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
			ready: false,
			myCurrentIndex: this.currentIndex
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
				transform: `translate3d(-${this.trackOffset}px, 0, 0)`,
				// transform: `translate3d(-0)px`,
				width: `${this.trackWidth}px`,
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
		},
		indicatorsShowType () {
			let type = (typeof this.indicatorsShow).toLowerCase();

			if (type === 'string') {
				if (this.indicatorsShow === '') {
					return false;
				} else if (this.indicatorsShow === 'number') {
					return 'number';
				}
			} else if (isArray(this.indicatorsShow) && this.indicatorsShow.length > 0) {
				return 'array';
			}
		}
	},
	methods: {
		findChild (cb) {
			const find = function (child) {
				const name = child.$options.componentName;
				if (name) {
					cb(child);
				} else if (child.$children.length) {
					child.$children.forEach((innerChild) => {
						find(innerChild, cb);
					});
				}
			};

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
			// console.log('slides');
			// console.log(slides);
			this.updatePos();
		},
		updatePos () {
			this.findChild((child) => {
				child.width = this.listWidth;
				child.height = typeof this.height === 'number' ? `${this.height}px` : this.height;
			});

			this.trackWidth = (this.slides.length || 0) * this.listWidth;
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
			this.listWidth = parseInt(getStyle(document.body, 'width'));
			this.updatePos();
			this.updateOffset();
		},
		add (offset) {
			let index = this.myCurrentIndex;
			index += offset;
			while (index < 0) {
				index += this.slides.length;
			}
			index = index % this.slides.length;
			this.myCurrentIndex = index;
		},
		arrowEvent (offset) {
			this.setAutoplay();
			this.add(offset);
		},
		dotsEvent (event, n) {
			if (event === this.trigger && this.myCurrentIndex !== n) {
				this.myCurrentIndex = n;
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
				this.trackOffset = this.myCurrentIndex * this.listWidth;
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
		myCurrentIndex (val, oldVal) {
			this.$emit('on-change', oldVal, val);
			this.updateOffset();
		},
		height () {
			this.updatePos();
		}
	},
	mounted () {
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
.ivue-carousel {
	position: relative;
	width: 100%;
	overflow: hidden;
}
.ivue-carousel-content {
	display: -webkit-box;
}
.ivue-carousel-content li {
	-webkit-box-flex: 1;
}
.ivue-carousel-indicators{
	position: absolute;
	display: -webkit-box;
	-webkit-box-pack: end;
	width: 100%;
	bottom: 10px;
	right: 4px;
	font-size: 0;
}
.ivue-carousel-indicators li {
	display: inline-block;
	width: 7px;
	height: 7px;
	background-color: rgba(0,0,0,.3);
	border-radius: 10px;
	margin-right: 6px;
}
.ivue-carousel-indicators li.current {
	background-color: rgba(0,0,0,.7);
}
.ivue-carousel-indicators li span{
	display: block;
	text-align: center;
}
</style>

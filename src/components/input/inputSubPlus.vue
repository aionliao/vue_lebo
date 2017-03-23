<template>
	<div :class="classes">
		<row type="flex">
			<i-col span="20">
				<row type="flex" class="input-add-plus-area">
					<i-col span="7" class="input-add">
						<div class="filled" @click="minusValue">
							<icon type="move" class="center-all"></icon>
						</div>
					</i-col>
					<i-col span="10">
						<i-input type="tel" :maxValue="maxValue" :value="inputVal" @input="updateValue" @blur="inputBlur" @focus="inputFocus"></i-input>
					</i-col>
					<i-col span="7" class="input-add input-plus">
						<div class="filled" @click="plusValue">
							<icon type="add" class="center-all"></icon>
						</div>
					</i-col>
				</row>
			</i-col>
			<i-col span="4">
				<slot></slot>
			</i-col>
		</row>
	</div>
</template>
<script>
import {Row, iCol} from '../layout/index.js';
import icon from '../icon/icon.vue';
import iInput from './input.vue';
export default {
	props: {
		value: {
			type: [Number, String],
			default: 1
		},
		minValue: {
			type: [Number, String],
			default: 1
		},
		maxValue: {
			type: [Number, String],
			default: 999
		},
		dValue: {
			type: [Number, String],
			default: 1
		},
		type: {
			type: [String],
			default: ''
		}
	},
	components: {
		Row,
		iCol,
		iInput,
		icon
	},
	data () {
		return {
			inputVal: this.value,
			classes: `input-add-plus ${this.type}`,
			dealedDVal: parseInt(this.dValue)
		};
	},
	methods: {
		minusValue () {
			if (this.inputVal <= this.minValue) {
				return;
			}
			this.inputVal -= this.dealedDVal;
			// console.log('mins');
			// console.log(this.inputVal);
			this.$emit('input', this.inputVal);
		},
		plusValue () {
			if (this.inputVal >= this.maxValue) {
				return;
			}
			this.inputVal = parseInt(this.inputVal);
			this.inputVal += this.dealedDVal;
			this.dealMoreThanMaxVal();
			console.log('plus');
			// console.log(this.inputVal);
			this.$emit('input', this.inputVal);
		},
		updateValue (value) {
			console.log(value);
			this.inputVal = value;
			this.dealMoreThanMaxVal();
			this.$emit('input', this.inputVal);
		},
		dealMoreThanMaxVal () {
			if (this.inputVal >= this.maxValue) {
				this.inputVal = this.maxValue;
			}
		},
		inputBlur (val) {
			if (val < this.minValue) {
				this.inputVal = this.minValue;
				this.$emit('input', this.inputVal);
			}
		},
		inputFocus () {
			console.log('focus');
		}
	}
};
</script>
<style lang="less">
@import "../../styles/custom";
@basewidth: 120px;
@baseHei: 30px;
@bigwidth: 150px;
@bigHei: 40px;
.input-add-plus{
	width: @basewidth;
	text-align: center;
}
.input-add-plus-area {
	border: 1px solid @border-color-grap;
}
.big.input-add-plus{
	width: @bigwidth;
}
.input-add-plus .@{css-prefix}-input, .input-add-plus .input-add {
	text-align: center;
}
.input-add-plus .input-add {
	border-right: 1px solid @border-color-grap;
}
.input-add-plus, .input-add-plus .@{css-prefix}-input, .input-add-plus .input-add {
	line-height: @baseHei;
	height: @baseHei;
}

// big版的组件
.big.input-add-plus, .big.input-add-plus .@{css-prefix}-input, .big.input-add-plus .input-add {
	line-height: @bigHei;
	height: @bigHei;
}

.input-add-plus .input-add.input-plus {
	border-right: none;
	border-left: 1px solid @border-color-grap;
}
.input-add-plus .@{css-prefix}-icon {
	font-size: 14px;
	color: @text-grap;
}
.big.input-add-plus .@{css-prefix}-icon {
	font-size: 20px;
}
</style>

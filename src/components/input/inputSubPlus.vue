<template>
	<div class="input-add-plus">
		<row type="flex">
			<i-col span="20">
				<row type="flex">
					<i-col span="7" class="input-add">
						<div class="filled" @click="minusValue">
							<icon type="minus" class="center-all"></icon>
						</div>
					</i-col>
					<i-col span="10">
						<i-input type="tel" :maxValue="maxValue" :value="inputVal" @input="updateValue"></i-input>
					</i-col>
					<i-col span="7" class="input-add input-plus">
						<div class="filled" @click="plusValue">
							<icon type="plus" class="center-all"></icon>
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
			type: [Number],
			default: 1
		},
		minValue: {
			type: [Number],
			default: 1
		},
		maxValue: {
			type: [Number],
			default: 999
		},
		dValue: {
			type: [Number],
			default: 1
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
			inputVal: this.value
		};
	},
	methods: {
		minusValue () {
			if (this.inputVal <= this.minValue) {
				return;
			}
			this.inputVal -= this.dValue;
			// console.log('mins');
			// console.log(this.inputVal);
		},
		plusValue () {
			if (this.inputVal >= this.maxValue) {
				return;
			}
			this.inputVal = parseInt(this.inputVal);
			this.inputVal += this.dValue;
			// console.log('plus');
			// console.log(this.inputVal);
		},
		updateValue (value) {
			console.log(value);
			this.inputVal = value;
		}
	}
};
</script>
<style lang="less">
@import "../../styles/custom";
.input-add-plus{
	width: 120px;
	line-height: 30px;
}
.input-add-plus .@{css-prefix}-input, .input-add-plus .input-add {
	border: 1px solid @border-color-grap;
	text-align: center;
	height: 30px;
}
.input-add-plus .input-add {
	border-right: none;
}
.input-add-plus .input-add.input-plus {
	border-left: none;
	border-right: 1px solid @border-color-grap;
}
.input-add-plus .@{css-prefix}-icon {
	font-size: 14px;
	color: @text-grap;
}
</style>

<template>
	<div class="input-add-plus">
		<row type="flex">
			<i-col span="7" class="input-add">
				<icon type="minus" class="center-all"></icon>
			</i-col>
			<i-col span="10">
				<i-input type="tel" value="5"></i-input>
			</i-col>
			<i-col span="7" class="input-add input-plus">
				<icon type="plus" class="center-all"></icon>
			</i-col>
		</row>
	</div>
</template>
<script>
import {Row, iCol} from '../layout/index.js';
import icon from '../icon/icon.vue';
import iInput from './input.vue';
export default {
	components: {
		Row,
		iCol,
		iInput,
		icon
	}
};
</script>
<style lang="less">
@import "../../styles/custom";
.input-add-plus{
	width: 100px;
}
.input-add-plus .@{css-prefix}-input, .input-add-plus .input-add {
	border: 1px solid @border-color-grap;
	text-align: center;
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

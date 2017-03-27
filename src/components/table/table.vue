<template lang="html">
	<table class="table">
		<thead>
			<tr >
				<td v-for="thead in theads" :rowspan="thead.rowspan" :colspan="thead.colspan">{{thead.text}}</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="bodyTr in bodyTrs">
				<td v-for="bodyTd in bodyTr" :rowspan="bodyTd.rowspan"  :colspan="bodyTd.colspan">{{bodyTd.text}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	props: {
		tableData: Object
	},
	data () {
		return {
			theads: this.tableData.theads,
			bodyTrs: this.tableData.bodyTrs
		};
	}
};
</script>

<style lang="less">
@import "../../styles/custom.less";

.table {
	width: 100%;
	text-align: center;
	line-height: 30px;
}
.table tr, .table td {
	border: 1px solid @body-background;
}
</style>

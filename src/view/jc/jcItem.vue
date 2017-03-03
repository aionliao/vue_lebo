<template>
	<div class="jc-item text-center">
		<row class="jc-title">
			<i-col span="6" class="visibile-hide">0</i-col>
			<i-col span="18">
				<row>
					<i-col span="10">{{matchList.homeTeamName}}</i-col>
					<i-col span="4" class="text-base-color">vs</i-col>
					<i-col span="10">{{matchList.guestTeamName}}</i-col>
				</row>
			</i-col>
		</row>
		<row class="jc-con">
			<i-col span="5" class="game-info">
				<div class="center-all">
					<p>{{matchList.matchName}}</p>
					<p>{{week}}{{matchList.matchSort}}</p>
					<p>20：50截止</p>
					<p><icon type="jiantou"></icon></p>
				</div>
			</i-col>
			<i-col span="19">
				<sp-con :clear="clear" @tzNum="tzNum"></sp-con>
			</i-col>
		</row>
	</div>
</template>
<script>
	import { Row, iCol } from '../../components/layout/index.js';
	import icon from '../../components/icon/icon.vue';
	import spCon from './spCon.vue';
	export default {
		props: {
			matchList: Object,
			week: String,
			clear: Number
		},
		components: {
			Row,
			iCol,
			icon,
			spCon
		},
		computed: {
			dealLetscore () {
				return this.matchList.letScore > 0
					? ('+' + this.matchList.letScore)
					: this.matchList.letScore;
			},
			letScoreClass () {
				return this.matchList.letScore > 0 ? 'red' : 'green';
			},
			spObj () {
				return this.dealSp(this.matchList.matchAgainstSpInfoList);
			}
		},
		methods: {
	        dealSp (spArr) {
	            let spObj = {};
	            for (let i = 0, len = spArr.length; i < len; i++) {
	                let spArrI = spArr[i];
	                let gameNoSp = spArrI.playMethod;
	                if (!spObj.hasOwnProperty(gameNoSp)) {
	                    spObj[gameNoSp] = {};
	                    let realTimeSp = spArrI.realTimeSp;
	                    let realTimeSpArr = realTimeSp.split('@');
	                    for (let j = 0, jLen = realTimeSpArr.length; j < jLen; j++) {
	                        let realTimeSpArrJ = realTimeSpArr[j];
	                        let realTimeSpArrJArr = realTimeSpArrJ.split('_');
	                        spObj[gameNoSp][realTimeSpArrJArr[0]] = realTimeSpArrJArr[1];
	                    }
	                }
	            }
	            return spObj;
	        },
			tzNum (num) {
				this.$emit('tzNum', num);
			}
		}
	};
</script>
<style>
</style>

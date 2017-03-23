<template>
	<div>
		<loadingStatus :status="statusConfig.loadingStatus" posType="absolute" v-if="statusConfig.isLoading" :statusMsg="statusConfig.statusMsg"></loadingStatus>
		<template v-else>
			<h3>
                <i>大乐透 {{dltList.issue}}期 距离截止<span class="time">{{1}}</span></i>
                <span class="refresh" @click="getRandomDlt">
                    <icon type="refresh"></icon>换一注
                </span>
            </h3>
			<caiBall :obj="dltNums"></caiBall>
            <p class="award-money">最大奖金：<span>1000万{{unitConfig.unit}}</span></p>
            <div class="summary">
                <inputSubPlus type="big" minValue="2" dValue="2" :value="lemi" @input="updateInputVal">米</inputSubPlus>
                <router-link to="/cart" class="buy-btn"><i-button type="radius">投注</i-button></router-link>
            </div>
		</template>
	</div>
</template>

<script>
import vueAjax from '../../../../public/vueAjax.js';
import getRandomArr from '../../../../public/getRandomArr.js';
// import formatTime from '../../../../utils/formatTime.js';
// import isEmptyObject from '../../../../utils/isEmptyObject.js';
// import deepCopy from '../../../../utils/deepCopy.js';
import unitConfig from '../../../../config/unitConfig.js';

import icon from '../../../../components/icon/icon.vue';
import caiBall from '../../../../components/ball/caiBall.vue';
import iButton from '../../../../components/iButton/iButton.vue';
import loadingStatus from '../../../../components/loadingStatus/loadingStatus.vue';
import inputSubPlus from '../../../../components/input/inputSubPlus.vue';
import dealResCode from '../../../../public/dealResCode.js';

function getRandomDlt () {
	let firstBalls = getRandomArr(5, 1, 35);
	let secondBalls = getRandomArr(2, 1, 12);
	return {
		firstBalls: firstBalls,
		secondBalls: secondBalls
	};
}
export default {
	data () {
		return {
			statusConfig: {
				isLoading: true,
				loadingStatus: 'loading',
				statusMsg: ''
			},
			dltList: {},
			unitConfig: unitConfig,
			lemi: 2,
			dltNums: getRandomDlt()
		};
	},
	components: {
		icon,
        iButton,
        inputSubPlus,
        loadingStatus,
		caiBall
	},
	created () {
        vueAjax({
            method: 'get',
            data: {
                'gameNo': 'TC_DLT',
                'transactionType': '10102001',
                'betPlatform': '1'
            },
            that: this
        }).then((response) => {
			let data = response.body;
			let resCode = dealResCode(data.resCode);

			if (resCode === '0') {
				let dltList = data.gameList[0];
				this.dltList = dltList;
				this.statusConfig.isLoading = false;
			} else {
				this.statusConfig.isLoading = true;
				this.statusConfig.statusMsg = data.resMsg;
			}
        }, (response) => {
			this.statusConfig.isLoading = true;
			this.statusConfig.status = 'error';
        });
    },
	methods: {
		updateInputVal (val) {
			this.lemi = val;
		},
		getRandomDlt () {
			this.dltNums = getRandomDlt();
		}
	}
};
</script>

<style lang="less">
.lottery-box .cai-ball {
	margin: 17px 0;
}
</style>

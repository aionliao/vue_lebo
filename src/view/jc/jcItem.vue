<template>
	<div class="jc-item text-center">
		<row class="jc-title">
			<i-col span="6" class="visibile-hide">0</i-col>
			<i-col span="18">
				<row>
					<i-col span="10">{{matchListI.homeTeamName}}</i-col>
					<i-col span="4" class="text-base-color">vs</i-col>
					<i-col span="10">{{matchListI.guestTeamName}}</i-col>
				</row>
			</i-col>
		</row>
		<row class="jc-con">
			<i-col span="5" class="game-info">
				<div class="center-all">
					<p>{{matchListI.matchName}}</p>
					<p>{{jcData.week}}{{matchListI.matchSort}}</p>
					<p>20：50截止</p>
					<p><icon type="jiantou"></icon></p>
				</div>
			</i-col>
			<i-col span="1">
				<row class="jc-letscore">
					<i-col span="24">
						<div class="center-all">
							0
						</div>
					</i-col>
					<i-col span="24" class="green">
						<div class="center-all">
							{{matchListI.letScore}}
						</div>
					</i-col>
				</row>
			</i-col>
			<i-col span="5">
				<row class="jc-sp">
					<i-col span="24">
						<div class="center-all">
							<em>胜</em>{{matchListI.sp.TC_JZSPF['3']}}
						</div>
					</i-col>
					<i-col span="24">
						<div class="center-all">
							<em>胜</em>{{matchListI.sp.TC_JZXSPF['3']}}
						</div>
					</i-col>
				</row>
			</i-col>
			<i-col span="5">
				<row class="jc-sp">
					<i-col span="24">
						<div class="center-all">
							<em>平</em>{{matchListI.sp.TC_JZSPF['1']}}
						</div>
					</i-col>
					<i-col span="24">
						<div class="center-all">
							<em>平</em>{{matchListI.sp.TC_JZXSPF['1']}}
						</div>
					</i-col>
				</row>
			</i-col>
			<i-col span="5">
				<row class="jc-sp">
					<i-col span="24">
						<div class="center-all">
							<em>负</em>{{matchListI.sp.TC_JZSPF['0']}}
						</div>
					</i-col>
					<i-col span="24">
						<div class="center-all">
							<em>负</em>{{matchListI.sp.TC_JZXSPF['1']}}
						</div>
					</i-col>
				</row>
			</i-col>
			<i-col span="3" class="jc-choose">
				<div class="center-all">
					更多<br>
					选项
				</div>
			</i-col>
		</row>
	</div>
</template>
<script>
	import { Row, iCol } from '../../components/layout/index.js';
	export default {
		components: {
			Row,
			iCol
		}
	};
</script>
<style>
</style>

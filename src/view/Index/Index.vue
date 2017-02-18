<template>
    <div>
        <Header></Header>
        <Carouse></Carouse>
        <SubNav></SubNav>
        <Notice></Notice>
        <div class="user nologin" id="user"></div>
        <!-- 彩种控制 -->
        <CaiList></CaiList>
        <!-- 娱乐场 -->
        <section class="disport" id="disport">
            <router-link to="/disport">
                <img class="disport-left lazy-load" data-src="../../assets/img/disport.png" src="../../assets/img/lazy-head.jpg">
            </router-link>
        </section>
        <!-- 红包 -->
        <Red></Red>

        <!--快投 start-->
        <FastTz></FastTz>
        <!--开奖 start-->
        <Kj></Kj>
        <Footer></Footer>
    </div>
</template>

<script type="text/ecmascript6">
import Header from '../../components/Header/Header.vue';
import Carouse from '../../components/Carouse/Carouse.vue';
import CaiList from '../../components/CaiList/CaiList.vue';
import Footer from '../../components/Footer/Footer.vue';

import SubNav from './components/SubNav/SubNav.vue';
import Notice from './components/Notice/Notice.vue';
import Red from './components/Red/Red.vue';
import FastTz from './components/FastTz/FastTz.vue';
import Kj from './components/Kj/Kj.vue';

export default {
  name: 'hello',
  components: {
      Header,
      Carouse,
      SubNav,
      Notice,
      CaiList,
      Red,
      FastTz,
      Kj,
      Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import "../../less/index/index.less";
    .lottery-box .loading, .kaijiang .loading{position: absolute;}
</style>

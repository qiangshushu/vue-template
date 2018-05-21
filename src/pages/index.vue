<template>
  <div class="index pb pt">
    <mt-header title="固定在顶部">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button>关闭</mt-button>
      </router-link>
      <mt-button icon="more" slot="right">分享</mt-button>
    </mt-header>
    <div class="content">
      <div>{{msg}}</div>
      <p>this is a vue mobile template, includes:</p>
      <ul>
        <li>webpack</li>
        <li>eslint</li>
        <li>mint-ui</li>
        <li>axios</li>
        <li>vue-router</li>
        <li>vuex</li>
        <li>less</li>
        <li>i18n</li>
        <li>fastclick</li>
        <li>flexible</li>
        <li>zepto</li>
      </ul>

      <img src="~assets/common/icon_aipay.png" />
      <img src="~assets/common/icon_wechat.png" />
    </div>
    <div class="footer">
      <mt-button type="primary">primary</mt-button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import MintUI from 'mint-ui';
  import $ from 'zepto';
  import Swiper from 'swiper';

  export default {
    data() {
      return {
        msg: '本页面语言为:' + this.$t('lang')
      };
    },
    created() {
      this.getDeviceInfo();
    },
    mounted() {
      console.log($);
    },
    methods: {
      ...mapActions(['ajax']),
      getDeviceInfo() {
        let req1 = this.ajax({
          name: 'getDeviceInfo',
          method: 'get',
          options: {
            name: 1
          },
          lalla: 22
        });

        let req2 = this.ajax({
          name: 'getPortSize',
          options: {
            name: 1
          }
        });

        req1.then(res => {
          console.log('getDeviceInfo success', res);
        }).catch(err => {
          MintUI.Toast('哈哈哈哈');
          console.log('getDeviceInfo catch', err);
        });

        req2.then(res => {
          console.log('getDeviceInfo success', res);
        }).catch(err => {
          MintUI.Toast('哈哈哈哈');
          console.log('getDeviceInfo catch', err);
        });

        this.ajax([req1, req2]).then(this.spread((res1, res2) => {
          console.log('getDeviceInfo all success', res1, res2);
        }), res => {
          console.log('getDeviceInfo all fail', res);
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .index {
    img {
      width: 100px;
      height: 20rem;
    }
  }
</style>

<template>
  <div class="resetTab">
    <section class="bgImg">
      <img class="inBgImg" :src="mainBgc" alt="img">
      <div class="tabContent">
        <tab
          :line-width="2"
          active-color="#DD0A16"
          defaultColor="#fff"
          custom-bar-width="55px" >
          <tab-item @on-item-click="onItemClick">点外卖</tab-item>
          <tab-item selected @on-item-click="onItemClick">个人中心</tab-item>
          <tab-item @on-item-click="onItemClick">门店查询</tab-item>
        </tab>
      </div>
      <div class="customerInfo">
        <div class="avatar">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg" alt="img">
        </div>
        <p class="cusName">唱歌唱歌</p>
        <p class="accountBalance">账户余额：30元</p>
        <div class="vip">
          <span class="vux-1px">VIP1 9.9折</span>
          <span class="vux-1px">VIP2 9.8折</span>
        </div>
      </div>
    </section>
    <section class="orderList">
      <div class="ticketInput">
        <input type="text" placeholder="请输入券号">
        <input type="button" value="用券号提货">
      </div>
      <div class="orderListWrap">
        <ul class="inOrderListWrap">
          <li></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import {Tab, TabItem } from 'vux'

export default {
  name: 'PersonalCenter',
  components: {
    Tab,
    TabItem
  },
  data() {
    return {
      mainBgc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517303117873&di=5103838fa3a3f804e0c0f50addbefd71&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1207%2F0837%2Fntk28584.jpg',
    }
  },
  methods: {
    onItemClick(index) {
      console.log('on item click:', index)
    },
  }
}
</script>

<style lang="less" scoped>
.bgImg {
  width: 100%;
  height: 4.5rem;
  position: relative;
  background-color: #070609;
  background-size: cover;
  > .inBgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  > .tabContent {
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }
  >.customerInfo {
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 1;
    >.avatar {
      margin: 0 auto;
      padding-top: 0.2rem;
      >img {
        width: 1.3rem;
        height: 1.3rem;
        border: 4px solid rgba(39,36,36, .5);
        border-radius: 50%;
      }
    }
    >.cusName {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      line-height: 1;
    }
    >.accountBalance {
      color: #fff;
      font-size: 10px;
      padding-top: 0.1rem;
    }
    >.vip {
      >span{
        color: #FF9B64;
        font-size: 10px;
        padding: 0.05rem;
        text-align: center;
        vertical-align: middle;
      }
      >span:last-child {
        margin-left: 0.1rem;
      }
    }
  }
}
.orderList {
  background-color: #fff;
  padding: 0.4rem 0.65rem;
  box-sizing: border-box;
  >.ticketInput {
    width: 100%;
    height: 0.7rem;
    >input[type=text]{
      height: 100%;
      width: 65%;
      border:1px solid #DDE1E5;
      padding: 0.1rem 0.2rem 0.1rem;
      box-sizing: border-box;
      border-right: 0;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    >input[type=button] {
      color: #fff;
      font-size: 14px;
      height: 100%;
      width: 33%;
      background-color: #DD0A16;
      text-align: center;
      line-height: 0.7rem;
      margin-left: -0.08rem;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      cursor: pointer;
    }
  }
}
</style>

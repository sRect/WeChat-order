<template>
  <div>
    <section class="bgImg">
      <img class="inBgImg" :src="mainBgc" alt="img">
      <div class="tabContent">
        <tab
          :line-width="2"
          active-color="#DD0A16"
          defaultColor="#fff"
          custom-bar-width="55px" >
          <tab-item selected @on-item-click="onItemClick">点外卖</tab-item>
          <tab-item @on-item-click="onItemClick">个人中心</tab-item>
          <tab-item @on-item-click="onItemClick">门店查询</tab-item>
        </tab>
      </div>
      <div class="hotTitle"> 热/销/产/品</div>
      <div class="searchInput">
        <input type="text" readonly value="北京市中关村西大街北京市中关村西大街北京市中关村西大街北京市中关村西大街北京市中关村西大街">
        <div class="locationBtn">
          <i class="iconfont icon-shuaxin"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
  name: 'Home',
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      mainBgc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515392311883&di=d04f0b6de9879b4d08349cfa7afa9e86&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150525%2F0042040207000966_b.jpg',
    }
  },
  methods: {
    onItemClick(index) {
      console.log('on item click:', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/css/public.less';

.vux-tab {
  background-color: transparent;
  height: 40px;
  .vux-tab-item {
    background: none;
    position: relative;
  }
  .vux-tab-item::after {
    content: '|';
    color: #d4d4d4;
    width: 0;
    height: 0;
    position: absolute;
    right: 0.05rem;
    top: 0;
  }
  .vux-tab-item:last-child::after,
  .vux-tab-item:nth-child(3)::after {
    content: '';
  }
}

.bgImg {
  width: 100%;
  height: 5.18rem;
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
  >.hotTitle {
    font-size: 16px;
    font-family:'RTWSShangYaDemo-Regular';
    color: #ffffff;
    text-align: center;
    letter-spacing: 5px;
    width: 3.7rem;
    height: 1.06rem;
    padding: 0 0.5rem;
    .boxSizing();
    margin: 0.7rem auto 0;
    line-height: 1.06rem;
    border: 1px solid #ccc;
    position: relative;
    z-index: 1;
  }
  @media (max-width: 320px) {
    .hotTitle {
      letter-spacing: 4px;
    }
  }
  >.searchInput {
    width: 100%;
    padding: 0 0.3rem;
    height: 0.7rem;
    .boxSizing();
    margin-top: 0.4rem;
    position: relative;
    z-index: 1;
    >input {
      width: 100%;
      height: 100%;
      padding: 0 0.76rem 0 0.4rem;
      .boxSizing();
      .borderRadius(0.7rem);
    }
    >.locationBtn {
      width: 0.5rem;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0.5rem;
      text-align: center;
      cursor: pointer;
      >.icon-shuaxin {
        color: #BDBDC6;
        font-size: 25px;
        font-weight: lighter;
        line-height: 0.7rem;
      }
    }
  }
}
</style>

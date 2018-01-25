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
    <section class="proWrap">
      <ul class="proList clearfix">
        <li
          class="pro noOrder fl"
          @click="handleClick(index)"
          v-for="(val, index) in proList"
          :key="index">
          <div class="proImgWrap">
            <img class="proImg" v-lazy="val.imgSrc" alt="img">
            <div class="raterInfo">
              <rater
                v-model="val.rate"
                active-color="#FFBF64"
                :margin="0"
                :font-size="18"
                disabled>
              </rater>
            </div>
          </div>
          <div class="clearfix proInfo">
            <strong class="fl proTitle nowrap">{{ val.title }}</strong>
            <span class="fr proPrice">￥{{ val.price }}</span>
          </div>
          <div class="inNoOrder">免预约</div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { Tab, TabItem, Rater, Group,debounce } from 'vux'

export default {
  name: 'Home',
  components: {
    Tab,
    TabItem,
    Group,
    Rater
  },
  data () {
    return {
      mainBgc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515392311883&di=d04f0b6de9879b4d08349cfa7afa9e86&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150525%2F0042040207000966_b.jpg',
      proList: [
        {
          imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg',
          rate: 3.7,
          title: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          price: 100,
          isNoOrder: true
        },
        {
          imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg',
          rate: 3,
          title: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          price: 100,
          isNoOrder: true
        },
        {
          imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg',
          rate: 3,
          title: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          price: 100,
          isNoOrder: true
        },
        {
          imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg',
          rate: 3,
          title: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          price: 100,
          isNoOrder: true
        },
        {
          imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg',
          rate: 3,
          title: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          price: 100,
          isNoOrder: true
        },
      ]
    }
  },
  methods: {
    onItemClick(index) {
      console.log('on item click:', index)
    },
    handleClick: debounce(function(index) {
      this.$router.push({name: "ProductDetail", params:{index: index}})
    }, 300,{
      'maxWait': 500
    })
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

.proWrap {
  width: 100%;
  padding: 0 0.3rem;
  background-color: #18191B;
  min-height: 3rem;
  .boxSizing();
  >.proList {
    width: 100%;
    >li.pro {
      width: 3.3rem;
      height: 3rem;
      background-color: #fff;
      .borderRadius(6px);
      margin-bottom: 0.3rem;
      padding: 0.2rem;
      .boxSizing();
      position: relative;
      overflow: hidden;
      >.proImgWrap {
        width: 100%;
        height: 75%;
        position: relative;
        >.proImg {
          width: 100%;
          height: 100%;
          background-size: cover;
        }
        >.raterInfo {
          width: 100%;
          height: 0.4rem;
          line-height: 0.4rem;
          background:rgba(0,0,0, .65);
          position: absolute;
          left: 0;
          bottom: 0;
          padding-left: 0.14rem;
          .boxSizing();
        }
      }
      >.proInfo {
        padding-top: 0.15rem;
        >.proTitle {
          color: #000000;
          font-family: 'RTWSShangYaDemo-Regular';
          width: 70%;
        }
        >.proPrice {
          color: #DD0A16;
          font-family: 'RTWSShangYaDemo-Regular';
          width: 30%;
          text-align: right;
        }
      }
      >.inNoOrder {
        width: 1rem;
        height: 1rem;
        font-size: 10px;
        color: #fff;
        line-height: 1rem;
        text-align: center;
        position: absolute;
        top: -0.1rem;
        left: -0.1rem;
        transform: rotate(-45deg);
        z-index: 101;
      }
    }
    >li.pro:nth-child(even) {
      margin-left: 0.3rem;
    }
    >li.noOrder::after{
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-top: 1.1rem solid rgba(221,10,22,1);
      border-right: 1.1rem solid transparent;
      position: absolute;
      top: 0;
      left: 0;
      opacity:0.6;
    }

    >.noOrder::before{
      content: '';
      width: 0;
      height: 0;
      border-top: 0.5rem solid #fff;
      border-right: 0.5rem solid transparent;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }
}
</style>

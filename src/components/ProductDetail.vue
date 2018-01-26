<template>
  <div>
    <section class="banner">
      <img class="img" v-lazy="imgSrc" alt="img">
      <div class="share">
        <i class="iconfont icon-share"></i>
      </div>
    </section>
    <section class="titleWrap">
      <h1>我是标题</h1>
      <p class="descri">我是描述我是描述我是描述我是描述我是描述</p>
      <div class="rateWrap">
        <b class="inRateWrap">
          <rater
            v-model="rate"
            active-color="#FF9B64"
            :margin="0"
            :font-size="14"
            disabled>
          </rater>
        </b>
        <span class="descri_text">4.0评分 |　1200人购买</span>

      </div>
    </section>
    <section class="subtitle">
      <div>
        <p>——　<span>特 / 色 / 配 / 菜</span>　——</p>
      </div>
    </section>
    <section class="proTypeWrap">
      <div class="freeWrap">
        <p class="proTypeTitle">赠送区</p>
        <ul class="fressPro">
          <li class="nowrap">花生米</li>
          <li class="nowrap active">凉拌黄瓜</li>
          <li class="nowrap">青椒肉丝</li>
          <li class="nowrap">青椒肉丝青椒肉丝</li>
          <li class="nowrap">青椒肉丝青</li>
          <li class="nowrap">青椒肉丝青椒肉丝</li>
          <li class="nowrap">青椒肉丝青椒肉丝</li>
        </ul>
      </div>
      <div class="fiveArea">
        <p class="proTypeTitle">5元区</p>
        <ul class="fiveProCon">
          <li>
            <div class="fiveProCard">
              <div></div>
              <div class="xnumber">
                <group>
                  <x-number :min="-5" :max="8" :value="1" width="25px"></x-number>
                </group>
              </div>
            </div>
          </li>
          <li>
            <div>

            </div>
          </li>
          <li>
            <div>

            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { Rater,XNumber,Group } from 'vux'

export default {
  name: 'ProductDetail',
  components: {
    Rater,
    XNumber,
    Group
  },
  data() {
    return {
      imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg',
      rate: 4
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 3.8rem;
  position: relative;
  >.img {
    width: 100%;
    height: 100%;
  }
  >.share {
    width: 0.44rem;
    height: 0.44rem;
    border-radius: 50%;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 0.44rem;
    position: absolute;
    right: 0.22rem;
    top: 0.22rem;
    cursor: pointer;
    >.icon-share {
      font-size: 10px;
      color: #ccc;
    }
  }
  >.share:visited,
  >.share:active,
  >.share:visited .icon-share,
  >.share:active .icon-share {
    border-color: #f40;
    color: #f40;
  }

}
.titleWrap {
  text-align: center;
  padding: 0.3rem 0.3rem 0.47rem 0.3rem;
  box-sizing: border-box;
  background-color: #fff;
  >h1 {
    color: #333;
    font-size:20px;
    font-family:'RTWSShangYaDemo-Regular';
    font-weight: 600;
  }
  >.descri {
    color:rgba(196,201,209,1);
    font-size: 15px;
    font-family:'PingFangSC-Regular';
  }
  >.rateWrap {
    >.descri_text {
      font-size: 10px;
      color:rgba(196,201,209,1);
    }
  }
}
.subtitle {
  text-align: center;
  span {
    font-size: 16px;
    color:rgba(0,0,0,1);
    font-family:'RTWSJyunYaDemo-Regular';
    font-weight: bold;
    line-height:44px;
  }
}
.proTypeTitle {
  color:rgba(195,199,205,1);
  padding-left: 0.15rem;
  border-left: 0.1rem solid #DD0A16;
  line-height: 1.3;
  margin-bottom: 0.15rem;
}
.proTypeWrap {
  width: 100%;
  padding: 0.3rem;
  box-sizing: border-box;
  background-color: #fff;
  >.freeWrap {
    >ul.fressPro {
      font-size: 0; // 去除子元素inline-block后的间隙
      > li {
        display: inline-block;
        width: 1.78rem;
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0 0.16rem;
        box-sizing: border-box;
        border: 1px solid #D9DEE3;
        text-align: center;
        max-width: 1.77rem;
        margin-bottom: 0.2rem;
      }
      >li.active {
        background-color: #DD0A16;
        color: #fff;
        border: 1px solid #DD0A16;
      }
      >li + li {
        margin-left: 0.2rem;
      }
      >li:nth-child(3n+1) {
        margin-left: 0;
      }
    }
  }
  >.fiveArea {
    >ul.fiveProCon{
      font-size: 0;
      >li {
        display: inline-block;
        width: 2.96rem;
        height: 0.6rem;
        background-color: rgba(244,244,248,1);
        margin-bottom: 0.2rem;
        >.fiveProCard {
          >.xnumber {
            display: inline;
          }
        }
      }
      > li:nth-child(2n) {
        margin-left: 0.2rem;
      }
    }
  }
}

</style>


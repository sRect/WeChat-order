<template>
  <div>
    <section class="imgWrap">
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg" alt="img">
    </section>
    <section class="shippingInfo">
      <div class="goodsInfo">
        <h3>我是标题</h3>
        <p class="goodsDes">夫妻肺片1份、香辣花甲1份、蒜蓉扇贝4个夫妻肺片1份、香辣花甲1份、蒜蓉扇贝4个夫妻肺片1份、香辣花甲1份、蒜蓉扇贝4个</p>
      </div>
      <div class="shippingTime">
        <span class="datetime">送餐时间:</span>
        <input type="text" class="date" v-model="dateval" readonly placeholder="请选择">
        <group>
          <datetime
            v-model="value5"
            :min-year='2018'
            :max-year='2020'
            format="YYYY-MM-DD HH:mm"
            @on-change="change"
            year-row="{value}年"
            month-row="{value}月"
            day-row="{value}日"
            hour-row="{value}点"
            minute-row="{value}分"
            confirm-text="完成"
            cancel-text="取消">
          </datetime>
        </group>
      </div>
      <div class="addresInfo">

      </div>
    </section>
    <section class="footer">
      <div class="inFooter vux-1px-t">
        <button @click="handleClick">确认</button>
      </div>
    </section>
  </div>
</template>

<script>
import { Datetime,Group } from 'vux'

  export default {
    name: 'TakeGoods',
    components: {
      Datetime,
      Group
    },
    data() {
      return {
        value5: '',
        dateval: ''
      }
    },
    methods: {
      change(val) {
        console.log(val)
        this.dateval = val;
      },
      handleClick() {
        this.$router.push({name: 'TakeGoodsSuccess'})
      }
    }
  }
</script>

<style lang="less" scoped>
.imgWrap {
  width: 100%;
  height: 3.8rem;
  >img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
.shippingInfo {
  padding: 0.28rem 0.5rem 1.2rem 0.5rem;
  background-color: #fff;
  >.goodsInfo {
    >h3 {
      font-family:'RTWSShangYaDemo-Regular';
      font-size: 20px;
    }
    >.goodsDes {
      color: #96999F;
      padding-top: 0.2rem;
    }
  }
  >.shippingTime {
    width: 6.5rem;
    height: 0.8rem;
    background-color: #F1F7FA;
    margin: 0.38rem auto 0;
    line-height: 0.8rem;
    padding: 0 0.75rem;
    box-sizing: border-box;
    >.datetime {
      color: #000;
      font-size: 12px;
    }
    >.date {
      width: 60%;
      height: 0.6rem;
      padding: 0.2rem;
      background-color: #fff;
      border-radius: 6px;
      box-sizing: border-box;
    }
  }
}
.footer {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  >.inFooter {
    height: 1rem;
    width: 100%;
    line-height: 1rem;
    background-color: #DD0A16;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    >button {
      background: none;
      -webkit-appearance:none;
      appearance: none;
      outline: none;
      border: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      font-weight: bold;
      text-align: center;
      line-height: 1;
      cursor: pointer;
    }
  }
}
</style>


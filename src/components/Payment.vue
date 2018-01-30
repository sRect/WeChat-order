<template>
  <div class="payment">
    <section>
      <ul>
        <li class="clearfix">
          <div class="fl">
            <p class="proName nowrap">招牌十三香龙虾+配料</p>
            <span class="desInfo">蒜蓉扇贝2个／香辣花甲1份</span>
          </div>
          <div class="fr">
            <p>￥120</p>
          </div>
        </li>
        <li class="clearfix">
          <div class="fl">
            <p class="proName nowrap">招牌十三香龙虾+配料招牌十三香龙虾+龙虾+配料</p>
            <span class="desInfo"></span>
          </div>
          <div class="fr">
            <p>￥12033</p>
          </div>
        </li>
        <li class="clearfix">
          <div class="fl">
            <p class="proName nowrap">招牌十三香龙虾+配料招牌十三香龙虾+配料招牌十三香龙虾+配料</p>
            <span class="desInfo nowrap">／香辣花甲1份蒜蓉扇贝2个／香辣花甲1份蒜蓉扇贝2个／香辣花甲1份</span>
          </div>
          <div class="fr">
            <p>￥12033</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="footer">
      <div class="inFooter vux-1px-t clearfix">
        <div class="left fl">
          <p>
            <small>需付款</small>
            <strong>440</strong>
            <small>元</small>
          </p>
        </div>
        <div class="right fr">
          <button @click="handleClick">立即付款</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Payment',
    methods: {
      handleClick() {
        this.$router.push({name: 'PaymentSuccess'})
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../assets/css/public.less';

.payment {
  background-color: #fff;
  padding: 0.5rem;
  box-sizing: border-box;
  ul {
    >li {
      height: 1.7rem;
      padding: 0.4rem 0 0 0;
      position: relative;
      >.fl {
        width: 70%;
        height: 100%;
        >.proName{
          font-size: 18px;
          font-family:'PingFangSC-Medium';
          font-weight: 600;
          width: 100%;
        }
        >.desInfo {
          display: inline-block;
          color: #C4C9D1;
          width: 100%;
        }
      }
      >.fr {
        width: 30%;
        text-align: right;
        p {
          color: #DD0A16;
          font-family: 'PingFangSC-Medium';
          font-size: 20px;
        }
      }
    }
    >li:not(:last-child):after {
      .onePx(#DFE1EB, solid);
    }
    >li:first-child {
      padding-top: 0;
    }
  }
  .footer{
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    >.inFooter {
      height: 1rem;
      width: 100%;
      line-height: 1rem;
      background-color: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      >.left {
        color: #CBCBD2;
        padding-left: 0.3rem;
        strong {
          color: #DD0A16;
          font-size: 25px;
          font-family:'PingFangSC-Medium';
        }
        small:first-child{
          margin-right: 0.3rem;
        }
        small:last-child{
          color: #DD0A16;
        }
      }
      >.right {
        height: 100%;
        width: 2.34rem;
        background-color: #DD0A16;
        >button {
          background: none;
          -webkit-appearance:none;
          appearance: none;
          outline: none;
          border: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          text-align: center;
          line-height: 1;
          cursor: pointer;
        }
      }
    }
  }
}

</style>

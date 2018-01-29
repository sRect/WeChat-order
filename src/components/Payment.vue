<template>
  <div class="payment">
    <ul>
      <li class="clearfix">
        <div class="fl">
          <p class="proName">招牌十三香龙虾+配料</p>
          <span class="desInfo">蒜蓉扇贝2个／香辣花甲1份</span>
        </div>
        <div class="fr">
          <p>￥120</p>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <p class="proName">招牌十三香龙虾+配料招牌十三香龙虾+配料招牌十三香龙虾+配料</p>
          <span class="desInfo">／香辣花甲1份蒜蓉扇贝2个／香辣花甲1份蒜蓉扇贝2个／香辣花甲1份</span>
        </div>
        <div class="fr">
          <p>￥12033</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Payment',

  }
</script>

<style lang="less" scoped>
@import '../assets/css/public.less';

.payment {
  background-color: #fff;
  padding: 0.5rem;
  box-sizing: border-box;
  >ul {
    >li {
      min-height: 1.7rem;
      position: relative;
      >.fl {
        width: 70%;
        >.proName{
          font-size: 18px;
          font-family:'PingFangSC-Medium';
          font-weight: 600;
        }
        >.desInfo {
          color: #C4C9D1;
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
    >li:not(:first-child) {
      padding-top: 0.4rem;
    }
  }
}
</style>

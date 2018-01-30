<template>
  <div class="content">
    <section class="sucessImgWrap">
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg" alt="付款成功">
      <p>付款成功</p>
    </section>
    <section class="btnWrap">
      <button>查看订单</button>
      <button @click="handleClick">朕提货了</button>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'PaymentSuccess',
    methods: {
      handleClick() {
        this.$router.push({name: 'TakeGoods'})
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../assets/css/success.less';
</style>


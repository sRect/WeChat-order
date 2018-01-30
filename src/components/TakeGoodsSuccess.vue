<template>
  <div class="content">
    <section class="sucessImgWrap">
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg" alt="付款成功">
      <p>已提货</p>
    </section>
    <section class="btnWrap">
      <button @click="goHome">返回首页</button>
      <button @click="handleClick">个人中心</button>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'TakeGoodsSuccess',
    methods: {
      handleClick() {
        this.$router.push({name: 'PersonalCenter'})
      },
      goHome() {
        this.$router.push({name: 'Home'})
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../assets/css/success.less';
</style>


<template>
  <div>
    <section class="banner">
      <img class="img" v-lazy="imgSrc" alt="img">
    </section>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'ProductDetail',
  data() {
    return {
      imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515392311883&di=d04f0b6de9879b4d08349cfa7afa9e86&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150525%2F0042040207000966_b.jpg',
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 3.8rem;
  background-color: red;
  >.img {
    width: 100%;
    height: 100%;
  }
}
</style>


<template>
  <div>
    <section class="banner">
      <img class="img" v-lazy="imgSrc" alt="img">
      <div class="share">
        <i class="iconfont icon-share"></i>
      </div>
    </section>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'ProductDetail',
  data() {
    return {
      imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg',
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
</style>


<template>
  <div>
    <section class="sucessImgWrap">
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=618477273,3443545549&fm=27&gp=0.jpg" alt="付款成功">
      <p>付款成功</p>
    </section>
    <section class="btnWrap">
      <button>查看订单</button>
      <button>朕提货了</button>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'PaymentSuccess',
  }
</script>

<style lang="less" scoped>
.sucessImgWrap {
  width: 100%;
  padding-top: 1.98rem;
  text-align: center;
  >img {
    width: 2.68rem;
    height: 2.7rem;
  }
  >p {
    color: #DD0A16;
    font-size: 20px;
    font-family:'PingFangSC-Medium';
    font-weight: 600;
    padding-top: 0.2rem;
  }
}
.btnWrap {
  text-align: center;
  padding-top: 0.9rem;
  > button {
    width: 2rem;
    height: 0.7rem;
    border-radius: 6px;
    cursor: pointer;
    -webkit-appearance:none;
    appearance: none;
    outline: none;
    background: #fff;
    border: 0;
    text-align: center;
    line-height: 0.7rem;
  }
  > button+button {
    margin-left: 0.4rem;
  }
  > button:first-child {
    color: #8B9099;
    border: 1px solid #CECECE;
  }
  >button:last-child {
    background-color: #DD0A16;
    color: #fff;
    border: 1px solid #DD0A16;
  }
}
</style>


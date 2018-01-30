<template>
  <div>
    <tab
      :line-width="2"
      active-color="#DD0A16"
      defaultColor="#fff"
      custom-bar-width="55px"
      prevent-default
      @on-before-index-change="switchTabItem" >
      <tab-item :selected="info === 0">点外卖</tab-item>
      <tab-item :selected="info === 1">个人中心</tab-item>
      <tab-item disabled>门店查询</tab-item>
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
  name: 'VuxTab',
  components: {
    Tab,
    TabItem
  },
  data() {
    return {
      index: 0
    }
  },
  props:["info"],
  methods: {
    switchTabItem(index) {
      console.log('on item click:', index)
      this.index = index;
      switch(index) {
        case 0:
          this.$router.push({name: 'Home'});
          break;
        case 1:
        this.$router.push({name: 'PersonalCenter'});
          break;
        case 2:
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    console.log(this.info)
  }
}
</script>

<style scoped>
.tabactive {
  color: #DD0A16 !important;
  border-color: rgb(252, 55, 140) !important;
}
</style>


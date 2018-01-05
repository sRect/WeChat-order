<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <group>
      <cell-box is-link>
        <!-- anything -->jjj
      </cell-box>
  </group>
  </div>
</template>

<script>
import { Group, CellBox } from 'vux'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Group,
    CellBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-size: 20px;
  }
</style>

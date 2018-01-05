<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <group>
      <cell-box is-link>
        <!-- anything -->jjj
      </cell-box>
  </group>

  <popup v-model="show3">
    <div class="popup2">
      <group>
        <x-switch title="Multi Popup (first)" v-model="show3"></x-switch>
        <x-switch title="Multi Popup (second)" v-model="show4"></x-switch>
      </group>
      this is the first popup
    </div>
  </popup>
  </div>
</template>

<script>
import { Group, CellBox, Popup,XSwitch } from 'vux'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show3: true,
      show4: false
    }
  },
  components: {
    Group,
    Popup,
    CellBox,
    XSwitch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-size: 20px;
  }
</style>

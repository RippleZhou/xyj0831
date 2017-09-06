<template>
  <div id="Home">
    <router-view></router-view>
  </div>
</template>

<script>  
  import Hello from './components/Hello'
  import Vheader from './components/Vheader'

export default {
  components: {
    Hello,
    Vheader
  },
  data () {
    return {

      
    }
  }
}
</script>

<style>



</style>

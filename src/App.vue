<template>
  <div id="Home">
    <div class="xunyanji_top">
      <div class="logo" :style="{'background-image': 'url(' + require('./assets/img/top1.png') + ')'}">
        <img src="./assets/img/1.png" alt="">
        <img src="./assets/img/chuban.png" alt="">
      </div>
      <div class="top" :style="{'background-image': 'url(' + require('./assets/img/top2.png') + ')'}">
        <img src="./assets/img/select.png" alt="">
      </div>
      <div class="notice" :style="{'background-image': 'url(' + require('./assets/img/3-3.png') + ')'}">
          <div><img src="./assets/img/lieri.png"></div>
      </div>
      <div class="apply">
          <img src="./assets/img/4-4-1.png" alt="" style="width:50%;height:100%;display:inline-block;">
          <img src="./assets/img/4-4-2.png" alt="" style="width:50%;height:100%;display:inline-block;">
      </div>
      <div class="joinUs">
        <span></span>
        <router-link to="/about">点击报名</router-link>
        <span></span>
        <router-link to="/about">为她投票</router-link>
        <span></span>
      </div>
    </div>
    <div class="beauty" :style="{'background-image': 'url(' + require('./assets/img/5.png') + ')'}">
      <div>
        <img src="./assets/img/select.png" alt="">
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>  
  import Hello from './components/Hello'
  import Vheader from './components/Vheader'
export default {
  name: 'Home',
  components: {
    Hello,
    Vheader
  }
}
</script>

<style>
a {
  text-decoration: none;  
}
#Home {
  margin: 0 auto;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img{
  display: block;
  width:100%;
}
.xunyanji_top{
  margin: 0 auto;
  padding: 0;
  position: relative;
}
.logo,.top,.notice,.apply,.beauty{
  background-size:100% 100%;
}
.apply,.joinUs{
  display: flex;
  justify-content: center;
}
.apply img{
  width:auto;
  flex:1;
}
.joinUs{
  position: absolute;
  width: 100%;
  left: 0;
  bottom:5%;
}
.joinUs a{
  flex:1;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 0.2rem;
  padding: 4px 14px;
  list-style: none;
  color:#fff;
}
.joinUs span {
  flex:1.5;
}

</style>

<template>
  <div id="Home">
    <router-view></router-view>
    <!-- <div class="xunyanji_top">
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
    <div class="container_month f0 w100">
        <table>
            <tbody>
                <tr>
                    <td class="month_show">
                        <img src="./assets/img/First-month.png" style="width:100%;">
                        <span><img src="./assets/img/xiala2.png" alt=""></span>
                        <div class="month-dis">
                            <ul>
                                <li id="first-xyj" @click=""><a href="javascript:void(0);">第一期</a></li>
                                <li id="second-xyj"><a href="javascript:void(0);">第二期</a></li>
                                <li id="third-xyj"><a href="javascript:void(0);">第三期</a></li>
                            </ul>
                        </div>
                    </td>
                    <td class="" id="show-firstWeek" @click="change(0)"><img src="./assets/img/First-week.png">
                        <span class="container_going    container_current"></span>
                    </td>
                    <td class="" id="show-secondWeek" @click="change(1)"><img src="./assets/img/Second-weeks.png">
                        <span class="container_going"></span>
                    </td>
                    <td class="" id="show-thirdWeek" @click="change(2)"><img src="./assets/img/Third-weeks.png">
                        <span class="container_going"></span>
                    </td>
                    <td class="" id="show-monthWeek" @click="change(3)"><img src="./assets/img/Month.png">
                        <span class="container_going"></span>
                    </td>
                </tr>
            </tbody>
        </table>  
    </div>
    <router-view></router-view>
    <div class="show_footer">
        <img src="./assets/img/space.jpg" alt="">
    </div>  
    <div class="xunyanji_foot f0 w100">
        <div class="plan">
            <img src="./assets/img/plan.jpg" alt="">
        </div>
        <div class="imgs">
            <img src="./assets/img/25.jpg" alt="">
        </div>
    </div>  -->
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
.fl{
    float: left;
}
.fr{
    float: right;
}
.container_month{
    width: 100%;
    background: #cecece;
    background: url(./assets/img/07.png) no-repeat;
    background-size: 100% 100%;
}
.container_month table,.container_month tbody,.container_month tr{
    height: 100%;
    width: 100%;
}
.container_month table{
    height: 100%;
    width: 100%;
}
.container_current{
    border-bottom:1px solid #fff;
}
/*月赛预览导航*/
.month_show {
    position: relative;
}

.month_show > div{
    position: absolute;
    z-index: 99;
    left: -3%;
    width: 100%;
    background: #913a71;
}
.month_show ul{
    text-align: center;
}
.month_show li a{
    /*display: inline-block;*/
    /*width: 100%;*/
    height: 100%;
    font-size: 0.3rem;
    color: #ccc;
}

/*周赛当前状态和已公示状态*/
.dsn{
    display: none;
}
.f0{
  font-size:0;
}
.container_pass,.container_going,.container_next{
    display: block;
    margin: 6% auto;
    color: #fff;
    font-size: 0.1rem;
    text-align: center;
}
/*导航栏间距*/
.container_month td{
    padding: 0.1rem;
}
/*导航栏相对定位*/

.xunyanji_container .first,.xunyanji_container .third,.xunyanji_container .fourth{
    position: relative;
    display: flex;
}
.xunyanji_container .first > div {
  flex:1;
}
/*flex布局*/
/*.xunyanji_container span.show_photo,.xunyanji_container span.show_rank{
    display: inline-flex;*/
    /*display: -webkit-inline-flex;*/ /* Safari */
/*    width: 50%;
}
*/
.show_rank img,.show_photo img{
     height: 100%;
}
.show .second{
    position: relative;
}
.change_flex{
    display: inline-flex;
    display: -webkit-inline-flex;
}
.dsplay{
    display: inline-block;
}
.w100{
    width:100%;
}
.w50{
    width:50%;
}
.fourth{
    background:url('./assets/img/bgc.jpg') no-repeat;
    background-size: cover;
}
.fourth {
    color:#ccc;
    font-size: .5rem;
}
.more_join{
    background: url(./assets/img/space.jpg) no-repeat;
    background-size:100% 100%;
}
div.more_rank_show span.show_rank,div.more_join span.join{
    display: table;
    height: 100%;
}
div.more_rank_show span.show_rank:first-child span,div.more_join span.join:first-child span{
    font-size: 0.2rem;
    color:#ccc;
    display: table-cell;    /*ie7和ie6都不能识别 display: table-cell;*/
    vertical-align: middle;
    text-align: center;
}

</style>

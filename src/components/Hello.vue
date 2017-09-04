<template>
  <div class="xunyanji_container">
      <div id="show-firstmonth" class="">
          <div class="show f0 w100">
              <div class="first change_flex">
                  <div class="show_photo">
                    <img src="../assets/img/logo.png" alt="" style="position:absolute;top:0;left:0;width:50%;height: initial;">
                    <img src="../assets/img/1-1-1.png">
                  </div>
                  <div class="show_rank">
                      <span style="font-size:1rem;padding: 0px 8px;font-size: 1.4rem;position: absolute;top: 65%;left: 50%;color: #ffffff;letter-spacing: 0.2em;font-family: fantasy;" v-for="data in msg" v-bind:key="data.id">{{data.name}} ~
                      </span>
                      <span style="font-size:1rem;padding: 0px 8px;font-size: 1.4rem;position: absolute;top: 80%;left: 50%;color:#ffffff;letter-spacing:  0.2em;font-family: sans-serif;" v-for="data in msg" v-bind:key="data.id">{{data.num}} 票
                      </span>
                      <img src="../assets/img/13.jpg">
                  </div>
              </div>
              <div class="second change_flex f0 w100">
                  <div class="two_rank_show change_flex w50">
                      <span style="padding: 0px 4px;font-size: 0.1rem;position: absolute;top: 65%;left: 0%;color:#ffffff;font-family: serif;" v-for="data in msg" v-bind:key="data.id">{{data.name}}
                      </span>
                      <span style="padding: 0px 3px;font-size: 0.2rem;position: absolute;top: 84%;left: 0%;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;" v-for="data in msg" v-bind:key="data.id">{{data.num}}票
                      </span>
                      <span class="show_rank change_flex w50">
                          <img src="../assets/img/14.jpg">
                      </span>
                      <span class="show_photo change_flex w50">
                          <img src="../assets/img/1-1-2.jpg"> 
                      </span>
                  </div>
                  <div class="three_rank_show change_flex w50">
                      <span style="padding: 0px 8px;font-size: 0.2rem;position: absolute;top: 65%;left: 50%;color: #ffffff;letter-spacing: 0.2em;font-family: inherit;">顾敏
                      </span>
                      <span style="font-size:1rem;padding: 0px 8px;font-size: 0.2rem;position: absolute;top: 84%;left: 50%;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;">67票
                      </span>
                      <span class="show_rank change_flex w50">
                          <img src="../assets/img/15.jpg">
                      </span>      
                      <span class="show_photo change_flex w50">
                          <img src="../assets/img/1-1-3.jpg"> 
                      </span>
                  </div>
              </div>
              <div class="third change_flex f0 w100">
                  <div class="four_rank_show change_flex w50">
                      <span class="show_photo change_flex w50">
                          <img src="../assets/img/1-1-4.jpg"> 
                      </span>
                      <span class="show_rank change_flex w50">
                          <img src="../assets/img/16.jpg">
                      </span>
                      <span style="padding: 0px 4px;font-size: 0.2rem;position: absolute;top: 65%;left: 25%;color:#ffffff;font-family: serif;">Candy
                      </span>
                      <span style="padding: 0px 3px;font-size: 0.2rem;position: absolute;top: 84%;left: 25%;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;">10票
                      </span> 
                  </div>
                  <div class="five_rank_show change_flex w50">
                      <span style="padding: 0px 5px;font-size: 0.2rem;position: absolute;top: 65%;left: 75%;;color: #ffffff;font-family: inherit;">Angel
                      </span>
                      <span style="font-size:1rem;padding: 0px 5px;font-size: 0.2rem;position: absolute;top: 84%;left: 75%;;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;">3票
                      </span>
                      <span class="show_photo change_flex w50">
                          <img src="../assets/img/1-1-5.jpg"> 
                      </span>
                      <span class="show_rank change_flex w50">
                          <img src="../assets/img/17.jpg">
                      </span>      
                  </div>
              </div>
              <div class="fourth change_flex f0 w100">
                  <div class="more_rank_show change_flex w50">
                      <span class="show_rank change_flex w50">
                          <span>第六~九名</span>
                      </span>
                      <span class="show_photo change_flex w50">
                          <img src="../assets/img/1-1-6.jpg"> 
                      </span>
                  </div>
                  <div class="more_join change_flex w50">
                      <span class="join w100">
                          <span style="font-size: 0.4rem;">下一期有你吗？</span>
                      </span>
                  </div>
              </div>                
          </div>         
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: [
        {
          id:0,
          name:'ni',
          num:191
        },
        {
          id:1,
          name:'wang',
          num:222
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.xunyanji_container .first,.xunyanji_container .third,.xunyanji_container .fourth{
    position: relative;
}
/*flex布局*/
.xunyanji_container span.show_photo,.xunyanji_container span.show_rank{
    display: inline-flex;
    display: -webkit-inline-flex; /* Safari 
/*/*    width: 50%;
}

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
    background:url('../assets/img/bgc.jpg') no-repeat;
    background-size: cover;
}
.fourth {
    color:#ccc;
    font-size: .5rem;
}
.more_join{
    background: url(../assets/img/space.jpg) no-repeat;
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

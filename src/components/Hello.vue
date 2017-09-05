<template>
    <div>
      <div class="xunyanji_top">
        <div class="logo" :style="{'background-image': 'url(' + require('../assets/img/top1.png') + ')'}">
          <img src="../assets/img/1.png" alt="">
          <img src="../assets/img/chuban.png" alt="">
        </div>
        <div class="top" :style="{'background-image': 'url(' + require('../assets/img/top2.png') + ')'}">
          <img src="../assets/img/select.png" alt="">
        </div>
        <div class="notice" :style="{'background-image': 'url(' + require('../assets/img/3-3.png') + ')'}">
            <div><img src="../assets/img/lieri.png"></div>
        </div>
        <div class="apply">
            <img src="../assets/img/4-4-1.png" alt="" style="width:50%;height:100%;display:inline-block;">
            <img src="../assets/img/4-4-2.png" alt="" style="width:50%;height:100%;display:inline-block;">
        </div>
        <div class="joinUs">
          <span></span>
          <router-link to="/about">点击报名</router-link>
          <span></span>
          <router-link to="/about">为她投票</router-link>
          <span></span>
        </div>
      </div>
      <div class="beauty" :style="{'background-image': 'url(' + require('../assets/img/5.png') + ')'}">
        <div>
          <img src="../assets/img/select.png" alt="">
        </div>
      </div>
      <div class="container_month f0 w100">
          <table>
              <tbody>
                  <tr>
                      <td class="month_show" @click=''>
                          <img src="../assets/img/First-month.png" style="width:100%;">
                          <span><img src="../assets/img/xiala2.png" alt=""></span>
                          <div class="month-dis" v-if='true'>
                              <ul>
                                  <li id="first-xyj" @click="changeMonth(0)"><a href="javascript:void(0);">第一期</a></li>
                                  <li id="second-xyj" @click="changeMonth(0)"><a href="javascript:void(0);">第二期</a></li>
                                  <li id="third-xyj" @click="changeMonth(0)"><a href="javascript:void(0);">第三期</a></li>
                              </ul>
                          </div>
                      </td>
                      <td class="" id="show-firstWeek" @click="changeWeek(0)"><img src="../assets/img/First-week.png">
                          <span class="container_going    container_current"></span>
                      </td>
                      <td class="" id="show-secondWeek" @click="changeWeek(1)"><img src="../assets/img/Second-weeks.png">
                          <span class="container_going"></span>
                      </td>
                      <td class="" id="show-thirdWeek" @click="changeWeek(2)"><img src="../assets/img/Third-weeks.png">
                          <span class="container_going"></span>
                      </td>
                      <td class="" id="show-monthWeek" @click="changeWeek(3)"><img src="../assets/img/Month.png">
                          <span class="container_going"></span>
                      </td>
                  </tr>
              </tbody>
          </table>  
      </div>
      <div class="xunyanji_container f0 pr" >
        <div class="first change_flex w100 pr">
            <div class="show_photo">
              <img src="../assets/img/logo.png" alt="" style="position:absolute;top:0;left:0;width:50%;height: initial;">
              <img :src="data.Fir.imgUrl" alt="">
            </div>
            <div class="show_rank">
                <span style="font-size:1rem;padding: 0px 8px;font-size: 1.4rem;position: absolute;top: 65%;left: 50%;color: #ffffff;letter-spacing: 0.2em;font-family: -webkit-body;">{{ data.Fir.name }} ~
                </span>
                <span style="font-size:1rem;padding: 0px 8px;font-size: 1.4rem;position: absolute;top: 80%;left: 50%;color:#ffffff;letter-spacing:  0.2em;font-family: sans-serif;">{{ data.Fir.num }} 票
                </span>
                <img src="../assets/img/13.jpg">
            </div>
        </div>
        <div class="second change_flex f0 w100 pr">
            <div class="two_rank_show change_flex w50">
                <span style="padding: 0px 4px;font-size: 0.1rem;position: absolute;top: 65%;left: 0%;color:#ffffff;font-family: serif;" >{{ data.Sec.name }}
                </span>
                <span style="padding: 0px 3px;font-size: 0.2rem;position: absolute;top: 84%;left: 0%;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;" >{{ data.Sec.num }}票
                </span>
                <span class="show_rank change_flex w50">
                    <img src="../assets/img/14.jpg">
                </span>
                <span class="show_photo change_flex w50">
                    <img :src="data.Sec.imgUrl"> 
                </span>
            </div>
            <div class="three_rank_show change_flex w50">
                <span style="padding: 0px 8px;font-size: 0.2rem;position: absolute;top: 65%;left: 50%;color: #ffffff;letter-spacing: 0.2em;font-family: inherit;">{{ data.Thi.name }}
                </span>
                <span style="font-size:1rem;padding: 0px 8px;font-size: 0.2rem;position: absolute;top: 84%;left: 50%;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;">{{ data.Thi.num }}票
                </span>
                <span class="show_rank change_flex w50">
                    <img src="../assets/img/15.jpg">
                </span>      
                <span class="show_photo change_flex w50">
                    <img :src="data.Thi.imgUrl"> 
                </span>
            </div>
        </div>
        <div class="third change_flex f0 w100 pr">
            <div class="four_rank_show change_flex w50">
                <span class="show_photo change_flex w50">
                    <img :src="data.Fou.imgUrl"> 
                </span>
                <span class="show_rank change_flex w50">
                    <img src="../assets/img/16.jpg">
                </span>
                <span style="padding: 0px 4px;font-size: 0.2rem;position: absolute;top: 65%;left: 25%;color:#ffffff;font-family: serif;">{{ data.Fou.name }}
                </span>
                <span style="padding: 0px 3px;font-size: 0.2rem;position: absolute;top: 84%;left: 25%;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;">{{ data.Fou.num }}票
                </span> 
            </div>
            <div class="five_rank_show change_flex w50">
                <span style="padding: 0px 5px;font-size: 0.2rem;position: absolute;top: 65%;left: 75%;;color: #ffffff;font-family: inherit;">{{ data.Fiv.name }}
                </span>
                <span style="font-size:1rem;padding: 0px 5px;font-size: 0.2rem;position: absolute;top: 84%;left: 75%;;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;">{{ data.Fiv.num }}票
                </span>
                <span class="show_photo change_flex w50">
                    <img :src="data.Fiv.imgUrl"> 
                </span>
                <span class="show_rank change_flex w50">
                    <img src="../assets/img/17.jpg">
                </span>      
            </div>
        </div>
        <div class="fourth change_flex f0 w100 pr">
            <div class="more_rank_show change_flex w50">
                <span class="show_rank change_flex w50">
                    <span>第六~九名</span>
                </span>
                <span class="show_photo change_flex w50">
                  <div>
                    <template> 
                      <img :src="data.imgUrl"> 
                    </template>
                  </div>
                    
                </span>
            </div>
            <div class="more_join change_flex w50">
                <span class="join w100">
                    <span style="font-size: 0.4rem; ">下一期有你吗？</span>
                </span>
            </div>
        </div>  
      </div>
      <div class="show_footer">
          <img src="../assets/img/space.jpg" alt="">
      </div>  
      <div class="xunyanji_foot f0 w100">
          <div class="plan">
              <img src="../assets/img/plan.jpg" alt="">
          </div>
          <div class="imgs">
              <img src="../assets/img/25.jpg" alt="">
          </div>
      </div> 
  </div>
  <!-- <div class="xunyanji_container f0 pr" >
      <div class="first change_flex w100 pr">
          <div class="show_photo">
            <img src="../assets/img/logo.png" alt="" style="position:absolute;top:0;left:0;width:50%;height: initial;">
            <img :src="data.Fir.imgUrl" alt="">
          </div>
          <div class="show_rank">
              <span style="font-size:1rem;padding: 0px 8px;font-size: 1.4rem;position: absolute;top: 65%;left: 50%;color: #ffffff;letter-spacing: 0.2em;font-family: -webkit-body;">{{ data.Fir.name }} ~
              </span>
              <span style="font-size:1rem;padding: 0px 8px;font-size: 1.4rem;position: absolute;top: 80%;left: 50%;color:#ffffff;letter-spacing:  0.2em;font-family: sans-serif;">{{ data.Fir.num }} 票
              </span>
              <img src="../assets/img/13.jpg">
          </div>
      </div>
      <div class="second change_flex f0 w100 pr">
          <div class="two_rank_show change_flex w50">
              <span style="padding: 0px 4px;font-size: 0.1rem;position: absolute;top: 65%;left: 0%;color:#ffffff;font-family: serif;" >{{ data.Sec.name }}
              </span>
              <span style="padding: 0px 3px;font-size: 0.2rem;position: absolute;top: 84%;left: 0%;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;" >{{ data.Sec.num }}票
              </span>
              <span class="show_rank change_flex w50">
                  <img src="../assets/img/14.jpg">
              </span>
              <span class="show_photo change_flex w50">
                  <img :src="data.Sec.imgUrl"> 
              </span>
          </div>
          <div class="three_rank_show change_flex w50">
              <span style="padding: 0px 8px;font-size: 0.2rem;position: absolute;top: 65%;left: 50%;color: #ffffff;letter-spacing: 0.2em;font-family: inherit;">{{ data.Thi.name }}
              </span>
              <span style="font-size:1rem;padding: 0px 8px;font-size: 0.2rem;position: absolute;top: 84%;left: 50%;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;">{{ data.Thi.num }}票
              </span>
              <span class="show_rank change_flex w50">
                  <img src="../assets/img/15.jpg">
              </span>      
              <span class="show_photo change_flex w50">
                  <img :src="data.Thi.imgUrl"> 
              </span>
          </div>
      </div>
      <div class="third change_flex f0 w100 pr">
          <div class="four_rank_show change_flex w50">
              <span class="show_photo change_flex w50">
                  <img :src="data.Fou.imgUrl"> 
              </span>
              <span class="show_rank change_flex w50">
                  <img src="../assets/img/16.jpg">
              </span>
              <span style="padding: 0px 4px;font-size: 0.2rem;position: absolute;top: 65%;left: 25%;color:#ffffff;font-family: serif;">{{ data.Fou.name }}
              </span>
              <span style="padding: 0px 3px;font-size: 0.2rem;position: absolute;top: 84%;left: 25%;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;">{{ data.Fou.num }}票
              </span> 
          </div>
          <div class="five_rank_show change_flex w50">
              <span style="padding: 0px 5px;font-size: 0.2rem;position: absolute;top: 65%;left: 75%;;color: #ffffff;font-family: inherit;">{{ data.Fiv.name }}
              </span>
              <span style="font-size:1rem;padding: 0px 5px;font-size: 0.2rem;position: absolute;top: 84%;left: 75%;;color:#ffffff;letter-spacing: 0.2em;font-family: cursive;">{{ data.Fiv.num }}票
              </span>
              <span class="show_photo change_flex w50">
                  <img :src="data.Fiv.imgUrl"> 
              </span>
              <span class="show_rank change_flex w50">
                  <img src="../assets/img/17.jpg">
              </span>      
          </div>
      </div>
      <div class="fourth change_flex f0 w100 pr">
          <div class="more_rank_show change_flex w50">
              <span class="show_rank change_flex w50">
                  <span>第六~九名</span>
              </span>
              <span class="show_photo change_flex w50">
                <div>
                  <template> 
                    <img :src="data.imgUrl"> 
                  </template>
                </div>
                  
              </span>
          </div>
          <div class="more_join change_flex w50">
              <span class="join w100">
                  <span style="font-size: 0.4rem; ">下一期有你吗？</span>
              </span>
          </div>
      </div>  
  </div> -->
</template>

<script>
export default {
  // name: 'hello',
  data () {
    return {
          msg:[   
                {
                    Fir:{
                      name:"倪",
                      num:213,
                      imgUrl:require("../assets/img/1-1-1.png")
                    },
                    Sec: {
                      name:'Monologue',
                      num:151,
                      imgUrl:require("../assets/img/1-1-2.jpg")
                    },
                    Thi: {
                      name:"顾敏",
                      num:67,
                      imgUrl:require("../assets/img/1-1-3.jpg")
                    },
                    Fou: {
                      name:'Candy',
                      num:10,
                      imgUrl:require("../assets/img/1-1-4.jpg")
                    },
                    Fiv: {
                      name:'Angel',
                      num:3,
                      imgUrl:require("../assets/img/1-1-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-1-6.jpg")
                },
                {
                    Fir: {
                      name:"vivian",
                      num:937,
                      imgUrl:require("../assets/img/1-2-1.jpg")
                    },
                    Sec: {
                      name:'虾虾',
                      num:596,
                      imgUrl:require("../assets/img/1-2-2.jpg")
                    },
                    Thi: {
                      name:"璀璨",
                      num:55,
                      imgUrl:require("../assets/img/1-2-3.jpg")
                    },
                    Fou: {
                      name:'小园子',
                      num:39,
                      imgUrl:require("../assets/img/1-2-4.jpg")
                    },
                    Fiv: {
                      name:'颂',
                      num:30,
                      imgUrl:require("../assets/img/1-2-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-2-6.jpg")
                },
                {
                    Fir: {
                      name:"糖糖 ",
                      num:1150,
                      imgUrl:require("../assets/img/1-3-1.jpg")
                    },
                    Sec: {
                      name:'陈天娇',
                      num:1059,
                      imgUrl:require("../assets/img/1-3-2.jpg")
                    },
                    Thi: {
                      name:"然妹",
                      num:675,
                      imgUrl:require("../assets/img/1-3-3.jpg")
                    },
                    Fou: {
                      name:'颖儿丫头',
                      num:519,
                      imgUrl:require("../assets/img/1-3-4.jpg")
                    },
                    Fiv: {
                      name:'魏迎',
                      num:101,
                      imgUrl:require("../assets/img/1-3-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-3-6.jpg")
                },
                {
                    Fir: {
                      name:"陈天娇 ",
                      num:578,
                      imgUrl:require("../assets/img/FirstMonth-1.jpg")
                    },
                    Sec: {
                      name:'糖糖',
                      num:502,
                      imgUrl:require("../assets/img/FirstMonth-2.jpg")
                    },
                    Thi: {
                      name:"顾敏",
                      num:433,
                      imgUrl:require("../assets/img/FirstMonth-3.jpg")
                    },
                    Fou: {
                      name:'monologue',
                      num:432,
                      imgUrl:require("../assets/img/FirstMonth-4.jpg")
                    },
                    Fiv: {
                      name:'虾虾',
                      num:323,
                      imgUrl:require("../assets/img/FirstMonth-5.jpg")
                    },
                    imgUrl:require("../assets/img/FirstMonth-6.jpg")
                }
           ],
           data : {},
           msg_data : [],
          whole_msg : [
            [   
                {
                    Fir:{
                      name:"倪",
                      num:213,
                      imgUrl:require("../assets/img/1-1-1.png")
                    },
                    Sec: {
                      name:'Monologue',
                      num:151,
                      imgUrl:require("../assets/img/1-1-2.jpg")
                    },
                    Thi: {
                      name:"顾敏",
                      num:67,
                      imgUrl:require("../assets/img/1-1-3.jpg")
                    },
                    Fou: {
                      name:'Candy',
                      num:10,
                      imgUrl:require("../assets/img/1-1-4.jpg")
                    },
                    Fiv: {
                      name:'Angel',
                      num:3,
                      imgUrl:require("../assets/img/1-1-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-1-6.jpg")
                },
                {
                    Fir: {
                      name:"vivian",
                      num:937,
                      imgUrl:require("../assets/img/1-2-1.jpg")
                    },
                    Sec: {
                      name:'虾虾',
                      num:596,
                      imgUrl:require("../assets/img/1-2-2.jpg")
                    },
                    Thi: {
                      name:"璀璨",
                      num:55,
                      imgUrl:require("../assets/img/1-2-3.jpg")
                    },
                    Fou: {
                      name:'小园子',
                      num:39,
                      imgUrl:require("../assets/img/1-2-4.jpg")
                    },
                    Fiv: {
                      name:'颂',
                      num:30,
                      imgUrl:require("../assets/img/1-2-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-2-6.jpg")
                },
                {
                    Fir: {
                      name:"糖糖 ",
                      num:1150,
                      imgUrl:require("../assets/img/1-3-1.jpg")
                    },
                    Sec: {
                      name:'陈天娇',
                      num:1059,
                      imgUrl:require("../assets/img/1-3-2.jpg")
                    },
                    Thi: {
                      name:"然妹",
                      num:675,
                      imgUrl:require("../assets/img/1-3-3.jpg")
                    },
                    Fou: {
                      name:'颖儿丫头',
                      num:519,
                      imgUrl:require("../assets/img/1-3-4.jpg")
                    },
                    Fiv: {
                      name:'魏迎',
                      num:101,
                      imgUrl:require("../assets/img/1-3-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-3-6.jpg")
                },
                {
                    Fir: {
                      name:"陈天娇 ",
                      num:578,
                      imgUrl:require("../assets/img/FirstMonth-1.jpg")
                    },
                    Sec: {
                      name:'糖糖',
                      num:502,
                      imgUrl:require("../assets/img/FirstMonth-2.jpg")
                    },
                    Thi: {
                      name:"顾敏",
                      num:433,
                      imgUrl:require("../assets/img/FirstMonth-3.jpg")
                    },
                    Fou: {
                      name:'monologue',
                      num:432,
                      imgUrl:require("../assets/img/FirstMonth-4.jpg")
                    },
                    Fiv: {
                      name:'虾虾',
                      num:323,
                      imgUrl:require("../assets/img/FirstMonth-5.jpg")
                    },
                    imgUrl:require("../assets/img/FirstMonth-6.jpg")
                }
           ],
           [   
                {
                    Fir:{
                      name:"倪",
                      num:213,
                      imgUrl:require("../assets/img/1-1-1.png")
                    },
                    Sec: {
                      name:'Monologue',
                      num:151,
                      imgUrl:require("../assets/img/1-1-2.jpg")
                    },
                    Thi: {
                      name:"顾敏",
                      num:67,
                      imgUrl:require("../assets/img/1-1-3.jpg")
                    },
                    Fou: {
                      name:'Candy',
                      num:10,
                      imgUrl:require("../assets/img/1-1-4.jpg")
                    },
                    Fiv: {
                      name:'Angel',
                      num:3,
                      imgUrl:require("../assets/img/1-1-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-1-6.jpg")
                },
                {
                    Fir: {
                      name:"vivian",
                      num:937,
                      imgUrl:require("../assets/img/1-2-1.jpg")
                    },
                    Sec: {
                      name:'虾虾',
                      num:596,
                      imgUrl:require("../assets/img/1-2-2.jpg")
                    },
                    Thi: {
                      name:"璀璨",
                      num:55,
                      imgUrl:require("../assets/img/1-2-3.jpg")
                    },
                    Fou: {
                      name:'小园子',
                      num:39,
                      imgUrl:require("../assets/img/1-2-4.jpg")
                    },
                    Fiv: {
                      name:'颂',
                      num:30,
                      imgUrl:require("../assets/img/1-2-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-2-6.jpg")
                },
                {
                    Fir: {
                      name:"糖糖 ",
                      num:1150,
                      imgUrl:require("../assets/img/1-3-1.jpg")
                    },
                    Sec: {
                      name:'陈天娇',
                      num:1059,
                      imgUrl:require("../assets/img/1-3-2.jpg")
                    },
                    Thi: {
                      name:"然妹",
                      num:675,
                      imgUrl:require("../assets/img/1-3-3.jpg")
                    },
                    Fou: {
                      name:'颖儿丫头',
                      num:519,
                      imgUrl:require("../assets/img/1-3-4.jpg")
                    },
                    Fiv: {
                      name:'魏迎',
                      num:101,
                      imgUrl:require("../assets/img/1-3-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-3-6.jpg")
                },
                {
                    Fir: {
                      name:"陈天娇 ",
                      num:578,
                      imgUrl:require("../assets/img/FirstMonth-1.jpg")
                    },
                    Sec: {
                      name:'糖糖',
                      num:502,
                      imgUrl:require("../assets/img/FirstMonth-2.jpg")
                    },
                    Thi: {
                      name:"顾敏",
                      num:433,
                      imgUrl:require("../assets/img/FirstMonth-3.jpg")
                    },
                    Fou: {
                      name:'monologue',
                      num:432,
                      imgUrl:require("../assets/img/FirstMonth-4.jpg")
                    },
                    Fiv: {
                      name:'虾虾',
                      num:323,
                      imgUrl:require("../assets/img/FirstMonth-5.jpg")
                    },
                    imgUrl:require("../assets/img/FirstMonth-6.jpg")
                }
           ],
           [   
                {
                    Fir:{
                      name:"倪",
                      num:213,
                      imgUrl:require("../assets/img/1-1-1.png")
                    },
                    Sec: {
                      name:'Monologue',
                      num:151,
                      imgUrl:require("../assets/img/1-1-2.jpg")
                    },
                    Thi: {
                      name:"顾敏",
                      num:67,
                      imgUrl:require("../assets/img/1-1-3.jpg")
                    },
                    Fou: {
                      name:'Candy',
                      num:10,
                      imgUrl:require("../assets/img/1-1-4.jpg")
                    },
                    Fiv: {
                      name:'Angel',
                      num:3,
                      imgUrl:require("../assets/img/1-1-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-1-6.jpg")
                },
                {
                    Fir: {
                      name:"vivian",
                      num:937,
                      imgUrl:require("../assets/img/1-2-1.jpg")
                    },
                    Sec: {
                      name:'虾虾',
                      num:596,
                      imgUrl:require("../assets/img/1-2-2.jpg")
                    },
                    Thi: {
                      name:"璀璨",
                      num:55,
                      imgUrl:require("../assets/img/1-2-3.jpg")
                    },
                    Fou: {
                      name:'小园子',
                      num:39,
                      imgUrl:require("../assets/img/1-2-4.jpg")
                    },
                    Fiv: {
                      name:'颂',
                      num:30,
                      imgUrl:require("../assets/img/1-2-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-2-6.jpg")
                },
                {
                    Fir: {
                      name:"糖糖 ",
                      num:1150,
                      imgUrl:require("../assets/img/1-3-1.jpg")
                    },
                    Sec: {
                      name:'陈天娇',
                      num:1059,
                      imgUrl:require("../assets/img/1-3-2.jpg")
                    },
                    Thi: {
                      name:"然妹",
                      num:675,
                      imgUrl:require("../assets/img/1-3-3.jpg")
                    },
                    Fou: {
                      name:'颖儿丫头',
                      num:519,
                      imgUrl:require("../assets/img/1-3-4.jpg")
                    },
                    Fiv: {
                      name:'魏迎',
                      num:101,
                      imgUrl:require("../assets/img/1-3-5.jpg")
                    },
                    imgUrl:require("../assets/img/1-3-6.jpg")
                },
                {
                    Fir: {
                      name:"陈天娇 ",
                      num:578,
                      imgUrl:require("../assets/img/FirstMonth-1.jpg")
                    },
                    Sec: {
                      name:'糖糖',
                      num:502,
                      imgUrl:require("../assets/img/FirstMonth-2.jpg")
                    },
                    Thi: {
                      name:"顾敏",
                      num:433,
                      imgUrl:require("../assets/img/FirstMonth-3.jpg")
                    },
                    Fou: {
                      name:'monologue',
                      num:432,
                      imgUrl:require("../assets/img/FirstMonth-4.jpg")
                    },
                    Fiv: {
                      name:'虾虾',
                      num:323,
                      imgUrl:require("../assets/img/FirstMonth-5.jpg")
                    },
                    imgUrl:require("../assets/img/FirstMonth-6.jpg")
                }
           ],
          ]
      }
  },
  methods : {
    changeWeek(val) {
      this.data = this.msg_data[val];
    },
    changeMonth(val) {
      this.msg_data = this.whole_msg[val];
      console.log(this.msg_data,1);
    }
  },
  created(){
    this.changeMonth(0);
    this.changeWeek(0);
  }
}
</script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pr{
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

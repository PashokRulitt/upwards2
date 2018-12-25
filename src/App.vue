<template>
  <div id="app">
    <div class="header">
      <a href="/"><div id="header__logo"><span id="upwards">Upwards!</span><span id="com">.com </span><span	id="slesh">/</span><span id="home">home</span></div></a>
      <div class="topnav " id="myTopnav">
        <a href="#">forum</a>
        <a href="#">learning</a>
        <a href="#">events</a>
        <a href="#">success story</a>
        <a href="#">dictionary</a>
        <a  href="#">team builder</a>
        <a id="last_topnav" href="/login">login</a>
        <a href="#" class="nav_button" @click="show_topnav=!show_topnav">&#9776;</a>
      </div>
    </div>
    <div v-show="show_topnav" class="midnav">
      <a href="#">forum</a>
      <a href="#">learning</a>
      <a href="#">events</a>
      <a href="#">success story</a>
      <a href="#">dictionary</a>
      <a href="#">team builder</a>
    </div>
    <router-view/>
    <footer>
      <div class="foot_wrapper_m">
        <div class="foot_first_m">
          <div class="foot_first_m_name" @mouseover="showUpwards=true; showExplore=false; showFollow=false; showSubscribe=false "><p>Upwards!</p></div>
          <div class="foot_first_m_body" v-show="showUpwards">
            <p>Website made by programmers,</p>
            <p>for programmers</p>
            <p>Explore.Study.Polish</p>
          </div>

        </div>
        <div class="explore_m">
          <div class="explore_m_name" @mouseover="showUpwards=false; showExplore=true; showFollow=false; showSubscribe=false "><p>Explore</p></div>
          <div class="explore_m_body" v-show="showExplore">
            <a href="#">Forum</a>
            <a href="#">Learning</a>
            <a href="#">Events</a>
            <a href="#">Success</a>
            <a href="#">Dictionary</a>
            <a href="#">Builder</a>
          </div>

        </div>
        <div class="follow_m">
          <div class="follow_m_name" @mouseover="showUpwards=false; showExplore=false; showFollow=true; showSubscribe=false "><p>Follow</p></div>
          <div class="follow_m_body" v-show="showFollow">
            <a href="#">Twitter</a>
            <a href="#">Telegram</a>
            <a href="#">Facebook</a>
          </div>

        </div>
        <div class="subscribe_m">
          <div class="subscribe_m_name" @mouseover="showUpwards=false; showExplore=false; showFollow=false; showSubscribe=true "><p>Subscribe </p></div>
          <div class="subscribe_m_body" v-show="showSubscribe">
            <p>Subscribe to get</p>
            <p>weekly releases</p>
            <p>on your email</p>
            <br>
            <input type="text" id="inp_m" placeholder="Enter your email:">
            <br>
            <button class="sub_m">SUBSCRIBE</button>
          </div>

        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    name: "main",
    data(){
       return{
         showUpwards:false,
         showExplore:false,
         showFollow: false,
         showSubscribe:true,
         show_topnav: false,
        }
    }
  }
</script>

<style>
  .midnav{
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    border: 1px solid black;
    border-top: 5px solid black;
    /*float: left;*/
  }
  .topnav .nav_button{
    border-bottom: none;
    text-decoration: none;
    border: none;
    background-color: #F3F3F3;
    display: none;
  }
  #last_topnav{
    background-color: indianred;
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
    margin-left: 40px;
  }
  #upwards{
    font-family:  'Comfortaa', cursive;
    font-size: 45px;
  }
  #slesh{
    font-size: 45px;
  }
  #home{
    text-transform: lowercase;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
  #com{
    text-transform: lowercase;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    outline: none;
    font-family: 'Comfortaa', cursive;
    color: black;
    font-size: 24px;
  }
  body{
    background-color: #F3F3F3;
    color: black;
  }
  .header{
    width: 100%;
    display: flex;
  }
  /*header start*/
  #header__logo{
    font-weight: bold;
    cursor: pointer;
    margin-top: 27px;
    margin-left: 38px;
  }
  /*nav{*/
  /*margin-top: 56px;*/
  /*}*/
  .topnav {
    text-align: center;
    float: right;
    margin-top: 56px;
    margin-right: 4%;
    margin-left: 5%;
  }
  .topnav a{
    font-family: 'Comfortaa', cursive;
    text-align: center;
    padding: 16px 10px;
    font-size: 14px;
    font-weight: 300;
  }
  .topnav a:hover{
    border-bottom: 3px solid #fcac45;
  }
  .topnav .icon{
    display: none;
  }
  @media screen and (max-width: 1023px){
    .foot_wrapper_m{
      margin-right: 16%;
    }
    .nav_button{
      display: block;
    }
    #header__logo{
      margin-top: 5%;
    }
    .topnav .nav_button{
      font-size: 40px;
      display: block;
    }
    #last_topnav{
      display: none;
    }
    #upwards{
      font-size: 39px;
    }
    #slesh{
      font-size: 39px;
    }
    #com{
      font-size: 30px;
    }
    #home{
      font-size: 30px;
    }
    #mobile .slogan{
      margin-left: 10%;
      font-size: 35px;
      margin-top: 5%;
    }
    .topnav a{
      display: none;
      margin-left: 0;
    }
    .topnav{
      margin-left: 30%;
      margin-top: 0;
      border: none;
    }
  }
  @media screen and  (max-width: 900px){
    #mobile .slogan{
      font-size: 30px;
      margin-left: 15%;
    }
    #upwards{
      font-size: 30px;
    }
    #slesh{
      font-size: 30px;
    }
    #com{
      font-size: 25px;
    }
    #home{
      font-size: 25px;
    }
    .topnav{
      margin-left: 35%;
    }
    #mobile .slogan{
      margin-top: 5%;
    }
  }
  @media screen and (max-width: 800px){
    .topnav{
      margin-left: 30%;
    }
    #mobile .slogan{
      margin-top: 5%;
    }
  }
  @media screen and (max-width: 750px){
    .topnav{
      margin-left: 25%;
    }
    #mobile .slogan{
      font-size: 23px;
      margin-top: 5%;
    }
  }
  @media screen and (max-width: 700px){
    .topnav{
      margin-left: 17%;
    }
  }
  @media screen and (max-width: 600px) {
    .topnav{
      margin-left: 15%;
    }
    #mobile .slogan{
      font-size: 20px;
      margin-top: 3%;
    }
  }
  @media screen and (max-width: 550px){
    .topnav{
      margin-left: 10%;
    }
  }
  @media screen and (max-width: 500px){
    .topnav{
      margin-left: 3%;
    }
    #mobile .slogan{
      font-size: 17px;
    }
  }
  @media screen and (max-width: 470px){
    #header__logo{
      margin-left: 0;
    }
    #mobile .slogan{
      font-size: 17px;
    }
  }
  @media screen and (max-width: 425px){
    .topnav .nav_button{
      font-size: 25px;
    }
    #upwards{
      font-size: 25px;
    }
    #slesh{
      font-size: 25px;
    }
    #com{
      font-size: 20px;
    }
    #home{
      font-size: 20px;
    }
    #header__logo{
      margin-left: 0;
    }
    #mobile .slogan{
      font-size: 15px;
    }
  }
  @media screen and (max-width: 370px){
    #mobile .slogan{
      font-size: 12px;
    }
  }


  @media screen and (max-width: 350px){
    .topnav{
      margin-left: 0;
    }
  }
  @media screen and (min-width: 1024px){
    .topnav a{
      margin-left: -2%;
    }
    .topnav{
      margin-left: 6%;
      margin-top: 4%;
    }
    #header__logo{
      margin-left: 0;
    }
    #desktop .slogan{
      margin-left: 20%;
    }
    #upwards{
      font-size: 33px ;
    }
  }

  @media screen and (min-width: 1100px){
    .topnav{
      margin-left: 8%;
      margin-right: 2%;
      margin-top: 5%;
    }
    #upwards{
      /*font-family:  'Comfortaa', cursive;*/
      font-size: 49px;
    }
    #slesh{
      font-size: 49px;
      margin-left: 0;
    }
    #home{
      font-size: 24px;
    }
    #com{
      font-size: 28px;
      margin-right: 0;
    }
  }
  @media screen and (min-width: 1200px){
    .topnav{
      margin-left: 10%
    }
    #upwards{
      /*font-family:  'Comfortaa', cursive;*/
      font-size: 52px;
    }
    #slesh{
      font-size: 42px;
    }
    #home{
      font-size: 26px;
    }
    #com{
      font-size: 30px;
    }
    #desktop .slogan{
      margin-left: 25%;
    }
  }
  @media screen and (min-width: 1300px) {
    #myTopnav{
      margin-left: 20%;
    }
    .slogan{
      margin-left: 25%;
    }
  }
  @media screen and (min-width: 1400px){
    #desktop .slogan{
      margin-left: 30%;
    }
  }
  @media screen and (min-width: 1500px){
    #myTopnav{
      margin-left: 31%;
    }
  }
  @media screen and (min-width: 1600px){
    #myTopnav{
      margin-left: 36%;
    }
  }
  @media screen and (min-width: 1700px){
    #myTopnav{
      margin-left: 40%;
    }
  }
  @media screen and (min-width: 1800px){
    #myTopnav{
      margin-left: 43%;
    }
  }
  @media screen and (min-width: 1900px){
    #myTopnav{
      margin-left: 46%;
    }
    #com{
      font-size: 29px;
    }
  }
  .foot_first_m{
    width: 100%;
    color: white;
    background-color:darkgray;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .explore_m{
    background-color: gray;
    height: 100%;
    width: 100%;
    color: white;
    text-align: center;

  }
  .explore_m_name{
    font-weight: 700;
    font-family: 'Comfortaa', sans-serif;
    font-size: 40px;
  }
  .foot_first_m div:nth-child(2) {
    margin-top: 50px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
  }

  .explore_m div a:nth-child(6){
    padding-bottom: 10px;
  }
  .explore_m a{
    color: white;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    display: block;
    margin-bottom: 30px;
  }
  .follow_m{
    background-color: black;
    width: 100%;
    color: white;
    text-align: center;
    height: 150%;
  }
  .follow_m a{
    color: white;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    display: block;
    margin-bottom: 30px;
  }
  .follow_m_name{
    font-weight: 700;
    font-family: 'Comfortaa', sans-serif;
    font-size: 40px;

  }
  .subscribe_m{
    color: white;
    background-color:indianred;
    width: 100%;
    text-align: center;
    height: 150%;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    font-size: 23px;
  }
  .subscribe_m_name{
    font-weight: 700;
    font-family: 'Comfortaa', sans-serif;
    font-size: 40px;
    /*margin-bottom: 10px;*/
  }
  .subscribe_m_body{
    margin-top: 40px;
  }

  .subscribe_m input{
    opacity: 0.8;
    background-color: #FFFFFF;
    text-decoration: none;
    border: none;
    border-radius: 25px;
    height: 45px;
    width: 269px;

  }
  .subscribe_m button{


    color: white;
    margin-top: 30px;
    margin-bottom: 20px;
    opacity: 0.8;
    background-color: #23699F;
    text-decoration: none;
    border: none;
    border-radius: 25px;
    height: 45px;
    width: 152px;
  }
  .foot_first_m_body{
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .foot_first_m_name{
    font-weight: 700;
    font-family: 'Comfortaa', sans-serif;
    font-size: 51px;
  }
  .foot_first_m_body p:nth-child(3){
    margin-top: 30px;
  }
  .explore_m_body{
    margin-top: 40px;
  }
  .follow_m_body{
    margin-top: 40px;
  }
  </style>

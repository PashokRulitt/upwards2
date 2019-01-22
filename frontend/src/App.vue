<template>
  <div id="app">
    <div class="header">
      <a href="/" ><div id="header__logo"><span id="upwards">Upwards!</span><span id="com">.com </span><span	id="slesh">/</span><span id="home">home</span></div></a>
      <div class="topnav " id="myTopnav">
        <a href="#">forum</a>
        <a href="#">learning</a>
        <a href="#">events</a>
        <a href="#">stories</a>
        <a href="#">dictionary</a>
        <a href="#">team</a>
        <a id="login_topnav" href="/login">login</a>
        <a id="burger_topnav" @click="show_topnav=!show_topnav">&#9776;</a>
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
  name: 'main',
  data () {
    return {
      showUpwards: false,
      showExplore: false,
      showFollow: false,
      showSubscribe: true,
      show_topnav: false
    }
  }
}
</script>
<style>
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
    height: 87px;
    width: 100%;
    display: flex;
  }

  .nav_button{
    text-decoration: none;
    border: none;
    background-color: #F3F3F3;
    display: none;
  }
  #login_topnav{
    background-color: indianred;
    color: white;
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
  }
 #login_topnav:hover{
    background-color:#fcac45 ;
    color: white;
  }
  #header__logo{
    font-weight: bold;
    cursor: pointer;
  }
  .topnav {
    float: right;
    margin-top: 56px;
    margin-right: 4%;
    margin-left: 5%;
  }
  .topnav a{
    font-family: 'Comfortaa', cursive;
    padding: 16px 10px;
    font-size: 14px;
    font-weight: 300;
  }
  .topnav a:hover{
    border-bottom: 3px solid #fcac45;
  }

  .midnav{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border: 1px solid black;
    border-top: 5px solid black;
  }
  @media screen and (min-width: 320px){
    #header__logo{
      width: 190px;
      margin-top: 27px;
      margin-left: 5%;
    }
    #upwards{
      font-family:  'Comfortaa', cursive;
      font-size: 20px;
    }
    #slesh{
      font-size: 20px;
    }
    #home{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
    }
    #com{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
    }
    .topnav{
      margin-top: 10px;
      margin-right: 2%;
    }
    .topnav a{
      display: none;
    }
    #login_topnav{
      font-size: 17px;
      display: inline-block;
    }
    #burger_topnav{
      /*border-bottom: none;*/
      display: inline-block;
      font-size: 20px;
    }
  }
  @media screen and (min-width: 375px){
    #header__logo{
      width: 230px;
      margin-top: 27px;
      margin-left: 5%;
    }

  }
  @media screen and (min-width: 425px){
    #header__logo{
      width:230px;
      margin-top: 25px;
      margin-left: 5%;
    }
    #upwards{
      font-family:  'Comfortaa', cursive;
      font-size: 23px;
    }
    #slesh{
      font-size: 23px;
    }
    #home{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
    }
    #com{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }
    .topnav{
      margin-left: 8%;
      margin-right: 2%;
      margin-top: 10px;
    }
    #login_topnav{
      font-size: 23px;
      margin-right: 10px;
    }
    #burger_topnav{
      /*border-bottom: none;*/
      font-size: 23px;
    }
  }
  @media screen and (min-width: 767px){
    #header__logo{
      width:480px;
      margin-top: 25px;
      margin-left: 5%;
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
      font-size: 28px;
    }
    #com{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 36px;
    }
    .topnav{
      width:30%;
      margin-left: 8%;
      margin-right: 2%;
      margin-top: 10px;
    }
    #login_topnav{
      font-size: 40px;
      margin-right: 14%;
    }
    #burger_topnav{
      /*border-bottom: none;*/
      font-size: 40px;
    }
  }


  @media screen and (min-width: 1023px){
   .topnav{
     width: 1000px;
     margin-left: 3%;
     margin-top: 30px;

   }
    .topnav a{
      display: inline-block;
    }
    #login_topnav{
      font-size: 20px;
      margin-left: 10px;
      margin-right: 0px;
      margin-top: 13px;
      height: 30px;
      text-align: center;
    }
    #burger_topnav{
      display: none;
    }
    #header__logo{
      width:420px;
      margin-top: 25px;
      margin-left: 5%;
    }
    #upwards{
      font-family:  'Comfortaa', cursive;
      font-size: 40px;
    }
    #slesh{
      font-size: 40px;
    }
    #home{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 25px;
    }
    #com{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 30px;
    }
  }
  @media screen and (min-width: 1440px){
    .topnav{
      width: 1000px;
      margin-left: 3%;
      margin-top: 30px;

    }
    .topnav a{
      display: inline-block;
      font-size: 20px;
    }
    #login_topnav{
      font-size: 20px;
      margin-left: 10px;
      margin-right: 0px;
      margin-top: 13px;
      height: 30px;
      text-align: center;
    }
    #burger_topnav{
      display: none;
    }
    #header__logo{
      width:700px;
      margin-top: 25px;
      margin-left: 5%;
    }
    #upwards{
      font-family:  'Comfortaa', cursive;
      font-size: 50px;
    }
    #slesh{
      font-size: 50px;
    }
    #home{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 35px;
    }
    #com{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 45px;
    }
  }
  @media screen and (min-width: 2560px){
    .topnav{
      width: 1000px;
      margin-left: 3%;
      margin-top: 30px;

    }
    .topnav a{
      display: inline-block;
      font-size: 30px;
    }
    #login_topnav{
      font-size: 40px;
      margin-left: 10px;
      margin-right: 0px;
      margin-top: 13px;
      height: 53px;
      text-align: center;
    }
    #burger_topnav{
      display: none;
    }
    #header__logo{
      width:1500px;
      margin-top: 25px;
      margin-left: 5%;
    }
    #upwards{
      font-family:  'Comfortaa', cursive;
      font-size: 70px;
    }
    #slesh{
      font-size: 70px;
    }
    #home{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 45px;
    }
    #com{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 60px;
    }
  }
  /*@media screen and (min-width: 1100px){*/
      /*.topnav{*/
        /*margin-left: 9%*/
      /*}*/
      /*#upwards{*/
        /*!*font-family:  'Comfortaa', cursive;*!*/
        /*font-size: 49px;*/
      /*}*/
      /*#slesh{*/
        /*font-size: 49px;*/
      /*}*/
      /*#home{*/
        /*font-size: 24px;*/
      /*}*/
      /*#com{*/
        /*font-size: 28px;*/
      /*}*/
    /*}*/
  /*@media screen and (min-width: 1200px){*/
      /*.topnav{*/
        /*margin-left: 14%*/
      /*}*/
      /*#upwards{*/
        /*font-size: 52px;*/
      /*}*/
      /*#slesh{*/
        /*font-size: 52px;*/
      /*}*/
      /*#home{*/
        /*font-size: 26px;*/
      /*}*/
      /*#com{*/
        /*font-size: 30px;*/
      /*}*/
  /*}*/
  /*FOOTER*/
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

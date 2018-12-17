<template>
  <div id="app">
    <div class="header">
    <div id="header__logo"><span id="upwards">Upwards!</span><span id="com">.com </span><span	id="slesh">/</span><span id="home">home</span></div>

      <div class="topnav " id="myTopnav">
        <a href="#">forum</a>
        <a href="#">learning</a>
        <a href="#">events</a>
        <a href="#">success story</a>
        <a href="#">dictionary</a>
        <a href="#">team builder</a>
        <button @click="topnav_button=!topnav_button" class="nav_button">&#9776;</button>
      </div>
    </div>
    <div v-show="topnav_button" class="midnav">
      <a href="#">forum</a>
      <a href="#">learning</a>
      <a href="#">events</a>
      <a href="#">success story</a>
      <a href="#">dictionary</a>
      <a href="#">team builder</a>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: "main",
    data(){
       return{
         topnav_button: false,
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
  .nav_button{
    text-decoration: none;
    border: none;
    background-color: #F3F3F3;
    display: none;
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
    .nav_button{
      font-size: 60px;

      display: block;
    }
    .topnav a{
      display: none;
    }
    .topnav{
      margin-left: 50%;
      /*margin-right: 0;*/
      margin-top:7px;
    }
  }

    @media screen and (min-width: 1100px){
      .topnav{
        margin-left: 9%
      }
      #upwards{
        /*font-family:  'Comfortaa', cursive;*/
        font-size: 49px;
      }
      #slesh{
        font-size: 49px;
      }
      #home{
        font-size: 24px;
      }
      #com{
        font-size: 28px;
      }
    }
    @media screen and (min-width: 1200px){
      .topnav{
        margin-left: 14%
      }
      #upwards{
        /*font-family:  'Comfortaa', cursive;*/
        font-size: 52px;
      }
      #slesh{
        font-size: 52px;
      }
      #home{
        font-size: 26px;
      }
      #com{
        font-size: 30px;
      }
  }
  /*@media screen and (min-width: 1094px){*/
    /*nav{*/
      /*margin-left: 10%*/
    /*}*/
  /*}*/
  /*@media screen and (min-width: 1066px) {*/
    /*nav {*/
      /*margin-left: 8%*/
    /*}*/
  /*}*/
  /*@media screen and (min-width: 1130px) {*/
    /*nav {*/
      /*margin-left: 12%*/
    /*}*/
  /*}*/
  /*@media screen and (max-width: 1297px) {*/
    /*.slogan {*/
      /*font-size: 40px;*/
    /*}*/
  /*}*/
  /*@media screen and (min-width: 1298px) {*/
    /*nav {*/
      /*margin-left: 15%*/
    /*}*/
  /*}*/
  /*@media screen and (min-width: 1400px) {*/
    /*nav {*/
      /*margin-left: 20%*/
    /*}*/
  /*}*/
  /*@media screen and (min-width: 1600px) {*/
    /*nav {*/
      /*margin-left: 25%*/
    /*}*/
  /*}*/
  /*@media screen and (min-width: 1700px) {*/
    /*nav {*/
      /*margin-left: 30%*/
    /*}*/
  /*}*/
  /*@media screen and (min-width: 1900px) {*/
    /*nav {*/
      /*margin-left: 35%*/
    /*}*/
  /*}*/

</style>

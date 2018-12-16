<template>
  <div id="app">
    <div class="header">
    <div id="header__logo"><span id="upwards">Upwards!</span><span id="com">.com </span><span	id="slesh">/</span><span id="home">home</span></div>
    <nav>
      <div class="topnav " id="myTopnav">
        <a href="#">forum</a>
        <a href="#">learning</a>
        <a href="#">events</a>
        <a href="#">success story</a>
        <a href="#">dictionary</a>
        <a href="#">team builder</a>
      </div>
    </nav>
    </div>
    <router-view/>
  </div>
</template>

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
  nav{

    margin-top: 56px;
    margin-left: 20%;
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
  .topnav .special{
    display: none;
  }
  @media screen and (min-width: 1023px){
    #header_logo_m{
      font-weight: bold;
      cursor: pointer;
      margin-top: 27px;
      margin-left: 38px;
    }
    /*nav{*/

    /**/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*}*/
    .topnav {
      text-align: center;
      float: right;
      margin-top: 10px;
      margin-right: 4%;
      margin-left: 21%;
    }
    .topnav_m p{
      font-size: 80px;
    }
    #upwards{
      font-family:  'Comfortaa', cursive;
      font-size: 75px;
    }
    #slesh{
      font-size: 75px;
    }
    #home{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 35px;
    }
    #com{
      text-transform: lowercase;
      font-family: 'Roboto', sans-serif;
      font-size: 35px;
    }
  }
  @media screen and (min-width: 1025px){
    nav{
      margin-left: 2%
    }
  }
  @media screen and (min-width: 1094px){
    nav{
      margin-left: 10%
    }
  }
  @media screen and (min-width: 1066px) {
    nav {
      margin-left: 8%
    }
  }
  @media screen and (min-width: 1130px) {
    nav {
      margin-left: 12%
    }
  }
  @media screen and (max-width: 1297px) {
    .slogan {
      font-size: 40px;
    }
  }
  @media screen and (min-width: 1298px) {
    nav {
      margin-left: 15%
    }
  }
  @media screen and (min-width: 1400px) {
    nav {
      margin-left: 20%
    }
  }
  @media screen and (min-width: 1600px) {
    nav {
      margin-left: 25%
    }
  }
  @media screen and (min-width: 1700px) {
    nav {
      margin-left: 30%
    }
  }
  @media screen and (min-width: 1900px) {
    nav {
      margin-left: 35%
    }
  }
  #upwards{
    font-family:  'Comfortaa', cursive;
    font-size: 51px;
  }
  #slesh{
    font-size: 51px;
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
</style>

<template>
  <div>
    <div id="desktop">
      <main>
        <div id="slogan">
          <p>Website made by <span class="programmers">programmers</span>,</p>
          <p>for <span class="programmers2" >programmers</span></p>
        </div>
        <div class="wrapper1">
          <div class="stories">
            <img height="192px" width="200px" src="../assets/success.png" alt=""><!--200x192-->
            <p>Success Stories</p>
            <p>Always wanted to be the next Steve Jobs or Larry Page? But not sure where to start? Hear real stories, how different people became those, who would change the world</p>
            <button class="learn_more">Learn more:</button>
          </div>
          <div class="community">
            <img height="192px" width="275px" src="../assets/comunity.png" alt=""><!--369x194-->
            <p>Community</p>
            <p>Got a question? We`ve got an answer! Join us on our forum, where thousands of users are ready to give you some piece of advice!</p>
            <button class="learn_more">Learn more:</button>
          </div>
          <div class="self_progress">
            <img height="192px" width="200px" src="../assets/progress.png" alt=""><!--238x194-->
            <p>Self-progress</p>
            <p>Self-improving is important. Especially when you are a programmer. So if you wanted to check your knowledge on something you can get our tests. Or just start learning something new!</p>
            <button class="learn_more">Learn more:</button>
          </div>
        </div>
        <div class="wrapper2">
          <div class="events">
            <img height="192px" width="200px" src="../assets/events.png" alt=""><!--200x192-->
            <p>Event Calendar</p>
            <p>What part of proggrammers society are you? Maybe you`re a born tester — ready for anything to find «that» nasty bug. Or you`re software engineer with logic and attention. Find out!</p>
            <button class="learn_more">Learn more:</button>
          </div>
          <div  class="team_builder">
            <img height="192px" width="310px" src="../assets/team.png" alt=""><!--313x203-->
            <p>Team Builder</p>
            <p>What part of proggrammers society are you? Maybe you`re a born tester — ready for anything to find «that» nasty bug. Or you`re software engineer with logic and attention. Find out!</p>
            <button class="learn_more">Learn more:</button>
          </div>
          <div class="dictionary">
            <img height="192px" width="200px" src="../assets/dictionary.png" alt=""><!--272x192-->
            <p>Dictionary</p>
            <p>Came across an unknown word? Still being afraid of «object-oriented» or «reference type»? Well, you`re not alone. Find that out and more in our programmer dictionary!</p>
            <button class="learn_more">Learn more:</button>
          </div>
        </div>

      </main>
      <footer>
        <div class="foot_wrapper">
          <div class="foot_first">
            <p>Upwards!</p>
            <p>Website made by programmers,</p>
            <p>for programmers</p>
            <p>Explore.Study.Polish</p>
          </div>
          <div class="explore">
            <p>Explore</p>


            <a href="#">Forum</a>
            <a href="#">Learning</a>
            <a href="#">Events</a>
            <a href="#">Success</a>
            <a href="#">Dictionary</a>
            <a href="#"><B></B>uilder</a>

          </div>
          <div class="follow">
            <p>Follow</p>
            <a href="#">Twitter</a>
            <a href="#">Telegram</a>
            <a href="#">Facebook</a>

          </div>
          <div class="subscribe">
            <p>Subscribe </p>
            <p>Subscribe to get</p>
            <p>weekly releases</p>
            <p>on your email</p>
            <br>
            <input type="text" id="inp" placeholder="Enter your email:">
            <br>
            <button class="sub">SUBSCRIBE</button>

          </div>
        </div>
      </footer>
    </div>
    <div id="mobile">
      <main>
        <div v-show="topnav_button_m" class="midnav_m">
          <a href="#">forum</a>
          <a href="#">learning</a>
          <a href="#">events</a>
          <a href="#">success story</a>
          <a href="#">dictionary</a>
          <a href="#">team builder</a>
        </div>
        <flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell" >
            <div>
            <img height="192px" width="200px" src="../assets/success.png" alt=""><!--200x192-->
            <p>Success Stories</p>
            <p>Always wanted to be the next Steve Jobs or Larry Page? But not sure where to start? Hear real stories, how different people became those, who would change the world</p>
            <button class="learn_more">Learn more:</button>
            </div>
          </div>
          <div class="carousel-cell">
            <div >
              <img height="192px" width="275px" src="../assets/comunity.png" alt=""><!--369x194-->
              <p>Community</p>
              <p>Got a question? We`ve got an answer! Join us on our forum, where thousands of users are ready to give you some piece of advice!</p>
              <button class="learn_more">Learn more:</button>
            </div>
          </div>
          <div class="carousel-cell">
            <div >
            <img height="192px" width="200px" src="../assets/progress.png" alt=""><!--238x194-->
            <p>Self-progress</p>
            <p>Self-improving is important. Especially when you are a programmer. So if you wanted to check your knowledge on something you can get our tests. Or just start learning something new!</p>
            <button class="learn_more">Learn more:</button>
          </div>
          </div>
          <div class="carousel-cell">
            <div >
            <img height="192px" width="200px" src="../assets/events.png" alt=""><!--200x192-->
            <p>Event Calendar</p>
            <p>What part of proggrammers society are you? Maybe you`re a born tester — ready for anything to find «that» nasty bug. Or you`re software engineer with logic and attention. Find out!</p>
            <button class="learn_more">Learn more:</button>
          </div>
          </div>
          <div class="carousel-cell">
            <div >
            <img height="192px" width="310px" src="../assets/team.png" alt=""><!--313x203-->
            <p>Team Builder</p>
            <p>What part of proggrammers society are you? Maybe you`re a born tester — ready for anything to find «that» nasty bug. Or you`re software engineer with logic and attention. Find out!</p>
            <button class="learn_more">Learn more:</button>
          </div>
          </div>
          <div class="carousel-cell">
            <div >
              <img height="192px" width="200px" src="../assets/dictionary.png" alt=""><!--272x192-->
              <p>Dictionary</p>
              <p>Came across an unknown word? Still being afraid of «object-oriented» or «reference type»? Well, you`re not alone. Find that out and more in our programmer dictionary!</p>
              <button class="learn_more">Learn more:</button>
            </div>
          </div>
          </flickity>
      </main>
      <footer>
        <div class="foot_wrapper_m">
          <div class="foot_first_m">
            <div class="foot_first_m_name"><p>Upwards!</p></div>
            <div class="foot_first_m_body">
              <p>Website made by programmers,</p>
              <p>for programmers</p>
              <p>Explore.Study.Polish</p>
              </div>

          </div>
          <div class="explore_m">
            <div class="explore_m_name"><p>Explore</p></div>
            <div class="explore_m_body">
              <a href="#">Forum</a>
              <a href="#">Learning</a>
              <a href="#">Events</a>
              <a href="#">Success</a>
              <a href="#">Dictionary</a>
              <a href="#">Builder</a>
            </div>

          </div>
          <div class="follow_m">
            <div class="follow_m_name"><p>Follow</p></div>
            <div class="follow_m_body">
              <a href="#">Twitter</a>
              <a href="#">Telegram</a>
              <a href="#">Facebook</a>
            </div>

          </div>
            <div class="subscribe_m">
              <div class="subscribe_m_name"><p>Subscribe </p></div>
              <div class="subscribe_m_body">
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
  </div>
</template>


<script>
  import Flickity from 'vue-flickity'

    export default {
      components :{
        Flickity
      },
        name: "main",
        data(){
          return{
            topnav_button_m: false,
            flickityOptions: {
              autoPlay:true,
              draggable:true,
              initialIndex: 6,
              prevNextButtons: true,
              pageDots: true,
              wrapAround: true
            }
          }
      }
    }
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  /*Learn More button*/
  .learn_more{
    color: white;
    border: none;
    background-color: #576574;
    border-radius: 5%;
    padding: 10px 30px;
    align-self: center;
  }

  /*MAin info blocks start*/
  .wrapper1{
    text-align: center;
    margin-top: 101px;
    margin-left: 2%;
    /*margin-right: 2%;*/
    display: flex;
  }
  .wrapper2{
    text-align: center;
    margin-top: 51px;
    /*margin-right: 2%;*/
    display: flex;
  }
  .stories{
    margin-right: 5%;
    flex-direction: column;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: 36px;
  }
  .stories p{
    padding: 38px 0px;
    align-self: center;
  }
  .stories p:nth-child(3){
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
  }
  .community{
    margin-right: 5%;
    flex-direction: column;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: 36px;
  }
  .community p{
    padding: 38px 0px;
    align-self: center;
  }
  .community p:nth-child(3){
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
  }

  .self_progress{
    /*margin-right: 1%;*/
    flex-direction: column;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: 36px;
  }
  .self_progress p{
    padding: 38px 0px;
    align-self: center;
  }
  .self_progress p:nth-child(3){
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
  }
  .events{
    margin-right: 5%;
    flex-direction: column;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: 36px;
  }
  .events p{
    padding: 38px 0px;
    align-self: center;
  }
  .events p:nth-child(3){
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
  }
  .team_builder{
    margin-right: 5%;
    flex-direction: column;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: 36px;
  }
  .team_builder p{
    padding: 38px 0px;
    align-self: center;
  }
  .team_builder p:nth-child(3){
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
  }
  .dictionary{
    /*margin-right: 3%;*/
    flex-direction: column;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: 36px;
  }
  .dictionary p{
    padding: 38px 0px;
    align-self: center;
  }
  .dictionary p:nth-child(3){
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
  }
  /*MAin info blocks end*/
  /*Website made by programmers,
  for programmers*/
  #slogan{
    font-family: 'Comfortaa', cursive;
    font-weight: 100;
    font-size: 40px;
    margin-top: 100px;
    margin-left: 30%;
  }
  .programmers{
    background-color: #7CDAC1;
  }
  .programmers2{
    background-color: #F2D083;
  }

  /*end*/
  main{
    margin-bottom: 111px;
  }
  /*footer*/
  footer{
  }

  .foot_wrapper{
    padding-bottom: 70px;
    width: 100%;
    color: white;
    background-color: black;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    display: flex;

  }
  .foot_first , .explore , .follow , .subscribe{
    margin-top: 97px;
    margin-left: 5%;
  }
  .foot_first p:nth-child(1) {
    font-weight: 700;
    font-family: 'Comfortaa', sans-serif;
    font-size: 51px;
  }
  .foot_first p:nth-child(4) {
    margin-top: 50px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  .explore p{

    margin-bottom: 35px;
  }
  .explore a{
    color: white;
    background-color: black;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    display: block;
    margin-bottom: 30px;
  }
  .explore p:nth-child(1){
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    margin-bottom: 66px;
  }
  .follow a{
    color: white;
    background-color: black;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    display: block;
    margin-bottom: 30px;
  }
  .follow{
     margin-left: 6%;
   }
  .follow p:nth-child(1) {
    margin-bottom: 66px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
  }
  .explore{
    margin-left: 5%;
  }

  .subscribe p:nth-child(1){
    margin-bottom: 66px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
  }
  .subscribe{
    text-align: left;
    margin-left: 10%;
    margin-right: 5px;
  }
  .subscribe input{
    opacity: 0.8;
    background-color: #FFFFFF;
    text-decoration: none;
    border: none;
    border-radius: 25px;
    height: 45px;
    width: 269px;

  }
  .subscribe button{
    float: right;
    color: white;
    margin-top: 30px;
    opacity: 0.8;
    background-color: #23699F;
    text-decoration: none;
    border: none;
    border-radius: 25px;
    height: 45px;
    width: 152px;
  }
  #mobile{
    display: none;
  }
  @media screen and (max-width: 1024px) {
    body{
      overflow-x: hidden;
    }
    flickity{
      width: 100%;
    }
    .foot_first_m{
      width: 100%;
      color: white;
      background-color:gainsboro;

      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .foot_first_m div:nth-child(2) {
      margin-top: 50px;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
      font-size: 26px;
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
      margin-bottom: 40px;
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
    .carousel-cell{
      background-color: #F3F3F3;
      height: 500px;
      width: 40%;
      margin: 0px 15px;
    }
    .carousel-cell div{
      margin-top: 30px;
      margin-left: 25px;
      text-align: center;
    }
    .carousel-cell div p:nth-child(2){
      font-family: 'Comfortaa', cursive;
      font-weight: bold;
      font-size: 26px;
      margin-top: 20px;
      text-align: center;
    }
    .carousel-cell div p:nth-child(3){
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 18px;
      margin-bottom: 20px ;
      margin-top: 20px;
      text-align: center;
    }
    #mobile{
      display: block;
    }
    #desktop{
      display: none;
    }

    /*nav{*/

    /**/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*}*/

    .topnav_m p{
      font-size: 80px;
    }

    .midnav_m{
      display: flex;
      flex-direction: column;
      margin-top: 20px;

      border: 1px solid black;
      border-top: 5px solid black;
      /*float: left;*/
    }
    .midnav_m a{
      margin-top: 10px;
      margin-left: 5%;
      margin-bottom: 20px;
    }

    .foot_first_m_body{
      margin-top: 40px;
      margin-bottom: 40px;
      display: none;
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
      display: none;
      margin-top: 40px;
    }
    .follow_m_body{
      margin-top: 40px;
      display: none;
    }
  }







  /*MObile*/






  /*@media screen and (max-width: 1024px){*/
  /*.topnav a{*/
  /*display: none;*/
  /*}*/
  /*.topnav a.icon{*/
  /*float:right;*/
  /*display: block;*/
  /*margin-top: -17px;*/
  /*}*/

  /*nav{*/
  /*width: 100%*/
  /*}*/
  /*.topnav.responsive{*/
  /*position: relative;*/
  /*top: 50px;*/
  /*left: -200px;*/
  /*}*/
  /*header .topnav.responsive{*/
  /*height: 340px;*/
  /*}*/
  /*.topnav .responsive a .icon{*/
  /*position: absolute;*/
  /*top: -50px;*/
  /*right: -200px;*/
  /*}*/

  /*.topnav.responsive a{*/
  /*float: none;*/
  /*display: block;*/
  /*text-align: left;*/
  /*}*/
  /*}*/

  /*.topnav_mobile{*/
  /*margin-left: 300px;*/
  /*float: right;*/
  /*}*/
  /*.midnav{*/
  /*!*display: none;*!*/
  /*}*/
</style>

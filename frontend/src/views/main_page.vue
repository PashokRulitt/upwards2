<template>
  <div>
    <div id="desktop">
      <main>
        <div class="slogan">
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
    </div>
    <div id="mobile">
      <main>
        <div class="slogan">
          <p>Website made by <span class="programmers">programmers</span>,</p>
          <p>for <span class="programmers2" >programmers</span></p>
        </div>
        <flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell" >
            <img height="192px" src="../assets/success.png" alt=""><!--200x192-->
            <p class="carousel-name">Success Stories</p>
            <p class="carousel-val">Always wanted to be the next Steve Jobs or Larry Page? But not sure where to start? Hear real stories, how different people became those, who would change the world</p>
            <button class="learn_more">Learn more:</button>
          </div>
          <div class="carousel-cell">
              <img height="192px" src="../assets/comunity.png" alt=""><!--369x194-->
              <p class="carousel-name">Community</p>
              <p class="carousel-val">Got a question? We`ve got an answer! Join us on our forum, where thousands of users are ready to give you some piece of advice!</p>
              <button class="learn_more">Learn more:</button>
          </div>
          <div class="carousel-cell">
            <img height="192px" src="../assets/progress.png" alt=""><!--238x194-->
            <p class="carousel-name">Self-progress</p>
            <p class="carousel-val">Self-improving is important. Especially when you are a programmer. So if you wanted to check your knowledge on something you can get our tests. Or just start learning something new!</p>
            <button class="learn_more">Learn more:</button>
          </div>
          <div class="carousel-cell">
            <img height="192px" src="../assets/events.png" alt=""><!--200x192-->
            <p class="carousel-name">Event Calendar</p>
            <p class="carousel-val">What part of proggrammers society are you? Maybe you`re a born tester — ready for anything to find «that» nasty bug. Or you`re software engineer with logic and attention. Find out!</p>
            <button class="learn_more">Learn more:</button>
          </div>
          <div class="carousel-cell">
            <img height="192px" src="../assets/team.png" alt=""><!--313x203-->
            <p class="carousel-name">Team Builder</p>
            <p class="carousel-val">What part of proggrammers society are you? Maybe you`re a born tester — ready for anything to find «that» nasty bug. Or you`re software engineer with logic and attention. Find out!</p>
            <button class="learn_more">Learn more:</button>
          </div>
          <div class="carousel-cell">
              <img height="192px" src="../assets/dictionary.png" alt=""><!--272x192-->
              <p class="carousel-name">Dictionary</p>
              <p class="carousel-val">Came across an unknown word? Still being afraid of «object-oriented» or «reference type»? Well, you`re not alone. Find that out and more in our programmer dictionary!</p>
              <button class="learn_more">Learn more:</button>
          </div>
          </flickity>
      </main>
    </div>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },
  name: 'main',
  data () {
    return {
      flickityOptions: {
        autoPlay: true,
        draggable: true,
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
  #mobile{
    display: none;
  }
  /*Slogan*/
  .slogan{
    font-family: 'Comfortaa', cursive;
    font-weight: 100;
    font-size: 25px;
    margin-top: 45px;
    margin-bottom: 45px;
    margin-left: 10%;
  }
  .programmers{
    background-color: #7CDAC1;
  }
  .programmers2{
    background-color: #F2D083;
  }

 /*Button*/
 .learn_more{
    color: white;
    border: none;
    background-color: #576574;
    border-radius: 5%;
    padding: 10px 30px;
    align-self: center;
  }
  /*Desktop*/
  .wrapper1{
    text-align: center;
    margin-top: 101px;
    margin-left: 2%;
    display: flex;
  }
  .wrapper2{
    text-align: center;
    margin-top: 51px;
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

  main{
    margin-bottom: 60px;
  }

  @media screen and (min-width: 320px) {
   #desktop{
     display: none;
   }
    #mobile{
      display: block;
    }
    .carousel-cell {
      font-family: Comfortaa,cursive;
      font-weight: 700;
      font-size: 20px;
      height: 400px;
      width: 300px;
      text-align: center;
      margin-left: 20px;
      margin-right: 20px;
    }
    .carousel-cell .carousel-val {
      margin: 15px 0;
      font-family: Roboto,sans-serif;
      font-weight: 300;
      font-size: 15px;
    }
    .carousel-cell img {
      text-align: center;
      width: 200px;
    }
    .slogan{
      margin-left: 15%;
    }
  }
  @media screen and (min-width: 425px) {
    #desktop{
      display: none;
    }
    #mobile{
      display: block;
    }
    .carousel-cell {
      font-family: Comfortaa,cursive;
      font-weight: 700;
      font-size: 20px;
      height: 400px;
      width: 300px;
      text-align: center;
      margin-left: 20%;
      margin-right: 20%;
    }
    .carousel-cell .carousel-val {
      margin: 15px 0;
      font-family: Roboto,sans-serif;
      font-weight: 300;
      font-size: 15px;
    }
    .carousel-cell img {
      text-align: center;
      width: 200px;
    }
    .slogan{
      margin-left: 15%;
    }
  }
  @media screen and (min-width: 767px) {
    #desktop{
      display: none;
    }
    #mobile{
      display: block;
    }
    .carousel-cell {
      font-family: Comfortaa,cursive;
      font-weight: 700;
      font-size: 20px;
      height: 400px;
      width: 300px;
      text-align: center;
      margin-left: 25%;
      margin-right: 25%;
    }
    .carousel-cell .carousel-val {
      margin: 15px 0;
      font-family: Roboto,sans-serif;
      font-weight: 300;
      font-size: 15px;
    }
    .carousel-cell img {
      text-align: center;
      width: 200px;
    }
    .slogan{
      font-size: 30px;
      margin-left: 25%;
    }
  }
  @media screen and (min-width: 1024px) {
    #desktop{
      display: block;
    }
    #mobile{
      display: none;
    }
    .slogan{
      font-size: 35px;
    }
  }
  @media screen and (min-width: 1440px) {
    #desktop{
      display: block;
    }
    #mobile{
      display: none;
    }
    .slogan{
      font-size: 45px;
    }
  }
  @media screen and (min-width: 2560px) {
    #desktop{
      display: block;
    }
    #mobile{
      display: none;
    }
    .slogan{
      font-size: 60px;
      margin-left: 35%;
    }
  }
</style>

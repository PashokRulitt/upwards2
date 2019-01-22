<template>
  <div class="wrapper">
    <h1 v-if="show_login">Log In</h1>
    <h1 v-else>Register</h1>
    <div class="username-wrapper">
      <h2>Username</h2>
      <input class="username" placeholder="Username" type="text">
    </div>
    <div v-show="!show_login" class="email-wrapper">
      <h2>Email</h2>
      <input class="email" placeholder="example@email.com" type="text">
    </div>
    <div class="password-wrapper">
      <h2>Password</h2>
      <input class="password" placeholder="********" type="password">
    </div>
    <button>Start learning now</button>
    <h3>Or log in using:</h3>
  </div>
</template>

<script>
    export default {
        name: "loginFields",
        props:{
          show_login:Boolean,

        }
    }
</script>

<style scoped>
  .wrapper{
   width: 250px;
  }
  .username-wrapper{
    margin-top: 10px;
  }
  h1{
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
  }
  h2{
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: 15px;
  }
  input{
    margin-bottom: 15px;
    width: 237px;
    height: 38px;
  }
  button{
    width: 233px;
    height: 35px;
    background-color: indianred;
    text-align: center;
    border: none;
    color: white;
    display: inline-block;
    font-size: 16px;
    border-radius: 30px;
  }
  button:hover{
    background-color:black ;
    color: indianred;
  }
  h3{
    margin-top: 20px;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    text-align: center;
  }
</style>

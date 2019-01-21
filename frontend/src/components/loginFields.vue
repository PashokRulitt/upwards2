<template>
  <div>
   <h1>Register</h1>
   <h2>Username</h2>
   <input class="username" placeholder="Username" type="text">
   <h2>Email</h2>
   <input class="email" placeholder="example@email.com" type="text">
   <h2>Password</h2>
     <input class="password" placeholder="********" type="text">
     <button>Start learning now</button>

  </div>
</template>

<script>
    export default {
        name: "loginFields"
    }
</script>

<style scoped>
  h1{
    margin-bottom: 20px;
    font-weight: bold;
  }
  h2{
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
    background-color: #0899a9;
    text-align: center;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 30px;
  }
  div{
    width: 240px;
    height: 350px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }
</style>

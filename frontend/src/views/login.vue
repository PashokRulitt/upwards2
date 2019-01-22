<template>
  <div class="login-wrapper">
    <div class="login-fields-wrapper">
      <loginFields
        class="loginFields"
        :show_login="false"></loginFields>
      <logInUsing class="logInIcons"></logInUsing>
    </div>
  </div>
</template>

<script>
  import LoginFields from "../components/loginFields";
  import logInUsing from "@/components/logInUsing";
  export default {
    name: "login",
    components: {LoginFields,logInUsing}
  }
</script>

<style scoped>
 .login-wrapper{
   height: max-content;
 }
 .login-fields-wrapper{
   margin-top: 40px;
   margin-left: 5%;

 }
 .logInIcons{
   margin-top: 20px;
  margin-left: 43px;
 }
</style>

<template>
  <div>
    <loginFields></loginFields>
    <logInUsing></logInUsing>
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

</style>

<template>
  <div>
    <div class="images-wrapper">
      <img src="http://placehold.it/40x40" alt="">
      <img src="http://placehold.it/40x40" alt="">
      <img src="http://placehold.it/40x40" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "logInUsing",
        props:{

        }
    }
</script>

<style scoped>
  .images-wrapper{
    display: flex;
    flex-direction: row;

  }
  .images-wrapper img{
    margin: 0 5px ;
    border-radius: 20px ;
  }
</style>

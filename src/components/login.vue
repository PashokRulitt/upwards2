<template>
  <div>
    <main>
  <transition name="bounse"
  enter-active-class="bounseIn"
  leave-active-class="bounceOut"
  mode="out-in">
    <h1 key="one" class="upwards" v-if="show_button">Uprards</h1>
    <h1 key="two" class="upwards" v-else>Sign up</h1>
  </transition>
      <div></div>
    </main>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            show_button:false,
          }
      }
    }
</script>

<style scoped>
main{
  margin-bottom: 40px;
}
.upwards{
  margin-left: 43%;
  font-size: 60px;
}
</style>

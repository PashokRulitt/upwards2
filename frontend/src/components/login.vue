<template>
  <div>
    <main>
  <transition name="bounse"
  enter-active-class="bounseIn"
  leave-active-class="bounceOut"
  mode="out-in">
    <h1 key="one" class="upwards" v-if="!show_button">Upwards</h1>
    <h1 key="two" class="upwards" v-else>Sign up</h1>
  </transition>
     <div class="inputs">
      <div class="first">
        <input type="text" :value="info.name.placeholder">
      </div>
  </div>
  </main>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      info: [
        {
          name: 'name',
          value: '',
          placeholder: '        Enter name',
          type: 'text',
          class: 'first',
          pattern: null
        },
        {
          name: 'username',
          value: '',
          placeholder: '         Enter username',
          type: 'text',
          class: 'first',
          pattern: /^[a-z0-9_-]{3,16}$/
        },
        {
          name: 'email',
          value: '',
          placeholder: '        Enter email',
          type: 'text',
          class: 'second',
          pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        {
          name: 'password',
          value: '',
          placeholder: '        Enter password',
          type: 'date',
          class: 'second',
          pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        },
        {
          name: 'date',
          value: '',
          placeholder: '        Enter date',
          type: 'date',
          class: 'third',
          pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        }
      ],
      show_button: false
    }
  }
}
</script>

<style scoped>
main{
  margin-bottom: 40px;
}
.upwards{
  margin-left: 39%;
  font-family:  'Comfortaa', cursive;
  margin-top: 60px;
  margin-bottom: 40px;
  font-size: 60px;
}
  .inputs {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 37%;

  }
  .inputs input{
    width: 170px;
    margin: 20px;
    height: 40px;
    border-radius: 25px;
    border: none;
    opacity: 0.5;
    background-color: darkgray;
  }

</style>

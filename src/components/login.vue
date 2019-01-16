<template>
    <main>
      <div class="main" v-for="info in info">
        <h1>{{info.name}}</h1>
        <input :type="info.type" :placeholder="info.placeholder">
      </div>
    </main>
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
          name: 'date',
          value: '',
          placeholder: '        Enter date',
          type: 'date',
          class: 'third',
          pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        },
        {
          name: 'password',
          value: '',
          placeholder: '        Enter password',
          type: 'password',
          class: 'second',
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
.main h1{
  font-family: 'Comfortaa', cursive;
  font-size: 40px;
}
/*.upwards{*/
  /*margin-left: 39%;*/
  /*font-family:  'Comfortaa', cursive;*/
  /*margin-top: 60px;*/
  /*margin-bottom: 40px;*/
  /*font-size: 60px;*/
/*}*/
  /*.inputs {*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*flex-wrap: wrap;*/
    /*margin-left: 37%;*/

  /*}*/
  /*.inputs input{*/
    /*width: 170px;*/
    /*margin: 20px;*/
    /*height: 40px;*/
    /*border-radius: 25px;*/
    /*border: none;*/
    /*opacity: 0.5;*/
    /*background-color: darkgray;*/
  /*}*/

</style>

<template>
  <div>
  <flickity ref="flickity" :options="flickityOptions">
    <div class="carousel-cell">1</div>
    <div class="carousel-cell">2</div>
    <div class="carousel-cell">3</div>
    <div class="carousel-cell">4</div>
    <div class="carousel-cell">5</div>
  </flickity>

  <!--&lt;!&ndash; if you don't want to use the buttons Flickity provides &ndash;&gt;-->
  <!--<button @click="previous()">Custom Previous Button</button>-->
  <!--<button @click="next()">Custom Next Button</button>-->
  </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },
  name: 'carusel',
  data () {
    return {
      flickityOptions: {
        initialIndex: 6,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true

      }
    }
  }
  // methods: {
  //   next() {
  //     this.$refs.flickity.next();
  //   },
  //
  //   previous() {
  //     this.$refs.flickity.previous();
  //   }
  // }
}
</script>

<style scoped>
.carousel-cell{
  background-color: blue;
  height: 500px;
  width: 40%;
}
</style>

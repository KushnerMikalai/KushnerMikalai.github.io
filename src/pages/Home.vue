<template>
  <div class="Home background__dark">
    <navbar></navbar>
    <header-slider></header-slider>
    <technologies></technologies>
    <div class="box">
      <div class="section__title">
        <div class="h3">My Works</div>
        <p>Here are listed the technology that will be identified by me in the development process</p>
      </div>
    </div>
    <section class="works__items">
      <div v-masonry transition-duration="0.3s" item-selector=".work">
        <div v-masonry-tile v-for="(w, index) in allWorks" v-if="w.indexPage" :key="w.id" class="work">
          <router-link :to="{name: 'Work', params: {id: w.id, title: w.title}}" class="work__item">
            <div class="work__box-image">
              <div class="work__icon">
                <icon name='eye'></icon>
              </div>
              <img class="work__image" :src="w.imageThumbs" alt="">
            </div>
            <div class="work__button work__button_thumb">
              <h5 class="h5 work__title work__title_thumb">{{ w.title }}</h5>
              <div class="work__line"></div>
              <div class="work__button_text">view more</div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <div class="box">
      <router-link to="/works" class="btn btn__6 btn__works">view more</router-link>
    </div>
    <section class="how">
      <div class="box">
        <div class="section__title">
          <div class="h3">How I work</div>
        </div>
      </div>
    </section>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import 'vue-awesome/icons'
  import Navbar from '../components/Navbar.vue'
  import Technologies from '../components/Technologies.vue'
  import HeaderSlider from '../components/HeaderSlider.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'index',
    components: {
      Navbar,
      Technologies,
      HeaderSlider
    },
    metaInfo () {
      return {
        title: 'Frontend Developer - Kushner Nikolai'
      }
    },
    mounted () {
      this.getAllWorks()
    },
    computed: {
      ...mapGetters([
        'allWorks'
      ])
    },
    methods: {
      ...mapActions([
        'getAllWorks'
      ])
    }
  }
</script>

<style scoped lang="stylus"></style>

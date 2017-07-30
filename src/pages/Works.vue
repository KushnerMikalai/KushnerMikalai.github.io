<template>
  <section class="works">
    <navbar></navbar>
    <div class="box">
      <div v-for="w in allWorks" class="work">
        <router-link :to="{name: 'Work', params: {id: w.id, title: w.title}}" class="work_title">{{ w.title }}</router-link>
        <span class="work_description">$ {{ w.description }}</span>
        <img class="work_image" :src="w.imageThumbs" alt="">
      </div>
    </div>
  </section>
</template>

<script>
  import navbar from '../components/Navbar.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'works',
    components: {
      navbar
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

<style scoped lang="stylus">

  .works
    font-size: 0
    padding 60px 0 0 0

  .work
    width 20%
    padding 0 15px
    margin 0 0 15px 0
    display inline-block

  .work_title
    font-size 24px

  .work_image
    width 100%

</style>

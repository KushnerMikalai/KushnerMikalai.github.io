<template>
  <section class="my-technologies background__dark">
    <div class="box">
      <div class="section__title">
        <div class="h3">My Technologies</div>
        <p>Here are listed the technology that will be identified by me in the development process</p>
      </div>
    </div>
    <div class="box">
      <div class="box__row" v-masonry transition-duration="0.3s" item-selector=".my-technologies__item">
        <div v-masonry-tile class="my-technologies__item col__md_4 col__xs_6" v-for="t in allTechnologies" :key="t.id">
          <img v-bind:src="t.icon" alt="">
          <div class="h4">{{ t.title }}</div>
          <p>{{ t.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Technologies',
    mounted () {
      this.getAllTechnologies()
    },
    computed: {
      ...mapGetters([
        'allTechnologies'
      ])
    },
    methods: {
      ...mapActions([
        'getAllTechnologies'
      ])
    }
  }
</script>

<style lang="stylus" scoped>

  .my-technologies
    padding 15px 0
    width 100%

  .my-technologies__item
    margin-bottom: 28px
    text-align: left
    img
      width: 88px
      border-bottom 2px solid #e0e0e0
      margin-bottom 14px
    .h4
      margin-bottom: 6px
      color #eee
    p
      font-size: 12px
      color: #9d9d9d

  @media screen and (max-width 580px)
    .my-technologies__item
      width: 100%
      margin-bottom: 14px

</style>

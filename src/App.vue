<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$Progress.finish()
  },
  methods: {
  },
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>

<style lang="stylus">
  @require './assets/styles/nick-grid.styl'
  @require './assets/styles/app.styl'

  .section__title
    text-align left
    margin-bottom: 28px
    max-width 500px
    .h3
      margin-bottom: 6px
      color: #eee
    p
      font-size: 12px
      color: #9d9d9d

  .fade-enter-active,
  .fade-leave-active
    transition: opacity 0.3s

  .fade-enter,
  .fade-leave-active
    opacity: 0

  .background
    background-repeat no-repeat
    background-position: center
    background-size: cover

  .header__slider
    .swiper-pagination-bullet
      width: 46px
      height: 22px
      position: relative
      background: transparent
      opacity: 0.4
      &:after
        content: ''
        background-color: rgba(207, 203, 203, 1)
        top: 0
        left: 0
        width: 100%
        height: 2px
        position: absolute
        margin: 10px 0
      &.swiper-pagination-bullet-active
        opacity: 1
        &:after
          background-color: rgba(207, 203, 203, 1)
    .swiper-button-prev,
    .swiper-button-next
      background-image: none
      background-color: #333
      width: 60px
      height: 60px
      border-radius: 50%
      opacity: 0
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)
      -webkit-tap-highlight-color: transparent
      svg
        width: 20px
        height: 20px
        color: rgba(#888888, 0.6)
        transition: color 0.3s
        position: absolute;
        top: 50%
        left: 50%
        transform translate(-45%, -50%)
    .swiper-button-prev
      svg
        transform translate(-55%, -50%)
    &:hover
      .swiper-button-prev,
      .swiper-button-next
        opacity: 0.4
        &:hover
          opacity: .6
          box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
          box-shadow: inset 0px 5px 10px 1px #000000;
        &:active
          opacity: .4
          box-shadow: none

  @media screen and (max-width 580px)
    .header__slider
      .swiper-button-prev,
      .swiper-button-next
        background none
        svg
          color #eee
          width 40px
          height: 40px
      &:hover
        .swiper-button-prev,
        .swiper-button-next
          &:hover
            box-shadow none
            opacity: 1
</style>

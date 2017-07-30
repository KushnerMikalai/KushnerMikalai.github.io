<template>
  <div class="navbar" v-bind:class="menuOpened">
    <div class='box'>
      <div class="logo">
        <router-link to='/'>
          <icon name="diamond"></icon>
        </router-link>
      </div>
      <div class="burger-container">
        <div id="burger" v-on:click="openMenu ()">
          <div class="bar topBar"></div>
          <div class="bar btmBar"></div>
        </div>
      </div>
      <div class="menu">
        <ul class="menu-list">
          <li><router-link   to="/">Home</router-link></li>
          <li><router-link to="/works">Works</router-link></li>
          <li><router-link to="/resume">Resume</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons'
  export default {
    name: 'navbar',
    data () {
      return {
        menuOpened: {
          menuOpened: false
        }
      }
    },
    methods: {
      openMenu: function () {
        if (this.menuOpened.menuOpened === true) {
          this.menuOpened.menuOpened = false
        } else {
          this.menuOpened.menuOpened = true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @require '../assets/styles/variables.styl'

  .burger-container
    display none
    position: relative
    float right
    height: 30px
    width: 20px
    cursor: pointer
    transform: rotate(0deg)
    transition: all 0.3s $cubic
    user-select: none
    -webkit-tap-highlight-color: transparent
    z-index 10
    #burger
      width: 18px;
      height: 8px;
      position: relative;
      display: block;
      margin: -4px auto 0;
      top: 50%;
      .bar
        width: 100%
        height: 1px
        display: block
        position: relative
        background: #eee
        transition: all 0.3s $cubic
        transition-delay: 0s
        &.topBar
          transform: translateY(0px) rotate(0deg)
        &.btmBar
          transform: translateY(6px) rotate(0deg)

  .navbar
    position: fixed
    width: 100%
    top: 0
    padding 6px 0
    background-color: rgba(34,34,34,0.9)
    z-index: 10
    &.menuOpened
      height: 100%
      background-color: #000
      transition: all 0.3s ease-in, background 0.5s ease-in
      transition-delay: 0.25s
      .container
        height 100%
        overflow-y scroll
      .burger-container
        transform: rotate(90deg)
        #burger
          .bar
            transition: all 0.4s $cubic
            transition-delay: 0.2s
            &.topBar
              transform: translateY(4px) rotate(45deg)
            &.btmBar
              transform: translateY(3px) rotate(-45deg)
      .menu
        li
          transform: scale(1) translateY(0px)
          opacity: 1
          transition-delay: 0.7s
  .logo
    float left
    line-height: 0
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)
    -webkit-tap-highlight-color: transparent
    &:hover
      opacity 0.65
    a
      padding 8px 0
      display block
      svg
        width 20px
        height 20px
        color #eee

  .menu
    float right
    padding: 10px 0
    box-sizing border-box

  .menu-list
    list-style none
    font-size 0
    text-align center
    li
      display: inline-block
      margin-left 14px
      a
        font-size 1rem
        color: #fff
        &.router-link-exact-active,
        &:hover
          opacity .65

@media screen and (max-width 580px)
  .logo
    position absolute
    left 50%
    transform translateX(-50%)
    z-index 10
  .burger-container
    display inline-block
    margin-bottom 20px

  .navbar
    display: block
    top: 0
    left: 0
    height: 44px
    width: 100%
    overflow: hidden
    transition: all 0.5s ease-out, background 1s ease-out
    transition-delay: 0.2s
    z-index: 3

  .menu
    display block
    float none
    padding: 0 48px 0
    position: relative
    clearfix()
    li
      display block
      border-bottom: 1px solid #333
      margin 5px 0
      transform: scale(1.15) translateY(-30px)
      opacity: 0
      transition: transform 0.5s $cubic, opacity 0.6s $cubic
      a
        display: block
        position: relative
        color: #eee
        text-decoration: none
        font-size: 22px
        line-height: 2.35
        font-weight: 200
        width: 100%
</style>

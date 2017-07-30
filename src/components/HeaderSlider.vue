<template lang="html">
  <header class="header">
    <swiper class="header__slider" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="header__slider_item" v-for="headerSlider in headerSliders" :key="headerSlider.id" v-if="headerSlider.pageIndex">
        <div class="background header__slider-background" v-bind:style="{ 'background-image': 'url(' + headerSlider.image + ')' }"></div>
        <div class="header__slider-text">
          <div class="h1">{{ headerSlider.title }}</div>
          <p>{{ headerSlider.description }}</p>
          <div class="mouse-scroll">
            <div class="mouse-scroll__item">
              <div class="mouse-scroll__pip"></div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"><icon name="angle-left"></icon></div>
      <div class="swiper-button-next" slot="button-next"><icon name="angle-right"></icon></div>
    </swiper>
  </header>
</template>

<script>
  export default {
    name: 'headerSlider',
    data () {
      return {
        headerSliders: [
          {
            title: 'Frontend Developer',
            pageIndex: true,
            description: "I'm Nickolai Kushner, an Belarusian guy living in Minks, where i work as a frontend developer",
            image: require('@/assets/images/index-slide-9.jpg')
          },
          {
            title: 'Web sites on CMS WordPress',
            pageIndex: true,
            description: 'Creation and development of sites on a turn-key basis',
            image: require('@/assets/images/index-slide-8.jpg')
          },
          {
            title: 'Using Node.js, Vue.js together with CMS WordPress',
            pageIndex: true,
            description: 'Using the newest technologies in the development that allows the site to be fast and favorable for search engines',
            image: require('@/assets/images/index-slide-10.jpg')
          }
        ],
        swiperOption: {
          loop: true,
          speed: 1000,
          autoplay: 4000,
          setWrapperSize: true,
          autoHeight: true,
          paginationClickable: true,
          pagination: '.swiper-pagination',
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          observeParents: true
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<style lang="stylus" scoped>

.header__slider_item
  height: 540px

.header__slider-background
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 100%
  z-index 1

.header__slider-text
  padding 200px 14px 0
  margin 0 auto
  text-align center
  position relative
  z-index 2
  max-width 500px
  color #eee

.mouse-scroll
  margin-top 14px

.mouse-scroll__item
	cursor: pointer
	margin-top: 10px
	border: 2px solid #eee
	-webkit-border-radius: 16px
	border-radius: 16px
	height: 37px
	width: 20px
	display: inline-block
	transition: all 0.5s

.mouse-scroll__item:hover
	transform: scale(1.2)

.mouse-scroll__item .mouse-scroll__pip
	height: 7px
	width: 2px
	margin-left: 7px
	animation-name: drop
	animation-duration: 1.3s
	animation-timing-function: linear
	animation-delay: 0
	animation-iteration-count: infinite
	animation-play-state: running
	position: relative
	border-radius: 10px
	background: #fff

@-webkit-keyframes drop {
	0% {
		top: 2px;
		opacity: 0;
	}
	30% {
		top: 10px;
		opacity: 1;
	}
	100% {
		top: 22px;
		opacity: 0;
	}
}

@keyframes drop {
	0% {
		top: 2px;
		opacity: 0;
	}
	30% {
		top: 10px;
		opacity: 1;
	}
	100% {
		top: 22px;
		opacity: 0;
	}
}

@media screen and (max-width 580px)
  .header__slider-text
    padding 110px 14px 0

  .header__slider_item
    min-height: 480px
    height auto

  .header__slider-background
    &:after
      content ""
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color rgba(0, 0, 0, 0.6)
      z-index: 2
</style>

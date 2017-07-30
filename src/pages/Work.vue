<template>
  <section class="work">
    <navbar></navbar>
    <div class="work_title">{{ work.title }}</div>
    <div class="work_description">{{ work.description }}</div>
  </section>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    mounted () {
      this.getAllWorks()
    },
    computed: {
      ...mapGetters([
        'allWorks'
      ]),
      work () {
        let id = parseInt(this.$route.params.id)
        return this.allWorks.find((w) => w.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllWorks'
      ])
    },
    metaInfo () {
      return {
        title: 'Case: ' + this.work.title
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>

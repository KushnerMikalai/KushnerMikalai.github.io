import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from '@/pages/Home'
import Works from '@/pages/Works'
import Work from '@/pages/Work'
import Contacts from '@/pages/Contacts'
import Resume from '@/pages/Resume'

Vue.use(Router)

Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid'
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/works/:title',
      component: Work,
      name: 'Work',
      props: true
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})

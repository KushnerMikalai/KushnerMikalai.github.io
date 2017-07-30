import storage from '@/api/storage'

const state = {
  all: []
}

const actions = {
  getAllWorks ({commit}) {
    storage.getWorks(works => {
      commit('recieve_works', works)
    })
  }
}

const mutations = {
  recieve_works (state, works) {
    state.all = works
  }
}

const getters = {
  allWorks (state) {
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

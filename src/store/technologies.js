import technologies from '@/api/technologie'

const state = {
  technologie: []
}

const actions = {
  getAllTechnologies ({commit}) {
    technologies.getTechnologies(technologies => {
      commit('recieve_technologies', technologies)
    })
  }
}

const mutations = {
  recieve_technologies (state, technologies) {
    state.technologie = technologies
  }
}

const getters = {
  allTechnologies (state) {
    return state.technologie
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

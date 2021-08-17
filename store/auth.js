export const state = () => ({
  token: true,
})


export const mutations = {
    SET_TOKEN(state,token){
      state.token = token
    } ,
  CLEAR_TOKEN(state){
      state.token = null
  }

}

export  const actions = {
  async LOGIN({commit, dispatch}, formData) {
    try{
      const token = await new Promise((resolve,reject) => {
        setTimeout(()=> resolve('mock-token'), 2000)
      })
      dispatch('SET_TOKEN', token)
    }catch(e){
      commit('SET_ERROR', e, {root: true})
      throw e
    }

  },
  SET_TOKEN({commit}, token){
    commit('SET_TOKEN', token)
  },
  LOGOUT({commit}){
    commit('CLEAR_TOKEN')
  },
  async CREATE_USER({commit},formData){
    try {
      console.log('create')
    }catch (e){

    }

  }


}

export const getters ={
  isAuthenticated: state => Boolean(state.token)
}

import State from './state'
import Mutations from './mutations'
import Getters from './getters'
import Actions from './actions'
import { Module } from 'vuex-smart-module'

// using default export to prevent accidential autocomplete imports elsewhere
export default new Module({
  state: State,
  getters: Getters,
  mutations: Mutations,
  actions: Actions,
})

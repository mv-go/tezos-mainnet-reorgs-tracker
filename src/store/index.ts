import Vue from 'vue'
import Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module'
import dipdupModule from './modules/dipdup'
import reorgsModule from './modules/reorgs'

Vue.use(Vuex)

// The 1st argument is root module.
// Vuex store options should be passed to the 2nd argument.
const store = createStore(
  // Root module
  new Module({
    modules: {
      dipdupModule,
      reorgsModule,
    },
  }),

  // Vuex store options
  {
    strict: process.env.NODE_ENV !== 'production',
  },
)

export const dipdupStore = dipdupModule.context(store)
export const reorgsStore = reorgsModule.context(store)

export default store

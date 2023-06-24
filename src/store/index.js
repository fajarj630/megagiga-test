import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import auth from './modules/auth'
import barang from './modules/barang'
import supplier from './modules/supplier'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    barang,
    supplier
  },
  plugins: [createPersistedState({
    key: 'mega-giga-test',
    reducer: state => ({
      barang: state.barang,
      supplier: state.supplier
    })
  })]
})

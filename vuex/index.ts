import Vuex from 'vuex'
import Brands from '~/vuex/modules/brands/index.ts'
export function createStore() {
  return new Vuex.Store({
    modules: {
      Brands,
    }
  })
}

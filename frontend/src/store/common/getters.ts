import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { CommonStateInterface } from './state'

const getters: GetterTree<CommonStateInterface, StateInterface> = {
  getScrollPosition (state) {
    return state.scrollPosition
  },
  getVisiblePage (state) {
    return state.visiblePageId
  }
}

export default getters

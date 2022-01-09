import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { CommonStateInterface } from './state'

const getters: GetterTree<CommonStateInterface, StateInterface> = {
  getScrollPosition (state) {
    return state.scrollPosition
  }
}

export default getters

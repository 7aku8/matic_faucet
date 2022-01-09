import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { CommonStateInterface } from './state'

const actions: ActionTree<CommonStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default actions

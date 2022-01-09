import { MutationTree } from 'vuex'
import { CommonStateInterface } from './state'

const mutation: MutationTree<CommonStateInterface> = {
  setScrollPosition (state: CommonStateInterface, position: number) {
    state.scrollPosition = position
  }
}

export default mutation

import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore
} from 'vuex'

import commonModule from './common'
import { CommonStateInterface } from './common/state'

export interface StateInterface {
  common: CommonStateInterface
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export default store(function () {
  return createStore<StateInterface>({
    modules: {
      common: commonModule
    },

    strict: !!process.env.DEBUGGING
  })
})

export function useStore () {
  return vuexUseStore(storeKey)
}

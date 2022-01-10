<script lang="ts" setup>
import { computed, toRefs, defineProps } from 'vue'
import { useStore } from 'src/store'
import GetStartedButton from 'components/common/GetStartedButton.vue'
import { useQuasar, scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

const props = defineProps({
  menuItems: {
    type: Array,
    required: true
  }
})

const { menuItems } = toRefs(props)

const store = useStore()
const quasar = useQuasar()

const headerHeight = 106

const lightScrolled = computed<boolean>(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  () => store.getters['common/getScrollPosition'] > quasar.screen.height / 2 - headerHeight
)

const scrolled = computed<boolean>(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  () => store.getters['common/getScrollPosition'] > quasar.screen.height - headerHeight
)

const scrollTo = ({ id }: { id: string }) => {
  const element = document.querySelector(id) as HTMLElement
  const target = getScrollTarget(element)
  const offset = element.offsetTop
  const duration = 350

  setVerticalScrollPosition(target, offset, duration)
}
</script>

<template>
  <q-header
    class="align-center justify-center row"
    :class="[scrolled ? 'nav-background' : lightScrolled ? 'nav-light-background' : 'bg-transparent']"
    style="transition: background-color 250ms 200ms ease-out;"
  >
    <div style="max-width: 1250px" class="full-width">
      <q-toolbar
        class="q-px-xl"
        :class="[scrolled ? 'q-py-lg' : 'q-py-xl']"
        style="transition: padding 250ms ease-out;"
      >
        <q-avatar square>
          <q-img src="../../assets/matic_logo.svg" style="width: 120px; max-height: 120px;"/>
        </q-avatar>
        <q-toolbar-title>
          <h1 class="text-h6 text-weight-bold text-primary">Matic Faucet</h1>
        </q-toolbar-title>

        <q-tabs align="left" class="text-accent" no-caps dense :narrow-indicator="true">
          <q-route-tab
            v-for="item in menuItems"
            :key="item.name"
            :label="item.name"

            @click="scrollTo({ id: '#how-it-works' } )"

            class="rounded-button"
          />
        </q-tabs>

        <GetStartedButton class="q-ml-xl" />
      </q-toolbar>
    </div>
  </q-header>
</template>

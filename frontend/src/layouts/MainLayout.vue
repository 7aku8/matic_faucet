<script lang="ts" setup>
import { ref } from 'vue'
import HeaderDesktop from 'components/header/HeaderDesktop.vue'
import HeaderMobile from 'components/header/HeaderMobile.vue'
import { useStore } from 'src/store'
import { MenuItem } from 'components/models'
import FooterSocial from 'components/footer/FooterSocial.vue'
import { useScrollTo } from 'app/hooks/useScrollTo'

const { scrollTo } = useScrollTo()

const linksList: MenuItem[] = [
  {
    name: 'Faucet',
    id: '#faucet',
    icon: ''
  },
  {
    name: 'How it works',
    id: '#how-it-works',
    icon: ''
  }
]

const store = useStore()
const setScrollPosition = ({ verticalPosition }: { verticalPosition: number }) => {
  store.commit('common/setScrollPosition', verticalPosition)
}

const leftDrawerOpen = ref(false)

const essentialLinks = linksList
const toggleDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderDesktop
      v-if="$q.screen.gt.sm"
      :menuItems="essentialLinks"
    />
    <HeaderMobile
      v-if="$q.screen.lt.md"
      :toggleDrawer="toggleDrawer"
    />

    <q-drawer
      v-model="leftDrawerOpen"
      :show-if-above="false"
      dark
      mini
      side="left"
    >
      <div class="q-py-xl q-px-md">
        <q-item-label>
          <q-toolbar>
            <q-avatar square>
              <q-img src="../assets/matic_logo.svg"/>
            </q-avatar>
            <q-toolbar-title>
              <h1 class="text-h6 text-weight-bold text-primary">Matic Faucet</h1>
            </q-toolbar-title>
          </q-toolbar>
        </q-item-label>

        <q-tabs
          class="q-pt-md q-px-sm justify-start"
          :switch-indicator="true"
          vertical
          no-caps
        >
          <q-route-tab
            v-for="link in essentialLinks"
            :key="link.name"
            style="justify-content: start;"
            class="q-px-md q-my-sm"

            @click="scrollTo({ id: link.id }); leftDrawerOpen = false;"
          >
            <span class="q-pl-md">{{ link.name }}</span>
          </q-route-tab>
        </q-tabs>

        <q-btn size="md" outline rounded class="q-py-sm q-px-lg q-ml-md q-mt-lg" color="primary">
          <q-icon name="las la-wallet" class="q-pr-sm" />
          <span class="text-subtitle1 text-bold">Connect wallet</span>
        </q-btn>
      </div>
    </q-drawer>

    <q-page-container>
      <q-scroll-area
        @scroll="setScrollPosition"
        style="height: 100vh; width: 100vw;"
      >
        <router-view/>

        <FooterSocial />
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>

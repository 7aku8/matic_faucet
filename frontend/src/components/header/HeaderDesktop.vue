<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'src/store'

const store = useStore()

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const scrolled = computed<boolean>(() => store.getters['common/getScrollPosition'] > 150)
</script>

<template>
  <q-header
    class="align-center justify-center row"
    :class="[scrolled ? 'nav-background' : 'bg-transparent']"
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
          <q-route-tab to="#" label="Page One" />
          <q-route-tab to="/404" label="Page Two"/>
          <q-route-tab to="/faucet" label="Page Three"/>
        </q-tabs>

        <q-btn size="md" outline rounded class="q-py-sm q-px-lg q-ml-lg" color="primary">
          <q-icon name="las la-wallet" class="q-pr-sm" />
          <span class="text-subtitle1 text-bold">Connect wallet</span>
        </q-btn>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'src/store'

const store = useStore()

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const scrolled = computed<boolean>(() => store.getters['common/getScrollPosition'] > 100)

const props = defineProps({
  toggleDrawer: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <q-header
    :class="[scrolled ? 'nav-background' : 'bg-transparent']"
    style="transition: background-color 250ms 200ms ease-out;"
  >
    <q-toolbar class="q-pl-lg q-pr-md q-py-sm">
      <q-avatar square>
        <q-img src="../../assets/matic_logo.svg" style="width: 50px; max-height: 50px;"/>
      </q-avatar>
      <q-toolbar-title>
        <h1 class="text-h6 text-weight-bold text-primary">Matic Faucet</h1>
      </q-toolbar-title>

      <q-btn
        flat
        round
        size="md"
        aria-label="Menu"
        @click="props.toggleDrawer"
      >
        <q-icon name="las la-bars" color="primary" />
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

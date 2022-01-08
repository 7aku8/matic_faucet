<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  toggleDrawer: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <q-header bordered class="bg-transparent">
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
        class="text-cyan-10"
        @click="props.toggleDrawer"
      >
          <q-icon name="las la-bars" />
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

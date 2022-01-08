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
  <q-header class="bg-transparent">
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

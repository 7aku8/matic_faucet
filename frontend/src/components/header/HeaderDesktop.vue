<script lang="ts" setup>
</script>

<template>
  <q-header bordered class="bg-transparent align-center justify-center row">
    <div style="max-width: 1250px" class="full-width">
      <q-toolbar class="q-py-lg q-px-xl">
        <q-avatar square>
          <q-img src="../../assets/matic_logo.svg" style="width: 120px; max-height: 120px;"/>
        </q-avatar>
        <q-toolbar-title>
          <h1 class="text-h6 text-weight-bold text-primary">Matic Faucet</h1>
        </q-toolbar-title>

        <q-tabs align="left" class="text-accent" no-caps :narrow-indicator="true">
          <q-route-tab to="#" label="Page One" rounded/>
          <q-route-tab to="/404" label="Page Two"/>
          <q-route-tab to="/faucet" label="Page Three"/>
        </q-tabs>

        <q-btn size="md" outline rounded class="q-py-sm q-px-lg q-ml-lg" color="primary">
          <q-icon name="las la-wallet" class="q-pr-sm" />
          Connect wallet
        </q-btn>
      </q-toolbar>
    </div>
  </q-header>
</template>

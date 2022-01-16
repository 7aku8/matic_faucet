<script lang="ts" setup>
import Main from 'components/pages/Main.vue'
import HowItWorks from 'components/pages/HowItWorks.vue'
import { useSetVisibility } from 'app/hooks/useSetVisibility'

const { setVisibility } = useSetVisibility()
</script>

<template>
  <Main v-intersection="{ handler: observer => setVisibility({ observer, id: '#faucet' }), cfg: { threshold: 0.5 }}" />
  <HowItWorks v-intersection="{ handler: observer => setVisibility({ observer, id: '#how-it-works' }), cfg: { threshold: 0.5 }}" />
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from 'vue'
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue'

const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
})

const { width, height } = toRefs(props)
</script>

<template>
  <LottieAnimation
    :path="'lottie/404_not_found.json'"
    :width="width" :height="height"
    :loop="true" :autoPlay="true"
    :speed="0.6"
  />
</template>

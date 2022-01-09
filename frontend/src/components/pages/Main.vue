<script lang="ts" setup>
import GetStartedButton from 'components/common/GetStartedButton.vue'
import BeeAnimation from 'components/animations/BeeAnimation.vue'
import { ref, watch } from 'vue'

const logoContainerWidth = ref<number>(0)

const logoContainer = ref<HTMLElement|null>(null)
watch(logoContainer, () => { if (!logoContainerWidth.value) { logoContainerWidth.value = (logoContainer.value as HTMLElement).clientWidth } })

const setLogoContainerWidth = ({ width }: { width: number }) => {
  logoContainerWidth.value = width
}

const pageHeight = () => {
  return { height: '100vh' }
}
</script>

<template>
  <q-page
    :style-fn="pageHeight"
    class="bg-secondary row items-center justify-evenly"
  >
    <div class="full-width full-height">
      <q-parallax
        :speed="0.8"
        style="height: 100vh;"
      >
        <template v-slot:media>
          <img src="../../assets/background.png" alt="Background waves" style="height: 200vh;"/>
        </template>

        <template v-slot:content>
          <div class="full-width full-height row justify-center" style="background-color: rgba(25, 25, 25, 0.92)">
            <div class="row full-height col-12" style="max-width: 1200px">
              <div class="col-xs-12 col-md-6 full-height justify-center content-center row">
                <div class="text-accent">
                  <h2 class="text-h3 text-weight-bold">A Faucet is a tool that provides a small amount of funds to start using a cryptocurrency.</h2>
                  <p class="text-subtitle1 text-weight-light">Digital asset for global payments.</p>

                  <GetStartedButton class="q-mt-lg"/>
                </div>
              </div>
              <div
                ref="logoContainer"
                class="col-xs-12 col-md-6 content-center justify-center row"
                :class="{ 'order-first': $q.screen.lt.md}"
              >
                <BeeAnimation :key="Math.floor(logoContainerWidth / 150)" :width="logoContainerWidth" :height="logoContainerWidth" />

                <q-resize-observer @resize="setLogoContainerWidth" />
              </div>
            </div>
          </div>
        </template>
      </q-parallax>
    </div>
  </q-page>
</template>

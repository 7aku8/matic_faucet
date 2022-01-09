<script lang="ts" setup>
import GetStartedButton from 'components/common/GetStartedButton.vue'
import BeeAnimation from 'components/animations/BeeAnimation.vue'
import { ref, watch } from 'vue'
import { Dimensions } from 'components/models'

const logoContainerSize = ref<Dimensions>({ height: 0, width: 0 })

const logoContainer = ref<HTMLElement|null>(null)
watch(logoContainer, () => {
  if (!logoContainerSize.value) {
    logoContainerSize.value = {
      width: (logoContainer.value as HTMLElement).clientWidth,
      height: (logoContainer.value as HTMLElement).clientHeight
    }
  }
})

const setLogoContainerSize = ({ width, height }: Dimensions) => {
  logoContainerSize.value = { width, height }
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
            <div
              class="full-height col-12"
              :class="[$q.screen.lt.md ? 'column q-pa-lg' : 'full-height row q-pa-xl']"
              style="max-width: 1200px"
            >
              <div
                class="col-xs-6 col-sm-4 col-md-6 justify-center row"
                :class="[$q.screen.lt.md ? 'content-end q-pb-xl full-width' : 'content-center']"
              >
                <div class="text-accent">
                  <h2
                    class="text-h3 text-weight-bold"
                    :class="[$q.screen.lt.md ? 'text-h5' : 'text-h3']"
                  >A Faucet is a tool that provides a small amount of funds to start using a cryptocurrency.</h2>
                  <p class="text-subtitle1 text-weight-light">Digital asset for global payments.</p>

                  <GetStartedButton class="q-mt-lg"/>
                </div>
              </div>
              <div
                ref="logoContainer"
                class="col-xs-6 col-sm-8 col-md-6 content-center justify-center row"
                :class="[$q.screen.lt.md ? 'order-first content-end full-width' : null]"
              >
                <BeeAnimation
                  :key="Math.floor($q.screen.width / 150).toString() + logoContainerSize.width.toString()"
                  :width="$q.screen.lt.md ? logoContainerSize.height - 50 : logoContainerSize.width"
                  :height="$q.screen.lt.md ? logoContainerSize.height - 50 : logoContainerSize.width"
                />

                <q-resize-observer @resize="setLogoContainerSize" />
              </div>
            </div>
          </div>
        </template>
      </q-parallax>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import GetStartedButton from 'components/common/GetStartedButton.vue'

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
                class="col-xs-12 col-md-6"
                :class="{ 'order-first': $q.screen.lt.md}"
              >
                <p class="text-h3 text-accent">obrazek</p>
              </div>
            </div>
          </div>
        </template>
      </q-parallax>
    </div>
  </q-page>
</template>

<sctipt lang="ts" setup>

</sctipt>

<template>
  <footer
    class="full-width"
  >
    <q-parallax
      :speed="0.8"
      style="height: 200px;"
    >
      <template v-slot:media>
        <img src="../../assets/background.png" alt="Background waves" style="height: 200vh;"/>
      </template>

      <template v-slot:content>
        <div
          class="full-width full-height flex justify-center"
          style="background-color: rgba(25, 25, 25, 0.9);"
        >
          <div
            class="flex full-width column text-accent"
            style="max-width: 1250px;"
          >
            <div
              class="flex full-width row"
            >
              <div
                class="col-5 width"
              >
                asfdasfasf
              </div>
              <div
                class="col-3"
              >
                asdf
              </div>
              <div
                class="col-4"
              >
                asfdasfd
              </div>
            </div>

            <q-separator dark />

            <div class="flex full-width justify-between q-my-lg">
              <div class="flex row items-center">
                <p class="text-body1 q-ma-none text-accent">© 2021 Matic Faucet</p>
                <q-btn outline rounded size="sm" no-caps class="q-ml-lg" color="primary">
                  <template v-slot:default name="default">
                    <q-icon name="las la-frog"/>
                    <p class="text-body2 q-ma-none q-pl-sm">Add Polygon Network</p>
                  </template>
                </q-btn>
              </div>
              <div class="q-gutter-md">
                <q-btn outline round color="primary" icon="lab la-linkedin-in"/>
                <q-btn outline round color="primary" icon="lab la-github"/>
                <q-btn outline round color="primary" icon="lab la-facebook-f"/>
              </div>
            </div>
          </div>
        </div>
      </template>
    </q-parallax>
  </footer>
</template>

<script lang="ts" setup>
type Link = {
  name: string;
  link: string;
}

const links: Link[] = [
  { name: 'Google', link: 'https://google.com' },
  { name: 'Facebook', link: 'https://facebook.com' },
  { name: 'Youtube', link: 'https://youtube.com' },
  { name: 'PornHub', link: 'https://pornhub.com' }
]

const resources: Link[] = [
  { name: 'Matic Faucet', link: '' },
  { name: 'GitHub', link: '' }
]
</script>

<template>
  <footer
    class="full-width"
  >
    <q-parallax
      :speed="0.8"
      style="height: 400px;"
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
              class="flex full-width row q-my-xl q-gutter-lg"
            >
              <div
                class="col-4"
              >
                <h1 class="text-h4 text-primary text-weight-thin q-my-sm">Matic faucet</h1>
              </div>
              <div
                class="col-4 column"
              >
                <h6 class="text-h6 q-my-none">Useful links</h6>
                <q-list dark dense padding>
                  <q-item
                    v-for="link in links"
                    :key="link.name"

                    clickable v-ripple
                    :href="link.link"
                    target="_blank"

                    style="display: grid; grid-template-columns: min-content 1fr;"
                  >
                    <q-item-section><q-icon name="las la-angle-right" /></q-item-section>
                    <q-item-section>{{ link.name }}</q-item-section>
                  </q-item>
                </q-list>
              </div>
              <div
                class="col-3"
              >
                <h6 class="text-h6 q-my-none">Resources</h6>
                <q-list dark dense padding>
                  <q-item
                    v-for="resource in resources"
                    :key="resource.name"

                    clickable v-ripple
                    :href="resource.link"
                    target="_blank"

                    style="display: grid; grid-template-columns: min-content 1fr;"
                  >
                    <q-item-section><q-icon name="las la-angle-right" /></q-item-section>
                    <q-item-section>{{ resource.name }}</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>

            <q-separator dark />

            <div class="flex full-width justify-between q-my-lg">
              <div class="flex row items-center">
                <p class="text-body1 q-ma-none text-accent">© 2022 Matic Faucet</p>
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

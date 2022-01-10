<script lang="ts" setup>
const pageHeight = () => {
  return { height: '100vh' }
}
</script>

<template>
  <q-page
    :style-fn="pageHeight"
    class="bg-accent row items-center justify-evenly"
  >
    <div
      class="full-height col-12"
      :class="[$q.screen.lt.md ? 'column q-pa-lg' : 'full-height row q-pa-xl']"
      style="max-width: 1200px"
    >
      <div class="col-md-6 row content-center justify-center q-pr-xl">
        <q-img src="~assets/how_does_it_work.svg" />
      </div>
      <div class="col-md-6 row content-center justify-center q-pl-xl">
        <div>
          <h2 class="text-h4 text-secondary text-weight-bold">
            How does the faucet work?
          </h2>
          <p class="text-subtitle1 text-weight-light">
            A crypto faucet is an app or a website that distributes small amounts of cryptocurrencies as a reward for completing easy tasks.
          </p>

          <q-list separator>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="las la-check" />
              </q-item-section>

              <q-item-section>High quality code.</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="las la-check" />
              </q-item-section>

              <q-item-section>HmmCoin is a store of value.</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="las la-check" />
              </q-item-section>

              <q-item-section>You can request 1 HmmCoin for free via website per 1 unique address daily.</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="las la-check" />
              </q-item-section>

              <q-item-section>You can store these coins on all major wallets that support ERC-20 standard.</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="las la-check" />
              </q-item-section>

              <q-item-section>HMC Wallet will be available for Android and iOS.</q-item-section>
            </q-item>
          </q-list>

          <p class="text-subtitle2 q-pt-lg">
            Developers around the project work hard to create outstanding experience for our community! All coins in our network are free to get, you can request it on this website! Download HMC Wallet and get HmmCoins for free!
          </p>

          <div class="row q-pt-md">
            <q-btn size="lg" outline class="col-12 q-px-lg" color="primary" align="between">
              <span class="text-body1 text-weight-medium">Create wallet</span>
              <q-icon name="las la-arrow-right" size="sm" class="text-weight-light" />
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

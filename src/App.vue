<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="text-h4 col-12 text-center">
        Tezos mainnet reorgs tracker
      </div>
    </v-app-bar>

    <v-main class="tz-main align-self-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
})
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles.sass'
.tz-main
  max-width: map-get($grid-breakpoints, 'md') !important
</style>

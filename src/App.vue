<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="text-h5 col-12 text-center text-truncate">
        Tezos mainnet reorgs tracker
      </div>
    </v-app-bar>

    <v-main class="align-self-center">
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

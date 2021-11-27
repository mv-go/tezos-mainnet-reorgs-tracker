<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <ConnectionWidget />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <ChartWidget />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ConnectionWidget from '@/components/ConnectionWidget/index.vue'
import ChartWidget from '@/components/ChartWidget/index.vue'

@Component({
  components: {
    ConnectionWidget,
    ChartWidget,
  },
})
export default class Home extends Vue {
}
</script>

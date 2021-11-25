<template>
  <div class="d-flex flex-wrap align-start pa-4">
    <ConnectionWidget class="col-12 col-sm-6 col-md-4 col-lg-3" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ConnectionWidget from '@/components/ConnectionWidget/index.vue'

@Component({
  components: {
    ConnectionWidget,
  },
})
export default class Home extends Vue {
}
</script>

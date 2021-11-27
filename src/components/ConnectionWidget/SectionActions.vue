<template>
  <v-card-actions class="pa-4">
    <v-btn
      depressed
      @click="copyHash"
    >
      {{ $t('connection.actions.copyHash') }}
    </v-btn>
    <v-btn
      v-if="showResync"
      depressed
      :loading="isLoading"
      color="primary"
      @click="resync"
    >
      {{ $t('connection.actions.resync') }}
    </v-btn>
  </v-card-actions>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import copy from 'copy-to-clipboard'

@Component
export default class SectionActions extends Vue {
  @Prop({
    type: String,
    required: true,
  }) readonly hash!: string

  @Prop({
    type: Boolean,
    required: true,
  }) readonly showResync!: boolean

  private isLoading = false

  private copyHash (): void {
    copy(this.hash)
  }

  private resync (): void {
    this.isLoading = true
    console.error('RESYNC NOT IMPLEMENTED')
    this.isLoading = false
  }
}
</script>

<template>
  <div>
    <v-card-title class="text-capitalize">
      {{ status.label }}
      <v-badge
        inline
        :color="status.color"
        class="pl-2"
      />
    </v-card-title>
    <v-card-subtitle>
      {{ status.caption }}
    </v-card-subtitle>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

type StatusProps = {
  label: string;
  color: string;
  caption: string;
}

@Component
export default class SectionStatus
  extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  }) readonly synced!: boolean

  get syncedProps (): StatusProps {
    return {
      label: this.$t('connection.status.synced.label').toString(),
      color: 'green',
      caption: this.$t('connection.status.synced.caption').toString(),
    }
  }

  get notSyncedProps (): StatusProps {
    return {
      label: this.$t('connection.status.notSynced.label').toString(),
      color: 'red',
      caption: this.$t('connection.status.notSynced.caption').toString(),
    }
  }

  get status (): StatusProps {
    return this.synced ? this.syncedProps : this.notSyncedProps
  }
}
</script>

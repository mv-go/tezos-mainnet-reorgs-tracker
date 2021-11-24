<template>
  <v-card outlined>
    <div class="text-overline px-4">
      Connection
    </div>
    <SectionStatus :synced="isSynced" />
    <SectionHeadBlock
      :date="headDate"
      :level="headBlock.level"
    />
    <SectionActions
      :hash="headBlock.hash"
      :show-resync="showRecyncBtn"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { dateFormatter } from '@/utils/dateUtils'
import SectionActions from './SectionActions.vue'
import SectionStatus from './SectionStatus.vue'
import SectionHeadBlock from './SectionHeadBlock.vue'

type HeadBlock = {
  timestamp: string;
  level: number;
  hash: string;
}

@Component({
  components: {
    SectionActions,
    SectionStatus,
    SectionHeadBlock,
  },
})
export default class ConnectionWidget
  extends Vue {
  private isSynced = false
  private updaterInterval = 0
  private readonly BLOCK_TIME = 1000 * 60 * 60

  get showRecyncBtn (): boolean {
    return !this.isSynced
  }

  get headBlock (): HeadBlock {
    return {
      timestamp: '2021-11-24T13:40:02+00:00',
      level: 1890636,
      hash: 'BLWEWJLhSkwFNCSGxuSKrgTAhfngiQ2LQ3sfT2XfLMke2kHF7Kb',
    }
  }

  get headDate (): Date {
    return new Date(this.headBlock.timestamp)
  }

  get formattedHeadDate (): string {
    return dateFormatter.format(this.headDate)
  }

  private created (): void {
    this.startUpdater()
  }

  private beforeDestroyed (): void {
    this.stopUpdater()
  }

  private startUpdater (): void {
    this.updateSyncStatus()
    this.updaterInterval = setInterval(
      () => this.updateSyncStatus(),
      1000,
    )
  }

  private stopUpdater (): void {
    clearInterval(this.updaterInterval)
  }

  private updateSyncStatus (): void {
    const n = Date.now()
    const h = this.headDate.getTime()
    this.isSynced = n - h <= 2 * this.BLOCK_TIME
  }
}
</script>

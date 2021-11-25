<template>
  <v-card outlined>
    <div class="text-overline px-4">
      Connection
    </div>
    <SectionStatus :synced="isSynced" />

    <v-skeleton-loader
      v-if="!headBlock || !reorgsCount"
      type="list-item-three-line"
    />
    <SectionHeadBlock
      v-else
      :date="headDate"
      :level="headBlock.level"
      :reorgs-count="reorgsCount"
    />

    <v-skeleton-loader
      v-if="!headBlock"
      type="button"
      class="px-4"
    />
    <SectionActions
      v-else
      :hash="headBlock.hash"
      :show-resync="showRecyncBtn"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import SectionActions from './SectionActions.vue'
import SectionStatus from './SectionStatus.vue'
import SectionHeadBlock from './SectionHeadBlock.vue'
import { dipdupStore, reorgsStore } from '@/store'
import { DipdupHead } from '@/graphql/subscriptions/dipdupHead'
import { subscriptions } from '@/graphql'
import { ReorgsCountLatest } from '@/store/modules/reorgs/types'

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

  get headBlock (): DipdupHead | null {
    return dipdupStore.state.head
  }

  get headDate (): Date {
    const b = this.headBlock
    if (!b) throw new Error('Tried accessing head date on non-existing block')
    return new Date(b.timestamp)
  }

  get reorgsCount (): ReorgsCountLatest | null {
    const r = reorgsStore.state.countLatest

    // TODO: refactor to using skeletons inside SectionHeadBlock component
    // make sure all reorgs are loaded
    return Object.keys(r).some(k => k === null) ? null : r
  }

  private created (): void {
    this.startUpdater()
    subscriptions.dipdupHead.init()
    subscriptions.reorgsCountLatest.init()
  }

  private beforeDestroyed (): void {
    this.stopUpdater()
  }

  /**
   * This is required to immediately react on the first received head.
   * Not so necessary to force update on every new block afterwards.
   */
  @Watch('headBlock')
  onHeadBlockChanged (
    n: ConnectionWidget['headBlock'],
    o: ConnectionWidget['headBlock'],
  ): void {
    if (!!n && !o) this.updateSyncStatus()
  }

  private startUpdater (): void {
    this.updateSyncStatus()
    this.updaterInterval = window.setInterval(
      () => this.updateSyncStatus(),
      1000,
    )
  }

  private stopUpdater (): void {
    clearInterval(this.updaterInterval)
  }

  private updateSyncStatus (): void {
    if (!this.headBlock) return
    const n = Date.now()
    const h = this.headDate.getTime()
    this.isSynced = n - h <= 2 * this.BLOCK_TIME
  }
}
</script>

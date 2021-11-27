<template>
  <v-card outlined>
    <div class="text-overline px-4">
      {{ this.$t('chart.title') }}
    </div>
    <SectionControls v-model="timeframe" />
    <div
      ref="chart"
      class="pa-4"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Ref, Vue, Watch } from 'vue-property-decorator'
import { ChartData, ChartRenderer } from './ChartRenderer'
import { ReorgsTimeframe } from '@/store/modules/reorgs/types'
import { reorgsStatsCount } from '@/graphql/subscriptions/reorgsStatsCount'
import { reorgsStore } from '@/store'
import SectionControls from './SectionControls.vue'

const DEFAULT_TIMEFRAME: ReorgsTimeframe = 'w'
@Component({
  components: {
    SectionControls,
  },
})
export default class ChartWidget extends Vue {
  @Ref('chart') readonly chart!: HTMLDivElement | undefined

  private renderer: ChartRenderer | null = null
  private timeframe: ReorgsTimeframe = DEFAULT_TIMEFRAME

  get preparedData (): ChartData {
    let data: Record<string, number>
    const { h, d, w } = reorgsStore.state.stats

    if (this.timeframe === 'h') data = h
    else if (this.timeframe === 'd') data = d
    else if (this.timeframe === 'w') data = w
    else throw new Error('Unexpected selected timeframe')

    return this.prepareDataForChart(data)
  }

  created (): void {
    reorgsStatsCount.init()
  }

  mounted (): void {
    this.renderChart()
  }

  @Watch('preparedData')
  onPreparedDataUpdated (): void {
    this.updateChart()
  }

  private prepareDataForChart (d: Record<string, number>): ChartData {
    return Object.entries(d).map(e => ({ date: e[0], value: e[1] }))
  }

  private updateChart (): void {
    this.renderer
      ? this.renderer.updateData(this.preparedData, this.timeframe)
      : this.renderChart()
  }

  private renderChart (): void {
    this.createRenderer()
    if (!this.renderer) {
      throw new Error('Tried rendering chart with non-existing renderer')
    }

    this.renderer.render()
  }

  private createRenderer (): void {
    if (this.renderer) return

    if (!this.chart) {
      throw new Error('Tried creating renderer on a non-existing DOM element')
    }

    this.renderer = new ChartRenderer({
      rootNode: this.chart,
      timeframe: this.timeframe,
      data: this.preparedData,
    })
  }
}
</script>

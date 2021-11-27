<template>
  <v-card outlined>
    <div class="text-overline px-4">
      Incidents stats
    </div>
    <v-btn-toggle
      :value="timeframeIndex"
      dense
      borderless
      mandatory
      active-class="primary white--text"
      class="px-4 pt-4"
      @change="onTimeframe"
    >
      <v-btn
        v-for="o in timeframeOptions"
        :key="o.key"
      >
        {{ o.title }}
      </v-btn>
    </v-btn-toggle>
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

type TimeframeOption = {
  title: string;
  key: ReorgsTimeframe;
}

@Component
export default class ChartWidget extends Vue {
  @Ref('chart') readonly chart!: HTMLDivElement | undefined

  private renderer: ChartRenderer | null = null
  private timeframeIndex = 2 // week

  get preparedData (): ChartData {
    let data: Record<string, number>
    const { h, d, w } = reorgsStore.state.stats

    if (this.selectedTimeframe === 'h') data = h
    else if (this.selectedTimeframe === 'd') data = d
    else if (this.selectedTimeframe === 'w') data = w
    else throw new Error('Unexpected selected timeframe')

    return this.prepareDataForChart(data)
  }

  get selectedTimeframe (): ReorgsTimeframe {
    return this.timeframeOptions[this.timeframeIndex].key
  }

  get timeframeOptions (): TimeframeOption[] {
    return [
      {
        key: 'h',
        title: 'Hour',
      },
      {
        key: 'd',
        title: 'Day',
      },
      {
        key: 'w',
        title: 'Week',
      },
    ]
  }

  created (): void {
    reorgsStatsCount.init()
  }

  mounted (): void {
    this.renderChart()
  }

  @Watch('preparedData')
  onPreparedDataUpdated (): void {
    this.onTimeframe(this.timeframeIndex)
  }

  private prepareDataForChart (d: Record<string, number>): ChartData {
    return Object.entries(d).map(e => ({ date: e[0], value: e[1] }))
  }

  private onTimeframe (i: number): void {
    this.timeframeIndex = i

    this.updateChart()
  }

  private updateChart (): void {
    this.renderer
      ? this.renderer.updateData(this.preparedData, this.selectedTimeframe)
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
      timeframe: this.selectedTimeframe,
      data: this.preparedData,
    })
  }
}
</script>

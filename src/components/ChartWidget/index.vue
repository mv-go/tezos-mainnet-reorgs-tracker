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
import { Component, Ref, Vue } from 'vue-property-decorator'
import { day, hour, week } from './data'
import { ChartData, ChartRenderer } from './ChartRenderer'
import { ReorgsTimeframe } from '@/store/modules/reorgs/types'

type TimeframeOption = {
  title: string;
  key: ReorgsTimeframe;
}

// eslint-disable-next-line camelcase
type RawData = Array<{ bucket: string; num_accidents: number; }>

@Component
export default class ConnectionWidget extends Vue {
  @Ref('chart') readonly chart!: HTMLDivElement | undefined

  private renderer: ChartRenderer | null = null
  private timeframeIndex = 1 // day

  get preparedData (): ChartData {
    let d: RawData
    if (this.selectedTimeframe === 'h') d = hour
    else if (this.selectedTimeframe === 'd') d = day
    else if (this.selectedTimeframe === 'w') d = week
    else throw new Error('Unexpected selected timefram')

    return this.prepareDataForChart(d)
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

  mounted (): void {
    this.renderChart()
  }

  private prepareDataForChart (d: RawData): ChartData {
    return d.map(e => ({ date: e.bucket, value: e.num_accidents }))
  }

  private onTimeframe (i: number): void {
    this.timeframeIndex = i

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

    this.renderer = new ChartRenderer(
      this.preparedData,
      {
        rootNode: this.chart,
        width: 400,
        height: 400,
        timeframe: this.selectedTimeframe,
      },
    )
  }
}
</script>

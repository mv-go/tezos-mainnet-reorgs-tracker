<template>
  <v-card outlined>
    <div class="text-overline px-4">
      Incidents stats
    </div>
    <div
      ref="chart"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { datum } from './data'
import { ChartData, ChartRenderer } from './ChartRenderer'

@Component
export default class ConnectionWidget extends Vue {
  @Ref('chart') readonly chart!: HTMLDivElement | undefined

  private renderer: ChartRenderer | null = null

  get preparedDatum (): ChartData {
    return datum.map(e => ({ date: e.bucket, value: e.num_accidents }))
  }

  mounted (): void {
    this.renderChart()
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
      this.preparedDatum,
      {
        rootNode: this.chart,
        width: 400,
        height: 400,
      },
    )
  }
}
</script>

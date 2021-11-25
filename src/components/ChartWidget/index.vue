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
import * as d3 from 'd3'

@Component
export default class ConnectionWidget extends Vue {
  @Ref('chart') readonly chart!: HTMLDivElement

  // eslint-disable-next-line camelcase
  get datum (): Array<{ bucket: string; num_accidents: number; }> {
    return datum
  }

  mounted (): void {
    this.draw()
  }

  draw (): void {
    const height = 400
    const width = 400
    const marginTop = 20
    const marginRight = 0
    const marginBottom = 50
    const marginLeft = 40
    const xPadding = 0.1
    const yMax = Math.max(...this.datum.map(e => e.num_accidents))
    const yDomain = [0, yMax]
    const yRange = [height - marginBottom, marginTop]
    const xDomain = this.datum.map(e => e.bucket)
    const xRange = [width - marginRight, marginLeft]

    const xScale = d3
      .scaleBand()
      .domain(xDomain)
      .range(xRange)
      .padding(xPadding)

    const yScale = d3
      .scaleLinear()
      .domain(yDomain)
      .range(yRange)

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(d3.timeDay.every(1))
      .tickFormat(t => d3.timeFormat('%d %b')(new Date(t)))
      .tickSizeOuter(0)

    const yAxis = d3
      .axisLeft(yScale)
      .ticks(yMax)

    const svg = d3
      .select(this.chart)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `${[0, 0, width, height]}`)
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .attr('class', 'primary--text')

    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(yAxis)
      .call(g => g.select('.domain').remove())

    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(xAxis)
      .selectAll('text')
      .attr('transform', 'rotate(-90)')
      .attr('dx', '-2.5em')
      .attr('dy', '-0.6em')

    svg
      .append('g')
      .attr('fill', 'currentColor')
      .attr('class', 'primary--text')
      .selectAll('rect')
      .data(this.datum)
      .join('rect')
      // TODO: figure out how to make d3 type this without ugly null bodge
      .attr('x', i => xScale(i.bucket) ?? null)
      .attr('y', i => yScale(i.num_accidents))
      .attr('height', i => yScale(0) - yScale(i.num_accidents))
      .attr('width', xScale.bandwidth())
  }
}
</script>

import { ReorgsTimeframe } from '@/store/modules/reorgs/types'
import { Axis, axisBottom, axisLeft, create, NumberValue, ScaleBand, scaleBand, ScaleLinear, scaleLinear, select, timeDay, timeFormat, timeHour, TimeInterval, timeWeek } from 'd3'

export type ChartData = {
  date: string;
  value: number;
}[]

type ChartParams = {
  rootNode: HTMLElement;
  timeframe: ReorgsTimeframe;
  data: ChartData;
}

type XAxisTicksParams = {
  ticks: TimeInterval | null;
  format: string;
}

export class ChartRenderer {
  private static readonly height = 400
  private static readonly width = 400
  private static readonly marginTop = 10
  private static readonly marginRight = 0
  private static readonly marginBottom = 45
  private static readonly marginLeft = 25
  private static readonly xPadding = 0.1
  private static readonly axisStyling = {
    text: 'grey--text text--darken-2',
    lines: 'grey--text text--lighten-2',
  }

  private static readonly yRange = [
    ChartRenderer.height - ChartRenderer.marginBottom,
    ChartRenderer.marginTop,
  ]

  private static readonly xRange = [
    ChartRenderer.width - ChartRenderer.marginRight,
    ChartRenderer.marginLeft,
  ]

  private readonly rootNode: HTMLElement
  private timeframe: ReorgsTimeframe
  private data: ChartData

  constructor (params: ChartParams) {
    this.data = params.data
    this.timeframe = params.timeframe
    this.rootNode = params.rootNode
  }

  public updateData (data: ChartData, timeframe: ReorgsTimeframe): void {
    this.data = data
    this.timeframe = timeframe
    this.render()
  }

  public render (): void {
    const svg = this.svg

    svg.append(() => this.yAxisGroup.node())
    svg.append(() => this.xAxisGroup.node())
    svg.append(() => this.barsGroup.node())

    // remove outdated
    select(this.rootNode)
      .selectAll('svg')
      .remove()

    select(this.rootNode)
      .append(() => svg.node())
  }

  private get yDomain (): [number, number] {
    return [0, this.yMax]
  }

  private get yMax (): number {
    return Math.max(...this.data.map(e => e.value))
  }

  private get xDomain (): string[] {
    return this.data.map(e => e.date)
  }

  private get xScale (): ScaleBand<string> {
    return scaleBand()
      .domain(this.xDomain)
      .range(ChartRenderer.xRange)
      .padding(ChartRenderer.xPadding)
  }

  private get yScale (): ScaleLinear<number, number> {
    return scaleLinear()
      .domain(this.yDomain)
      .range(ChartRenderer.yRange)
  }

  private get xAxis (): Axis<string> {
    const { ticks, format } = this.xAxisTicksParams
    return axisBottom(this.xScale)
      .ticks(ticks)
      .tickFormat(t => timeFormat(format)(new Date(t)))
      .tickSizeOuter(0)
  }

  private get xAxisTicksParams (): XAxisTicksParams {
    let ticks, format
    if (this.timeframe === 'h') {
      ticks = timeHour.every(1)
      format = '%H:%M'
    } else if (this.timeframe === 'd') {
      ticks = timeDay.every(1)
      format = '%d %b'
    } else if (this.timeframe === 'w') {
      ticks = timeWeek.every(1)
      format = '%d %b'
    } else {
      throw new Error('Unexpected timeframe.')
    }

    return { ticks, format }
  }

  private get yAxis (): Axis<NumberValue> {
    return axisLeft(this.yScale)
      .ticks(this.yMax)
  }

  private get svg () {
    return create('svg')
      .attr('viewBox', `${[0, 0, ChartRenderer.width, ChartRenderer.height]}`)
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
  }

  private get yAxisGroup () {
    const g = this.createGroup()
      .attr('transform', `translate(${ChartRenderer.marginLeft},0)`)

    g
      .call(this.yAxis)
      .call(g => g.select('.domain').remove())
      .attr('class', ChartRenderer.axisStyling.lines)
      .selectAll('text')
      .attr('class', ChartRenderer.axisStyling.text)

    return g
  }

  private get xAxisGroup () {
    const g = this.createGroup()
      .attr(
        'transform',
        `translate(0,${ChartRenderer.height - ChartRenderer.marginBottom})`,
      )
      .attr('class', ChartRenderer.axisStyling.lines)

    g
      .call(this.xAxis)
      .selectAll('text')
      .attr('transform', 'rotate(-90)')
      .attr('dx', '-2.5em')
      .attr('dy', '-0.6em')
      .attr('class', ChartRenderer.axisStyling.text)

    return g
  }

  private get barsGroup () {
    const g = this.createGroup()
      .attr('fill', 'currentColor')
      .attr('class', 'primary--text')

    g
      .selectAll('rect')
      .data(this.data)
      .join('rect')
      // TODO: figure out how to make d3 type this without ugly null bodge
      .attr('x', i => this.xScale(i.date) ?? null)
      .attr('y', i => this.yScale(i.value))
      .attr('height', i => this.yScale(0) - this.yScale(i.value))
      .attr('width', this.xScale.bandwidth())

    return g
  }

  // as a separate method to isolate typecasting in one place
  private createGroup () {
    // TODO: look for a way to make d3 types properly understand return type
    return create<SVGSVGElement>('svg:g')
  }
}

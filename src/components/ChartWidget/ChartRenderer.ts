import { Axis, axisBottom, axisLeft, create, NumberValue, ScaleBand, scaleBand, ScaleLinear, scaleLinear, select, timeDay, timeFormat } from 'd3'

export type ChartData = {
  date: string;
  value: number;
}[]

type ChartParams = {
  rootNode: HTMLElement;
  height: number;
  width: number;
}

export class ChartRenderer {
  private static readonly marginTop = 10
  private static readonly marginRight = 0
  private static readonly marginBottom = 40
  private static readonly marginLeft = 25
  private static readonly xPadding = 0.1
  private static readonly axisStyling = {
    text: 'grey--text text--darken-2',
    lines: 'grey--text text--lighten-2',
  }

  private readonly rootNode: HTMLElement
  private readonly height: number
  private readonly width: number
  private readonly yMax: number
  private readonly yDomain: [number, number]
  private readonly yRange: [number, number]
  private readonly xDomain: string[]
  private readonly xRange: [number, number]
  private readonly data: ChartData

  constructor (data: ChartData, params: ChartParams) {
    this.data = data

    this.rootNode = params.rootNode
    this.height = params.height
    this.width = params.width

    this.yMax = Math.max(...this.data.map(e => e.value))
    this.yDomain = [0, this.yMax]
    this.yRange = [
      this.height - ChartRenderer.marginBottom,
      ChartRenderer.marginTop,
    ]

    this.xDomain = this.data.map(e => e.date)
    this.xRange = [
      this.width - ChartRenderer.marginRight,
      ChartRenderer.marginLeft,
    ]
  }

  public render (): void {
    const svg = this.svg

    svg.append(() => this.yAxisGroup.node())
    svg.append(() => this.xAxisGroup.node())
    svg.append(() => this.barsGroup.node())

    select(this.rootNode)
      .append(() => svg.node())
  }

  private get xScale (): ScaleBand<string> {
    return scaleBand()
      .domain(this.xDomain)
      .range(this.xRange)
      .padding(ChartRenderer.xPadding)
  }

  private get yScale (): ScaleLinear<number, number> {
    return scaleLinear()
      .domain(this.yDomain)
      .range(this.yRange)
  }

  private get xAxis (): Axis<string> {
    return axisBottom(this.xScale)
      .ticks(timeDay.every(1))
      .tickFormat(t => timeFormat('%d %b')(new Date(t)))
      .tickSizeOuter(0)
  }

  private get yAxis (): Axis<NumberValue> {
    return axisLeft(this.yScale)
      .ticks(this.yMax)
  }

  private get svg () {
    return create('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('viewBox', `${[0, 0, this.width, this.height]}`)
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      // .attr('class', 'primary--text')
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
        `translate(0,${this.height - ChartRenderer.marginBottom})`,
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

  // moving to a separate method to isolate typecasting in one place
  private createGroup () {
    // TODO: look for a way to make d3 types properly understand return type
    return create<SVGSVGElement>('svg:g')
  }
}

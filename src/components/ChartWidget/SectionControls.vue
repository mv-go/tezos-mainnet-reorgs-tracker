<template>
  <v-btn-toggle
    :value="timeframeIndex"
    dense
    borderless
    mandatory
    active-class="primary white--text"
    class="px-4 pt-4"
    @change="onTimeframeChange"
  >
    <v-btn
      v-for="o in timeframeOptions"
      :key="o.key"
    >
      {{ o.title }}
    </v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import { Component, VModel, Vue } from 'vue-property-decorator'
import { ReorgsTimeframe } from '@/store/modules/reorgs/types'

type TimeframeOption = {
  title: string;
  key: ReorgsTimeframe;
}

@Component
export default class ChartWidget extends Vue {
  @VModel({ type: String }) timeframe!: ReorgsTimeframe

  private timeframeIndex = 2 // week

  get selectedTimeframe (): ReorgsTimeframe {
    return this.timeframeOptions[this.timeframeIndex].key
  }

  get timeframeOptions (): TimeframeOption[] {
    return [
      {
        key: 'h',
        title: this.$t('chart.timeframes.hour').toString(),
      },
      {
        key: 'd',
        title: this.$t('chart.timeframes.day').toString(),
      },
      {
        key: 'w',
        title: this.$t('chart.timeframes.week').toString(),
      },
    ]
  }

  private onTimeframeChange (i: number): void {
    this.timeframeIndex = i
    this.timeframe = this.timeframeOptions[i].key
  }
}
</script>

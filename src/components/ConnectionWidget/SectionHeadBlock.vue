<template>
  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-title>{{ $t('connection.head.headBlock') }}</v-list-item-title>
      <v-list-item-subtitle>
        {{ $t('connection.head.generationTime') }}
        <span class="font-weight-bold pl-2">
          {{ formattedDate }}
        </span>
      </v-list-item-subtitle>
      <v-list-item-subtitle>
        {{ $t('connection.head.level') }}
        <span class="font-weight-bold pl-2">
          {{ level }}
        </span>
      </v-list-item-subtitle>
      <v-list-item-subtitle>
        {{ $t('connection.head.incidents') }}
        <span class="font-weight-bold pl-2">
          {{ formattedReorgs }}
        </span>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { dateFormatter } from '@/utils/dateUtils'
import SectionActions from './SectionActions.vue'
import SectionStatus from './SectionStatus.vue'
import { ReorgsCountLatest } from '@/store/modules/reorgs/types'

@Component({
  components: {
    SectionActions,
    SectionStatus,
  },
})
export default class SectionHeadBlock extends Vue {
  @Prop({
    type: Date,
    required: true,
  }) readonly date!: Date

  @Prop({
    type: Number,
    required: true,
  }) readonly level!: number

  // TODO: refactor to either using class or use custom validator
  @Prop({
    type: Object,
    required: true,
  }) readonly reorgsCount!: ReorgsCountLatest

  get formattedDate (): string {
    return dateFormatter.format(this.date)
  }

  get formattedReorgs (): string {
    const { h, d, w } = this.reorgsCount
    return [h, d, w].join(' / ')
  }
}
</script>

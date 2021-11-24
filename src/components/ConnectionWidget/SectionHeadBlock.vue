<template>
  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-title>Head block</v-list-item-title>
      <v-list-item-subtitle>
        Generation time
        <span class="font-weight-bold pl-2">
          {{ formattedDate }}
        </span>
      </v-list-item-subtitle>
      <v-list-item-subtitle>
        Level
        <span class="font-weight-bold pl-2">
          {{ level }}
        </span>
      </v-list-item-subtitle>
      <v-list-item-subtitle>
        Incidents h/d/w
        <span class="font-weight-bold pl-2">
          0 / 3 / 21
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

  get formattedDate (): string {
    return dateFormatter.format(this.date)
  }
}
</script>

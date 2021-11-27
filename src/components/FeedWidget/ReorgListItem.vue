<template>
  <v-list-item
    two-line
    dense
  >
    <v-list-item-content>
      <v-list-item-title>
        {{ item.date }}
      </v-list-item-title>
      <v-list-item-subtitle class="font-weight-regular">
        {{ $t('feed.listItem.level.from') }}
        <span class="font-weight-bold">
          {{ item.from }}
        </span>
        {{ $t('feed.listItem.level.to') }}
        <span class="font-weight-bold">
          {{ item.to }}
        </span>
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action class="mt-2">
      <v-list-item-action-text>
        {{ $t('feed.listItem.id') }}
        <span class="font-weight-bold">
          {{ item.id }}
        </span>
      </v-list-item-action-text>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ReorgItem } from './types'

@Component
export default class ReorgListItem extends Vue {
  @Prop({
    type: ReorgItem,
    required: true,
  }) readonly item!: ReorgItem
}
</script>

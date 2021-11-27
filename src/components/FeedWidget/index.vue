<template>
  <v-card outlined>
    <div class="text-overline px-4">
      {{ $t('feed.title') }}
    </div>
    <v-virtual-scroll
      :items="items"
      height="400"
      item-height="60"
      class="my-4"
    >
      <template v-slot:default="{ item }">
        <ReorgListItem
          :key="item.id"
          v-intersect="(entries, obs, isInt) => onIntersect(item.id, isInt)"
          :item="item"
        />
        <v-divider class="mx-4" />
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script lang="ts">
import { subscriptions } from '@/graphql'
import { reorgsStore } from '@/store'
import { dateFormatter } from '@/utils/dateUtils'
import { Component, Vue } from 'vue-property-decorator'
import ReorgListItem from './ReorgListItem.vue'
import { ReorgItem } from './types'

// TODO: add loading indicator - spinner or smth
@Component({
  components: {
    ReorgListItem,
  },
})
export default class FeedWidget extends Vue {
  private get items (): ReorgItem[] {
    return reorgsStore.state.feed.map(r => new ReorgItem(
      r.id,
      r.from_level,
      r.to_level,
      dateFormatter.format(new Date(r.timestamp)),
    ))
  }

  private get lastRenderableItemId (): number | undefined {
    const item: ReorgItem | undefined = this.items[this.items.length - 1]
    return item?.id
  }

  created (): void {
    reorgsStore.actions.getReorgsFeed()
    subscriptions.reorgsFeed.init()
  }

  private onIntersect (id: number, isIntersecting: boolean): void {
    if (!isIntersecting) return
    if (this.lastRenderableItemId && id > this.lastRenderableItemId) return

    reorgsStore.actions.getReorgsFeed()
  }
}
</script>

<template>
  <v-card outlined>
    <div class="text-overline px-4">
      Feed
    </div>
    <v-virtual-scroll
      :items="items"
      height="400"
      item-height="60"
      class="my-4"
    >
      <template v-slot:default="{ item }">
        <v-list-item
          :key="item.id"
          v-intersect="(entries, obs, isInt) => onIntersect(item.id, isInt)"
          two-line
          dense
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.date }}
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-regular">
              Level from
              <span class="font-weight-bold">
                {{ item.from }}
              </span>
              to
              <span class="font-weight-bold">
                {{ item.to }}
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action class="mt-2">
            <v-list-item-action-text>
              ID
              <span class="font-weight-bold">
                {{ item.id }}
              </span>
            </v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>

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

type ReorgListItem = {
  id: number;
  from: number;
  to: number;
  date: string;
}

@Component
export default class FeedWidget extends Vue {
  private get items (): ReorgListItem[] {
    return reorgsStore.state.feed.map(r => ({
      id: r.id,
      from: r.from_level,
      to: r.to_level,
      date: dateFormatter.format(new Date(r.timestamp)),
    }))
  }

  private get lastRenderableItemId (): number | undefined {
    const item: ReorgListItem | undefined = this.items[this.items.length - 1]
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

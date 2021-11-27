import { Reorgs1dPayload } from '@/graphql/subscriptions/reorgsCountLatest/reorgsCount1d'
import { Actions } from 'vuex-smart-module'
import Getters from './getters'
import Mutations from './mutations'
import State from './state'
import { Reorgs1hPayload } from '@/graphql/subscriptions/reorgsCountLatest/reorgsCount1h'
import { Reorgs1wPayload } from '@/graphql/subscriptions/reorgsCountLatest/reorgsCount1w'
import { ReorgsStats1dPayload } from '@/graphql/subscriptions/reorgsStatsCount/reorgsStatsCount1d'
import { ReorgsStats1hPayload } from '@/graphql/subscriptions/reorgsStatsCount/reorgsStatsCount1h'
import { ReorgsStats1wPayload } from '@/graphql/subscriptions/reorgsStatsCount/reorgsStatsCount1w'
import { queries } from '@/graphql'
import { Reorg } from './types'

class ModuleActions extends Actions<
  State,
  Getters,
  Mutations,
  ModuleActions
> {
  onReorgs1hPayload (p: Reorgs1hPayload): void {
    // Assuming if server returns nothing - no reorgs happened
    const count = p?.reorgs_1h[0]?.num_accidents || 0
    this.mutations.setCountLatest({ timeframe: 'h', count })
  }

  onReorgs1dPayload (p: Reorgs1dPayload): void {
    // Assuming if server returns nothing - no reorgs happened
    const count = p?.reorgs_1d[0]?.num_accidents || 0
    this.mutations.setCountLatest({ timeframe: 'd', count })
  }

  onReorgs1wPayload (p: Reorgs1wPayload): void {
    // Assuming if server returns nothing - no reorgs happened
    const count = p?.reorgs_1w[0]?.num_accidents || 0
    this.mutations.setCountLatest({ timeframe: 'w', count })
  }

  // TODO: DRY
  onReorgsStats1dPayload (p: ReorgsStats1dPayload): void {
    const data: Record<string, number> = {}
    p.reorgs_1d.forEach(o => {
      // naive check on any-typed values
      if (!o.bucket) return
      data[o.bucket] = o.num_accidents ?? 0
    })
    this.mutations.updateStats({ timeframe: 'd', data })
  }

  // TODO: DRY
  onReorgsStats1hPayload (p: ReorgsStats1hPayload): void {
    const data: Record<string, number> = {}
    p.reorgs_1h.forEach(o => {
      // naive check on any-typed values
      if (!o.bucket) return
      data[o.bucket] = o.num_accidents ?? 0
    })
    this.mutations.updateStats({ timeframe: 'h', data })
  }

  onReorgsStats1wPayload (p: ReorgsStats1wPayload): void {
    const data: Record<string, number> = {}
    p.reorgs_1w.forEach(o => {
      // naive check on any-typed values
      if (!o.bucket) return
      data[o.bucket] = o.num_accidents ?? 0
    })
    this.mutations.updateStats({ timeframe: 'w', data })
  }

  async getReorgsFeed (): Promise<void> {
    const fromId = this.getters.oldestReorgIdInFeed
    if (fromId === 0 || this.state.feedIsLoading) return

    this.mutations.setFeedLoading(true)

    let r: Reorg[]
    try {
      const res = await queries.reorgsFeed.getFromId(fromId)
      r = res.reorgs
    } catch (e) {
      // TODO!: better error handling
      this.mutations.setFeedLoading(false)
      return Promise.reject(e)
    }

    this.mutations.addToReorgsFeed(r)
    this.mutations.setFeedLoading(false)
  }
}

export default ModuleActions

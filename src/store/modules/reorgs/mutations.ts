import { Mutations } from 'vuex-smart-module'
import State from './state'
import { Reorg, ReorgsCountLatest, ReorgsTimeframe } from './types'

class ModuleMutations extends Mutations<State> {
  setCountLatest <T extends ReorgsTimeframe> (p: {
    timeframe: T, count: ReorgsCountLatest[T]
  }): void {
    this.state.countLatest[p.timeframe] = p.count
  }

  updateStats (
    p: { timeframe: ReorgsTimeframe, data: Record<string, number> }): void {
    this.state.stats[p.timeframe] = {
      ...this.state.stats[p.timeframe],
      ...p.data,
    }
  }

  appendToReorgsFeed (r: Reorg[]): void {
    this.state.feed.push(...r)
  }

  createOrUpdateReorgInFeed (r: Reorg): void {
    const index = this.state.feed.findIndex(i => i.id === r.id)

    index === -1
      ? this.state.feed.unshift(r)
      : this.state.feed.splice(index, 1, r)
  }

  setFeedLoading (isLoading: boolean): void {
    this.state.feedIsLoading = isLoading
  }
}

export default ModuleMutations

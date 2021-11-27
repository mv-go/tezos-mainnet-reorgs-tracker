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

  addToReorgsFeed (r: Reorg[]): void {
    this.state.feed.push(...r)
  }

  setFeedLoading (isLoading: boolean): void {
    this.state.feedIsLoading = isLoading
  }
}

export default ModuleMutations

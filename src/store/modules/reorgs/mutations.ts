import { Mutations } from 'vuex-smart-module'
import State from './state'
import { ReorgsCountLatest, ReorgsTimeframe } from './types'

class ModuleMutations extends Mutations<State> {
  setCountLatest <T extends ReorgsTimeframe> (p: {
    timeframe: T, count: ReorgsCountLatest[T]
  }): void {
    this.state.countLatest[p.timeframe] = p.count
  }
}

export default ModuleMutations

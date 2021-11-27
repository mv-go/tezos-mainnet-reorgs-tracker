import { Getters } from 'vuex-smart-module'
import State from './state'
import { Reorg } from './types'

class ModuleGetters extends Getters<State> {
  get oldestReorgIdInFeed (): number | undefined {
    const feed = this.state.feed
    const reorg: Reorg | undefined = feed[feed.length - 1]
    return reorg?.id
  }
}

export default ModuleGetters

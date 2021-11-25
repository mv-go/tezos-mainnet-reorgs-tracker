import { Reorgs1dPayload } from '@/graphql/subscriptions/reorgsCountLatest/reorgsCount1d'
import { Actions } from 'vuex-smart-module'
import Getters from './getters'
import Mutations from './mutations'
import State from './state'
import { Reorgs1hPayload } from '@/graphql/subscriptions/reorgsCountLatest/reorgsCount1h'
import { Reorgs1wPayload } from '@/graphql/subscriptions/reorgsCountLatest/reorgsCount1w'

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
}

export default ModuleActions

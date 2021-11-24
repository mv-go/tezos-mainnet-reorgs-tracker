import { DipdupHeadPayload } from '@/graphql/subscriptions/dipdupHead'
import { Actions } from 'vuex-smart-module'
import Getters from './getters'
import Mutations from './mutations'
import State from './state'

class ModuleActions extends Actions<
  State,
  Getters,
  Mutations,
  ModuleActions
> {
  onHeadPayload (p: DipdupHeadPayload): void {
    // Assuming server returns latest head in the first array element
    const h = p.dipdup_head[0]
    // Make sure at least one head was indeed returned
    if (!h) return
    // Assuming we can trust server to return what was promised
    this.mutations.setHead(p.dipdup_head[0])
  }
}

export default ModuleActions

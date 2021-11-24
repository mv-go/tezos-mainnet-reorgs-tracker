import { DipdupHead } from '@/graphql/subscriptions/dipdupHead'
import { Mutations } from 'vuex-smart-module'
import State from './state'

class ModuleMutations extends Mutations<State> {
  setHead (h: DipdupHead): void {
    this.state.head = h
  }
}

export default ModuleMutations

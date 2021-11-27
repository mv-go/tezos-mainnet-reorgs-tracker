import { ReorgsCountLatest, ReorgsStats } from './types'

class ModuleState {
  countLatest: ReorgsCountLatest = {
    d: null,
    h: null,
    w: null,
  }

  stats: ReorgsStats = {
    d: {},
    h: {},
    w: {},
  }
}

export default ModuleState

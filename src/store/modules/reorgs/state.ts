import { Reorg, ReorgsCountLatest, ReorgsStats } from './types'

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

  feed: Reorg[] = []
  feedIsLoading = false
}

export default ModuleState

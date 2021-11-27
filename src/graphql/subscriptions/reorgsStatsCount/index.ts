import { reorgsStatsCount1d } from './reorgsStatsCount1d'
import { reorgsStatsCount1h } from './reorgsStatsCount1h'
import { reorgsStatsCount1w } from './reorgsStatsCount1w'

const subs = [
  reorgsStatsCount1h,
  reorgsStatsCount1d,
  reorgsStatsCount1w,
]

const init = (): void => subs.forEach(s => s.init())
const unsub = (): void => subs.forEach(s => s.unsub())

export const reorgsStatsCount = {
  init,
  unsub,
}

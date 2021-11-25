import reorgsCount1d from './reorgsCount1d'
import reorgsCount1h from './reorgsCount1h'
import reorgsCount1w from './reorgsCount1w'

const subs = [
  reorgsCount1h,
  reorgsCount1d,
  reorgsCount1w,
]

const init = (): void => subs.forEach(s => s.init())
const unsub = (): void => subs.forEach(s => s.unsub())

export default {
  init,
  unsub,
}

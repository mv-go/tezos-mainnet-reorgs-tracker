import { Reorgs1d } from '@/graphql/subscriptions/reorgsCountLatest/reorgsCount1d'
import { Reorgs1h } from '@/graphql/subscriptions/reorgsCountLatest/reorgsCount1h'
import { Reorgs1w } from '@/graphql/subscriptions/reorgsCountLatest/reorgsCount1w'

export type ReorgsTimeframe =
  | 'h'
  | 'd'
  | 'w'

export type ReorgsCountLatest = Record<ReorgsTimeframe, unknown> & {
  h: Reorgs1h | null;
  d: Reorgs1d | null;
  w: Reorgs1w | null;
}

export type ReorgsStats = {
  [k in ReorgsTimeframe]: Record<string, number>
}

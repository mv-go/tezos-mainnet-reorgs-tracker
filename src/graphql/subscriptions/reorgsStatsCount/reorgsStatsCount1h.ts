import { reorgsStore } from '@/store'
import { SubscriptionResult } from '@/graphql/generated'
import { subscriber } from '@/graphql/subscriptions/subscriber'
import { tuple } from '@/graphql/utils'

// This is only weird that genql forces to use this way of typing return types.
const reorgsStats1hFields = {
  reorgs_1h: tuple([
    {
      limit: 10,
    },
    {
      num_accidents: true,
      bucket: true,
    },
  ]),
}

export type ReorgsStats1hPayload = SubscriptionResult<typeof reorgsStats1hFields>

const reorgs1hSubscription = subscriber.subscription(reorgsStats1hFields)

type ReorgsStats1hSubscription = ReturnType<
  typeof reorgs1hSubscription['subscribe']
>

let activeSubscription: ReorgsStats1hSubscription | null = null

const init = (): void => {
  // TODO: logger
  if (activeSubscription) return

  activeSubscription = reorgs1hSubscription.subscribe({
    next: p => reorgsStore.actions.onReorgsStats1hPayload(p),
    // TODO! error handling and reconnection
  })
}

const unsub = (): void => {
  if (!activeSubscription) return
  activeSubscription.unsubscribe()
}

export const reorgsStatsCount1h = { init, unsub }

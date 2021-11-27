import { reorgsStore } from '@/store'
import { SubscriptionResult } from '@/graphql/generated'
import { subscriber } from '@/graphql/subscriptions/subscriber'
import { tuple } from '@/graphql/utils'

// This is only weird that genql forces to use this way of typing return types.
const reorgsStats1dFields = {
  reorgs_1d: tuple([
    {
      limit: 10,
    },
    {
      num_accidents: true,
      bucket: true,
    },
  ]),
}

export type ReorgsStats1dPayload = SubscriptionResult<typeof reorgsStats1dFields>

const reorgs1dSubscription = subscriber.subscription(reorgsStats1dFields)

type ReorgsStats1dSubscription = ReturnType<
  typeof reorgs1dSubscription['subscribe']
>

let activeSubscription: ReorgsStats1dSubscription | null = null

const init = (): void => {
  // TODO: logger
  if (activeSubscription) return

  activeSubscription = reorgs1dSubscription.subscribe({
    next: p => reorgsStore.actions.onReorgsStats1dPayload(p),
    // TODO! error handling and reconnection
  })
}

const unsub = (): void => {
  if (!activeSubscription) return
  activeSubscription.unsubscribe()
}

export const reorgsStatsCount1d = { init, unsub }

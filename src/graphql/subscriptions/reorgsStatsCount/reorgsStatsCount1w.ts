import { reorgsStore } from '@/store'
import { SubscriptionResult } from '@/graphql/generated'
import { subscriber } from '@/graphql/subscriptions/subscriber'
import { tuple } from '@/graphql/utils'

// This is only weird that genql forces to use this way of typing return types.
const reorgsStats1wFields = {
  reorgs_1w: tuple([
    {
      limit: 10,
    },
    {
      num_accidents: true,
      bucket: true,
    },
  ]),
}

export type ReorgsStats1wPayload = SubscriptionResult<typeof reorgsStats1wFields>

const reorgs1wSubscription = subscriber.subscription(reorgsStats1wFields)

type ReorgsStats1wSubscription = ReturnType<
  typeof reorgs1wSubscription['subscribe']
>

let activeSubscription: ReorgsStats1wSubscription | null = null

const init = (): void => {
  // TODO: logger
  if (activeSubscription) return

  activeSubscription = reorgs1wSubscription.subscribe({
    next: p => reorgsStore.actions.onReorgsStats1wPayload(p),
    // TODO! error handling and reconnection
  })
}

const unsub = (): void => {
  if (!activeSubscription) return
  activeSubscription.unsubscribe()
}

export const reorgsStatsCount1w = { init, unsub }

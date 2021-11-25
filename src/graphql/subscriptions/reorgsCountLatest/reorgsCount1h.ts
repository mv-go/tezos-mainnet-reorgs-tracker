import { reorgsStore } from '@/store'
import { SubscriptionResult } from '@/graphql/generated'
import { subscriber } from '@/graphql/subscriptions/subscriber'
import { tuple } from '@/graphql/utils'

// This is only weird that genql forces to use this way of typing return types.
const reorgs1hFields = {
  reorgs_1h: tuple([
    {
      limit: 1,
    },
    {
      num_accidents: true,
    },
  ]),
}

export type Reorgs1hPayload = SubscriptionResult<typeof reorgs1hFields>
export type Reorgs1h = Reorgs1hPayload['reorgs_1h'][number]['num_accidents']

const reorgs1hSubscription = subscriber.subscription(reorgs1hFields)

export type Reorgs1hSubscription = ReturnType<
  typeof reorgs1hSubscription['subscribe']
>

let activeSubscription: Reorgs1hSubscription | null = null

const init = (): void => {
  // TODO: logger
  if (activeSubscription) return

  activeSubscription = reorgs1hSubscription.subscribe({
    next: p => reorgsStore.actions.onReorgs1hPayload(p),
    // TODO! error handling and reconnection
  })
}

const unsub = (): void => {
  if (!activeSubscription) return
  activeSubscription.unsubscribe()
}

export default { init, unsub }

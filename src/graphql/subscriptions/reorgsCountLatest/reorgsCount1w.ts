import { reorgsStore } from '@/store'
import { SubscriptionResult } from '@/graphql/generated'
import { subscriber } from '@/graphql/subscriptions/subscriber'
import { tuple } from '@/graphql/utils'

// This is only weird that genql forces to use this way of typing return types.
const reorgs1wFields = {
  reorgs_1w: tuple([
    {
      limit: 1,
    },
    {
      num_accidents: true,
    },
  ]),
}

export type Reorgs1wPayload = SubscriptionResult<typeof reorgs1wFields>
export type Reorgs1w = Reorgs1wPayload['reorgs_1w'][number]['num_accidents']

const reorgs1wSubscription = subscriber.subscription(reorgs1wFields)

export type Reorgs1wSubscription = ReturnType<
  typeof reorgs1wSubscription['subscribe']
>

let activeSubscription: Reorgs1wSubscription | null = null

const init = (): void => {
  // TODO: logger
  if (activeSubscription) return

  activeSubscription = reorgs1wSubscription.subscribe({
    next: p => reorgsStore.actions.onReorgs1wPayload(p),
    // TODO! error handling and reconnection
  })
}

const unsub = (): void => {
  if (!activeSubscription) return
  activeSubscription.unsubscribe()
}

export default { init, unsub }

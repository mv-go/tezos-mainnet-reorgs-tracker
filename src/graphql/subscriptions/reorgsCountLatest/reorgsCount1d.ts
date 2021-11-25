import { reorgsStore } from '@/store'
import { SubscriptionResult } from '@/graphql/generated'
import { subscriber } from '@/graphql/subscriptions/subscriber'
import { tuple } from '@/graphql/utils'

// This is only weird that genql forces to use this way of typing return types.
const reorgs1dFields = {
  reorgs_1d: tuple([
    {
      limit: 1,
    },
    {
      num_accidents: true,
    },
  ]),
}

export type Reorgs1dPayload = SubscriptionResult<typeof reorgs1dFields>
export type Reorgs1d = Reorgs1dPayload['reorgs_1d'][number]['num_accidents']

const reorgs1dSubscription = subscriber.subscription(reorgs1dFields)

export type Reorgs1dSubscription = ReturnType<
  typeof reorgs1dSubscription['subscribe']
>

let activeSubscription: Reorgs1dSubscription | null = null

const init = (): void => {
  // TODO: logger
  if (activeSubscription) return

  activeSubscription = reorgs1dSubscription.subscribe({
    next: p => reorgsStore.actions.onReorgs1dPayload(p),
    // TODO! error handling and reconnection
  })
}

const unsub = (): void => {
  if (!activeSubscription) return
  activeSubscription.unsubscribe()
}

export default { init, unsub }

import { everything, SubscriptionResult } from '@/graphql/generated'
import { reorgsStore } from '@/store'
import { subscriber } from './subscriber'

// This is only weird that genql forces to use this way of typing return types.
const reorgsFeedFields = {
  reorgs: everything,
} as const

export type ReorgsFeedPayload = SubscriptionResult<typeof reorgsFeedFields>

/**
 * This will be updating locally stored reorgs (incidents) as they happen.
 */
const dipdupHeadSubscription = subscriber.subscription({
  reorgs: [
    {
      limit: 1,
      order_by: [
        {
          id: 'desc',
        },
      ],
    },
    everything,
  ],
})

type ReprgsFeedSubscription = ReturnType<
  typeof dipdupHeadSubscription['subscribe']
>

let activeSubscription: ReprgsFeedSubscription | null = null

const init = (): void => {
  // TODO: logger
  if (activeSubscription) return

  activeSubscription = dipdupHeadSubscription.subscribe({
    next: p => reorgsStore.actions.onReorgsFeedPayload(p),
    // TODO! error handling and reconnection
  })
}

const unsub = (): void => {
  if (!activeSubscription) return
  activeSubscription.unsubscribe()
}

export const reorgsFeed = { init, unsub }

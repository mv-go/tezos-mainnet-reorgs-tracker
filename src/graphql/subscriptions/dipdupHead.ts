import { dipdupStore } from '@/store'
import { everything, SubscriptionResult } from '@/graphql/generated'
import { subscriber } from './subscriber'

// This is only weird that genql forces to use this way of typing return types.
const dipdupHeadFields = {
  dipdup_head: {
    ...everything,
  },
} as const

export type DipdupHeadPayload = SubscriptionResult<typeof dipdupHeadFields>
export type DipdupHead = DipdupHeadPayload['dipdup_head'][number]

const dipdupHeadSubscription = subscriber.subscription({
  dipdup_head: {
    ...everything,
  },
})

export type DipdupHeadSubscription = ReturnType<
  typeof dipdupHeadSubscription['subscribe']
>

let activeSubscription: DipdupHeadSubscription | null = null

const init = (): void => {
  // TODO: logger
  if (activeSubscription) return

  activeSubscription = dipdupHeadSubscription.subscribe({
    next: p => dipdupStore.actions.onHeadPayload(p),
    // TODO! error handling and reconnection
  })
}

const unsub = (): void => {
  if (!activeSubscription) return
  activeSubscription.unsubscribe()
}

export default { init, unsub }

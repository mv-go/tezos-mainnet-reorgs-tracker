import { everything, QueryResult } from '@/graphql/generated'
import { query } from './query'

// This is only weird that genql forces to use this way of typing return types.
const reorgsFeedFields = {
  reorgs: everything,
} as const

export type ReorgsFeedQueryPayload = QueryResult<typeof reorgsFeedFields>

const getFromId = (
  fromId?: number,
): Promise<ReorgsFeedQueryPayload> => query.query({
  reorgs: [
    {
      limit: 10,
      order_by: [
        {
          id: 'desc',
        },
      ],
      where: {
        id: {
          _lt: fromId,
        },
      },
    },
    everything,
  ],
})

export {
  getFromId,
}

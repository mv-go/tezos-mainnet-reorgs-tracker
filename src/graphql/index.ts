import { createClient, everything } from './generated'

const hostname = 'reorgs.staging.dipdup.net'
const pathname = '/v1/graphql'
const queryURL = 'https://' + hostname + pathname
const wsURL = 'wss://' + hostname + pathname

const query = createClient({
  url: queryURL,
})

const subscriber = createClient({
  url: wsURL,
})

export {
  query,
  subscriber,
  everything,
}

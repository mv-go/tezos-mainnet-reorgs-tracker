import { createClient } from './generated'
import { queryURL } from './config'

export const query = createClient({
  url: queryURL,
})

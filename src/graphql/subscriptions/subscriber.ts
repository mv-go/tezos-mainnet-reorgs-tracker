import { createClient } from '../generated'
import { wsURL } from '../config'

export const subscriber = createClient({
  url: wsURL,
})

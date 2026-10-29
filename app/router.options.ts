import type { RouterConfig } from '@nuxt/schema'

// Case-sensitive matching stops /Our-Work, /OUR-WORK etc. from serving the same page as a duplicate of /our-work
export default <RouterConfig>{
  sensitive: true
}

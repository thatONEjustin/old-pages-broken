import type { Alpine } from 'alpinejs'

import intersect from '@alpinejs/intersect'

export default (Alpine: Alpine) => {
  console.log('Alpine!')
  Alpine.plugin(intersect)
}

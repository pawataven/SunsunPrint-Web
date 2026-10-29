import type { MaybeRefOrGetter } from 'vue'
import type { Work, WorkFilter } from '~/types'

export const useSubcategoryFilter = (
  works: MaybeRefOrGetter<Work[]>,
  filters: MaybeRefOrGetter<WorkFilter[] | undefined>
) => {
  const selectedFilter = ref('all')

  const filterOptions = computed(() => {
    const allWorks = toValue(works)
    const groupFilters = toValue(filters)
    if (!groupFilters?.length) return []
    return [
      { id: 'all', label: 'ทั้งหมด', count: allWorks.length },
      ...groupFilters.map(filter => ({
        ...filter,
        count: allWorks.filter(work => work.subcategory === filter.id).length
      }))
    ]
  })

  const visibleWorks = computed(() => {
    const allWorks = toValue(works)
    return selectedFilter.value === 'all'
      ? allWorks
      : allWorks.filter(work => work.subcategory === selectedFilter.value)
  })

  return { selectedFilter, filterOptions, visibleWorks }
}

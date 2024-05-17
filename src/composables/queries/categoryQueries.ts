import { useQuery } from '@tanstack/vue-query'
import type { Category } from '~/types'

const BASE_URL = 'http://localhost:3000'

export function useGetCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await axios.get<Category[]>(`${BASE_URL}/categories`)

      return data
    },
  })
}

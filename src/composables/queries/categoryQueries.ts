import { useQuery } from '@tanstack/vue-query'
import type { Category, Product } from '~/types'

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

export function useGetCategoriesProducts() {
  return useQuery({
    queryKey: ['categories-products'],
    queryFn: async () => {
      const { data } = await axios.get<Product[]>(`${BASE_URL}/categories-products`)

      return data
    },
  })
}

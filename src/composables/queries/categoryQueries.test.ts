import { flushPromises } from '@vue/test-utils'
import type { Mocked } from 'vitest'
import axios from 'axios'

import { useGetCategories } from './categoryQueries'
import { withQuery } from '~/utils/testUtils/testUtils'

vi.mock('axios')

const mockAxios = axios as Mocked<typeof axios>

describe('categoryQueries', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('useGetCategories', () => {
    it('returns categories', async () => {
      const categories = [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
        },
        {
          name: 'Productivity',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
        },
        {
          name: 'Workspace',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
        },
        { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
      ]

      mockAxios.get.mockResolvedValue({ data: categories })

      const { result } = withQuery(() => useGetCategories())

      expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:3000/categories')
      expect(result.isPending.value).toBe(true)
      expect(result.data.value).toBeUndefined()

      await flushPromises()

      expect(result.isPending.value).toBe(false)
      expect(result.data.value).toStrictEqual(categories)
    })
  })
})

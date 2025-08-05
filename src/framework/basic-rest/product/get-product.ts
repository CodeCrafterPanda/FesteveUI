import { useQuery } from '@tanstack/react-query'
import http from '@framework/utils/http'
import { API_ENDPOINTS } from '@framework/utils/api-endpoints'
import type { Product } from '@framework/types'

export const fetchProduct = async (slug: string): Promise<Product> => {
  const { data } = await http.get(`${API_ENDPOINTS.PRODUCT}/${slug}`)
  return data
}

export const useProductQuery = (slug: string) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.PRODUCT, slug],
    queryFn: () => fetchProduct(slug),
    enabled: !!slug,
  })
}
import { useQuery } from '@tanstack/react-query'
import http from '@framework/utils/http'
import { API_ENDPOINTS } from '@framework/utils/api-endpoints'
import type { Product } from '@framework/types'

export interface ProductsQueryOptions {
  limit?: number
  page?: number
  search?: string
  category?: string
  sortBy?: string
  orderBy?: 'asc' | 'desc'
}

export const fetchProducts = async (options: ProductsQueryOptions = {}) => {
  const { data } = await http.get(API_ENDPOINTS.PRODUCTS, {
    params: options,
  })
  return {
    data: data.data || [],
    paginatorInfo: data.paginatorInfo || {},
  }
}

export const useProductsQuery = (options: ProductsQueryOptions = {}) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.PRODUCTS, options],
    queryFn: () => fetchProducts(options),
  })
}
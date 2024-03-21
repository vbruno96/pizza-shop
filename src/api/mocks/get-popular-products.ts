import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '@/api/get-popular-products'

export const GetPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza de teste', amount: 45 },
    { product: 'Pizza de teste 2', amount: 95 },
    { product: 'Pizza de teste 4', amount: 75 },
    { product: 'Pizza de teste 6', amount: 85 },
    { product: 'Pizza de teste 1', amount: 20 },
  ])
})

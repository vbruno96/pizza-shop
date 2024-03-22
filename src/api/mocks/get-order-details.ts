import { http, HttpResponse } from 'msw'

import {
  GetOrderDatailsParams,
  GetOrderDetailsResponse,
} from '@/api/get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDatailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '(31) 99454-5588',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Frango com barbecue' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza Corn Bacon' },
        quantity: 2,
      },
    ],
    totalInCents: 5000,
  })
})

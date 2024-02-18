import { api } from '@/lib/axios'

interface GetOrderDatailsParams {
  orderId: string
}

interface GetOrderDetailsResponse {
  id: string
  createdAt: Date
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDatailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}

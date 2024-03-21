import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountResponse } from '@/api/get-day-orders-amount'

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountResponse
>('/metrics/day-orders-amount', async () => {
  return HttpResponse.json({
    amount: 60,
    diffFromYesterday: -5,
  })
})
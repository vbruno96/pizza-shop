import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '@/api/get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    diffFromLastMonth: -6,
    receipt: 153,
  })
})

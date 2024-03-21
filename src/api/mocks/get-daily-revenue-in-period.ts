import { http, HttpResponse } from 'msw'

import { GetDailyReveneuInPeriodResponse } from '@/api/get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyReveneuInPeriodResponse[]
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '2023/03/01', receipt: 2000 },
    { date: '2023/03/02', receipt: 504 },
    { date: '2023/03/03', receipt: 1520 },
    { date: '2023/03/04', receipt: 790 },
    { date: '2023/03/05', receipt: 320 },
    { date: '2023/03/06', receipt: 410 },
    { date: '2023/03/07', receipt: 632 },
  ])
})

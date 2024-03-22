import { http, HttpResponse } from 'msw'

import { GetDailyReveneuInPeriodResponse } from '@/api/get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyReveneuInPeriodResponse[]
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/03/2023', receipt: 2000 },
    { date: '02/03/2023', receipt: 504 },
    { date: '03/03/2023', receipt: 1520 },
    { date: '04/03/2023', receipt: 790 },
    { date: '05/03/2023', receipt: 320 },
    { date: '06/03/2023', receipt: 410 },
    { date: '07/03/2023', receipt: 632 },
  ])
})

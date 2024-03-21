import { api } from '@/lib/axios'

export interface GetDailyReveneuInPeriodResponse {
  date: string
  receipt: number
}

export interface GetDailyReveneuInPeriodParams {
  from?: Date
  to?: Date
}

export async function getDailyReveneuInPeriod({
  from,
  to,
}: GetDailyReveneuInPeriodParams) {
  const response = await api.get<GetDailyReveneuInPeriodResponse[]>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}

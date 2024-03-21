import { setupWorker } from 'msw/browser'

import { getDailyRevenueInPeriodMock } from '@/api/mocks/get-daily-revenue-in-period'
import { getDayOrdersAmountMock } from '@/api/mocks/get-day-orders-amount'
import { getMonthCanceledOrdersAmountMock } from '@/api/mocks/get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from '@/api/mocks/get-month-orders-amount'
import { getMonthRevenueMock } from '@/api/mocks/get-month-revenue'
import { GetPopularProductsMock } from '@/api/mocks/get-popular-products'
import { registerRestairantMock } from '@/api/mocks/register-restaurant-mock'
import { signInMock } from '@/api/mocks/sign-in-mock'
import { env } from '@/env'

export const worker = setupWorker(
  signInMock,
  registerRestairantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  GetPopularProductsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}

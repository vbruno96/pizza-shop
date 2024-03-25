import { setupWorker } from 'msw/browser'

import { approveOrderMock } from '@/api/mocks/approve-order'
import { cancelOrderMock } from '@/api/mocks/cancel-order'
import { deliverOrderMock } from '@/api/mocks/deliver-order'
import { dispatchOrderMock } from '@/api/mocks/dispatch-order'
import { getDailyRevenueInPeriodMock } from '@/api/mocks/get-daily-revenue-in-period'
import { getDayOrdersAmountMock } from '@/api/mocks/get-day-orders-amount'
import { getManagedRestaurantMock } from '@/api/mocks/get-managed-restaurant'
import { getMonthCanceledOrdersAmountMock } from '@/api/mocks/get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from '@/api/mocks/get-month-orders-amount'
import { getMonthRevenueMock } from '@/api/mocks/get-month-revenue'
import { getOrdersMock } from '@/api/mocks/get-orders'
import { getPopularProductsMock } from '@/api/mocks/get-popular-products'
import { getProfileMock } from '@/api/mocks/get-profile'
import { registerRestairantMock } from '@/api/mocks/register-restaurant-mock'
import { signInMock } from '@/api/mocks/sign-in-mock'
import { updateProfileMock } from '@/api/mocks/update-profile'
import { env } from '@/env'

import { getOrderDetailsMock } from './get-order-details'

export const worker = setupWorker(
  signInMock,
  registerRestairantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  dispatchOrderMock,
  deliverOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}

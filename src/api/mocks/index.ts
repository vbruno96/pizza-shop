import { setupWorker } from 'msw/browser'

import { registerRestairantMock } from '@/api/mocks/register-restaurant-mock'
import { signInMock } from '@/api/mocks/sign-in-mock'
import { env } from '@/env'

export const worker = setupWorker(signInMock, registerRestairantMock)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}

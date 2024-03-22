import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '@/api/get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'manager',
      phone: '(31) 99454-5588',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)

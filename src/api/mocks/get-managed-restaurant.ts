import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '@/api/get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    managerId: 'custom-user-id',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tempore, ut tenetur, repellat provident maxime fugiat sunt expedita harum maiores ratione necessitatibus soluta veniam illo doloribus non odio, sapiente deserunt?',
    createdAt: new Date(),
    updatedAt: null,
  })
})

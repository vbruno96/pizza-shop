import { expect, test } from '@playwright/test'

test('display list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'order-1', exact: true }),
  ).toBeVisible()
  await expect(page.getByRole('cell', { name: 'order-10' })).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  expect(page.url()).toContain('?page=2')
  await expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'order-20' })).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  expect(page.url()).toContain('?page=1')
  await expect(
    page.getByRole('cell', { name: 'order-1', exact: true }),
  ).toBeVisible()
  await expect(page.getByRole('cell', { name: 'order-10' })).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  expect(page.url()).toContain('?page=6')
  await expect(
    page.getByRole('cell', { name: 'order-51', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'order-60', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  expect(page.url()).toContain('?page=1')
  await expect(
    page.getByRole('cell', { name: 'order-1', exact: true }),
  ).toBeVisible()
  await expect(page.getByRole('cell', { name: 'order-10' })).toBeVisible()
})

test('filter orders by id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-11')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
})

test('filter orders by name customer', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 4')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(
    page.getByRole('cell', { name: 'Customer 4', exact: true }),
  ).toBeVisible()
})

test('filter orders by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Em preparo').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Em preparo' })).toHaveCount(10)
})

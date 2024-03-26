import { expect, test } from '@playwright/test'

test('sing up successfuly', async ({ page }) => {
  await page.goto('/sign-up')

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(31) 99999-9999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  await expect(toast).toBeVisible()
})

test('sing up successfy with redirec to login page and fill email field', async ({
  page,
}) => {
  await page.goto('/sign-up')

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(31) 99999-9999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  await page.getByRole('button', { name: 'Login' }).click()

  expect(page.url()).toContain('?email=johndoe@example.com')
})

test('sing up error', async ({ page }) => {
  await page.goto('/sign-up')

  await page.getByLabel('Nome do estabelecimento').fill('BVM Pizza')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(31) 99999-9999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  await expect(toast).toBeVisible()
})

test('navgate to login page', async ({ page }) => {
  await page.goto('/sign-up')

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})

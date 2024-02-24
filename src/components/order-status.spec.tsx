import { render } from '@testing-library/react'

import { OrderStatus, orderStatusMap } from './order-status'

describe('Order Status', () => {
  it.each(
    Object.entries(orderStatusMap).map(([orderKey, orderInfo]) => [
      orderKey,
      orderInfo.text,
      orderInfo.color,
    ]),
  )(
    'shuold display the right text and class bagde when order status is "%s"',
    (orderKey, orderText, orderColor) => {
      const { getByText, getByTestId } = render(
        <OrderStatus status={orderKey as OrderStatus} />,
      )

      const statusText = getByText(orderText)
      const badge = getByTestId(`badge`)

      expect(statusText).toBeInTheDocument()
      expect(badge).toHaveClass(orderColor)
    },
  )
})

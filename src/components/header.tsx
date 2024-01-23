import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { NavLink } from '@/components/nav-link'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Separator } from '@/components/ui/separator'

import { AccountMenu } from './account-menu'

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="w-h h-6" />

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}

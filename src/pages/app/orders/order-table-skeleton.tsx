import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, index) => (
    <TableRow key={index}>
      <TableCell>
        <Button disabled variant="outline" size="xs">
          <Search className="h-3 w-4" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[10.75rem]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[8.75rem]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[6.875rem]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[12.5rem]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[4rem]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[5.75rem]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[5.75rem]" />
      </TableCell>
    </TableRow>
  ))
}

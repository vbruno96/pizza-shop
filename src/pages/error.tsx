import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="gap- flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, algo acotenceu...</h1>
      <p className="text-acent-foreground">
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
      </p>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <p className="text-acent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-400 dark:text-sky-500">
          Dashboard
        </Link>
      </p>
    </div>
  )
}

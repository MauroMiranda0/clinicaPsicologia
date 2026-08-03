import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon.jsx'
import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-margin-mobile py-24 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-fixed text-primary">
        <Icon name="psychology_alt" className="text-5xl" />
      </div>
      <h1 className="mb-2 text-headline-lg text-on-surface">Página no encontrada</h1>
      <p className="mb-8 max-w-md text-body-md text-on-surface-variant">
        La página que buscas no existe o fue movida. Vuelve al inicio para continuar navegando.
      </p>
      <Link to="/">
        <Button icon="home">Volver al inicio</Button>
      </Link>
    </div>
  )
}

import { Link } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import { CLINIC_INFO } from '../../data/site.js'

const FOOTER_LINKS = [
  {
    title: 'Servicios',
    links: [
      { label: 'Terapia Adultos', to: '/agendar' },
      { label: 'Psicología Infantil', to: '/agendar' },
      { label: 'Orientación Vocacional', to: '/agendar' },
      { label: 'Estrés Laboral', to: '/agendar' },
    ],
  },
  {
    title: 'Clínica',
    links: [
      { label: 'Panel de Pacientes', to: '/panel' },
      { label: 'Pagos Pendientes', to: '/pagos' },
      { label: 'Recordatorio de Pago', to: '/recordatorio' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-outline-variant bg-surface-container-low px-margin-mobile py-12 md:px-margin-desktop">
      <div className="mx-auto grid max-w-max-width grid-cols-1 gap-gutter md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Icon name="psychology" className="text-primary text-2xl" />
            <span className="text-headline-sm font-semibold text-on-surface">
              {CLINIC_INFO.name}
            </span>
          </div>
          <p className="text-body-sm text-on-surface-variant">
            Acompañándote en tu camino hacia el bienestar mental con profesionales verificados y
            tecnología segura.
          </p>
        </div>

        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-label-md font-bold text-on-surface">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-label-sm text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="mb-4 text-label-md font-bold text-on-surface">Contacto Directo</h4>
          <p className="mb-2 text-body-sm text-on-surface-variant">Estamos aquí para escucharte.</p>
          <a
            href={`mailto:${CLINIC_INFO.email}`}
            className="block text-label-sm font-bold text-primary hover:underline"
          >
            {CLINIC_INFO.email}
          </a>
          <p className="mt-6 text-label-sm text-on-surface-variant italic">
            © 2024 {CLINIC_INFO.name} Clinic. Credenciales profesionales verificadas.
          </p>
        </div>
      </div>
    </footer>
  )
}

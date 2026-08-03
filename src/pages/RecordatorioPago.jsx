import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon.jsx'
import Button from '../components/ui/Button.jsx'
import { useToast } from '../components/layout/ToastContext.jsx'

export default function RecordatorioPago() {
  const showToast = useToast()
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const sendToPatient = () => {
    setSent(true)
    showToast('Recordatorio enviado a Sofia Martínez')
  }

  return (
    <div className="mx-auto max-w-4xl px-margin-mobile pb-12 pt-28">
      {/* Mensaje tipo email */}
      <div className="relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
        <div className="relative overflow-hidden bg-primary p-8 text-center md:p-12">
          <div className="absolute inset-0 opacity-10">
            <div className="grid -translate-y-[-20%] -rotate-12 grid-cols-6 gap-4">
              {[
                'credit_card',
                'payments',
                'receipt_long',
                'account_balance_wallet',
                'schedule',
                'verified',
              ].map((icon) => (
                <span key={icon} className="text-6xl text-white">
                  <Icon name={icon} />
                </span>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Icon name="notification_important" className="text-4xl text-white" />
            </div>
            <h1 className="mb-2 text-headline-lg text-on-primary">Recordatorio de Pago</h1>
            <p className="text-body-md text-on-primary/80">
              PsycheCare Clinic • Departamento de Facturación
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center md:text-left">
            <p className="mb-6 text-body-lg text-on-surface">
              Hola <span className="font-bold">Sofia Martínez</span>,
            </p>
            <p className="mb-8 text-body-md leading-relaxed text-on-surface-variant">
              Esperamos que te encuentres bien. Te escribimos de PsycheCare para recordarte que
              tienes un <span className="font-semibold text-primary">pago pendiente</span>{' '}
              correspondiente a tu sesión de terapia individual.
            </p>

            {/* Detalles */}
            <div className="mb-10 flex flex-col items-center gap-6 rounded-xl border border-outline-variant/50 bg-surface-container p-6 md:flex-row">
              <div className="w-full flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <Icon name="event" className="text-primary" />
                  <div>
                    <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                      Fecha de Sesión
                    </p>
                    <p className="text-body-md font-semibold">12 de Mayo, 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="payments" className="text-primary" />
                  <div>
                    <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                      Monto Pendiente
                    </p>
                    <p className="text-headline-sm font-bold text-primary">$75.00 USD</p>
                  </div>
                </div>
              </div>
              <div className="hidden h-16 w-px bg-outline-variant md:block" />
              <div className="w-full flex-1">
                <p className="mb-2 text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Estado de Cuenta
                </p>
                <span className="inline-flex items-center gap-1 rounded-full bg-error-container px-3 py-1 text-label-sm text-on-error-container">
                  <Icon name="error" className="text-sm" /> Pendiente
                </span>
                <p className="mt-4 text-body-sm text-on-surface-variant">
                  Vencimiento: 15 Mayo, 2024
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={sendToPatient}
                icon={sent ? 'check' : 'send'}
                className="flex-1"
                disabled={sent}
              >
                {sent ? 'Recordatorio enviado' : 'Enviar a paciente'}
              </Button>
              <Button
                variant="secondary"
                icon="visibility"
                className="flex-1"
                onClick={() => setDetailsOpen((v) => !v)}
              >
                {detailsOpen ? 'Ocultar detalles' : 'Ver detalles'}
              </Button>
            </div>

            {/* Detalles desplegables */}
            {detailsOpen && (
              <div className="mb-10 rounded-xl border border-outline-variant bg-surface-container-low p-6 text-left">
                <h4 className="mb-4 text-headline-sm text-on-surface">Detalles de la sesión</h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-label-sm uppercase text-on-surface-variant">Paciente</p>
                    <p className="text-body-md font-semibold text-on-surface">Sofia Martínez</p>
                  </div>
                  <div>
                    <p className="text-label-sm uppercase text-on-surface-variant">Servicio</p>
                    <p className="text-body-md font-semibold text-on-surface">Terapia Individual</p>
                  </div>
                  <div>
                    <p className="text-label-sm uppercase text-on-surface-variant">Psicóloga</p>
                    <p className="text-body-md font-semibold text-on-surface">Dra. Carmen Ruiz</p>
                  </div>
                  <div>
                    <p className="text-label-sm uppercase text-on-surface-variant">
                      Método de pago
                    </p>
                    <p className="text-body-md font-semibold text-on-surface">
                      Tarjeta de crédito •••• 4821
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Soporte */}
            <div className="border-t border-outline-variant pt-8 text-center md:text-left">
              <p className="mb-4 text-body-sm italic text-on-surface-variant">
                &ldquo;Tu bienestar mental es nuestra prioridad. Si tienes dificultades para
                realizar el pago o alguna duda sobre el cargo, por favor no dudes en
                contactarnos.&rdquo;
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Link to="/" className="text-label-md text-primary hover:underline">
                  Contactar soporte
                </Link>
                <span className="text-outline-variant">•</span>
                <Link to="/pagos" className="text-label-md text-primary hover:underline">
                  Ir a pagos pendientes
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-2 bg-gradient-to-r from-primary via-tertiary to-primary-container" />
      </div>

      {/* Contexto adicional */}
      <div className="mt-12 grid grid-cols-1 gap-gutter md:grid-cols-3">
        <div className="flex items-center gap-6 rounded-xl border border-outline-variant/30 bg-surface-container-low p-6 md:col-span-2">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary-fixed text-3xl font-bold text-primary shadow-sm">
            AR
          </div>
          <div>
            <h3 className="text-headline-sm text-on-surface">Dr. Alejandro Rivera</h3>
            <p className="text-body-sm text-on-surface-variant">
              Tu próxima cita: 20 de Mayo, 10:00 AM
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-xl border border-outline-variant/30 bg-surface-container-low p-6">
          <p className="mb-2 text-label-sm uppercase text-on-surface-variant">Seguridad</p>
          <div className="flex items-center gap-2">
            <Icon name="security" className="text-primary" />
            <p className="font-semibold text-body-sm text-on-surface">Pagos 100% cifrados</p>
          </div>
        </div>
      </div>
    </div>
  )
}

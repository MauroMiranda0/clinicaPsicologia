import { useState } from 'react'
import Icon from '../components/ui/Icon.jsx'
import Button from '../components/ui/Button.jsx'
import { useToast } from '../components/layout/ToastContext.jsx'
import { SERVICES, TIME_SLOTS, CALENDAR_DAYS, UNAVAILABLE_DAYS } from '../data/agenda.js'

const STEPS = ['Servicio', 'Horario', 'Confirmación']

export default function AgendarCita() {
  const showToast = useToast()
  const [step, setStep] = useState(1)
  const [serviceId, setServiceId] = useState(SERVICES[0].id)
  const [day, setDay] = useState(5)
  const [time, setTime] = useState('11:30 AM')
  const [confirmed, setConfirmed] = useState(false)

  const service = SERVICES.find((s) => s.id === serviceId)

  const canNext = step === 1 ? true : step === 2 ? Boolean(day && time) : true

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
      return
    }
    setConfirmed(true)
    showToast('Cita confirmada correctamente')
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const reset = () => {
    setConfirmed(false)
    setStep(1)
    setServiceId(SERVICES[0].id)
    setDay(5)
    setTime('11:30 AM')
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-2xl px-margin-mobile pb-20 pt-32 text-center">
        <div className="rounded-3xl border border-outline-variant bg-surface-container-lowest p-10 shadow-sm">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Icon name="check_circle" className="text-5xl" filled />
          </div>
          <h1 className="mb-2 text-headline-lg text-on-surface">¡Cita confirmada!</h1>
          <p className="mb-8 text-body-md text-on-surface-variant">
            Hemos registrado tu sesión de{' '}
            <strong className="text-on-surface">{service.name}</strong> el día{' '}
            <strong className="text-on-surface">{day} de noviembre</strong> a las{' '}
            <strong className="text-on-surface">{time}</strong>. Te enviaremos un recordatorio por
            correo.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button onClick={reset} variant="secondary" icon="replay">
              Agendar otra cita
            </Button>
            <Button icon="calendar_month">Descargar recordatorio</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-margin-mobile pb-20 pt-28">
      <header className="mb-12 text-center md:text-left">
        <h1 className="mb-2 text-headline-lg text-on-surface">Agendar una sesión</h1>
        <p className="max-w-2xl text-body-md text-on-surface-variant">
          Elige el tipo de apoyo que necesitas y encuentra el momento que mejor se adapte a tu ritmo
          de vida. Estamos aquí para acompañarte.
        </p>
      </header>

      <div className="mb-12 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
        {/* Stepper */}
        <div className="scrollbar-hide overflow-x-auto border-b border-outline-variant bg-surface-container-low px-4 py-4 sm:px-8">
          <div className="flex min-w-max">
            {STEPS.map((label, i) => {
              const num = i + 1
              const active = num === step
              const done = num < step
              return (
                <div key={label} className="flex items-center">
                  {i > 0 && (
                    <div className="mx-2 h-px w-4 self-center bg-outline-variant sm:mx-4 sm:w-8" />
                  )}
                  <div
                    className={`flex items-center gap-2 text-label-md ${
                      active
                        ? 'text-primary'
                        : done
                          ? 'text-primary'
                          : 'text-on-surface-variant opacity-50'
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] ${
                        active || done
                          ? 'bg-primary text-on-primary'
                          : 'border border-outline text-on-surface-variant'
                      }`}
                    >
                      {done ? <Icon name="check" className="text-[12px]" /> : num}
                    </span>
                    <span>{label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div>
              <h2 className="mb-6 text-headline-sm text-on-surface">
                Selecciona el tipo de atención
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setServiceId(s.id)}
                    className={`relative flex flex-col rounded-xl border-2 p-6 text-left transition-all ${
                      serviceId === s.id
                        ? 'border-primary bg-surface-container-low'
                        : 'border-outline-variant hover:border-primary-container hover:bg-surface-container-low'
                    }`}
                  >
                    <span
                      className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        serviceId === s.id
                          ? 'border-primary bg-primary text-on-primary'
                          : 'border-outline'
                      }`}
                    >
                      {serviceId === s.id && <Icon name="check" className="text-[12px]" />}
                    </span>
                    <Icon name={s.icon} className="mb-4 text-4xl text-primary" />
                    <span className="mb-1 text-headline-sm text-on-surface">{s.name}</span>
                    <span className="mb-4 text-body-sm text-on-surface-variant">
                      {s.description}
                    </span>
                    <span className="mt-auto text-label-md text-primary">{s.priceLabel}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="mb-6 text-headline-sm text-on-surface">
                Disponibilidad para Noviembre
              </h2>
              <div className="flex flex-col gap-8 lg:flex-row">
                {/* Calendario */}
                <div className="flex-1">
                  <div className="rounded-xl border border-outline-variant bg-surface-container p-6">
                    <div className="mb-6 flex items-center justify-between px-2">
                      <h3 className="text-headline-sm">Noviembre 2024</h3>
                      <div className="flex gap-2">
                        <Button
                          icon="chevron_left"
                          iconOnly
                          variant="plain"
                          size="sm"
                          aria-label="Mes anterior"
                        />
                        <Button
                          icon="chevron_right"
                          iconOnly
                          variant="plain"
                          size="sm"
                          aria-label="Mes siguiente"
                        />
                      </div>
                    </div>
                    <div className="calendar-grid mb-4 text-center text-label-sm text-on-surface-variant">
                      {['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'].map((d) => (
                        <span key={d}>{d}</span>
                      ))}
                    </div>
                    <div className="calendar-grid gap-1">
                      {CALENDAR_DAYS.map((d) => {
                        const unavailable = UNAVAILABLE_DAYS.includes(d)
                        const selected = day === d
                        return (
                          <button
                            key={d}
                            disabled={unavailable}
                            onClick={() => setDay(d)}
                            className={`flex h-10 w-full items-center justify-center rounded-lg text-body-md transition-colors disabled:cursor-not-allowed disabled:text-on-surface-variant disabled:opacity-40 ${
                              selected
                                ? 'bg-primary font-bold text-on-primary shadow-md'
                                : unavailable
                                  ? ''
                                  : 'text-on-surface hover:bg-primary-fixed hover:text-primary'
                            }`}
                          >
                            {d}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="w-full lg:w-72">
                  <h4 className="mb-4 text-label-md uppercase tracking-wider text-on-surface-variant">
                    Horarios Disponibles
                  </h4>
                  <div className="scrollbar-hide grid max-h-[400px] grid-cols-2 gap-3 overflow-y-auto pr-2 lg:grid-cols-1">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`rounded-lg border py-3 px-4 text-center text-label-md transition-all ${
                          time === slot
                            ? 'border-primary bg-primary-fixed font-bold text-primary'
                            : 'border-outline-variant hover:border-primary hover:bg-surface-container'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 text-primary">
                <Icon name="event_available" className="text-4xl" />
              </div>
              <h2 className="mb-2 text-headline-md text-on-surface">Revisa tu selección</h2>
              <p className="mb-8 text-body-md text-on-surface-variant">
                Verifica que los datos sean correctos antes de confirmar tu cita.
              </p>
              <div className="mb-8 space-y-4 rounded-xl border border-outline-variant bg-surface-container-low p-6 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-on-surface-variant">Servicio</span>
                  <span className="text-body-md font-semibold text-on-surface">{service.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-on-surface-variant">Fecha</span>
                  <span className="text-body-md font-semibold text-on-surface">
                    {day} de noviembre, 2024
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-on-surface-variant">Horario</span>
                  <span className="text-body-md font-semibold text-on-surface">{time}</span>
                </div>
                <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                  <span className="text-body-sm text-on-surface-variant">Costo</span>
                  <span className="text-headline-sm font-bold text-primary">
                    {service.priceLabel}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Acciones */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-outline-variant pt-8 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10 text-primary">
                <Icon name="event_available" />
              </div>
              <div>
                <p className="text-label-md text-on-surface-variant">Resumen de selección:</p>
                <p className="text-body-md font-semibold text-on-surface">
                  {service.name} • {day} Nov, {time}
                </p>
              </div>
            </div>
            <div className="flex w-full gap-4 md:w-auto">
              {step > 1 && (
                <Button
                  variant="secondary"
                  onClick={handleBack}
                  icon="arrow_back"
                  className="w-full md:w-auto"
                >
                  Atrás
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!canNext}
                icon="check"
                className="flex-1 md:flex-none"
              >
                {step === 3 ? 'Confirmar cita' : 'Continuar'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Confianza */}
      <section className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
        {[
          {
            icon: 'lock',
            title: 'Confidencialidad',
            text: 'Toda tu información está protegida por el secreto profesional.',
          },
          {
            icon: 'update',
            title: 'Flexibilidad',
            text: 'Puedes reprogramar o cancelar sin cargo hasta 24 horas antes.',
          },
          {
            icon: 'verified',
            title: 'Profesionalismo',
            text: 'Especialistas con certificaciones requeridas y experiencia clínica.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl bg-surface-container-low p-6">
            <Icon name={item.icon} className="mb-3 text-primary" />
            <h4 className="mb-2 text-headline-sm">{item.title}</h4>
            <p className="text-body-sm text-on-surface-variant">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

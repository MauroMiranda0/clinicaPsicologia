import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon.jsx'
import Button from '../components/ui/Button.jsx'
import StatusChip from '../components/ui/StatusChip.jsx'
import { useToast } from '../components/layout/ToastContext.jsx'
import { STATS, PATIENTS, QUICK_ACTIONS } from '../data/pacientes.js'

const STAT_TONES = {
  primary: 'bg-primary/10 text-primary',
  error: 'bg-error/10 text-error',
  tertiary: 'bg-tertiary/10 text-tertiary',
}

export default function PanelDashboard() {
  const showToast = useToast()
  const [patients, setPatients] = useState(PATIENTS)

  const toggleStatus = (id) => {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              status: p.status === 'Confirmado' ? 'Pendiente' : 'Confirmado',
              tone: p.status === 'Confirmado' ? 'neutral' : 'primary',
            }
          : p,
      ),
    )
    showToast('Estado de la cita actualizado')
  }

  return (
    <div className="mx-auto w-full max-w-max-width px-margin-mobile py-24 md:px-margin-desktop">
      <div className="mb-8">
        <h1 className="mb-2 text-headline-lg text-on-surface">Bienvenido, Dr. Valencia</h1>
        <p className="text-body-md text-on-surface-variant">
          Aquí tienes el resumen de tu actividad para hoy.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 grid grid-cols-1 gap-gutter md:grid-cols-3">
        {STATS.map((stat) => (
          <div
            key={stat.id}
            className="glass-card flex items-center gap-4 rounded-xl p-6 shadow-sm"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg ${STAT_TONES[stat.tone]}`}
            >
              <Icon name={stat.icon} />
            </div>
            <div>
              <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                {stat.label}
              </p>
              <h3 className="text-headline-md text-on-surface">
                {stat.value}{' '}
                {stat.suffix && (
                  <span className="text-label-md font-normal text-on-surface-variant">
                    {stat.suffix}
                  </span>
                )}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-3">
        {/* Tabla pacientes */}
        <div className="glass-card flex flex-col overflow-hidden rounded-xl shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-outline-variant bg-white px-6 py-5">
            <h2 className="text-headline-sm text-on-surface">Próximos Pacientes</h2>
            <Link to="/agendar" className="text-label-md text-primary hover:underline">
              Ver calendario
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-outline-variant bg-surface-container-low">
                <tr>
                  <th className="px-6 py-4 text-label-sm text-on-surface-variant">PACIENTE</th>
                  <th className="px-6 py-4 text-label-sm text-on-surface-variant">HORARIO</th>
                  <th className="px-6 py-4 text-label-sm text-on-surface-variant">ESTADO</th>
                  <th className="px-6 py-4 text-right text-label-sm text-on-surface-variant">
                    ACCIONES
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {patients.map((patient) => (
                  <tr
                    key={patient.id}
                    className="h-14 transition-colors hover:bg-surface-container-lowest"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-xs font-bold text-on-secondary-container">
                          {patient.initials}
                        </div>
                        <span className="text-body-md font-medium text-on-surface">
                          {patient.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-on-surface-variant">
                      {patient.time}
                    </td>
                    <td className="px-6 py-4">
                      <StatusChip status={patient.status} tone={patient.tone} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          onClick={() => showToast(`Ficha de ${patient.name} abierta`)}
                          icon="description"
                          iconOnly
                          variant="plain"
                          size="sm"
                          title="Ver ficha"
                        />
                        <Button
                          onClick={() => toggleStatus(patient.id)}
                          icon={patient.status === 'Confirmado' ? 'toggle_on' : 'toggle_off'}
                          iconOnly
                          variant="plain"
                          size="sm"
                          iconFilled={patient.status === 'Confirmado'}
                          title="Cambiar estado"
                        />
                        <Button
                          onClick={() => showToast(`Mensaje enviado a ${patient.name}`)}
                          icon="chat"
                          iconOnly
                          variant="plain"
                          size="sm"
                          title="Mensaje"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-outline-variant bg-surface-container-lowest p-4 text-center">
            <Link to="/pagos" className="text-label-md font-semibold text-primary hover:opacity-80">
              Ver todos los pacientes
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-gutter">
          <div className="glass-card rounded-xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 p-6 shadow-sm">
            <h3 className="mb-4 text-headline-sm text-on-surface">Promedio de Bienestar</h3>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">7.8</span>
                <span className="text-label-sm text-on-surface-variant">Semana actual</span>
              </div>
              <div className="animate-spin-slow h-16 w-16 rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
            <div className="flex h-20 items-end justify-between gap-2">
              {[40, 60, 55, 80, 70, 45, 30].map((h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t-sm bg-primary/20`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="mt-4 text-body-sm italic text-on-surface-variant">
              La tendencia de mejora se mantiene constante en el grupo A.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 shadow-sm">
            <h3 className="mb-4 text-label-sm uppercase tracking-widest text-on-surface-variant">
              Acciones Rápidas
            </h3>
            <div className="space-y-3">
              {QUICK_ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  to="/"
                  onClick={(e) => {
                    e.preventDefault()
                    showToast(`${action.label}: acción registrada`)
                  }}
                  className="group flex w-full items-center justify-between rounded-lg bg-surface-container p-3 transition-all hover:bg-primary hover:text-white"
                >
                  <span className="text-label-md font-medium">{action.label}</span>
                  <Icon
                    name={action.icon}
                    className="text-sm transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

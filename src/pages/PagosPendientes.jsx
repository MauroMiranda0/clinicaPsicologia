import { useMemo, useState } from 'react'
import Icon from '../components/ui/Icon.jsx'
import StatusChip from '../components/ui/StatusChip.jsx'
import Button from '../components/ui/Button.jsx'
import { useToast } from '../components/layout/ToastContext.jsx'
import { PAYMENTS, STATUS_OPTIONS } from '../data/pagos.js'

const TONE_BY_STATUS = {
  Overdue: 'error',
  Pending: 'warning',
  Processing: 'info',
}

export default function PagosPendientes() {
  const showToast = useToast()
  const [payments, setPayments] = useState(PAYMENTS)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('Todas')
  const [sentReminder, setSentReminder] = useState({})

  const filtered = useMemo(() => {
    return payments.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase())
      const matchesStatus = status === 'Todas' || p.status === status
      return matchesQuery && matchesStatus
    })
  }, [payments, query, status])

  const sendReminder = (payment) => {
    setSentReminder((prev) => ({ ...prev, [payment.id]: true }))
    showToast(`Recordatorio enviado a ${payment.name}`)
  }

  const collectPayment = (payment) => {
    setPayments((prev) =>
      prev.map((p) => (p.id === payment.id ? { ...p, status: 'Processing', tone: 'info' } : p)),
    )
    setSentReminder((prev) => ({ ...prev, [payment.id]: true }))
    showToast(`Cobro iniciado para ${payment.name}`)
  }

  const exportReport = () => {
    const csv = [
      ['Paciente', 'Fecha', 'Monto', 'Estado'],
      ...filtered.map((p) => [p.name, p.date, p.amount, p.status]),
    ]
      .map((row) => row.join(','))
      .join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'pagos-pendientes.csv'
    a.click()
    URL.revokeObjectURL(url)
    showToast('Reporte exportado correctamente')
  }

  return (
    <div className="mx-auto w-full max-w-max-width px-margin-mobile py-24 md:px-margin-desktop">
      {/* Header */}
      <div className="mb-10 grid grid-cols-1 items-end gap-gutter md:grid-cols-12">
        <div className="md:col-span-8">
          <h1 className="mb-2 text-headline-lg text-on-surface">Pagos Pendientes</h1>
          <p className="text-body-md text-on-surface-variant">
            Gestiona las facturas pendientes y el estado de los ingresos de la clínica.
          </p>
        </div>
        <div className="flex justify-end md:col-span-4">
          <div className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface-container-high px-4 py-3">
            <div className="rounded-lg bg-primary-container p-2">
              <Icon name="account_balance_wallet" className="text-on-primary-container" />
            </div>
            <div>
              <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                Total Pendiente
              </p>
              <p className="text-headline-sm font-bold text-primary">$12,450.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <section className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-outline-variant bg-surface-container-low p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[200px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
              <Icon name="search" />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar paciente..."
              type="text"
              className="w-full rounded-lg border border-outline-variant bg-surface py-2 pl-10 pr-4 text-body-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </div>
          <label className="flex items-center gap-2 rounded-lg border border-outline-variant bg-surface px-3 py-2">
            <Icon name="filter_list" className="text-sm text-on-surface-variant" />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-transparent text-label-md text-on-surface outline-none"
            >
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </label>
        </div>
        <Button variant="secondary" icon="download" onClick={exportReport}>
          Exportar reporte
        </Button>
      </section>

      {/* Tabla */}
      <section className="overflow-hidden rounded-xl border border-outline-variant bg-surface shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="border-b border-outline-variant bg-surface-container-low">
              <tr>
                <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Paciente
                </th>
                <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Fecha de sesión
                </th>
                <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Monto
                </th>
                <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Estado
                </th>
                <th className="px-6 py-4 text-right text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-12 text-center text-body-md text-on-surface-variant"
                  >
                    No se encontraron pagos con los filtros seleccionados.
                  </td>
                </tr>
              )}
              {filtered.map((payment) => (
                <tr key={payment.id} className="table-row-hover transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container font-bold text-primary">
                        {payment.initials}
                      </div>
                      <div>
                        <p className="text-body-md font-semibold text-on-surface">{payment.name}</p>
                        <p className="text-label-sm text-on-surface-variant">{payment.detail}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-body-sm text-on-surface">{payment.date}</p>
                    <p className="text-label-sm text-on-surface-variant">{payment.time}</p>
                  </td>
                  <td className="px-6 py-4 text-body-md font-bold text-on-surface">
                    {payment.amount}
                  </td>
                  <td className="px-6 py-4">
                    <StatusChip status={payment.status} tone={TONE_BY_STATUS[payment.status]} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      {payment.status !== 'Overdue' ? (
                        <span className="text-label-sm text-on-surface-variant">Procesado</span>
                      ) : (
                        <>
                          <Button
                            onClick={() => sendReminder(payment)}
                            icon={sentReminder[payment.id] ? 'task_alt' : 'mail'}
                            iconOnly
                            variant="ghost"
                            size="sm"
                            title="Enviar recordatorio"
                          />
                          <Button onClick={() => collectPayment(payment)} size="sm">
                            Cobrar
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-outline-variant bg-surface-container-low px-6 py-4">
          <p className="text-label-md text-on-surface-variant">
            Mostrando {filtered.length} de 24 resultados
          </p>
          <div className="flex gap-2">
            <Button
              icon="chevron_left"
              iconOnly
              variant="outline"
              size="sm"
              disabled
              aria-label="Anterior"
            />
            {[1, 2, 3].map((n) => (
              <Button key={n} variant={n === 1 ? 'primary' : 'outline'} size="sm">
                {n}
              </Button>
            ))}
            <Button
              icon="chevron_right"
              iconOnly
              variant="outline"
              size="sm"
              aria-label="Siguiente"
            />
          </div>
        </div>
      </section>

      {/* Sección inferior */}
      <section className="mt-12 grid grid-cols-1 gap-gutter md:grid-cols-3">
        <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6">
          <h3 className="mb-4 text-headline-sm">Salud de Pagos</h3>
          <div className="flex h-32 items-end gap-2">
            <div className="flex-1 rounded-t-lg bg-primary" style={{ height: '80%' }} />
            <div className="flex-1 rounded-t-lg bg-primary opacity-60" style={{ height: '40%' }} />
            <div className="flex-1 rounded-t-lg bg-primary opacity-40" style={{ height: '60%' }} />
            <div className="flex-1 rounded-t-lg bg-primary opacity-20" style={{ height: '30%' }} />
            <div className="flex-1 rounded-t-lg bg-primary" style={{ height: '90%' }} />
          </div>
          <p className="mt-4 text-body-sm text-on-surface-variant">
            La recaudación aumentó 12% respecto al mes anterior.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low p-6 md:col-span-2">
          <div className="relative z-10">
            <h3 className="mb-2 text-headline-sm">Automatizar recordatorios</h3>
            <p className="mb-6 max-w-md text-body-md text-on-surface-variant">
              Reduce los pagos vencidos un 40% con nuestro sistema de recordatorios inteligentes.
              Activa notificaciones automáticas por SMS y correo.
            </p>
            <Button icon="auto_mode" onClick={() => showToast('Automatización configurada')}>
              Configurar automatización
            </Button>
          </div>
          <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-primary opacity-5" />
          <div className="absolute right-10 top-10 text-primary opacity-10">
            <Icon name="auto_mode" className="text-[120px]" />
          </div>
        </div>
      </section>
    </div>
  )
}

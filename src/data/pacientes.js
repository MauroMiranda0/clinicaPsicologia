export const STATS = [
  {
    id: 'citas',
    label: 'Citas de la semana',
    value: '24',
    suffix: '',
    icon: 'calendar_month',
    tone: 'primary',
  },
  {
    id: 'pagos',
    label: 'Pagos pendientes',
    value: '12',
    suffix: 'casos',
    icon: 'pending_actions',
    tone: 'error',
  },
  {
    id: 'mensajes',
    label: 'Mensajes nuevos',
    value: '08',
    suffix: '',
    icon: 'chat_bubble',
    tone: 'tertiary',
  },
]

export const PATIENTS = [
  {
    id: 1,
    initials: 'EA',
    name: 'Elena Aranda',
    time: 'Hoy, 10:00 AM',
    status: 'Confirmado',
    tone: 'primary',
  },
  {
    id: 2,
    initials: 'RM',
    name: 'Ricardo Mendoza',
    time: 'Hoy, 11:30 AM',
    status: 'Pendiente',
    tone: 'neutral',
  },
  {
    id: 3,
    initials: 'LC',
    name: 'Lucía Castro',
    time: 'Ayer, 16:00 PM',
    status: 'Completado',
    tone: 'success',
  },
  {
    id: 4,
    initials: 'JV',
    name: 'Javier Vargas',
    time: 'Mañana, 09:00 AM',
    status: 'Confirmado',
    tone: 'primary',
  },
]

export const QUICK_ACTIONS = [
  { label: 'Nueva Nota Clínica', icon: 'arrow_forward', to: '/panel' },
  { label: 'Exportar Facturas', icon: 'download', to: '/pagos' },
  { label: 'Configurar Horario', icon: 'settings', to: '/agendar' },
]

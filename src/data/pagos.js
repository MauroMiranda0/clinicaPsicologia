export const PAYMENTS = [
  {
    id: 1,
    initials: 'EM',
    name: 'Elena Martínez',
    detail: 'Terapia Presencial',
    date: 'Oct 24, 2023',
    time: '14:00 - 15:00',
    amount: '$120.00',
    status: 'Overdue',
  },
  {
    id: 2,
    initials: 'JR',
    name: 'Julián Rivera',
    detail: 'Sesión en Línea',
    date: 'Oct 26, 2023',
    time: '09:30 - 10:30',
    amount: '$85.00',
    status: 'Pending',
  },
  {
    id: 3,
    initials: 'SC',
    name: 'Sofía Castro',
    detail: 'Terapia de Pareja',
    date: 'Oct 27, 2023',
    time: '11:00 - 12:30',
    amount: '$150.00',
    status: 'Processing',
  },
  {
    id: 4,
    initials: 'AO',
    name: 'Alejandro Ortiz',
    detail: 'Consulta Inicial',
    date: 'Oct 28, 2023',
    time: '16:00 - 17:00',
    amount: '$95.00',
    status: 'Overdue',
  },
]

export const STATUS_OPTIONS = ['Todas', 'Overdue', 'Pending', 'Processing']

export const SERVICES = [
  {
    id: 'individual',
    name: 'Terapia Individual',
    description: 'Sesión personalizada de 50 minutos para adultos y jóvenes.',
    priceLabel: '$75.00 / sesión',
    icon: 'person',
  },
  {
    id: 'pareja',
    name: 'Terapia de Pareja',
    description: 'Espacio de mediación y crecimiento para fortalecer vínculos.',
    priceLabel: '$95.00 / sesión',
    icon: 'groups',
  },
  {
    id: 'evaluacion',
    name: 'Evaluación Inicial',
    description: 'Primera consulta para determinar el plan de tratamiento óptimo.',
    priceLabel: '$50.00 / única',
    icon: 'clinical_notes',
  },
]

export const TIME_SLOTS = ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM']

export const CALENDAR_DAYS = [
  28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
]

export const UNAVAILABLE_DAYS = [9, 10, 16, 17]

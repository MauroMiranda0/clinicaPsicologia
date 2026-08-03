const TONES = {
  primary: 'bg-primary/15 text-primary',
  neutral: 'bg-surface-container-highest text-secondary',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-amber-100 text-amber-800',
  info: 'bg-blue-100 text-blue-800',
  error: 'bg-red-100 text-red-800',
}

export default function StatusChip({ status, tone = 'neutral' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-semibold ${TONES[tone]}`}
    >
      {status}
    </span>
  )
}

import Icon from './Icon.jsx'

const VARIANTS = {
  primary: 'bg-primary text-on-primary hover:bg-primary-container shadow-md',
  secondary:
    'bg-surface-container-low text-primary border border-outline-variant hover:bg-surface-container-high',
  ghost: 'text-primary hover:bg-primary/5',
  outline: 'border border-outline-variant text-on-surface hover:bg-surface-container',
}

export default function Button({
  children,
  icon,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-xl text-headline-sm transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {icon && <Icon name={icon} />}
      {children}
    </button>
  )
}

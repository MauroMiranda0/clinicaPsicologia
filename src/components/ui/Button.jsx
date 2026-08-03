import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const VARIANTS = {
  primary: 'bg-primary text-on-primary hover:bg-primary-container shadow-md',
  secondary:
    'bg-surface-container-low text-primary border border-outline-variant hover:bg-surface-container-high',
  ghost: 'text-primary hover:bg-primary/5',
  outline: 'border border-outline-variant text-on-surface hover:bg-surface-container',
  plain: 'text-on-surface-variant hover:bg-surface-container hover:text-primary',
  light: 'bg-white text-primary hover:bg-surface-bright shadow-md',
  onDark:
    'border border-white/30 bg-primary-container/20 text-on-primary hover:bg-primary-container/40',
}

const SIZES = {
  sm: 'rounded-lg px-3 py-1.5 text-label-md',
  md: 'rounded-xl px-5 py-2.5 text-headline-sm',
}

const ICON_ONLY_PADDING = {
  sm: 'px-2 py-2',
  md: 'px-2.5 py-2.5',
}

export default function Button({
  children,
  icon,
  iconOnly = false,
  iconFilled = false,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  disabled = false,
  to,
  href,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl text-headline-sm transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]} ${SIZES[size]} ${iconOnly ? ICON_ONLY_PADDING[size] : ''} ${className}`

  const content = (
    <>
      {icon && <Icon name={icon} filled={iconFilled} />}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...props}>
      {content}
    </button>
  )
}

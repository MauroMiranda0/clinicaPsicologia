import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import Button from '../ui/Button.jsx'
import { NAV_ITEMS } from '../../data/site.js'

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-outline-variant bg-surface shadow-sm transition-all duration-300 ${
        scrolled ? 'h-14 bg-surface/90 backdrop-blur-md' : 'h-16'
      }`}
    >
      <div className="mx-auto flex h-full max-w-max-width items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="psychology" className="text-primary text-3xl" />
          <span className="text-headline-md font-bold text-primary">PsycheCare</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-label-md font-medium transition-colors duration-200 ${
                  isActive
                    ? 'border-b-2 border-primary pb-1 font-bold text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button icon="notifications" iconOnly variant="plain" aria-label="Notificaciones" />
          <Button to="/agendar" className="max-md:hidden md:inline-flex" size="sm">
            Reservar cita
          </Button>
          <Button
            className="md:hidden"
            icon={mobileOpen ? 'close' : 'menu'}
            iconOnly
            variant="plain"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menú"
          />
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-outline-variant bg-surface px-margin-mobile py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-label-md font-medium ${
                    isActive ? 'font-bold text-primary' : 'text-on-surface-variant'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

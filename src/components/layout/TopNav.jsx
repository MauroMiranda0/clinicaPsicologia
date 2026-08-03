import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
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
          <button
            className="hidden rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container md:block"
            aria-label="Notificaciones"
          >
            <Icon name="notifications" />
          </button>
          <Link
            to="/agendar"
            className="hidden rounded-full bg-primary px-6 py-2 text-label-md text-on-primary transition-opacity hover:opacity-90 md:block"
          >
            Reservar cita
          </Link>
          <button
            className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menú"
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-outline-variant bg-surface px-margin-mobile py-4 md:hidden">
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

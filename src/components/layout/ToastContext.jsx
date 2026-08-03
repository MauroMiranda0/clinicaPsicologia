import { createContext, useCallback, useContext, useRef, useState } from 'react'
import Icon from '../ui/Icon.jsx'

const ToastContext = createContext(() => {})

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  return useContext(ToastContext)
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timerRef = useRef(null)

  const showToast = useCallback((message, type = 'success') => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setToast({ message, type })
    timerRef.current = setTimeout(() => setToast(null), 3500)
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div
        aria-live="polite"
        className={`fixed bottom-8 right-8 z-[100] flex items-center gap-3 rounded-lg bg-inverse-surface px-6 py-3 text-inverse-on-surface shadow-xl transition-all duration-300 ${
          toast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <Icon
          name={toast?.type === 'success' ? 'check_circle' : 'info'}
          className={toast?.type === 'success' ? 'text-green-400' : 'text-primary-fixed-dim'}
        />
        <span className="text-label-md">{toast?.message}</span>
      </div>
    </ToastContext.Provider>
  )
}

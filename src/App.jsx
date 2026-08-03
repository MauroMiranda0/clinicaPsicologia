import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import { ToastProvider } from './components/layout/ToastContext.jsx'
import Home from './pages/Home.jsx'
import AgendarCita from './pages/AgendarCita.jsx'
import PanelDashboard from './pages/PanelDashboard.jsx'
import PagosPendientes from './pages/PagosPendientes.jsx'
import RecordatorioPago from './pages/RecordatorioPago.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/agendar" element={<AgendarCita />} />
          <Route path="/panel" element={<PanelDashboard />} />
          <Route path="/pagos" element={<PagosPendientes />} />
          <Route path="/recordatorio" element={<RecordatorioPago />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ToastProvider>
  )
}

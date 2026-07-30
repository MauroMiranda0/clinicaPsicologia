import { BellRing, Calendar, Wallet } from 'lucide-react';
import Button from '../ui/Button';

export default function ReminderPage({ navigate }) {
  return <section className="page narrow reminder">
    <div className="reminder-hero"><span><BellRing /></span><h1>Recordatorio de pago</h1><p>PsycheCare · Departamento de facturación</p></div>
    <div className="letter">
      <h2>Hola <b>Sofia Castro,</b></h2>
      <p>Esperamos que te encuentres bien. Te escribimos para recordarte que tienes un <strong>pago pendiente</strong> correspondiente a tu sesión de terapia de pareja.</p>
      <div className="invoice"><span><Calendar /><small>FECHA DE SESIÓN</small><b>27 de octubre, 2026</b></span><span><Wallet /><small>MONTO PENDIENTE</small><b>$150.00 USD</b></span><span><small>ESTADO DE CUENTA</small><em>Pendiente</em><p>Vencimiento: 30 oct, 2026</p></span></div>
      <div className="letter-actions"><Button>Pagar ahora</Button><Button secondary>Ver detalles</Button></div>
      <hr /><i>“Tu bienestar mental es nuestra prioridad. Si tienes alguna duda, estamos para ayudarte.”</i>
      <div><a>Contactar soporte</a> · <a onClick={() => navigate('booking')}>Agendar Cita</a></div>
    </div>
  </section>;
}

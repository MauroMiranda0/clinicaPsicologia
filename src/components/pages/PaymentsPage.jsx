import { Calendar, Download, Filter, Mail, Search, Sparkles, Wallet } from 'lucide-react';
import { useEffect } from 'react';
import Button from '../ui/Button';

const payments = [
  ['Elena Martínez', '24 Oct, 2026', '$120.00', 'Vencido'],
  ['Julián Rivera', '26 Oct, 2026', '$85.00', 'Pendiente'],
  ['Sofia Castro', '27 Oct, 2026', '$150.00', 'Procesando'],
  ['Alejandro Ortiz', '28 Oct, 2026', '$95.00', 'Vencido'],
];

export default function PaymentsPage({ navigate }) {
  useEffect(() => {
    window.handleAction = (message) => {
      if (message === 'Reminder sent to Sofia Castro') navigate('reminder', 'slide-up');
    };
    const reminderButton = document.querySelector('[data-reminder="sofia"]');
    reminderButton?.setAttribute('onclick', "handleAction('Reminder sent to Sofia Castro')");
    return () => { delete window.handleAction; };
  }, [navigate]);

  return <section className="page">
    <div className="title-row"><div><span className="kicker">FINANZAS</span><h1>Pagos pendientes</h1><p className="lead">Gestiona facturas pendientes y mantén tus ingresos al día.</p></div><div className="total"><Wallet /><span><small>TOTAL PENDIENTE</small><b>$12,450.00</b></span></div></div>
    <div className="filters"><label><Search /><input aria-label="Buscar paciente" placeholder="Buscar paciente..." /></label><button><Calendar /> Últimos 30 días</button><button><Filter /> Todos los estados</button><button className="export"><Download /> Exportar</button></div>
    <div className="payments-table">
      <div className="table-head"><span>Paciente</span><span>Fecha de sesión</span><span>Importe</span><span>Estado</span><span>Acciones</span></div>
      {payments.map((payment) => <div className="payment-row" key={payment[0]}><span><i className="avatar">{payment[0].split(' ').map((part) => part[0]).join('')}</i><b>{payment[0]}</b></span><span>{payment[1]}</span><b>{payment[2]}</b><em className={payment[3].toLowerCase()}>{payment[3]}</em><span><button aria-label={`Enviar recordatorio a ${payment[0]}`} data-reminder={payment[0] === 'Sofia Castro' ? 'sofia' : undefined}><Mail /></button><button>Cobrar</button></span></div>)}
    </div>
    <div className="insights"><article><h3>Salud de pagos</h3><div className="bars">{[55, 35, 48, 28, 70].map((height, index) => <i key={index} style={{ height }} />)}</div><p>La recaudación subió un 12% este mes.</p></article><article><Sparkles /><div><h3>Automatiza tus recordatorios</h3><p>Reduce los pagos atrasados con avisos inteligentes y empáticos.</p><Button>Configurar automatización</Button></div></article></div>
  </section>;
}

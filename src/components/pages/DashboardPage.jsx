import { CalendarDays, FileText, MessageSquare, WalletCards } from 'lucide-react';

const patients = [['Elena Aranda', 'Hoy, 10:00 AM', 'Confirmado'], ['Ricardo Mendoza', 'Hoy, 11:30 AM', 'Pendiente'], ['Lucía Castro', 'Ayer, 4:00 PM', 'Completado'], ['Javier Vargas', 'Mañana, 9:00 AM', 'Confirmado']];
const stats = [[CalendarDays, 'Citas de la semana', '24'], [WalletCards, 'Pagos pendientes', '12'], [MessageSquare, 'Mensajes nuevos', '08']];

export default function DashboardPage() {
  return <section className="page"><span className="kicker">PANEL DE PACIENTES</span><h1>Buenos días, Dr. Valencia</h1><p className="lead">Aquí tienes el resumen de tu actividad para hoy.</p>
    <div className="stats">{stats.map(([Icon, label, value]) => <article key={label}><Icon /><span><small>{label}</small><b>{value}</b></span></article>)}</div>
    <div className="dashboard-grid"><div className="panel"><div className="panel-title"><h2>Próximos pacientes</h2><a>Ver calendario</a></div><div className="patient-table">{patients.map((patient) => <div key={patient[0]}><span className="avatar">{patient[0].split(' ').map((part) => part[0]).join('')}</span><b>{patient[0]}</b><span>{patient[1]}</span><em className={patient[2].toLowerCase()}>{patient[2]}</em><FileText /></div>)}</div></div>
      <div><div className="wellbeing"><span className="kicker">BIENESTAR</span><h2>Promedio de bienestar</h2><b>7.8</b><div className="bars">{[40, 62, 55, 80, 68, 48, 35].map((height, index) => <i key={index} style={{ height }} />)}</div><p>La tendencia de mejora se mantiene constante.</p></div><div className="quick"><h3>Acciones rápidas</h3><button>Nueva nota clínica →</button><button>Exportar facturas ↓</button><button>Configurar horario ⚙</button></div></div>
    </div>
  </section>;
}

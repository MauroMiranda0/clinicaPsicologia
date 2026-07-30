import { CalendarCheck, HeartPulse } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';

const services = [['Terapia individual', '50 minutos · $75'], ['Terapia de pareja', '60 minutos · $95'], ['Evaluación inicial', 'Primera consulta · $50']];
const times = ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM'];

export default function BookingPage() {
  const [service, setService] = useState(0);
  const [time, setTime] = useState('11:30 AM');
  const [confirmed, setConfirmed] = useState(false);
  return <section className="page narrow">
    <span className="kicker">AGENDA EN LÍNEA</span><h1>Agenda tu próxima sesión</h1><p className="lead">Elige el tipo de apoyo y el horario que mejor se adapte a ti.</p>
    <div className="booking-card">
      <div className="steps"><b>1 <span>Servicio</span></b><b>2 <span>Horario</span></b><b>3 <span>Confirmación</span></b></div>
      <h2>¿Cómo podemos acompañarte?</h2>
      <div className="service-options">{services.map((item, index) => <button className={service === index ? 'selected' : ''} onClick={() => { setService(index); setConfirmed(false); }} key={item[0]}><HeartPulse /><b>{item[0]}</b><small>{item[1]}</small></button>)}</div>
      <div className="schedule">
        <div><h3>Noviembre 2026</h3><div className="calendar"><b>L</b><b>M</b><b>X</b><b>J</b><b>V</b><b>S</b><b>D</b>{[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((day) => <span key={day} className={day === 5 ? 'day' : ''}>{day}</span>)}</div></div>
        <div><h3>Horarios disponibles</h3><div className="times">{times.map((item) => <button key={item} className={time === item ? 'selected' : ''} onClick={() => { setTime(item); setConfirmed(false); }}>{item}</button>)}</div></div>
      </div>
      <div className="booking-summary"><span><CalendarCheck /><small>Tu selección</small><b>{services[service][0]} · 5 Nov, {time}</b></span><Button onClick={() => setConfirmed(true)}>{confirmed ? '¡Cita confirmada!' : 'Confirmar cita'}</Button></div>
    </div>
  </section>;
}

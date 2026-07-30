import { ArrowRight, ArrowUpRight, HeartHandshake, ShieldCheck, UserRound, Users } from 'lucide-react';
import Button from '../ui/Button';

const services = [
  [UserRound, 'Terapia individual', 'Un espacio personal para trabajar ansiedad, autoestima y bienestar emocional.'],
  [HeartHandshake, 'Terapia de pareja', 'Reconstruyan la comunicación y fortalezcan sus vínculos en un entorno imparcial.'],
  [Users, 'Talleres grupales', 'Comparte experiencias y herramientas en una comunidad cálida y respetuosa.'],
];

export default function HomePage({ navigate }) {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow"><ShieldCheck /> Atención psicológica profesional</span>
        <h1>Tu bienestar emocional empieza <em>hoy.</em></h1>
        <p>Un espacio seguro, cercano y confidencial para comprenderte, sanar y construir la vida que deseas.</p>
        <div className="buttons">
          <Button onClick={() => navigate('booking')}>Reservar cita <ArrowUpRight /></Button>
          <Button secondary>Conoce al equipo</Button>
        </div>
        <div className="trust"><b>4.9</b><span>★★★★★<small>Más de 500 pacientes acompañados</small></span></div>
      </div>
      <div className="hero-visual"><div className="portrait"><div className="person">👩🏻‍⚕️</div><span className="bubble b1">Tu espacio seguro</span><span className="bubble b2">✓ Profesionales certificados</span></div></div>
    </section>
    <section className="section">
      <div className="section-head"><span className="kicker">NUESTROS SERVICIOS</span><h2>Apoyo pensado para ti</h2><p>Cada proceso es único. Encuentra la modalidad que mejor acompaña tu momento.</p></div>
      <div className="cards">{services.map(([Icon, title, description]) => <article className="service" key={title}><span className="icon"><Icon /></span><h3>{title}</h3><p>{description}</p><a>Saber más <ArrowRight /></a></article>)}</div>
    </section>
    <section className="cta"><span>EMPIEZA TU PROCESO</span><h2>Dar el primer paso puede cambiarlo todo.</h2><p>Estamos aquí para acompañarte, a tu ritmo y sin juicios.</p><Button onClick={() => navigate('booking')}>Reservar cita</Button></section>
  </>;
}

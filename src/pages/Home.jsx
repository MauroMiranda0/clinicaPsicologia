import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon.jsx'
import Button from '../components/ui/Button.jsx'
import { CLINIC_INFO } from '../data/site.js'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBN8uWidWrc16_m0vuqrH7TFCyFNdyKPgIDvDXj9TA2LckJlq1jG9-1LMofY-RiEhxZCdTcePeFIe5nTf2nVpiZbAX2J3xKG6SKE1c-aOt_oSF26I1Ys4reyhpdSrf9HbPPu5_ydZD3s4eOzufqXu1aSDa_A8SnD0DVmNw7iIBY_VMf_E985di2mKNrfJkDisWowj0OmcFFhih2RY5lgTZ54Cc5Va0R960zSAd6TmrMe9yJJyfuoive'

const TESTIMONIALS = [
  {
    quote:
      'Encontré un apoyo incondicional en los momentos más oscuros de mi vida. La terapia individual me ha dado herramientas que uso cada día.',
    initials: 'RG',
    name: 'Roberto G.',
    detail: 'Paciente de Terapia Individual',
  },
  {
    quote:
      'Los talleres grupales me ayudaron a entender que no estaba sola en mi proceso. La calidez humana de los facilitadores es increíble.',
    initials: 'LM',
    name: 'Lucía M.',
    detail: 'Participante de Talleres',
  },
  {
    quote:
      'La terapia de pareja transformó por completo nuestra comunicación. Gracias PsycheCare por acompañarnos.',
    initials: 'CP',
    name: 'Carmen y Pablo',
    detail: 'Terapia de Pareja',
  },
]

const SERVICES = [
  {
    title: 'Terapia Individual',
    description:
      'Un espacio uno a uno para trabajar en tu crecimiento personal, ansiedad, depresión o cualquier desafío que enfrentes.',
    icon: 'person',
    tone: 'text-primary bg-primary-fixed',
  },
  {
    title: 'Terapia de Pareja',
    description:
      'Fortalece tu relación a través de la comunicación efectiva y la resolución de conflictos guiada por profesionales.',
    icon: 'group',
    tone: 'text-secondary bg-secondary-fixed',
  },
  {
    title: 'Talleres Grupales',
    description:
      'Sesiones colaborativas donde compartimos herramientas prácticas para el manejo del estrés y la inteligencia emocional.',
    icon: 'diversity_3',
    tone: 'text-tertiary bg-tertiary-fixed',
  },
]

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const current = TESTIMONIALS[testimonialIndex]

  const prev = () => setTestimonialIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1))
  const next = () => setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length)

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative flex min-h-[870px] items-center overflow-hidden px-margin-mobile py-20 md:px-margin-desktop">
        <div className="relative z-10 mx-auto grid max-w-max-width grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="max-w-xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-fixed px-3 py-1 text-on-primary-fixed-variant">
              <Icon name="verified_user" className="text-sm" />
              <span className="text-label-sm">Certificados por el Consejo de Psicología</span>
            </div>
            <h1 className="text-headline-lg font-extrabold leading-tight tracking-tight text-on-surface md:text-6xl">
              Tu bienestar emocional es el inicio de una{' '}
              <span className="text-primary">vida plena.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              En PsycheCare, te brindamos un espacio seguro y profesional para redescubrir tu
              equilibrio. Nuestros expertos están listos para acompañarte en cada paso de tu camino
              hacia la salud mental.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/agendar">
                <Button icon="calendar_month">Reservar cita</Button>
              </Link>
              <Link to="/panel">
                <Button variant="secondary">Conoce al equipo</Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-square rotate-3 overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:rotate-0">
              <img
                className="h-full w-full object-cover"
                src={HERO_IMG}
                alt="Psicóloga en un espacio de consulta tranquilo y luminoso"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl border border-outline-variant bg-white p-6 shadow-xl">
              <div className="mb-2 flex gap-2 text-yellow-500">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Icon key={n} name="star" filled />
                ))}
              </div>
              <p className="text-label-md italic text-on-surface">
                &ldquo;La mejor decisión que tomé para mi salud mental el año pasado.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-surface px-margin-mobile py-24 md:px-margin-desktop" id="services">
        <div className="mx-auto max-w-max-width">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-headline-lg text-on-surface">Servicios Especializados</h2>
            <p className="mx-auto max-w-2xl text-body-md text-on-surface-variant">
              Ofrecemos diferentes modalidades terapéuticas adaptadas a tus necesidades específicas,
              garantizando confidencialidad y empatía.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-outline-variant bg-white p-8 transition-all duration-300 hover:border-primary hover:shadow-2xl"
              >
                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform group-hover:scale-110 ${service.tone}`}
                >
                  <Icon name={service.icon} />
                </div>
                <h3 className="mb-4 text-headline-md text-on-surface">{service.title}</h3>
                <p className="mb-8 text-body-md text-on-surface-variant">{service.description}</p>
                <Link
                  to="/agendar"
                  className="inline-flex items-center gap-2 text-label-md font-bold text-primary transition-all group-hover:gap-4"
                >
                  Saber más <Icon name="arrow_forward" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="overflow-hidden bg-surface-container-low px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto flex max-w-max-width flex-col items-center gap-16 md:flex-row">
          <div className="md:w-1/3">
            <h2 className="mb-6 text-headline-lg text-on-surface">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="mb-8 text-body-md text-on-surface-variant">
              Historias reales de personas que han transformado su vida con nuestro apoyo
              profesional.
            </p>
            <div className="flex gap-4">
              <button
                onClick={prev}
                aria-label="Testimonio anterior"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-outline text-on-surface transition-colors hover:bg-primary hover:text-white"
              >
                <Icon name="chevron_left" />
              </button>
              <button
                onClick={next}
                aria-label="Siguiente testimonio"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-outline text-on-surface transition-colors hover:bg-primary hover:text-white"
              >
                <Icon name="chevron_right" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div
              key={testimonialIndex}
              className="bg-white p-8 shadow-sm transition-all duration-300 rounded-3xl border border-outline-variant"
            >
              <p className="mb-6 text-body-md italic text-on-surface">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 font-bold text-on-surface">
                  {current.initials}
                </div>
                <div>
                  <h4 className="text-label-md font-bold text-on-surface">{current.name}</h4>
                  <p className="text-label-sm text-on-surface-variant">{current.detail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-mobile py-20 md:px-margin-desktop">
        <div className="relative mx-auto max-w-max-width overflow-hidden rounded-[40px] bg-primary p-12 text-center text-on-primary md:p-20">
          <div className="absolute -mr-32 -mt-32 right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -mb-32 -ml-32 bottom-0 left-0 h-64 w-64 rounded-full bg-primary-container/30 blur-3xl" />
          <h2 className="relative z-10 mb-6 text-headline-lg md:text-5xl">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-body-lg opacity-90">
            Agenda hoy mismo tu sesión de valoración y comienza tu proceso de transformación con los
            mejores especialistas.
          </p>
          <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-4 text-headline-sm text-primary shadow-xl transition-all hover:bg-surface-bright"
              href={CLINIC_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="chat" /> WhatsApp Business
            </a>
            <Link to="/agendar">
              <Button
                variant="outline"
                className="border-white/30 bg-primary-container text-on-primary-container hover:bg-primary-container/80"
              >
                Ver Disponibilidad
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

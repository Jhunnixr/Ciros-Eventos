import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Star, Users, Award, Music, Utensils, Camera, Sparkles } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-gold-500" />,
      title: 'Reservas Fáciles',
      description: 'Sistema de reservas online simple y rápido para tu evento'
    },
    {
      icon: <Star className="w-8 h-8 text-gold-500" />,
      title: 'Ambiente Elegante',
      description: 'Espacios diseñados para hacer tu celebración memorable'
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: 'Capacidad Flexible',
      description: 'Desde eventos íntimos hasta grandes celebraciones'
    },
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: 'Servicios Premium',
      description: 'DJ, bartender, catering y más servicios adicionales'
    }
  ]

  const eventTypes = [
    {
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      title: 'Bodas',
      description: 'El día más especial de tu vida'
    },
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: 'Cumpleaños',
      description: 'Celebra otro año de vida'
    },
    {
      icon: <Award className="w-6 h-6 text-gold-500" />,
      title: 'Promociones',
      description: 'Graduaciones y logros académicos'
    },
    {
      icon: <Star className="w-6 h-6 text-gold-500" />,
      title: 'Aniversarios',
      description: 'Momentos especiales para recordar'
    },
    {
      icon: <Utensils className="w-6 h-6 text-gold-500" />,
      title: 'Eventos Corporativos',
      description: 'Reuniones y celebraciones empresariales'
    },
    {
      icon: <Music className="w-6 h-6 text-gold-500" />,
      title: 'Fiestas Temáticas',
      description: 'Cualquier celebración que imagines'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black-900 to-black-800 text-white py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Bienvenido a{' '}
              <span className="text-gold-400">Ciros</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              El lugar perfecto para tus eventos y celebraciones. 
              Reserva nuestro local y disfruta de una experiencia única con servicios premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservations"
                className="btn-primary text-lg px-8 py-4"
              >
                Reservar Local
              </Link>
              <Link
                to="/menu"
                className="btn-secondary text-lg px-8 py-4"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Tipos de Eventos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebra cualquier ocasión especial en nuestro elegante local
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105">
                <div className="flex justify-center mb-4">
                  {event.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              ¿Por qué elegir Ciros?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos todo lo que necesitas para hacer de tu evento una experiencia inolvidable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            ¿Listo para tu evento perfecto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reserva nuestro local ahora y descubre por qué somos la mejor opción para tus celebraciones
          </p>
          <Link
            to="/reservations"
            className="bg-white text-gold-600 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
          >
            Hacer Reserva
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">500+</div>
              <div className="text-gray-600">Eventos Realizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">5★</div>
              <div className="text-gray-600">Calificación Promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">3</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
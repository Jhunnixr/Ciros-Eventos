import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-gold-400 mb-4">
              Ciros Restaurant
            </h3>
            <p className="text-gray-300 mb-4">
              Experiencia gastronómica única con los mejores sabores y un ambiente elegante. 
              Reserva tu mesa y disfruta de momentos inolvidables.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gold-400" />
                <span className="text-gray-300">Av. Principal 123, Lima</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gold-400" />
                <span className="text-gray-300">+51 987 654 321</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gold-400" />
                <span className="text-gray-300">info@ciros.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">Horarios</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gold-400" />
                <div className="text-gray-300">
                  <p>Lun - Jue: 12:00 - 23:00</p>
                  <p>Vie - Sáb: 12:00 - 24:00</p>
                  <p>Dom: 12:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Ciros Restaurant. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
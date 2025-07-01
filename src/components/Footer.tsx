import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-gold-400 mb-4">
              Ciros
            </h3>
            <p className="text-gray-300 mb-4">
              Local de eventos y recepciones en Chimbote, Perú. 
              El lugar perfecto para tus celebraciones más importantes con capacidad para 100-300 personas.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gold-400" />
                <span className="text-gray-300">Av. José Pardo 123, Chimbote</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gold-400" />
                <span className="text-gray-300">+51 943 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gold-400" />
                <span className="text-gray-300">eventos@ciros.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">Información</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gold-400" />
                <div className="text-gray-300">
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sáb: 9:00 - 15:00</p>
                  <p>Dom: Solo eventos</p>
                </div>
              </div>
              <div className="text-gray-300 text-sm mt-3">
                <p>• Capacidad: 100-300 personas</p>
                <p>• Duración: 8 horas</p>
                <p>• Precio: S/ 38 por cubierto</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Ciros - Local de Eventos. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Chimbote, Áncash - Perú
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'

const Menu = () => {
  const menuCategories = [
    {
      name: 'Entradas',
      items: [
        {
          name: 'Ceviche Ciros',
          description: 'Pescado fresco marinado en limón con cebolla morada, ají y camote',
          price: 'S/ 28'
        },
        {
          name: 'Tiradito de Atún',
          description: 'Láminas de atún fresco con salsa de ají amarillo y palta',
          price: 'S/ 32'
        },
        {
          name: 'Causa Limeña',
          description: 'Papa amarilla con pollo deshilachado y palta',
          price: 'S/ 22'
        }
      ]
    },
    {
      name: 'Platos Principales',
      items: [
        {
          name: 'Lomo Saltado Premium',
          description: 'Lomo fino saltado con papas fritas y arroz, estilo Ciros',
          price: 'S/ 45'
        },
        {
          name: 'Arroz con Mariscos',
          description: 'Arroz con langostinos, pulpo, conchas y calamares',
          price: 'S/ 52'
        },
        {
          name: 'Pescado a la Plancha',
          description: 'Filete de pescado con quinotto de verduras y salsa de maracuyá',
          price: 'S/ 38'
        },
        {
          name: 'Anticuchos de Corazón',
          description: 'Brochetas de corazón marinado con papas doradas',
          price: 'S/ 35'
        }
      ]
    },
    {
      name: 'Postres',
      items: [
        {
          name: 'Suspiro Limeño',
          description: 'Manjar blanco con merengue y canela',
          price: 'S/ 18'
        },
        {
          name: 'Tres Leches',
          description: 'Bizcocho empapado en tres leches con canela',
          price: 'S/ 16'
        },
        {
          name: 'Mazamorra Morada',
          description: 'Postre tradicional con frutas y arroz con leche',
          price: 'S/ 14'
        }
      ]
    },
    {
      name: 'Bebidas',
      items: [
        {
          name: 'Pisco Sour',
          description: 'Cóctel tradicional peruano con pisco y limón',
          price: 'S/ 25'
        },
        {
          name: 'Chicha Morada',
          description: 'Bebida tradicional de maíz morado con especias',
          price: 'S/ 12'
        },
        {
          name: 'Inca Kola',
          description: 'La bebida dorada del Perú',
          price: 'S/ 8'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Nuestro Menú
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre los sabores auténticos del Perú con un toque moderno y elegante
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-8">
              <h2 className="text-2xl font-serif font-bold text-gold-600 mb-6 text-center">
                {category.name}
              </h2>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-gold-600 ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              ¿Listo para disfrutar?
            </h3>
            <p className="text-gray-600 mb-6">
              Reserva tu mesa ahora y vive una experiencia gastronómica única
            </p>
            <a href="/reservations" className="btn-primary">
              Reservar Mesa
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
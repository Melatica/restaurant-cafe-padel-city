import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/167a49f249f75ab4d123d0e9cdf4ad2f92e8fb74.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      id: 1,
      title: 'Platillo del mes',
      description: 'Avocado Toast tricolor.',
      image: 'https://images.unsplash.com/photo-1687276287139-88f7333c8ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3R8ZW58MXx8fHwxNzY4Nzg4OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Ingredientes'
    },
    {
      id: 2,
      title: 'Bebida Recomoendada',
      description: 'Chaya con piña.',
      image: 'https://images.unsplash.com/photo-1543648973-1eb94629e7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdyZWVuJTIwc21vb3RoaWV8ZW58MXx8fHwxNzY4NzkyMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Propiedades'
    },
    {
      id: 3,
      title: 'Snak vespertino',
      description: 'Pizza de espinacas.',
      image: 'https://images.unsplash.com/photo-1646129618447-4d116bfd69ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBzcGluYWNofGVufDF8fHx8MTc2ODc5MjA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Ingredientes'
    },
    {
      id: 4,
      title: 'Bebida de la barra',
      description: 'Mojito de pitahaya.',
      image: 'https://images.unsplash.com/photo-1767065703061-bc18e989e6e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbW9qaXRvJTIwY29ja3RhaWx8ZW58MXx8fHwxNzY4NzkyMDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Ingredientes'
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-4" role="banner">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={logoImage}
              alt="CIT Padel Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Restaurant Cafe en Padel City
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Un lugar donde se juntan los sabores
          </p>
          <div className="space-x-4">
            <button
              onClick={() => onNavigate('menu')}
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Ver Menu "
            >
              Ver Menu
            </button>
            <button
              onClick={() => onNavigate('interactive')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Probar funciones interactivas"
            >
              Probar Interactivo
            </button>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 px-4" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="features-heading" className="text-3xl font-bold text-center mb-12 text-foreground">
            Sugerencias del mes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <article 
                key={feature.id}
                className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                onClick={() => onNavigate('menu')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate('menu');
                  }
                }}
                aria-label={`Leer más sobre ${feature.title}`}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <ImageWithFallback
                    src={feature.image}
                    alt={`Imagen ilustrativa de ${feature.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-secondary text-white text-sm px-3 py-1 rounded-full">
                      {feature.category}
                    </span>
                  </div>
                  
                  <h3 className="font-bold mb-3 text-card-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-6 text-foreground">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explora nuestras funciones interactivas y descubre todo lo que puedes hacer
          </p>
          <button
            onClick={() => onNavigate('interactive')}
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Ir a la sección interactiva"
          >
            Comenzar Ahora
          </button>
        </div>
      </section>
    </main>
  );
}
import React from 'react'; 
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuPageProps {
  onNavigate: (page: string) => void;
}

export function MenuPage({ onNavigate }: MenuPageProps) {
  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="text-secondary hover:text-blue-600 focus:outline-none focus:underline"
                aria-label="Volver al inicio"
              >
                Inicio
              </button>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900" aria-current="page">
              Menu
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="bg-secondary text-white px-3 py-1 rounded-full inline-block text-sm mb-4">
            Menu
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Menu de sugerencias del mes
          </h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime={new Date().toISOString()} className="mr-4">
              {new Date().toLocaleDateString('es-MX', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="mb-8">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1724589511191-1ced6d014934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3Njg3OTIwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Restaurant Cafe en Padel City - Donde cada detalle es importante"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="text-sm text-gray-600 mt-2 text-center">
            Restaurant Cafe en Padel City - Un espacio diseñado para disfrutar
          </figcaption>
        </figure>

        {/* Recipe Article */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
            {/* Título del platillo */}
            <h1 className="text-3xl font-bold mb-4 text-card-foreground">
              Avocado Toast Tricolor
            </h1>

            {/* Sección de ingredientes */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Ingredientes</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Aguacate</li>
                <li>Pan de caja integral</li>
                <li>Jugo de limón</li>
                <li>Jitomates cherry</li>
                <li>Hojuelas de chile seco rojo al gusto</li>
                <li>Sal al gusto</li>
                <li>Pimienta negra molida al gusto</li>
                <li>Aceite de oliva</li>
              </ul>
            </section>

            {/* Notas de preparación */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Notas de preparación
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Estas representaciones utilizan elementos simples como cajas,
                líneas y texto placeholder para comunicar ideas de manera clara
                y eficiente durante las primeras etapas del diseño.
              </p>
            </section>
          </div>

          {/* Snack Vespertino */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Snack Vespertino
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Ingredientes */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Ingredientes</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Masa para Pizza Finissima Rectangular BUITONI</li>
                  <li>Tomate frito estilo casero SOLÍS</li>
                  <li>espinacas baby</li>
                  <li>queso de cabra</li>
                  <li>nueces</li>
                  <li>mozzarella rallada</li>
                  <li>pimientos del piquillo</li>
                  <li>Orégano</li>
                  <li>cucharada de aceite de oliva</li>
                </ul>
              </section>

              {/* Forma de preparación */}
              {[
                {
                  name: 'Forma de preparación',
                  desc: 'Precalentar el horno a 220ºC.Saltear las espinacas en una sartén con 1 cucharada de aceite de oliva, durante unos 6 minutos a fuego medio.Escurrirlas, presionando, para que suelten todo el líquido posible.Desenrollar la masa de pizza sobre el papel que la envuelve y colocar encima de la bandeja de horno.Extender el tomate frito encima de la masa, con ayuda del dorso de una cuchara, sin llegar a los bordes.Repartir la mozzarella rallada y espolvorear el orégano. Cortar los pimientos del piquillo en tiras y el queso de cabra en rodajas.Distribuir las espinacas, el queso de cabra, las nueces y los pimientos del piquillo.Hornear durante unos 10-12 minutos hasta que esté dorada.',
                },
              ].map((tool, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border">
                  <h3 className="font-bold text-primary mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bebida Recomendada */}
          <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">
              Bebida Recomendada, Chaya con Piña
            </h2>
            <ul className="space-y-3 text-gray-700">
              {['Chaya', 'Piña'].map((principio, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <strong>{principio}:</strong>{' '}
                    {principio === 'Chaya' &&
                      ' rica en vitaminas A, C y del complejo B, proteínas, fibra, hierro y calcio, además de ser un superalimento con propiedades antiinflamatorias, antioxidantes y diuréticas'}
                    {principio === 'Piña' &&
                      ' Facilitar la digestión gracias a la enzima bromelina, fortalecer el sistema inmunitario por su contenido de vitamina C, mejorar la salud ósea por el manganeso, y contribuir al tránsito intestinal por su fibra'}
                  </div>
                </li>
              ))}
            </ul>
          </div>

{/* Bebida de la Barra (centrada) */}
<div className="flex justify-center mb-8">
  <div className="bg-gray-50 rounded-lg p-6 w-full md:w-2/3">
    <h2 className="text-2xl font-bold mb-4 text-foreground text-center">
      Bebida de la barra
    </h2>
    <div className="bg-white p-4 rounded-lg border text-center">
      <h3 className="font-bold text-primary mb-2">Mojito de Pitahaya</h3>
      <p className="text-sm text-gray-600">
        La pitahaya es rica en fibras, vitamina C, hierro, magnesio, fósforo,
        calcio y compuestos antioxidantes como los polifenoles, flavonoides y
        betacianinas, lo que le confiere propiedades nutritivas,
        antioxidantes, antiinflamatorias, anticancerígenas, saciantes,
        hipoglucémicas, antidiabéticas, termogénicas, inmunológicas,
        antibacterianas, prebióticas, digestivas, hipocolesterolémicas,
        cardioprotectores y rejuvenecedoras.
      </p>
    </div>
  </div>
</div>

        </article>

        {/* Navigation */}
        <nav
          className="mt-12 pt-8 border-t border-gray-200"
          aria-label="Navegación de artículos"
        >
          <div className="flex justify-between items-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center text-secondary hover:text-blue-600 transition-colors focus:outline-none focus:underline"
              aria-label="Volver al inicio"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al Inicio
            </button>

            <button
              onClick={() => onNavigate('interactive')}
              className="flex items-center text-secondary hover:text-blue-600 transition-colors focus:outline-none focus:underline"
              aria-label="Ir a la sección interactiva"
            >
              Probar Interactivo
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </main>
  );
}
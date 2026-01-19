import React, { useState } from 'react';

interface InteractivePageProps {
  onNavigate: (page: string) => void;
}

interface Option {
  text: string;
  votes: number;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

export function InteractivePage({ onNavigate }: InteractivePageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      question: "¿Cuál es tu platillo favorito?",
      options: [
        { text: "Huevos divorciados", votes: 0 },
        { text: "Huevos motuleños", votes: 0 },
        { text: "Avocado toast", votes: 0 },
        { text: "Hot cakes", votes: 0 }
      ]
    },
    {
      id: 2,
      question: "¿Con qué bebida te gusta acompañar tu desayuno?",
      options: [
        { text: "Café", votes: 0 },
        { text: "Jugo", votes: 0 },
        { text: "Horchata", votes: 0 },
        { text: "Té frío", votes: 0 }
      ]
    },
    {
      id: 3,
      question: "¿Qué snack se te antoja por las tardes?",
      options: [
        { text: "Papas a la francesa", votes: 0 },
        { text: "Boneless búfalo", votes: 0 },
        { text: "Pizza", votes: 0 },
        { text: "Baguette", votes: 0 }
      ]
    }
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    const answerIndex = selectedAnswers[currentQuestion];
    if (answerIndex !== undefined) {
      // Sumar un voto a la opción seleccionada
      const newQuestions = [...questions];
      newQuestions[currentQuestion].options[answerIndex].votes += 1;
      setQuestions(newQuestions);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    // Reset votes
    setQuestions(prev =>
      prev.map(q => ({
        ...q,
        options: q.options.map(o => ({ ...o, votes: 0 }))
      }))
    );
  };

  const calculatePercentages = (question: Question) => {
    const totalVotes = question.options.reduce((sum, o) => sum + o.votes, 0);
    return question.options.map(o =>
      totalVotes ? Math.round((o.votes / totalVotes) * 100) : 0
    );
  };

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Sección Interactiva
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Queremos conocer tus gustos con nuestro quiz interactivo
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quiz Section */}
          <section className="bg-card rounded-lg shadow-md p-6">
            {!showResults ? (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-card-foreground">
                  {questions[currentQuestion].question}
                </h2>

                <fieldset>
                  <legend className="sr-only">Opciones de respuesta</legend>
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <label
                        key={index}
                        className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-primary bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          value={index}
                          checked={selectedAnswers[currentQuestion] === index}
                          onChange={() => handleAnswerSelect(index)}
                          className="sr-only"
                        />
                        <span className="text-gray-700">{option.text}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestion] === undefined}
                    className="px-6 py-2 bg-primary text-white rounded-lg"
                  >
                    {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-card-foreground">
                  Resultados
                </h2>

                {questions.map((q, i) => {
                  const percentages = calculatePercentages(q);
                  return (
                    <div key={i} className="mb-6">
                      <h3 className="font-semibold mb-2">{q.question}</h3>
                      <div className="space-y-2">
                        {q.options.map((o, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="w-32">{o.text}</span>
                            <div className="flex-1 h-4 bg-gray-200 rounded-full mx-3">
                              <div
                                className="h-4 bg-primary rounded-full"
                                style={{ width: `${percentages[idx]}%` }}
                              ></div>
                            </div>
                            <span className="w-12 text-sm">{percentages[idx]}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                <div className="space-x-4 mt-6">
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-primary text-white rounded-lg"
                  >
                    Reintentar
                  </button>
                  <button
                    onClick={() => onNavigate('home')}
                    className="px-6 py-2 text-primary border border-primary rounded-lg"
                  >
                    Volver al Inicio
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export const stateMock = {
  player: {
    name: 'asdas',
    gravatarEmail: 'sadas',
    score: 0,
    assertions: 0
  },
  token: {
    response_code: 0,
    response_message: 'Token Generated Successfully!',
    token: '6b7fb267457855191c7bf06e6b41e9354684ddaa69a88c5c12ede0af322c7c37'
  },
  questions: {
    response_code: 0,
    results: [
      {
        category: 'Animals',
        type: 'boolean',
        difficulty: 'medium',
        question: 'The average lifespan of a wildcat is only around 5-6 years. ',
        correct_answer: 'False',
        incorrect_answers: [
          'True'
        ]
      },
      {
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'hard',
        question: 'In &quot;Call Of Duty: Zombies&quot;, which weapon does NOT deal any damage?',
        correct_answer: '31-79 JGb215',
        incorrect_answers: [
          'Sliquifier',
          'V-R11',
          'Wunderwaffe DG-2'
        ]
      },
      {
        category: 'Celebrities',
        type: 'multiple',
        difficulty: 'medium',
        question: 'In which of these TV shows did the chef Gordon Ramsay not appear?',
        correct_answer: 'Auction Hunters',
        incorrect_answers: [
          'Ramsay&#039;s Kitchen Nightmares',
          'Hotel Hell',
          'Hell&#039;s Kitchen'
        ]
      },
      {
        category: 'Entertainment: Cartoon & Animations',
        type: 'multiple',
        difficulty: 'easy',
        question: 'In The Simpsons, which war did Seymour Skinner serve in the USA Army as a Green Beret?',
        correct_answer: 'Vietnam War',
        incorrect_answers: [
          'World War 2',
          'World War 1',
          'Cold War'
        ]
      },
      {
        category: 'Science: Gadgets',
        type: 'multiple',
        difficulty: 'medium',
        question: 'Out of all of the NASA Space Shuttles, which 2 have been destroyed in disasters?',
        correct_answer: 'Challenger and Columbia',
        incorrect_answers: [
          'Enterprise and Atlantis',
          'Discovery and Endeavour',
          'None of the Above'
        ]
      }
    ],
    timer: 0,
    timerId: 7,
    isBtnDisabled: false
  }
}
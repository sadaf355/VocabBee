export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // index of correct option
}

export interface AudioQuiz {
  audio: string;
  questions: Question[];
}

export const audioQuizzes: AudioQuiz[] = [
  {
    audio: "/public/i1audio/audio 1.mp3",
    questions: [
      { id: 1, question: "What causes water to evaporate?", options: ["Wind", "Sun’s heat", "Freezing"], answer: 1 },
      { id: 2, question: "What forms when water vapor cools?", options: ["Rivers", "Clouds", "Icebergs"], answer: 1 },
      { id: 3, question: "How does water return to Earth?", options: ["Precipitation", "Evaporation", "Condensation"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 2.mp3",
    questions: [
      { id: 1, question: "Which part of the plant carries out photosynthesis?", options: ["Roots", "Leaves", "Stems"], answer: 1 },
      { id: 2, question: "What do plants release during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen"], answer: 1 },
      { id: 3, question: "What is essential for photosynthesis to occur?", options: ["Soil nutrients", "Sunlight, CO₂, and water", "Only water"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 3.mp3",
    questions: [
      { id: 1, question: "What is at the center of the Solar System?", options: ["Earth", "Sun", "Moon"], answer: 1 },
      { id: 2, question: "What force keeps planets in orbit?", options: ["Gravity", "Magnetism", "Wind"], answer: 0 },
      { id: 3, question: "Which of these is part of the Solar System?", options: ["Stars outside the galaxy", "Planets, moons, comets", "Only Earth and Moon"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 4.mp3",
    questions: [
      { id: 1, question: "What is the internet?", options: ["A local library", "A global computer network", "A type of computer"], answer: 1 },
      { id: 2, question: "Which of these is a benefit of the internet?", options: ["Faster communication", "Air pollution", "Soil erosion"], answer: 0 },
      { id: 3, question: "What is a major risk of the internet?", options: ["Cybercrime", "Fresh air", "Forest growth"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 5.mp3",
    questions: [
      { id: 1, question: "Why do seasons occur?", options: ["Earth’s tilt and orbit", "Earth’s rotation only", "Moon’s orbit"], answer: 0 },
      { id: 2, question: "How many main seasons are there?", options: ["2", "3", "4"], answer: 2 },
      { id: 3, question: "Who adapts to seasonal changes?", options: ["Only humans", "Animals and plants", "Only animals"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 6.mp3",
    questions: [
      { id: 1, question: "What is the main role of the brain?", options: ["Pump blood", "Control the body", "Digest food"], answer: 1 },
      { id: 2, question: "What does the brain work with?", options: ["Circulatory system", "Nervous system", "Digestive system"], answer: 1 },
      { id: 3, question: "Which organ stores thoughts and memory?", options: ["Heart", "Brain", "Lungs"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 7.mp3",
    questions: [
      { id: 1, question: "Electricity is mainly used for?", options: ["Cooking only", "Powering life and technology", "Only lighting"], answer: 1 },
      { id: 2, question: "Which of these is a renewable source of electricity?", options: ["Coal", "Wind", "Gasoline"], answer: 1 },
      { id: 3, question: "What does electricity travel through?", options: ["Circuits and wires", "Soil", "Clouds"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 8.mp3",
    questions: [
      { id: 1, question: "What comes out of volcanoes?", options: ["Water", "Lava and gases", "Sand"], answer: 1 },
      { id: 2, question: "What do volcanoes form from?", options: ["Molten rock eruption", "Rainfall", "Windstorms"], answer: 0 },
      { id: 3, question: "What benefit do volcanoes give?", options: ["Fertile soil", "Clean air", "Icebergs"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 9.mp3",
    questions: [
      { id: 1, question: "How much of Earth’s surface is covered by oceans?", options: ["20%", "50%", "70%+"], answer: 2 },
      { id: 2, question: "What causes tides?", options: ["Earth’s rotation", "Sun and Moon’s gravity", "Ocean currents"], answer: 1 },
      { id: 3, question: "Oceans are important for?", options: ["Trade and climate", "Mountains", "Roads"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 10.mp3",
    questions: [
      { id: 1, question: "Which is NOT renewable?", options: ["Sunlight", "Coal", "Wind"], answer: 1 },
      { id: 2, question: "What device captures solar energy?", options: ["Windmill", "Solar panel", "Battery"], answer: 1 },
      { id: 3, question: "Why is renewable energy important?", options: ["Reduces pollution", "Increases deforestation", "Increases waste"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 11.mp3",
    questions: [
      { id: 1, question: "What forms mountains?", options: ["Tectonic movement", "Earth’s orbit", "Ocean waves"], answer: 0 },
      { id: 2, question: "What do mountains influence?", options: ["Weather and water", "Internet speed", "Soil erosion only"], answer: 0 },
      { id: 3, question: "Which activity is popular in mountains?", options: ["Swimming", "Adventure sports", "Farming"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 12.mp3",
    questions: [
      { id: 1, question: "What is communication?", options: ["Sharing ideas", "Sleeping", "Running"], answer: 0 },
      { id: 2, question: "Which is NOT a type of communication?", options: ["Verbal", "Non-verbal", "Sleeping"], answer: 2 },
      { id: 3, question: "Technology makes communication?", options: ["Slower", "Instant", "Impossible"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 13.mp3",
    questions: [
      { id: 1, question: "What is the function of the heart?", options: ["Pump blood", "Store oxygen", "Filter waste"], answer: 0 },
      { id: 2, question: "Which vessels carry blood back to the heart?", options: ["Arteries", "Veins", "Nerves"], answer: 1 },
      { id: 3, question: "What controls the heartbeat?", options: ["Muscles and signals", "Stomach", "Lungs"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 14.mp3",
    questions: [
      { id: 1, question: "What causes air pollution?", options: ["Vehicles and factories", "Trees", "Rivers"], answer: 0 },
      { id: 2, question: "Which disease is linked to air pollution?", options: ["Asthma", "Cancer", "Tooth decay"], answer: 0 },
      { id: 3, question: "How can air pollution be reduced?", options: ["Planting trees", "Burning fuels", "Building roads"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 15.mp3",
    questions: [
      { id: 1, question: "Robots are?", options: ["Machines that work automatically", "Humans", "Animals"], answer: 0 },
      { id: 2, question: "Where are robots used?", options: ["Only schools", "Industry, medicine, homes", "Forests"], answer: 1 },
      { id: 3, question: "What risk do robots bring?", options: ["Replace human jobs", "Increase oxygen", "Stop pollution"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 16.mp3",
    questions: [
      { id: 1, question: "What is the Moon?", options: ["A planet", "Earth’s satellite", "A star"], answer: 1 },
      { id: 2, question: "What does the Moon affect on Earth?", options: ["Tides", "Earthquakes", "Winds"], answer: 0 },
      { id: 3, question: "When did humans first land on the Moon?", options: ["1969", "1975", "1989"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 17.mp3",
    questions: [
      { id: 1, question: "What does agriculture provide?", options: ["Food and raw materials", "Air pollution", "Fossil fuels"], answer: 0 },
      { id: 2, question: "What do modern farms use?", options: ["Machines and irrigation", "Only hand tools", "Nothing"], answer: 0 },
      { id: 3, question: "What type of agriculture protects the environment?", options: ["Harmful farming", "Sustainable farming", "Deforestation"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 18.mp3",
    questions: [
      { id: 1, question: "What do forests provide?", options: ["Oxygen and wood", "Internet", "Coal only"], answer: 0 },
      { id: 2, question: "What is the main threat to forests?", options: ["Deforestation", "Rain", "Photosynthesis"], answer: 0 },
      { id: 3, question: "Forests help balance?", options: ["Climate and atmosphere", "Television", "Plastic use"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 19.mp3",
    questions: [
      { id: 1, question: "What does space exploration study?", options: ["Oceans", "Outer space", "Forests"], answer: 1 },
      { id: 2, question: "What tool is used to see planets and stars?", options: ["Microscope", "Telescope", "Compass"], answer: 1 },
      { id: 3, question: "Who travels in spacecraft?", options: ["Scientists", "Astronauts", "Engineers"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 20.mp3",
    questions: [
      { id: 1, question: "Education helps people gain?", options: ["Knowledge and skills", "Pollution", "Food only"], answer: 0 },
      { id: 2, question: "Which is NOT a method of education?", options: ["Schools", "Colleges", "Sleeping"], answer: 2 },
      { id: 3, question: "Education contributes to?", options: ["Progress in society", "More pollution", "Less learning"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 21.mp3",
    questions: [
      { id: 1, question: "What are renewable resources?", options: ["Resources that can be replenished naturally", "Resources that never finish", "Fossil fuels"], answer: 0 },
      { id: 2, question: "Which of these is NOT a renewable resource?", options: ["Sunlight", "Coal", "Wind"], answer: 1 },
      { id: 3, question: "Why are governments promoting renewable energy?", options: ["To reduce pollution", "To increase fossil fuel use", "To waste energy"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 22.mp3",
    questions: [
      { id: 1, question: "Which of the following is an indoor sport?", options: ["Cricket", "Chess", "Football"], answer: 1 },
      { id: 2, question: "Sports help in developing:", options: ["Laziness", "Discipline", "Pollution"], answer: 1 },
      { id: 3, question: "International tournaments bring:", options: ["Division", "Unity", "War"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 23.mp3",
    questions: [
      { id: 1, question: "Transportation is important for:", options: ["Sleeping", "Trade and tourism", "Painting"], answer: 1 },
      { id: 2, question: "Which of these is not a mode of transport?", options: ["Airways", "Roadways", "Libraries"], answer: 2 },
      { id: 3, question: "What is one disadvantage of transport?", options: ["It saves time", "It causes pollution", "It connects people"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 24.mp3",
    questions: [
      { id: 1, question: "Computers are mainly used for:", options: ["Cooking food", "Processing data", "Growing plants"], answer: 1 },
      { id: 2, question: "Which field is affected by computers?", options: ["Education", "Medicine", "Both A and B"], answer: 2 },
      { id: 3, question: "What is shaping the future of computing?", options: ["Artificial intelligence", "Fossil fuels", "Agriculture"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 25.mp3",
    questions: [
      { id: 1, question: "Literature includes:", options: ["Novels and poems", "Sports", "Computers"], answer: 0 },
      { id: 2, question: "Reading literature improves:", options: ["Critical thinking", "Physical strength", "Pollution"], answer: 0 },
      { id: 3, question: "Who influences society through ideas?", options: ["Engineers", "Great writers", "Drivers"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 26.mp3",
    questions: [
      { id: 1, question: "Satellites revolve around:", options: ["Moon", "Earth", "Sun"], answer: 1 },
      { id: 2, question: "Which of these is a use of satellites?", options: ["Cooking", "Navigation", "Dancing"], answer: 1 },
      { id: 3, question: "Satellites are important for:", options: ["Modern life", "Sleeping", "Shopping"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 27.mp3",
    questions: [
      { id: 1, question: "Climate change is mainly caused by:", options: ["Greenhouse gases", "Oxygen", "Rain"], answer: 0 },
      { id: 2, question: "Which of these is an effect of climate change?", options: ["Rising sea levels", "Free chocolates", "Cheaper petrol"], answer: 0 },
      { id: 3, question: "What is needed to solve climate change?", options: ["Global cooperation", "More cars", "Cutting forests"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 28.mp3",
    questions: [
      { id: 1, question: "Inventions are created to:", options: ["Waste time", "Solve problems", "Cause trouble"], answer: 1 },
      { id: 2, question: "Which of these is a major invention?", options: ["The wheel", "The ocean", "The mountain"], answer: 0 },
      { id: 3, question: "Who creates inventions?", options: ["Scientists and inventors", "Only farmers", "Nobody"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 29.mp3",
    questions: [
      { id: 1, question: "Music is made of:", options: ["Stones", "Sound and rhythm", "Paint"], answer: 1 },
      { id: 2, question: "Music is called a:", options: ["Universal language", "National sport", "Chemical"], answer: 0 },
      { id: 3, question: "Music is used for:", options: ["Therapy", "Celebrations", "Both A and B"], answer: 2 },
    ],
  },
  {
    audio: "/public/i1audio/audio 30.mp3",
    questions: [
      { id: 1, question: "Recycling means:", options: ["Burning waste", "Reusing materials", "Throwing garbage"], answer: 1 },
      { id: 2, question: "Which of these can be recycled?", options: ["Plastic", "Paper", "Both A and B"], answer: 2 },
      { id: 3, question: "Recycling helps in:", options: ["Pollution reduction", "Increasing waste", "Deforestation"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 31.mp3",
    questions: [
      { id: 1, question: "In democracy, citizens:", options: ["Choose leaders", "Sleep all day", "Have no power"], answer: 0 },
      { id: 2, question: "Laws in democracy are made by:", options: ["Elected representatives", "Kings", "Soldiers"], answer: 0 },
      { id: 3, question: "Which value does democracy ensure?", options: ["Equality", "Pollution", "Slavery"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 32.mp3",
    questions: [
      { id: 1, question: "Rainforests are mostly found in:", options: ["Deserts", "Tropical regions", "Polar regions"], answer: 1 },
      { id: 2, question: "The largest rainforest is:", options: ["Amazon", "Sahara", "Himalayas"], answer: 0 },
      { id: 3, question: "Rainforests are important because:", options: ["They produce oxygen", "They cause floods", "They are deserts"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 33.mp3",
    questions: [
      { id: 1, question: "Astronomy is the study of:", options: ["Animals", "Stars and planets", "Cars"], answer: 1 },
      { id: 2, question: "Ancient people used stars for:", options: ["Navigation", "Eating", "Sleeping"], answer: 0 },
      { id: 3, question: "Modern telescopes help us see:", options: ["Oceans", "Distant universes", "Volcanoes"], answer: 1 },
    ],
  },
  {
    audio: "/public/i1audio/audio 34.mp3",
    questions: [
      { id: 1, question: "Technology refers to:", options: ["Tools and systems", "Food", "Rain"], answer: 0 },
      { id: 2, question: "Which is an example of technology?", options: ["Mobile phones", "Rivers", "Trees"], answer: 0 },
      { id: 3, question: "Overuse of technology may affect:", options: ["Human health", "Plant growth", "Mountains"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 35.mp3",
    questions: [
      { id: 1, question: "Wildlife conservation protects:", options: ["Cars", "Animals", "Machines"], answer: 1 },
      { id: 2, question: "Why are many species endangered?", options: ["Hunting and habitat loss", "More trees", "Pollution control"], answer: 0 },
      { id: 3, question: "Conservation laws aim to protect:", options: ["Biodiversity", "Factories", "Roads"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 36.mp3",
    questions: [
      { id: 1, question: "Libraries are places where:", options: ["Books are kept", "Cars are kept", "Sports are played"], answer: 0 },
      { id: 2, question: "Modern libraries provide:", options: ["Digital resources", "Clothes", "Furniture"], answer: 0 },
      { id: 3, question: "Libraries encourage:", options: ["Reading culture", "Laziness", "Pollution"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 37.mp3",
    questions: [
      { id: 1, question: "Renewable technology includes:", options: ["Solar panels", "Coal mining", "Oil wells"], answer: 0 },
      { id: 2, question: "Why is renewable tech important?", options: ["Reduces fossil fuel use", "Increases pollution", "Wastes energy"], answer: 0 },
      { id: 3, question: "Renewable energy is becoming:", options: ["More affordable", "More harmful", "Less useful"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 38.mp3",
    questions: [
      { id: 1, question: "AgriTech is used in:", options: ["Farming", "Banking", "Painting"], answer: 0 },
      { id: 2, question: "Which tools are part of AgriTech?", options: ["Drones and AI", "Chairs and tables", "Sports equipment"], answer: 0 },
      { id: 3, question: "AgriTech ensures:", options: ["Food security", "More waste", "Pollution"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 39.mp3",
    questions: [
      { id: 1, question: "Globalization connects countries through:", options: ["Trade and culture", "Sleeping", "Sports only"], answer: 0 },
      { id: 2, question: "One advantage of globalization is:", options: ["Cultural exchange", "More pollution", "War"], answer: 0 },
      { id: 3, question: "Which of these is a result of globalization?", options: ["Spread of ideas", "Isolation", "Deforestation"], answer: 0 },
    ],
  },
  {
    audio: "/public/i1audio/audio 40.mp3",
    questions: [
      { id: 1, question: "Teamwork means:", options: ["Working together", "Working alone", "Sleeping"], answer: 0 },
      { id: 2, question: "Teamwork requires:", options: ["Cooperation", "Trust", "Both A and B"], answer: 2 },
      { id: 3, question: "Which area depends on teamwork?", options: ["Sports", "Workplaces", "Both A and B"], answer: 2 },
    ],
  },
];
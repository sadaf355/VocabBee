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
    audio: "/public/audio1.mp3",
    questions: [
      { id: 1, question: "How does water go to the sky?", options: ["Evaporation", "Condensation", "Rainfall", "Freezing"], answer: 0 },
      { id: 2, question: "What forms in the sky from water vapor?", options: ["Snow", "Clouds", "Fog", "Mist"], answer: 1 },
      { id: 3, question: "Where does rainwater usually go?", options: ["Houses", "Rivers and oceans", "Mountains", "Air"], answer: 1 },
    ],
  },
  {
    audio: "/public/audio2.mp3",
    questions: [
      { id: 1, question: "What do plants use to make food?", options: ["Sunlight", "Soil", "Wind", "Oxygen"], answer: 0 },
      { id: 2, question: "Which gas do plants take in?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], answer: 1 },
      { id: 3, question: "What is released by plants during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Smoke"], answer: 1 },
    ],
  },
  {
    audio: "/public/audio3.mp3",
    questions: [
      { id: 1, question: "What is at the center of the Solar System?", options: ["Earth", "Sun", "Moon", "Mars"], answer: 1 },
      { id: 2, question: "What keeps planets in orbit?", options: ["Gravity", "Winds", "Light", "Water"], answer: 0 },
      { id: 3, question: "Which of these is part of the Solar System?", options: ["Planets, moons, asteroids, comets", "Only Earth", "Cars and trains", "Mountains"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio4.mp3",
    questions: [
      { id: 1, question: "Why do seasons occur?", options: ["Earth’s shape", "Earth’s tilt and revolution", "Rainfall", "Clouds"], answer: 1 },
      { id: 2, question: "Which season comes after summer?", options: ["Autumn", "Winter", "Spring", "Rainy"], answer: 0 },
      { id: 3, question: "What adapts to seasonal changes?", options: ["Rocks", "Plants and animals", "Cars", "Houses"], answer: 1 },
    ],
  },
  {
    audio: "/public/audio5.mp3",
    questions: [
      { id: 1, question: "What are clouds made of?", options: ["Water droplets or ice", "Sand", "Smoke", "Rocks"], answer: 0 },
      { id: 2, question: "What do clouds bring?", options: ["Earthquakes", "Rain or snow", "Volcanoes", "Heat"], answer: 1 },
      { id: 3, question: "Why are clouds important?", options: ["Weather prediction", "Cooking", "Painting", "Digging"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio6.mp3",
    questions: [
      { id: 1, question: "What does the Moon reflect?", options: ["Sunlight", "Earthlight", "Stars", "Fire"], answer: 0 },
      { id: 2, question: "What phenomenon does the Moon affect?", options: ["Rain", "Tides", "Winds", "Mountains"], answer: 1 },
      { id: 3, question: "Name a phase of the Moon.", options: ["Full moon", "Half sun", "Big star", "Bright cloud"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio7.mp3",
    questions: [
      { id: 1, question: "What type of water is in oceans?", options: ["Fresh water", "Salt water", "Hot water", "Ice"], answer: 1 },
      { id: 2, question: "What do oceans influence?", options: ["Weather and climate", "Deserts", "Mountains", "Cars"], answer: 0 },
      { id: 3, question: "What lives in oceans?", options: ["Trees", "Many animals", "Sand", "Clouds"], answer: 1 },
    ],
  },
  {
    audio: "/public/audio8.mp3",
    questions: [
      { id: 1, question: "What flows out of a volcano?", options: ["Lava", "Snow", "Water", "Wind"], answer: 0 },
      { id: 2, question: "Where do volcanoes form?", options: ["Tectonic boundaries", "Forests", "Deserts", "Oceans"], answer: 0 },
      { id: 3, question: "What are inactive volcanoes called?", options: ["Dormant", "Dead", "Cold", "Frozen"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio9.mp3",
    questions: [
      { id: 1, question: "What causes earthquakes?", options: ["Moving tectonic plates", "Rain", "Winds", "Clouds"], answer: 0 },
      { id: 2, question: "How is earthquake strength measured?", options: ["Thermometer", "Richter scale", "Barometer", "Compass"], answer: 1 },
      { id: 3, question: "What can reduce earthquake risk?", options: ["Safety measures", "Heavy rains", "Volcanoes", "Strong winds"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio10.mp3",
    questions: [
      { id: 1, question: "What are high landforms called?", options: ["Hills", "Mountains", "Plains", "Valleys"], answer: 1 },
      { id: 2, question: "Where do people live on mountains?", options: ["Peaks", "Lower slopes", "Clouds", "Sky"], answer: 1 },
      { id: 3, question: "What is found in mountains?", options: ["Minerals", "Gas", "Smoke", "Sand"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio11.mp3",
    questions: [
      { id: 1, question: "What do forests provide?", options: ["Oxygen", "Nitrogen", "Smoke", "Dust"], answer: 0 },
      { id: 2, question: "What lives in forests?", options: ["Animals", "Cars", "Planes", "Boats"], answer: 0 },
      { id: 3, question: "How do forests help land?", options: ["Prevent soil erosion", "Cause floods", "Make deserts", "Stop rain"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio12.mp3",
    questions: [
      { id: 1, question: "How much rain falls in deserts?", options: ["A lot", "Very little", "Everyday", "None"], answer: 1 },
      { id: 2, question: "What covers deserts?", options: ["Sand and rocks", "Water", "Snow", "Grass"], answer: 0 },
      { id: 3, question: "How do animals survive in deserts?", options: ["Adaptation", "Migration", "Flying", "Swimming"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio13.mp3",
    questions: [
      { id: 1, question: "What is rain?", options: ["Snow", "Water from clouds", "Wind", "Fog"], answer: 1 },
      { id: 2, question: "What does rain help?", options: ["Plants grow", "Make deserts", "Cause drought", "Destroy crops"], answer: 0 },
      { id: 3, question: "What can heavy rain cause?", options: ["Floods", "Earthquakes", "Winds", "Stars"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio14.mp3",
    questions: [
      { id: 1, question: "What is the Sun?", options: ["Star", "Planet", "Moon", "Asteroid"], answer: 0 },
      { id: 2, question: "What does the Sun provide?", options: ["Light and heat", "Snow", "Winds", "Rocks"], answer: 0 },
      { id: 3, question: "What energy comes from the Sun?", options: ["Solar energy", "Wind energy", "Water energy", "Gas"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio15.mp3",
    questions: [
      { id: 1, question: "What are stars made of?", options: ["Gas", "Rocks", "Water", "Soil"], answer: 0 },
      { id: 2, question: "When do we see stars?", options: ["Day", "Night", "Morning", "Afternoon"], answer: 1 },
      { id: 3, question: "What is the Sun?", options: ["Star", "Planet", "Comet", "Asteroid"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio16.mp3",
    questions: [
      { id: 1, question: "How do rainbows form?", options: ["Sunlight through rain", "Clouds", "Winds", "Snow"], answer: 0 },
      { id: 2, question: "How many colors are in a rainbow?", options: ["Five", "Seven", "Three", "Nine"], answer: 1 },
      { id: 3, question: "When do we see rainbows?", options: ["After rain", "Before sunrise", "At night", "During snow"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio17.mp3",
    questions: [
      { id: 1, question: "Where do rivers flow?", options: ["Mountains to oceans", "Sky to Earth", "Deserts", "Forests"], answer: 0 },
      { id: 2, question: "What do rivers provide?", options: ["Water", "Fire", "Smoke", "Sand"], answer: 0 },
      { id: 3, question: "Why are rivers important?", options: ["Transportation", "Cooking", "Painting", "Digging"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio18.mp3",
    questions: [
      { id: 1, question: "What is wind?", options: ["Moving air", "Still water", "Light", "Fire"], answer: 0 },
      { id: 2, question: "How does wind help plants?", options: ["Pollination", "Heating", "Melting", "Cutting"], answer: 0 },
      { id: 3, question: "What energy comes from wind?", options: ["Wind energy", "Solar energy", "Gas energy", "Water energy"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio19.mp3",
    questions: [
      { id: 1, question: "What do birds have?", options: ["Feathers and wings", "Scales", "Fur", "Skin"], answer: 0 },
      { id: 2, question: "What do birds lay?", options: ["Eggs", "Seeds", "Stones", "Nests"], answer: 0 },
      { id: 3, question: "Why are birds helpful?", options: ["Spread seeds", "Make clouds", "Cut trees", "Cause rain"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio20.mp3",
    questions: [
      { id: 1, question: "How many legs do insects have?", options: ["Four", "Six", "Eight", "Ten"], answer: 1 },
      { id: 2, question: "What do bees produce?", options: ["Honey", "Milk", "Oil", "Juice"], answer: 0 },
      { id: 3, question: "How do insects help plants?", options: ["Pollination", "Heating", "Cutting", "Melting"], answer: 0 },
    ],
  },
  {
    audio: "/public/audio21.mp3",
    questions: [
      {
        id: 1,
        question: "What is the main theme of the audio?",
        options: ["Friendship", "Hard work", "Teamwork", "Honesty"],
        answer: 2,
      },
      {
        id: 2,
        question: "What is emphasized as important?",
        options: ["Wealth", "Teamwork", "Luck", "Silence"],
        answer: 1,
      },
      {
        id: 3,
        question: "Which value is highlighted?",
        options: ["Selfishness", "Unity", "Fear", "Greed"],
        answer: 1,
      },
    ],
  },
  {
    audio: "/public/audio22.mp3",
    questions: [
      {
        id: 1,
        question: "Who is speaking in the audio?",
        options: ["Farmer", "Teacher", "Student", "Doctor"],
        answer: 0,
      },
      {
        id: 2,
        question: "What is being grown?",
        options: ["Wheat", "Rice", "Corn", "Sugarcane"],
        answer: 0,
      },
      {
        id: 3,
        question: "What is needed for crops?",
        options: ["Books", "Water", "Clothes", "Machines"],
        answer: 1,
      },
    ],
  },
  {
    audio: "/public/audio23.mp3",
    questions: [
      {
        id: 1,
        question: "What activity is described?",
        options: ["Reading", "Writing", "Drawing", "Cooking"],
        answer: 2,
      },
      {
        id: 2,
        question: "What tool is used?",
        options: ["Spoon", "Pencil", "Brush", "Chalk"],
        answer: 2,
      },
      {
        id: 3,
        question: "What is drawn in the audio?",
        options: ["House", "Tree", "Sun", "Book"],
        answer: 1,
      },
    ],
  },
  {
    audio: "/public/audio24.mp3",
    questions: [
      {
        id: 1,
        question: "What season is mentioned?",
        options: ["Winter", "Summer", "Spring", "Monsoon"],
        answer: 0,
      },
      {
        id: 2,
        question: "What do people wear?",
        options: ["Sweaters", "Raincoats", "Caps", "T-shirts"],
        answer: 0,
      },
      {
        id: 3,
        question: "What happens to water in winter?",
        options: ["Boils", "Freezes", "Flows", "Disappears"],
        answer: 1,
      },
    ],
  },
  {
    audio: "/public/audio25.mp3",
    questions: [
      {
        id: 1,
        question: "What is the main activity in the audio?",
        options: ["Reading", "Dancing", "Singing", "Sleeping"],
        answer: 2,
      },
      {
        id: 2,
        question: "What do singers use?",
        options: ["Brushes", "Microphones", "Books", "Pencils"],
        answer: 1,
      },
      {
        id: 3,
        question: "What feeling is expressed?",
        options: ["Sadness", "Happiness", "Fear", "Anger"],
        answer: 1,
      },
    ],
  },
  {
    audio: "/public/audio26.mp3",
    questions: [
      {
        id: 1,
        question: "What type of transport is mentioned?",
        options: ["Car", "Bicycle", "Train", "Plane"],
        answer: 1,
      },
      {
        id: 2,
        question: "What is needed to ride it?",
        options: ["Fuel", "Helmet", "Ticket", "Key"],
        answer: 1,
      },
      {
        id: 3,
        question: "What benefit is mentioned?",
        options: ["Fast", "Healthy", "Expensive", "Lazy"],
        answer: 1,
      },
    ],
  },
  {
    audio: "/public/audio27.mp3",
    questions: [
      {
        id: 1,
        question: "What food is described?",
        options: ["Rice", "Bread", "Cake", "Fruit"],
        answer: 2,
      },
      {
        id: 2,
        question: "What is used to make it?",
        options: ["Flour", "Milk", "Sugar", "All of these"],
        answer: 3,
      },
      {
        id: 3,
        question: "When do people eat it?",
        options: ["Birthdays", "Weddings", "Parties", "All of these"],
        answer: 3,
      },
    ],
  },
  {
    audio: "/public/audio28.mp3",
    questions: [
      {
        id: 1,
        question: "What is the profession mentioned?",
        options: ["Farmer", "Doctor", "Driver", "Teacher"],
        answer: 1,
      },
      {
        id: 2,
        question: "What does the doctor do?",
        options: ["Teaches", "Drives", "Cures", "Builds"],
        answer: 2,
      },
      {
        id: 3,
        question: "What place is connected with doctors?",
        options: ["School", "Hospital", "Office", "Market"],
        answer: 1,
      },
    ],
  },
  {
    audio: "/public/audio29.mp3",
    questions: [
      {
        id: 1,
        question: "What natural thing is described?",
        options: ["Mountain", "River", "Desert", "Forest"],
        answer: 1,
      },
      {
        id: 2,
        question: "What do rivers provide?",
        options: ["Water", "Books", "Food", "Shelter"],
        answer: 0,
      },
      {
        id: 3,
        question: "Where do rivers flow?",
        options: ["Sky", "Fields", "Mountains", "Roads"],
        answer: 2,
      },
    ],
  },
  {
    audio: "/public/audio30.mp3",
    questions: [
      {
        id: 1,
        question: "What do children do in the audio?",
        options: ["Play", "Read", "Sleep", "Eat"],
        answer: 0,
      },
      {
        id: 2,
        question: "Where are they playing?",
        options: ["Garden", "School", "Ground", "Park"],
        answer: 3,
      },
      {
        id: 3,
        question: "What are they playing with?",
        options: ["Books", "Bats", "Balls", "Pens"],
        answer: 2,
      },
    ],
  },
  {
    audio: "/public/audio31.mp3",
    questions: [
      {
        id: 1,
        question: "Which animal is mentioned?",
        options: ["Dog", "Cat", "Elephant", "Tiger"],
        answer: 2,
      },
      {
        id: 2,
        question: "What is said about elephants?",
        options: ["Small", "Weak", "Big", "Thin"],
        answer: 2,
      },
      {
        id: 3,
        question: "What do elephants eat?",
        options: ["Grass", "Meat", "Rice", "Fish"],
        answer: 0,
      },
    ],
  },
  {
    audio: "/public/audio32.mp3",
    questions: [
      {
        id: 1,
        question: "What is being described?",
        options: ["Computer", "Phone", "Radio", "TV"],
        answer: 0,
      },
      {
        id: 2,
        question: "What can computers do?",
        options: ["Cook food", "Solve sums", "Play games", "Both 2 and 3"],
        answer: 3,
      },
      {
        id: 3,
        question: "Where are computers used?",
        options: ["Schools", "Offices", "Homes", "All of these"],
        answer: 3,
      },
    ],
  },
  {
    audio: "/public/audio33.mp3",
    questions: [
      {
        id: 1,
        question: "What festival is mentioned?",
        options: ["Diwali", "Eid", "Christmas", "Holi"],
        answer: 0,
      },
      {
        id: 2,
        question: "What do people light?",
        options: ["Candles", "Lamps", "Bulbs", "Torches"],
        answer: 1,
      },
      {
        id: 3,
        question: "What is spread during Diwali?",
        options: ["Happiness", "Fear", "Sadness", "Noise"],
        answer: 0,
      },
    ],
  },
  {
    audio: "/public/audio34.mp3",
    questions: [
      {
        id: 1,
        question: "What is being described?",
        options: ["Book", "Newspaper", "Notebook", "Diary"],
        answer: 1,
      },
      {
        id: 2,
        question: "What does it provide?",
        options: ["Food", "News", "Shelter", "Money"],
        answer: 1,
      },
      {
        id: 3,
        question: "When do people read it?",
        options: ["Morning", "Afternoon", "Evening", "Anytime"],
        answer: 0,
      },
    ],
  },
  {
    audio: "/public/audio35.mp3",
    questions: [
      {
        id: 1,
        question: "Which planet is mentioned?",
        options: ["Mars", "Earth", "Venus", "Jupiter"],
        answer: 1,
      },
      {
        id: 2,
        question: "What is said about Earth?",
        options: ["Hot", "Full of water", "Dry", "Cold"],
        answer: 1,
      },
      {
        id: 3,
        question: "Who lives on Earth?",
        options: ["Aliens", "Animals and humans", "Only plants", "No one"],
        answer: 1,
      },
    ],
  },
  {
    audio: "/public/audio36.mp3",
    questions: [
      {
        id: 1,
        question: "What is being described?",
        options: ["Clock", "Calendar", "Watch", "Timer"],
        answer: 0,
      },
      {
        id: 2,
        question: "What does a clock show?",
        options: ["Date", "Weather", "Time", "Year"],
        answer: 2,
      },
      {
        id: 3,
        question: "Where are clocks found?",
        options: ["Houses", "Schools", "Offices", "All of these"],
        answer: 3,
      },
    ],
  },
  {
    audio: "/public/audio37.mp3",
    questions: [
      {
        id: 1,
        question: "What is the bird mentioned?",
        options: ["Crow", "Parrot", "Peacock", "Sparrow"],
        answer: 2,
      },
      {
        id: 2,
        question: "What is special about it?",
        options: ["Dance", "Beautiful feathers", "Flying high", "Sharp voice"],
        answer: 1,
      },
      {
        id: 3,
        question: "Which is India’s national bird?",
        options: ["Parrot", "Crow", "Peacock", "Sparrow"],
        answer: 2,
      },
    ],
  },
  {
    audio: "/public/audio38.mp3",
    questions: [
      {
        id: 1,
        question: "What festival is described?",
        options: ["Eid", "Diwali", "Christmas", "Holi"],
        answer: 2,
      },
      {
        id: 2,
        question: "What do children get?",
        options: ["Gifts", "Books", "Clothes", "Food"],
        answer: 0,
      },
      {
        id: 3,
        question: "Whose birthday is celebrated?",
        options: ["Jesus Christ", "Prophet Muhammad", "Lord Rama", "Buddha"],
        answer: 0,
      },
    ],
  },
  {
    audio: "/public/audio39.mp3",
    questions: [
      {
        id: 1,
        question: "What is described in the audio?",
        options: ["School", "Library", "Hospital", "Market"],
        answer: 0,
      },
      {
        id: 2,
        question: "Who studies there?",
        options: ["Doctors", "Drivers", "Students", "Shopkeepers"],
        answer: 2,
      },
      {
        id: 3,
        question: "Who teaches in school?",
        options: ["Teachers", "Students", "Drivers", "Singers"],
        answer: 0,
      },
    ],
  },
  {
    audio: "/public/audio40.mp3",
    questions: [
      {
        id: 1,
        question: "What is described?",
        options: ["Sun", "Moon", "Star", "Cloud"],
        answer: 1,
      },
      {
        id: 2,
        question: "When is it visible?",
        options: ["Day", "Night", "Morning", "Evening"],
        answer: 1,
      },
      {
        id: 3,
        question: "What shape is the moon?",
        options: ["Always full", "Round or crescent", "Square", "Triangle"],
        answer: 1,
      },
    ],
  },
];
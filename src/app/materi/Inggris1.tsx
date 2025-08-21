import React from 'react';
import { Book } from 'lucide-react';

export const Inggris1Metadata = {
  title: "My Next Words Grade 1",
  subtitle: "Bahasa Inggris",
  className: "1 Sekolah Dasar",
  curriculum: "Kurikulum Merdeka",
  overlayTitle: "Materi Bahasa Inggris Kelas 1",
  overlayContent: [
    {
      title: "Greetings and Introductions",
      icon: Book,
      detailTitle: "Greetings and Introductions",
      detailDescription: "Learn how to use basic greetings, introduce yourself, and ask about others wellbeing in simple English.",
      topics: [
        { title: "Basic greetings" },
        { title: "Introducing yourself" },
        { title: "Asking how someone is and responding" }
      ]
    },
    {
      title: "Numbers and Colors",
      icon: Book,
      detailTitle: "Numbers and Colors",
      detailDescription: "Recognize, count numbers from 1 to 10, and identify basic color names in English.",
      topics: [
        { title: "Counting numbers 1 to 10" },
        { title: "Naming basic colors" }
      ]
    },
    {
      title: "Shapes and Family Members",
      icon: Book,
      detailTitle: "Shapes and Family Members",
      detailDescription: "Identify simple shapes and learn the names of family members using basic English vocabulary.",
      topics: [
        { title: "Basic shapes" },
        { title: "Family members and names" }
      ]
    },
    {
      title: "Fruits and Animals",
      icon: Book,
      detailTitle: "Fruits and Animals",
      detailDescription: "Learn the names of common fruits and animals, and express likes using simple sentences.",
      topics: [
        { title: "Fruit names" },
        { title: "Common animals" },
        { title: "Expressing likes" }
      ]
    }
  ]
};

const cardColors = [
  { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-800' },
  { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800' },
  { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-800' },
  { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-800' },
  { bg: 'bg-purple-100', border: 'border-purple-500', text: 'text-purple-800' },
  { bg: 'bg-pink-100', border: 'border-pink-500', text: 'text-pink-800' },
  { bg: 'bg-indigo-100', border: 'border-indigo-500', text: 'text-indigo-800' },
  { bg: 'bg-teal-100', border: 'border-teal-500', text: 'text-teal-800' }
];

interface ContentItem {
  text?: string;
  examples?: (string | { text: string; image?: string })[];
  image?: string;
}

interface Subtopic {
  title: string;
  content: (string | ContentItem)[];
}

interface Bab {
  title: string;
  color: string;
  cerita: {
    judul: string;
    isi: string;
  };
  pengertian: string;
  subtopics: Subtopic[];
}

interface Inggris1Props {
  selectedTopicTitle: string;
}

export default function Inggris1({ selectedTopicTitle }: Inggris1Props) {
  const materiData = {
    bab: [
      {
        title: "Greetings and Introductions",
        color: "blue",
        cerita: {
          judul: "Meeting New Friends",
          isi: "Today was Kimi's first day at school. She felt nervous but excited. As she entered the classroom, her teacher smiled and said, \"Good morning!\" Kimi replied softly, \"Good morning, Miss.\"\n\nA boy named Joshua came to her and said, \"Hello! I'm Joshua. What's your name?\" Kimi answered, \"I'm Kimi.\" Joshua smiled and said, \"Nice to meet you, Kimi!\"\n\nLater, another girl named Aisyah asked, \"How are you, Kimi?\" Kimi replied, \"I'm fine, thank you.\" She felt happy because her new friends were so kind."
        },
        pengertian: "When we meet someone, we use greetings to say hello and start talking politely. In English, there are many kinds of greetings used at different times of the day. Greetings help us be friendly, show respect, and make new friends.",
        subtopics: [
          {
            title: "Saying Hello",
            content: [
              "Greetings we use at different times:",
              {
                examples: [
                  "Good morning (before lunch)",
                  "Good afternoon (after lunch until evening)",
                  "Good evening (when it's getting dark)",
                  "Hello or Hi (anytime)",
                  "Goodbye (when leaving)"
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"Good morning, Mom!\"",
                  "\"Hello, Dika!\"",
                  "\"Goodbye, Miss Rani.\""
                ]
              }
            ]
          },
          {
            title: "Asking How Someone Is",
            content: [
              "After saying hello, we often ask how someone feels:",
              {
                text: "Question:",
                examples: ["\"How are you?\""]
              },
              {
                text: "Possible answers:",
                examples: [
                  "\"I am fine.\"",
                  "\"I am good.\"",
                  "\"I am okay.\"",
                  "\"I'm great!\""
                ]
              },
              {
                text: "Example conversation:",
                examples: [
                  "\"Hi, Kimi. How are you?\"",
                  "\"I'm fine, thank you!\""
                ]
              }
            ]
          },
          {
            title: "Introducing Yourself",
            content: [
              "When meeting someone new, you can tell them your name:",
              {
                text: "Ways to introduce yourself:",
                examples: [
                  "\"I am Kimi.\"",
                  "\"My name is Joshua.\"",
                  "\"I'm Cici.\""
                ]
              },
              {
                text: "To ask someone's name:",
                examples: ["\"What is your name?\""]
              },
              {
                text: "You can say:",
                examples: ["\"Nice to meet you.\""]
              }
            ]
          },
          {
            title: "Talking About Others",
            content: [
              "We can talk about people using:",
              {
                examples: [
                  "You are (to talk to someone)",
                  "He is (about a boy or man)",
                  "She is (about a girl or woman)"
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"You are Miss Rani.\"",
                  "\"He is Mr. Togar.\"",
                  "\"She is my friend, Cici.\""
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Numbers and Colors",
        color: "green",
        cerita: {
          judul: "Counting and Coloring",
          isi: "In the classroom, Miss Rani showed the children colorful balls. \"Let's count them!\" she said. The children counted together: \"One, two, three, four, five!\"\n\n\"Now, what colors do you see?\" Miss Rani asked. Joshua pointed to a red ball and said, \"Red!\" Kimi saw a blue one and said, \"Blue!\" Aisyah found a yellow ball and shouted, \"Yellow!\"\n\nMiss Rani smiled. \"Very good! Now, who can tell me: how many red balls are there?\" The children looked carefully and answered, \"Two red balls!\""
        },
        pengertian: "Numbers help us count objects, while colors help us describe what things look like. With these simple words, we can talk about the world around us in English.",
        subtopics: [
          {
            title: "Counting Numbers",
            content: [
              "We count from one to ten:",
              {
                examples: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
              },
              {
                text: "Examples of using numbers:",
                examples: [
                  "\"I have two erasers.\"",
                  "\"There are six students.\"",
                  "\"She has four crayons.\""
                ]
              },
              {
                text: "Question:",
                examples: ["\"How many pens do you see?\""]
              }
            ]
          },
          {
            title: "Naming Colors",
            content: [
              "Basic color words in English:",
              {
                examples: [
                  { text: "Red", image: "images/red.png" },
                  { text: "Blue", image: "images/blue.png" },
                  { text: "Yellow", image: "images/yellow.png" },
                  { text: "Green", image: "images/green.png" },
                  { text: "Black", image: "images/black.png" },
                  { text: "White", image: "images/white.png" },
                  { text: "Brown", image: "images/brown.png" },
                  { text: "Orange", image: "images/orange.png" },
                  { text: "Purple", image: "images/purple.png" },
                  { text: "Gray", image: "images/gray.png" }
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"The ball is red.\"",
                  "\"My book is blue.\"",
                  "\"That chair is green.\"",
                  "\"My shoes are black and white.\""
                ]
              },
              {
                text: "Question and answer:",
                examples: [
                  "\"What color is this?\"",
                  "\"It is yellow.\""
                ]
              }
            ]
          },
          {
            title: "Using Numbers and Colors Together",
            content: [
              "We can combine numbers and colors in sentences:",
              {
                examples: [
                  "\"I have three red pencils.\"",
                  "\"There are two yellow balls.\"",
                  "\"She sees five green apples.\"",
                  "\"He brings four black books.\""
                ]
              },
              "This helps us describe things more clearly."
            ]
          }
        ]
      },
      {
        title: "Shapes and Family Members",
        color: "purple",
        cerita: {
          judul: "Family Picture",
          isi: "Kimi drew a picture of her family. She used different shapes to draw them. Her father was a big rectangle, her mother was a triangle, and her little brother was a small circle. She showed it to her teacher.\n\n\"This is my family,\" Kimi said. \"My father, my mother, and my baby brother.\" Miss Rani smiled. \"What shapes did you use?\" she asked. Kimi pointed and said, \"Rectangle for father, triangle for mother, and circle for brother!\"\n\n\"Very creative!\" said Miss Rani. \"And who is this heart shape?\" Kimi replied, \"That's my grandmother. She gives me heart-shaped cookies!\""
        },
        pengertian: "Shapes help us describe how things look, while family members are the people we live with every day. Learning these words in English helps us talk about our surroundings and our loved ones.",
        subtopics: [
          {
            title: "Basic Shapes",
            content: [
              "Common shapes in English:",
              {
                examples: [
                  { text: "Circle", image: "images/circle-shape.jpeg" },
                  { text: "Square", image: "images/square-shape.png" },
                  { text: "Triangle", image: "images/triangle-shape.png" },
                  { text: "Rectangle", image: "images/rectangle-shape.png" },
                  { text: "Star", image: "images/star-shape.png" },
                  { text: "Heart", image: "images/heart-shape.png" }
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"This is a circle.\"",
                  "\"My book is a rectangle.\"",
                  "\"That window is a square.\""
                ]
              }
            ]
          },
          {
            title: "Family Members",
            content: [
              "Names of family members:",
              {
                examples: [
                  { text: "Father/Dad", image: "images/father.jpeg" },
                  { text: "Mother/Mom", image: "images/mother.jpeg" },
                  { text: "Brother", image: "images/brother.jpeg" },
                  { text: "Sister", image: "images/sister.jpeg" },
                  { text: "Grandfather", image: "images/grandpa.jpeg" },
                  { text: "Grandmother", image: "images/grandma.jpeg" },
                  { text: "Baby", image: "images/baby.jpeg" }
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"This is my father.\"",
                  "\"That is my sister.\"",
                  "\"She is my mother.\"",
                  "\"He is my brother.\""
                ]
              }
            ]
          },
          {
            title: "Describing with Shapes and Family",
            content: [
              "Combining shape and family words:",
              {
                examples: [
                  "\"My brother has a round ball.\"",
                  "\"Our table is a rectangle.\"",
                  "\"Grandma makes heart-shaped cookies.\""
                ]
              },
              "This makes our sentences more complete and interesting."
            ]
          }
        ]
      },
      {
        title: "Fruits and Animals",
        color: "teal",
        cerita: {
          judul: "At the Zoo",
          isi: "The class went on a field trip to the zoo. The children were excited to see many animals. \"Look! A monkey!\" shouted Joshua. \"It's eating a banana!\" said Kimi.\n\nAt lunchtime, the children sat together. Aisyah had an apple, Joshua had an orange, and Kimi had a mango. \"I like mangoes,\" said Kimi. \"They're sweet.\" Joshua replied, \"I like oranges because they're juicy.\"\n\nLater, they saw a big elephant. \"What animal do you like?\" asked Miss Rani. \"I like elephants!\" said Aisyah. \"They're big and strong!\""
        },
        pengertian: "Fruits are plants we eat, while animals are living creatures we see around us. Learning their names in English helps us describe what we eat and the creatures we encounter in our daily lives.",
        subtopics: [
          {
            title: "Common Fruits",
            content: [
              "Names of fruits in English:",
              {
                examples: [
                  { text: "Apple", image: "images/apple.jpeg" },
                  { text: "Banana", image: "images/banana.jpeg" },
                  { text: "Orange", image: "images/orange.jpeg" },
                  { text: "Mango", image: "images/mango.jpeg" },
                  { text: "Watermelon", image: "images/watermelon.jpeg" },
                  { text: "Grapes", image: "images/grapes.jpeg" },
                  { text: "Strawberry", image: "images/strawberry.jpeg" }
                ]
              },
              {
                text: "Describing fruits:",
                examples: [
                  "\"This is a red apple.\"",
                  "\"The banana is long and yellow.\"",
                  "\"That watermelon is very big!\"",
                  "\"Strawberries are small and red.\""
                ]
              }
            ]
          },
          {
            title: "Common Animals",
            content: [
              "Names of animals in English:",
              {
                examples: [
                  { text: "Cat", image: "images/cat.jpeg" },
                  { text: "Dog", image: "images/dog.jpeg" },
                  { text: "Bird", image: "images/bird.jpeg" },
                  { text: "Fish", image: "images/fish.jpeg" },
                  { text: "Cow", image: "images/cow.jpeg" },
                  { text: "Goat", image: "images/goat.jpeg" },
                  { text: "Chicken", image: "images/chicken.jpeg" },
                  { text: "Duck", image: "images/duck.jpeg" }
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"This is a cat.\"",
                  "\"That dog is big.\"",
                  "\"I see a cow on the farm.\"",
                  "\"The fish is small and orange.\""
                ]
              }
            ]
          },
          {
            title: "Expressing Likes",
            content: [
              "Using \"I like...\" to show preference:",
              {
                examples: [
                  "\"I like bananas.\"",
                  "\"I like dogs.\"",
                  "\"I like grapes and mangoes.\"",
                  "\"I like birds because they can fly.\""
                ]
              },
              {
                text: "For dislikes:",
                examples: ["\"I don't like fish.\""]
              },
              {
                text: "Talking about favorites:",
                examples: [
                  "\"My favorite fruit is orange.\"",
                  "\"My favorite animal is a cat.\""
                ]
              }
            ]
          }
        ]
      }
    ],
    tips: [
      "Practice greetings with family members every day",
      "Count objects around you in English",
      "Name the colors of things you see daily",
      "Draw your family and name each member in English",
      "Make a list of fruits and animals you know",
      "Use simple English sentences to describe your day"
    ]
  };

  const selectedBab = materiData.bab.find(bab => bab.title === selectedTopicTitle);

  if (!selectedBab) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Material Not Found</h2>
          <p className="text-gray-700">Cannot find material for topic: {selectedTopicTitle}</p>
        </div>
      </div>
    );
  }

  const mainColor = cardColors.find(color => color.border.includes(selectedBab.color)) || cardColors[0];

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <article className="bg-white rounded-lg shadow-sm p-6">
        {selectedBab.cerita && (
          <div className="mb-8 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Story: {selectedBab.cerita.judul}
            </h3>
            <div className="bg-white p-4 rounded">
              <p className="text-gray-700 italic whitespace-pre-line">
                {selectedBab.cerita.isi}
              </p>
            </div>
          </div>
        )}

        <div className={`${mainColor.bg} border-l-4 ${mainColor.border} p-6 mb-8 rounded-lg`}>
          <h3 className={`text-xl font-semibold mb-3 ${mainColor.text}`}>
            About {selectedBab.title}
          </h3>
          <p className="text-gray-800">{selectedBab.pengertian}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
            Learning Materials:
          </h3>
          <div className="space-y-6">
            {selectedBab.subtopics.map((subtopic, index) => {
              const color = cardColors[index % cardColors.length];
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-l-4 ${color.border} ${color.bg} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <h4 className={`font-semibold text-lg mb-3 ${color.text}`}>
                    {subtopic.title}
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    {subtopic.content.map((item, i) => {
                      if (typeof item === 'string') {
                        return <p key={i}>{item}</p>;
                      } else if ('image' in item && item.image) {
                        return (
                          <div key={i} className="my-4">
                            <img 
                              src={typeof item.image === 'string' ? item.image : ''}
                              alt={subtopic.title}
                              className="mx-auto rounded-lg shadow-md max-w-full h-auto"
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div key={i}>
                            {item.text && <p className="font-medium">{item.text}</p>}
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                              {item.examples?.map((example, j) => {
                                if (typeof example === 'string') {
                                  return <li key={j}>{example}</li>;
                                } else {
                                  return (
                                    <li key={j} className="flex items-start gap-2">
                                      {example.image && (
                                        <img 
                                        src={example.image} 
                                        alt={example.text.split('--')[0].trim()} 
                                        className="w-35 h-25 object-cover rounded"
                                        />
                                      )}
                                      <span>{example.text}</span>
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {selectedBab.title === "Greetings and Introductions" && (
          <div className="mt-8">
            <div className="bg-gradient-to-r from-blue-100 to-white p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Learning Tips:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {materiData.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
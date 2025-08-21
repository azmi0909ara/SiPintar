import React from 'react';
import { Book } from 'lucide-react';

export const Inggris3Metadata = {
  title: "My Next Words Grade 3",
  subtitle: "Bahasa Inggris",
  className: "3 Sekolah Dasar",
  curriculum: "Kurikulum Merdeka",
  overlayTitle: "Materi Bahasa Inggris Kelas 3",
  overlayContent: [
    {
      title: "My Classroom",
      icon: Book,
      detailTitle: "My Classroom",
      detailDescription: "Recognizing classroom objects and describing their positions using simple sentences.",
      topics: [
        { title: "Classroom objects (chair, table, board, book, etc.)" },
        { title: "Prepositions of place (in, on, under, beside)" },
        { title: "Sentence structure: 'Where is the...?', 'It is on the...'" }
      ]
    },
    {
      title: "My School Activities",
      icon: Book,
      detailTitle: "My School Activities",
      detailDescription: "Using vocabulary and expressions to talk about school-related daily activities both in speaking and writing.",
      topics: [
        { title: "School activities (reading, writing, drawing, etc.)" },
        { title: "Time expressions (in the morning, at break time, etc.)" },
        { title: "Verb usage in simple present tense" }
      ]
    },
    {
      title: "My Body and Health",
      icon: Book,
      detailTitle: "My Body and Health",
      detailDescription: "Identifying body parts and expressing personal hygiene and health habits in English.",
      topics: [
        { title: "Parts of the body (head, hands, feet, etc.)" },
        { title: "Hygiene and health-related vocabulary" },
        { title: "Simple imperative sentences: 'I brush my teeth', 'Wash your hands'" }
      ]
    },
    {
      title: "My Belongings",
      icon: Book,
      detailTitle: "My Belongings",
      detailDescription: "Recognizing personal belongings and using possessive structures and descriptive words in context.",
      topics: [
        { title: "Possessions: bag, pencil case, ruler, etc." },
        { title: "Sentence structure: 'This is my...', 'That is your...'" },
        { title: "Descriptive adjectives: big, small, new, old" }
      ]
    },
    {
      title: "Things Around Me",
      icon: Book,
      detailTitle: "Things Around Me",
      detailDescription: "Describing objects found at home or in the surrounding environment using appropriate adjectives.",
      topics: [
        { title: "Home and surrounding objects" },
        { title: "Adjectives for description (clean, dirty, bright, etc.)" },
        { title: "Basic descriptive sentences" }
      ]
    },
    {
      title: "Animals Around Us",
      icon: Book,
      detailTitle: "Animals Around Us",
      detailDescription: "Introducing different types of animals and their features using short and clear descriptive phrases.",
      topics: [
        { title: "Farm, wild, and domestic animals" },
        { title: "Vocabulary: wings, tail, fur, horn" },
        { title: "Descriptive sentences about animals" }
      ]
    },
    {
      title: "Food and Beverages",
      icon: Book,
      detailTitle: "Food and Beverages",
      detailDescription: "Talking about favorite foods and drinks, expressing preferences and describing tastes.",
      topics: [
        { title: "Vocabulary: rice, soup, water, juice, etc." },
        { title: "Tastes: sweet, sour, salty" },
        { title: "Likes and dislikes" }
      ]
    },
    {
      title: "Holidays and Celebrations",
      icon: Book,
      detailTitle: "Holidays and Celebrations",
      detailDescription: "Understanding common celebrations and holidays and expressing related feelings and activities.",
      topics: [
        { title: "Holiday vocabulary (birthday, Eid, Christmas, etc.)" },
        { title: "Celebration activities" },
        { title: "Expression of feelings and time: 'I am happy', 'on Sunday'" }
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
  table?: {
    headers: string[];
    rows: {
      image: string;
      animal: string;
      habitat: string;
    }[];
  };
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

interface Inggris3Props {
  selectedTopicTitle: string;
}

export default function Inggris3({ selectedTopicTitle }: Inggris3Props) {
  const materiData = {
    bab: [
      {
        title: "My Classroom",
        color: "blue",
        cerita: {
          judul: "A Morning in Class",
          isi: "It was a bright Monday morning. Rani walked into her classroom with a happy face. She looked around and saw her friends already sitting at their desks. Some were reading books, some were talking, and some were drawing pictures. Rani smiled. She liked her classroom. It was a place where she could learn and have fun.\n\nShe put her bag under the chair, then took out her pencil case and notebook and placed them on the table. On the wall in front of her was a whiteboard. The eraser was on the teacher's table, and there was a box beside the cupboard filled with colorful markers.\n\nSuddenly, Rani couldn't find her ruler. She looked around.\n\n\"Where is my ruler?\" she asked her friend, Budi.\n\nBudi opened her pencil case. \"It's in here!\" he said, laughing.\n\nRani laughed too. \"Thank you, Budi! I always forget where I put my things.\"\n\nJust then, the teacher came in. \"Good morning, everyone!\"\n\n\"Good morning, Ma'am!\" said all the students together. Another school day had started."
        },
        pengertian: "A classroom is a special place where students gather to learn together. Every classroom has many objects that help us study. Knowing the names of these objects in English is very useful. Let's explore them together!",
        subtopics: [
          {
            title: "Vocabulary: Classroom Objects",
            content: [
              "Here are some common things you will find in your classroom:",
              {
                examples: [
                  { text: "Chair: a seat for sitting", image: "images/chair.jpeg" },
                  { text: "Table: where you put your books and do your work", image: "images/table.jpeg" },
                  { text: "Board: the whiteboard or blackboard used by the teacher", image: "images/blackboard.jpeg" },
                  { text: "Book: used for reading and learning", image: "images/book.jpeg" },
                  { text: "Bag: where you keep your school things", image: "images/bag.jpeg" },
                  { text: "Pencil and pen: used for writing", image: "images/pencil-pen.jpeg" },
                  { text: "Eraser: used to remove pencil marks", image: "images/eraser.jpeg" },
                  { text: "Ruler: used to draw lines or measure things", image: "images/ruler.jpeg" },
                  { text: "Pencil case: where you keep your small school tools", image: "images/pencil-case.jpeg" }
                ]
              },
              "Each of these objects helps us during our school day."
            ]
          },
          {
            title: "Prepositions of Place",
            content: [
              "When we talk about where something is, we use words called prepositions of place. These words show us the position of an object.",
              {
                text: "Let's learn some of them:",
                examples: [
                  { text: "on: The book is on the table.", image: "images/book-on-table.jpeg" },
                  { text: "in: The pencils are in the box.", image: "images/pencil-in-the-box.jpeg" },
                  { text: "under: The bag is under the chair.", image: "images/bag-under-the-chair.jpeg" },
                  { text: "beside: The ruler is beside the notebook.", image: "images/ruler-beside-notebook.jpeg" }
                ]
              },
              "These words help you explain clearly where things are in your classroom."
            ]
          },
          {
            title: "Using Questions and Answers",
            content: [
              "Now that we know the names of objects and prepositions, we can make simple sentences. You can ask and answer like this:",
              {
                examples: [
                  "\"Where is the book?\" → \"It is on the table.\"",
                  "\"Where are the pens?\" → \"They are in the pencil case.\""
                ]
              },
              "You can also describe things that belong to you or your friends:",
              {
                examples: [
                  "\"This is my bag.\"",
                  "\"That is your ruler.\""
                ]
              },
              "These small sentences are easy and fun to say. Try them with your classmates!"
            ]
          }
        ]
      },
      {
        title: "My School Activities",
        color: "green",
        cerita: {
          judul: "A Busy Day at School",
          isi: "It's Tuesday morning. Dika arrives at school early with his backpack and a big smile. As he walks into the classroom, he greets his teacher and friends cheerfully. \"Good morning, everyone!\"\n\nThe classroom is already full of energy. Some of his classmates are reading quietly in a corner, while others are writing in their notebooks. A group near the window is drawing colorful pictures. The teacher is arranging materials on her table. On the whiteboard, the day's plan is written clearly:\n\n📅 Schedule:\nMorning: Reading and Writing\nBreak Time: Play and Snack\nAfter Break: Drawing and Singing\n\nDika looks at the board and feels excited. He enjoys all of these activities. Reading helps him discover new stories, writing helps him express ideas, and drawing is just fun!\n\n\"Are you ready to learn?\" the teacher asks. \"Yes!\" the class shouts. And just like that, another wonderful school day begins."
        },
        pengertian: "Every day at school, students do many activities that help them learn and grow. These activities are not only useful, but also fun. By learning their names in English and using the correct expressions, we can describe our daily routines clearly.",
        subtopics: [
          {
            title: "Vocabulary: School Activities",
            content: [
              "Let's look at some of the most common school activities:",
              {
                examples: [
                  { text: "Reading: Looking at books or texts and understanding the words. Example: I read a story about animals.", image: "images/reading.jpeg" },
                  { text: "Writing: Using a pencil or pen to write letters, words, or sentences. Example: We write our names on the paper.", image: "images/writing.jpeg" },
                  { text: "Drawing: Making pictures with pencils, crayons, or markers. Example: He draws a house and a tree.", image: "images/drawing.jpeg" },
                  { text: "Singing: Using your voice to sing songs. Example: We sing together in music class.", image: "images/singing.jpeg" },
                  { text: "Playing: Doing fun activities with friends, especially during break time. Example: They play games in the school yard.", image: "images/lompat-tali.jpeg" }
                ]
              },
              "These activities make school life interesting and help children enjoy learning."
            ]
          },
          {
            title: "Time Expressions",
            content: [
              "To explain when we do something, we use time expressions. These phrases tell us the part of the day or day of the week.",
              {
                text: "Common time expressions:",
                examples: [
                  "In the morning: Before break time",
                  "At break time: Time to rest and eat snacks",
                  "In the afternoon: After lunch or later in the school day",
                  "Every day: Something that happens regularly",
                  "On Monday/Tuesday/Wednesday, etc.: To talk about specific days"
                ]
              },
              {
                text: "Example sentences:",
                examples: [
                  "\"I read in the morning.\"",
                  "\"We play at break time.\"",
                  "\"She sings on Friday.\""
                ]
              }
            ]
          },
          {
            title: "Grammar Focus: Simple Present Tense",
            content: [
              "When we talk about habits or routines, we use the simple present tense.",
              {
                text: "Sentence patterns:",
                examples: [
                  "I/You/We/They + base verb: I read. We write. They draw.",
                  "He/She/It + base verb + -s/-es: He reads. She writes. It sings."
                ]
              },
              {
                text: "Tips:",
                examples: [
                  "Add -s for he/she/it: She draws, He plays",
                  "Do not add -s for I/you/we/they: I draw, They play"
                ]
              },
              {
                text: "Example sentences:",
                examples: [
                  "\"We read in the morning.\"",
                  "\"She writes a story.\"",
                  "\"They draw pictures every day.\""
                ]
              },
              "By practicing these sentence patterns, you can talk about your daily school life more confidently in English."
            ]
          }
        ]
      },
      {
        title: "My Body and Health",
        color: "purple",
        cerita: {
          judul: "The Health Talk",
          isi: "It was a bright Wednesday morning when Miss Ana brought a colorful poster to class. The poster showed a smiling boy with labels pointing to his body parts: head, eyes, hands, feet, and more.\n\n\"Good morning, everyone!\" she said cheerfully.\n\n\"Good morning, Miss Ana!\" the students replied.\n\n\"Today, we will learn about our body and how to take care of it.\"\n\nShe pointed at the eyes. \"What do we use these for?\"\n\n\"To see!\" shouted Riko.\n\n\"And this?\" She pointed at the ears.\n\n\"To hear!\" said Arman.\n\nThe class continued with laughter and excitement as they named each part of the body. Then Miss Ana asked, \"Who brushed their teeth this morning?\"\n\nAlmost all hands went up.\n\n\"Good!\" she smiled. \"Keeping your body clean is very important. Clean bodies are healthy bodies!\""
        },
        pengertian: "Our bodies are amazing. We can walk, run, play, see, and hear because of our body parts. But to stay strong and healthy, we must also know how to take care of them. Let's start by learning the names of common body parts and how to keep each part clean and healthy.",
        subtopics: [
          {
            title: "Vocabulary: Parts of the Body",
            content: [
              "We use different parts of our body every day. Here are some of them:",
              {
                examples: [
                  { text: "Head: the top of your body, where your brain is.", image: "images/head.jpeg" },
                  { text: "Eyes: for seeing.", image: "images/eyes.jpeg" },
                  { text: "Ears: for listening.", image: "images/ears.jpeg" },
                  { text: "Nose: for smelling.", image: "images/nose.jpeg" },
                  { text: "Mouth: for eating and speaking.", image: "images/mouth.jpeg" },
                  { text: "Teeth: to chew your food.", image: "images/teeth.jpeg" },
                  { text: "Hands: to hold, write, or play.", image: "images/hands.jpeg" },
                  { text: "Legs: to walk and run.", image: "images/legs.jpeg" },
                  { text: "Feet: to stand and move around.", image: "images/feet.jpeg" }
                ]
              },
              {
                text: "Example sentences:",
                examples: [
                  "\"I see with my eyes.\"",
                  "\"I eat with my mouth.\"",
                  "\"I write with my hands.\"",
                  "\"I run with my legs.\""
                ]
              }
            ]
          },
          {
            title: "Good Habits for Clean and Healthy Living",
            content: [
              "We can stay healthy by following good hygiene and daily habits. These habits help us feel fresh and avoid sickness.",
              {
                text: "Healthy habits include:",
                examples: [
                  { text: "Washing hands before and after meals.", image: "images/wash-hand.jpeg" },
                  { text: "Brushing teeth in the morning and before sleep.", image: "images/brush-teeth.jpeg" },
                  { text: "Taking a bath every day to keep the body clean.", image: "images/take-bath.jpeg" },
                  { text: "Eating healthy foods, like vegetables and fruits.", image: "images/eat-healthy.jpeg" },
                  { text: "Drinking enough water to stay hydrated.", image: "images/drinking.jpeg" },
                  { text: "Getting enough sleep to help our body rest.", image: "images/sleep.jpeg" }
                ]
              },
              "Doing these every day makes us feel good and helps us stay ready to learn and play."
            ]
          },
          {
            title: "Language Focus: Sentences About Health",
            content: [
              "We use simple present tense to talk about things we do every day.",
              {
                text: "Examples:",
                examples: [
                  "\"I take a bath every morning.\"",
                  "\"She brushes her teeth before school.\"",
                  "\"We wash our hands before eating.\"",
                  "\"They play outside in the afternoon.\""
                ]
              },
              "We also use imperative sentences to tell someone to do something:",
              {
                text: "Examples:",
                examples: [
                  "\"Wash your hands!\"",
                  "\"Brush your teeth!\"",
                  "\"Eat healthy food!\"",
                  "\"Don't forget to sleep early!\""
                ]
              },
              "These short and clear sentences help us remind ourselves and others about good habits."
            ]
          }
        ]
      },
      {
        title: "My Belongings",
        color: "teal",
        cerita: {
          judul: "The Pencil Case Surprise",
          isi: "It was Tuesday morning, and the students were getting ready for English class. Miss Dina had just walked in when she noticed something funny.\n\n\"Class, who has a yellow pencil with a smiley face?\" she asked, holding it up.\n\nSarah looked at her desk. \"Oops! That's mine!\" she giggled. \"I forgot I put it in my notebook.\"\n\nMiss Dina smiled. \"It's important to keep your things organized.\"\n\nThen she asked the class, \"What do you bring to school every day?\"\n\nBima raised his hand. \"I always bring my pencil case. It has my pens, pencils, and erasers.\"\n\n\"And what color is your pencil case?\" asked Miss Dina.\n\n\"It's blue and white. It's new,\" said Bima proudly.\n\n\"Great!\" said Miss Dina. \"Today, we will learn how to talk about our belongings in English. We will also learn how to describe them clearly.\""
        },
        pengertian: "We all have things that we use and carry every day. These things are called belongings. At school, our belongings help us learn and stay prepared. It's important to know the names of our belongings in English, how to describe them, and how to say who they belong to.",
        subtopics: [
          {
            title: "Common School Belongings",
            content: [
              "Here are some belongings we usually bring to school:",
              {
                examples: [
                  { text: "Bag: to carry your books and other items.", image: "images/bag.jpeg" },
                  { text: "Pencil case: a small container for pencils and pens.", image: "images/pencil-case.jpeg" },
                  { text: "Pencil & pen: used for writing.", image: "images/pencil-pen.jpeg" },
                  { text: "Eraser: used to erase pencil marks.", image: "images/eraser.jpeg" },
                  { text: "Ruler: to draw straight lines or measure.", image: "images/ruler.jpeg" },
                  { text: "Notebook: to write down notes and lessons.", image: "images/notebook.jpeg" },
                  { text: "Book: to read and learn from.", image: "images/book.jpeg" }
                ]
              },
              {
                text: "Example sentences:",
                examples: [
                  "\"I have a pink pencil case.\"",
                  "\"My book is inside my bag.\"",
                  "\"She brings two pens to school.\""
                ]
              }
            ]
          },
          {
            title: "Talking About Ownership: Whose is it?",
            content: [
              "To tell who owns something, we use possessive pronouns. These words help us say if the item is mine, yours, his, hers, and so on.",
              {
                text: "Possessive words:",
                examples: [
                  "my: belongs to me",
                  "your: belongs to you",
                  "his: belongs to a boy",
                  "her: belongs to a girl",
                  "our: belongs to us",
                  "their: belongs to them"
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"This is my bag.\"",
                  "\"That is your notebook.\"",
                  "\"Is this his ruler?\" → \"Yes, it is.\"",
                  "\"Those are their pens.\""
                ]
              },
              "When asking about ownership, you can say:",
              {
                examples: [
                  "\"Whose pencil is this?\" → \"It's mine.\" or \"It's Lina's pencil.\""
                ]
              }
            ]
          },
          {
            title: "Describing Our Belongings",
            content: [
              "We can describe the things we own using adjectives. Adjectives tell us more about what something looks like, such as its color, size, or condition.",
              {
                text: "Useful adjectives:",
                examples: [
                  "Colors: red, blue, green, yellow, black, white",
                  "Sizes: big, small, long, short",
                  "Condition: new, old, clean, dirty"
                ]
              },
              {
                text: "Example sentences:",
                examples: [
                  "\"My pencil is long and yellow.\"",
                  "\"This is a small, red notebook.\"",
                  "\"Her eraser is new and white.\""
                ]
              },
              "You can also combine ownership and description:",
              {
                examples: [
                  "\"This is my big blue bag.\"",
                  "\"That is his small, old ruler.\""
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Things Around Me",
        color: "yellow",
        cerita: {
          judul: "Exploring the House",
          isi: "One sunny afternoon, Arka stayed home after school. While waiting for his parents, he decided to walk around the house. He looked into the living room and saw a big brown sofa. His little sister was sitting there, hugging her favorite doll.\n\nNext, Arka walked into the kitchen. \"Wow! The table is clean, and the chairs are in place,\" he said. He opened the cupboard and saw some cups and plates inside.\n\nHe then looked at the wall. \"Oh! It's already 4 o'clock,\" he said while checking the round clock. The light from the window made the room bright and warm.\n\nArka smiled. \"There are so many things in my house. I want to learn how to name and describe them in English!\""
        },
        pengertian: "Many things around us can be described using English. These are some of the most common items found at home or nearby.",
        subtopics: [
          {
            title: "Vocabulary: Things We See at Home",
            content: [
              "These are some of the most common items found at home or nearby:",
              {
                examples: [
                  { text: "Chair: A seat to sit on, usually with four legs and a back.", image: "images/chair.jpeg" },
                  { text: "Table: A flat surface for eating, studying, or playing.", image: "images/table.jpeg" },
                  { text: "Sofa: A large, soft seat that can hold more than one person.", image: "images/sofa.jpeg" },
                  { text: "Bed: A place where we sleep and rest at night.", image: "images/bed.jpeg" },
                  { text: "Window: An opening that lets light and air come in.", image: "images/window.jpeg" },
                  { text: "Door: An object that can be opened or closed to enter or leave a room.", image: "images/door.jpeg" },
                  { text: "Cupboard: A cabinet where we keep plates, cups, and other items.", image: "images/cupboard.jpeg" },
                  { text: "Clock: A device that tells the time.", image: "images/clock.jpeg" },
                  { text: "Lamp: A tool that gives us light when it's dark.", image: "images/lamp.jpeg" },
                  { text: "Carpet: A soft material placed on the floor.", image: "images/carpet.jpeg" }
                ]
              }
            ]
          },
          {
            title: "Describing What's Around You",
            content: [
              "After knowing the names of objects, we can describe them using simple words called adjectives. These help us explain what something looks or feels like.",
              {
                text: "Here are some useful adjectives:",
                examples: [
                  "Color: red, blue, green, yellow, black, white",
                  "Size: big, small, long, short",
                  "Feel: soft, hard, smooth, rough",
                  "Condition: clean, dirty, new, old",
                  "Brightness: bright, dark"
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"The blue chair is soft.\"",
                  "\"That is a small white lamp.\"",
                  "\"The carpet is dirty, let's clean it.\"",
                  "\"My bed is big and soft.\""
                ]
              },
              "Describing things helps us communicate better. When you lose something, or want to explain where something is, these words are very helpful."
            ]
          },
          {
            title: "Sentence Patterns to Talk About Surroundings",
            content: [
              "Use these simple English sentence patterns to describe or ask about things:",
              {
                examples: [
                  "\"This is a...\" → \"This is a sofa.\"",
                  "\"That is a...\" → \"That is a cupboard.\"",
                  "\"These are...\" → \"These are chairs.\"",
                  "\"It is...\" → \"It is big and clean.\"",
                  "\"They are...\" → \"They are small and white.\"",
                  "\"Where is the...?\" → \"Where is the table?\" → \"It is near the window.\"",
                  "\"There is / There are...\" → \"There is a clock on the wall.\" or \"There are two windows in my room.\""
                ]
              },
              "These patterns are easy to remember and help you speak confidently about your home and your surroundings."
            ]
          }
        ]
      },
      {
        title: "Animals Around Us",
        color: "red",
        cerita: {
          judul: "Nia's Day at the Farm",
          isi: "One sunny morning, Nia and her parents visited her uncle's farm. As they walked past the wooden gate, Nia heard the moo of a cow and the cluck-cluck of chickens running across the yard.\n\n\"Uncle has so many animals!\" said Nia excitedly.\n\nHer father pointed to a goat standing under a tree. \"That goat gives us milk,\" he explained.\n\nNia moved closer to see a sheep with curly wool, a duck waddling near a pond, and a cat sleeping in the sun.\n\nBack at home, Nia opened her notebook and began to write. \"I want to remember all the animals I saw - and their names in English!\""
        },
        pengertian: "Animals are living creatures that come in all shapes, sizes, and behaviors. Some animals live on farms, some live in the forest, and others live right in our homes. Knowing the English names of these animals helps us describe what we see in the world around us.",
        subtopics: [
          {
            title: "Types of Animals",
            content: [
              "Animals are often grouped by where they live or how they interact with humans:",
              {
                text: "Farm Animals",
                examples: [
                  "These animals live on farms and are helpful to people.",
                  { text: "Examples: cow, goat, sheep, duck, chicken", image: "images/cow.jpeg" },
                  "→ \"A cow gives us milk.\"",
                  "→ \"Sheep have soft wool.\""
                ]
              },
              {
                text: "Domestic Animals (Pets)",
                examples: [
                  "These animals live with people and are often treated like family.",
                  { text: "Examples: cat, dog, bird, fish", image: "images/cat.jpeg" },
                  "→ \"My cat sleeps on the sofa.\"",
                  "→ \"Dogs are friendly and like to play.\""
                ]
              },
              {
                text: "Wild Animals",
                examples: [
                  "Wild animals live in forests, jungles, or oceans. They are not pets.",
                  { text: "Examples: tiger, lion, elephant, monkey, zebra", image: "images/lion.jpeg" },
                  "→ \"Lions live in the wild.\"",
                  "→ \"Elephants are very big and strong.\""
                ]
              }
            ]
          },
          {
            title: "Body Parts of Animals",
            content: [
              "Just like people, animals have different body parts that help them live and move. These parts also make them unique.",
              {
                text: "Here are some common animal body parts:",
                examples: [
                  { text: "Wings: to fly (e.g. birds, bats, butterflies)", image: "images/wings.jpeg" },
                  { text: "Tail: to balance or show feelings (e.g. cats, monkeys)", image: "images/tail.jpeg" },
                  { text: "Fur: soft body covering (e.g. dogs, sheep)", image: "images/fur.jpeg" },
                  { text: "Beak: birds use beaks to eat", image: "images/beak.jpeg" },
                  { text: "Horns: hard pointed parts on the head (e.g. goats, bulls)", image: "images/horns.jpeg" },
                  { text: "Paws/Hooves: feet used to walk or run", image: "images/paws.jpeg" }
                ]
              },
              {
                text: "Example descriptions:",
                examples: [
                  "\"A duck has a beak and two wings.\"",
                  "\"A goat has four legs and two horns.\"",
                  "\"My cat has soft fur and a long tail.\""
                ]
              }
            ]
          },
          {
            title: "Describing Animals",
            content: [
              "We use adjectives to describe how animals look, move, or sound. This helps us talk about them clearly in English.",
              {
                text: "Adjectives for animals:",
                examples: [
                  "Size: big, small, tall, short",
                  "Speed: fast, slow",
                  "Texture: soft, furry, scaly",
                  "Sound: loud, quiet",
                  "Color: brown, white, black, spotted"
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"The elephant is big and gray.\"",
                  "\"The rabbit is small, soft, and white.\"",
                  "\"A lion is strong and loud.\"",
                  "\"Fish are colorful and quiet.\""
                ]
              }
            ]
          },
          // Menambahkan subtopic "Where Animals Live" dengan data tabel
          {
            title: "Where Animals Live",
            content: [
              "Every animal needs a home. This home is called a habitat. It gives animals food, water, and a safe place to live.",
              {
                text: "Here are some animals and where they live:",
                table: {
                  headers: ["Image", "Animal", "Habitat"],
                  rows: [
                    { image: "images/dog.jpeg", animal: "Dog", habitat: "House" },
                    { image: "images/cow.jpeg", animal: "Cow", habitat: "Farm" },
                    { image: "images/fish.jpeg", animal: "Fish", habitat: "Pond / River / Ocean" },
                    { image: "images/bird.jpeg", animal: "Bird", habitat: "Tree or Sky" },
                    { image: "images/lion.jpeg", animal: "Lion", habitat: "Jungle" },
                    { image: "images/duck.jpeg", animal: "Duck", habitat: "Near water" }
                  ]
                }
              },
              {
                text: "Example sentences:",
                examples: [
                  "My cat sleeps in my house.",
                  "A fish lives in the river.",
                  "Monkeys live in trees.",
                  "Cows live on a farm.",
                  "Lions live in the jungle."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Food and Beverages",
        color: "pink",
        cerita: {
          judul: "Rani's Tasty Lunch",
          isi: "It was a sunny day, and the school bell rang for lunch. Rani opened her lunchbox and smiled. Her mother had packed her favorite meal: rice, fried chicken, and some vegetables. \"Yum!\" she said, ready to eat.\n\nNext to her, Aldi was drinking a bottle of orange juice. \"What do you have today, Rani?\" he asked.\n\n\"I have chicken, rice, and spinach. It smells really good,\" she replied.\n\nAldi opened his lunchbox and showed her his food. \"I have noodles and a boiled egg. Want to trade a bite?\" he offered.\n\nThey both giggled and shared their food. \"This chicken is tasty!\" said Aldi. \"Your noodles are great too!\" said Rani.\n\nAfter they finished, they cleaned their hands and threw their trash away. \"I love lunch time,\" Rani said. \"Good food and good friends!\""
        },
        pengertian: "Food gives us energy to grow and play. Every day, we eat meals like breakfast, lunch, and dinner. Sometimes we also enjoy snacks and drinks. In English, we can learn to name different foods and talk about what we like to eat or drink.",
        subtopics: [
          {
            title: "Common Food Vocabulary",
            content: [
              "Here are some everyday foods you might see in your kitchen or lunchbox:",
              {
                examples: [
                  { text: "Rice: a main food in many meals", image: "images/rice.jpeg" },
                  { text: "Noodles: long and tasty", image: "images/noodles.jpeg" },
                  { text: "Eggs: boiled or fried", image: "images/egg.jpeg" },
                  { text: "Bread: eaten with butter or jam", image: "images/bread.jpeg" },
                  { text: "Chicken: fried, grilled, or in soup", image: "images/chicken(1).jpeg" },
                  { text: "Soup: warm and full of flavor", image: "images/soup.jpeg" },
                  { text: "Vegetables: healthy and colorful (like carrots, spinach, broccoli)", image: "images/vegetables.jpeg" },
                  { text: "Fruits: sweet and juicy (like apples, bananas, mangoes)", image: "images/fruits.jpeg" }
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"I eat rice and vegetables for lunch.\"",
                  "\"My favorite fruit is banana.\"",
                  "\"She brings bread and eggs for breakfast.\""
                ]
              }
            ]
          },
          {
            title: "Naming Beverages",
            content: [
              "Beverages are drinks we enjoy every day. Some are cool, others are warm. These are common ones:",
              {
                examples: [
                  { text: "Water: clean and healthy", image: "images/water.jpeg" },
                  { text: "Milk: good for strong bones", image: "images/milk.jpeg" },
                  { text: "Juice: orange, apple, or mango", image: "images/juice.jpeg" },
                  { text: "Tea: warm and calming", image: "images/tea.jpeg" },
                  { text: "Hot chocolate: sweet and cozy", image: "images/chocolate.jpeg" }
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"I drink water after playing.\"",
                  "\"He drinks milk in the morning.\"",
                  "\"We have juice for snack time.\""
                ]
              }
            ]
          },
          {
            title: "How Does It Taste?",
            content: [
              "Food doesn't just look good - it has taste! We can use English words to describe the taste of food and drinks.",
              {
                examples: [
                  "Sweet: like candy, juice, or fruit",
                  "Sour: like lemon or yogurt",
                  "Salty: like chips or soup",
                  "Spicy: like chili or hot sauce",
                  "Bitter: like black coffee or dark chocolate"
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"This orange juice is sweet.\"",
                  "\"The soup is a little salty.\"",
                  "\"I don't like spicy food.\""
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Holidays and Celebrations",
        color: "indigo",
        cerita: {
          judul: "Tono's Best Birthday",
          isi: "One sunny morning, Tono woke up to colorful balloons hanging in the living room. His mother was in the kitchen preparing something delicious, and his father held a box with a red ribbon.\n\n\"Happy Birthday, Tono!\" they said with big smiles.\n\nTono's eyes lit up. \"Really? It's my birthday today?\"\n\n\"Yes,\" said his little sister. \"We have cake, games, and presents for you!\"\n\nLater that day, his friends came over. They sang \"Happy Birthday,\" ate cake, and played together. There were laughter and smiles everywhere.\n\nThat night, Tono sat in bed and whispered, \"Today was special. I feel happy and thankful.\" Then he closed his eyes with a big smile on his face."
        },
        pengertian: "Celebrations are happy moments that we spend with family, friends, or classmates. On these days, people come together, eat good food, sing songs, play games, and share good wishes. Celebrations can be about birthdays, religious holidays, or national days. Each celebration is unique and full of joy. In this unit, we will learn how to name common holidays, describe what we do during those days, say when they happen, and talk about how we feel.",
        subtopics: [
          {
            title: "Common Celebrations We Know",
            content: [
              "Some celebrations are personal, and some are shared with the whole country or world. Let's explore a few:",
              {
                text: "Birthday",
                examples: [
                  { text: "A birthday is the day we were born. People celebrate with:", image: "/images/inggris3/holidays/birthday.jpeg" },
                  "- Cakes and candles",
                  "- Singing the \"Happy Birthday\" song",
                  "- Giving and receiving presents",
                  "- Spending time with loved ones",
                  "Example: \"I have a birthday party at home.\""
                ]
              },
              {
                text: "Independence Day (August 17)",
                examples: [
                  { text: "This is Indonesia's national holiday. We celebrate:", image: "/images/inggris3/holidays/independence-day.jpeg" },
                  "- Flag ceremony at school",
                  "- Wearing red and white",
                  "- Fun games like sack race or eating crackers",
                  "- Singing national songs",
                  "Example: \"We play games on Independence Day.\""
                ]
              },
              {
                text: "Eid (Idul Fitri)",
                examples: [
                  { text: "A celebration for Muslims at the end of fasting month (Ramadan):", image: "/images/inggris3/holidays/eid.jpeg" },
                  "- Visiting family and friends",
                  "- Wearing new clothes",
                  "- Sharing food and saying \"Mohon maaf lahir dan batin\"",
                  "Example: \"We eat ketupat during Eid.\""
                ]
              },
              {
                text: "Christmas (December 25)",
                examples: [
                  { text: "A Christian holiday to celebrate the birth of Jesus:", image: "/images/inggris3/holidays/christmas.jpeg" },
                  "- Decorating the Christmas tree",
                  "- Giving gifts",
                  "- Singing Christmas songs",
                  "- Going to church",
                  "Example: \"My family gives gifts on Christmas.\""
                ]
              },
              {
                text: "New Year",
                examples: [
                  { text: "We welcome the new year on January 1:", image: "/images/inggris3/holidays/new-year.jpeg" },
                  "- Watching fireworks",
                  "- Making wishes or resolutions",
                  "- Spending time with family",
                  "Example: \"We watch fireworks on New Year's Eve.\""
                ]
              }
            ]
          },
          {
            title: "Talking About Time and When",
            content: [
              "To tell others when we celebrate something, we use:",
              {
                text: "Time expressions:",
                examples: [
                  "On + day: \"on Sunday\", \"on my birthday\"",
                  "In + month: \"in December\", \"in August\"",
                  "At + time: \"at night\", \"at 7 o'clock\""
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"We celebrate Eid in April.\"",
                  "\"My birthday is on Friday.\"",
                  "\"We go to the park at night to see fireworks.\""
                ]
              },
              "Knowing how to say time helps us talk about celebrations more clearly."
            ]
          },
          {
            title: "How We Feel During Celebrations",
            content: [
              "Celebrations are full of emotions. We feel:",
              {
                examples: [
                  "Happy - when we meet people we love",
                  "Excited - before opening a present or seeing fireworks",
                  "Thankful - for the food, love, and fun",
                  "Proud - when we raise the flag on Independence Day",
                  "Surprised - if someone throws a party for us"
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "\"I feel happy on my birthday.\"",
                  "\"We are proud on Independence Day.\"",
                  "\"She was surprised by the cake.\""
                ]
              }
            ]
          },
          {
            title: "Using Sentences in Real Life",
            content: [
              "You can use what you've learned to talk about special days with your friends or teachers.",
              {
                text: "Sample Sentences:",
                examples: [
                  "\"I celebrate my birthday in May.\"",
                  "\"My favorite holiday is Christmas.\"",
                  "\"Do you celebrate Eid?\" → \"Yes, I do.\"",
                  "\"We eat together and feel happy.\"",
                  "\"On New Year, we stay up late.\""
                ]
              }
            ]
          }
        ]
      }
    ],
    tips: [
      "Practice describing objects around you in English.",
      "Try to name animals you see in books or on TV.",
      "Talk about your favorite foods and drinks with friends.",
      "Share what you do during holidays and celebrations."
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
                      } else if ('image' in item) {
                        return (
                          <div key={i} className="my-4">
                            <img
                              src={item.image?.toString() || ''}
                              alt={typeof item === 'object' && 'text' in item ? item.text : subtopic.title}
                              className="mx-auto rounded-lg shadow-md max-w-full h-auto"
                            />
                            {'text' in item && <p className="text-center mt-2 text-sm">{item.text}</p>}
                          </div>
                        );
                      } else if ('table' in item) {
                        return (
                          <div key={i} className="overflow-x-auto">
                            <table className="min-w-full bg-white border">
                              <thead>
                                <tr>
                                  {item.table?.headers.map((header, idx) => (
                                    <th key={idx} className="px-4 py-2 border-b">{header}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {item.table?.rows && item.table.rows.map((row, rowIdx) => (
                                  <tr key={rowIdx}>
                                    <td className="px-4 py-2 border-b">
                                      <img src={row.image} alt={row.animal} className="w-40 h-auto" />
                                    </td>
                                    <td className="px-4 py-2 border-b">{row.animal}</td>
                                    <td className="px-4 py-2 border-b">{row.habitat}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      } else {
                        return (
                          <div key={i}>
                            {'text' in item && <p className="font-medium">{item.text}</p>}
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
                                          className="w-40 h-30 object-cover rounded"
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

        {selectedBab.title === "Holidays and Celebrations" && (
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
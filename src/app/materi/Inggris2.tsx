import React from 'react';
import { Book } from 'lucide-react';

export const Inggris2Metadata = {
  title: "My Next Words Grade 2",
  subtitle: "Bahasa Inggris",
  className: "2 Sekolah Dasar",
  curriculum: "Kurikulum Merdeka",
  overlayTitle: "Materi Bahasa Inggris Kelas 2",
  overlayContent: [
    {
      title: "Greetings and Introductions",
      icon: Book,
      detailTitle: "Greetings and Introductions",
      detailDescription: "Using basic greetings, introducing oneself and others, and asking and answering simple questions about wellbeing.",
      topics: [
        { title: "Common greetings (Hello, Hi, Good morning, Good night)" },
        { title: "Introducing yourself and others (My name is..., This is...)" },
        { title: "Asking and Answering “How Are You?”" }
      ]
    },
    {
      title: "My Body and Face",
      icon: Book,
      detailTitle: "My Body and Face",
      detailDescription: "Recognizing parts of the body and face, describing physical appearance using simple sentences.",
      topics: [
        { title: "Body parts (head, arms, legs, feet, etc.)" },
        { title: "Face parts (eyes, ears, nose, mouth, etc.)" },
        { title: "Describing using “This is...” and “I have...”" }
      ]
    },
    {
      title: "My Family",
      icon: Book,
      detailTitle: "My Family",
      detailDescription: "Identifying family members and describing their characteristics and relationships.",
      topics: [
        { title: "Family members (father, mother, brother, sister, etc.)" },
        { title: "Talking about the family (This is my... He is my...)" },
        { title: "Describing family with simple adjectives" }
      ]
    },
    {
      title: "Things Around Me",
      icon: Book,
      detailTitle: "Things Around Me",
      detailDescription: "Naming objects commonly found at school and home, identifying their location using basic prepositions.",
      topics: [
        { title: "Vocabulary: classroom and household objects" },
        { title: "Describing with ”This is...” and ”That is...”" },
        { title: "Using prepositions of place (in, on, under)" }
      ]
    },
    {
      title: "Food and Drinks",
      icon: Book,
      detailTitle: "Food and Drinks",
      detailDescription: "Naming common food and drinks, expressing preferences and describing meals.",
      topics: [
        { title: "Names of food and drinks (rice, bread, milk, juice...)" },
        { title: "Likes and dislikes (I like..., I don't like...)" },
        { title: "Talking about meals (breakfast, lunch, dinner)" }
      ]
    },
    {
      title: "Colors, Shapes, and Numbers",
      icon: Book,
      detailTitle: "Colors, Shapes, and Numbers",
      detailDescription: "Recognizing colors, shapes, and numbers from 1 to 20; describing objects using these elements.",
      topics: [
        { title: "Colors (red, blue, green, yellow, etc.)" },
        { title: "Shapes (circle, triangle, square...)" },
        { title: "Counting 1 to 20" },
        { title: "Describing objects by color, shape, and number" }
      ]
    },
    {
      title: "Animals and Nature",
      icon: Book,
      detailTitle: "Animals and Nature",
      detailDescription: "Naming animals and elements of nature, describing animal actions and sounds.",
      topics: [
        { title: "Animals (cat, bird, elephant, etc.)" },
        { title: "Animal actions (The dog runs. The bird flies.)" },
        { title: "Nature vocabulary (tree, sun, cloud, flower)" }
      ]
    },
    {
      title: "Hobbies and Daily Activities",
      icon: Book,
      detailTitle: "Hobbies and Daily Activities",
      detailDescription: "Naming common hobbies and daily routines, expressing time of day and frequency of activities.",
      topics: [
        { title: "Hobbies (reading, swimming, playing football...)" },
        { title: "Daily routines (wake up, go to school, go to bed...)" },
        { title: "Talking about time (in the morning, at night, every day)" }
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

interface Inggris2Props {
  selectedTopicTitle: string;
}

export default function Inggris2({ selectedTopicTitle }: Inggris2Props) {
  const materiData = {
    bab: [
      {
        title: "Greetings and Introductions",
        color: "blue",
        cerita: {
          judul: "A Friendly Start",
          isi: "It was Raka's first day at his new school. The morning air felt fresh, but his stomach was full of butterflies. He walked slowly down the hallway, holding his bag tightly. His classroom was just ahead, but he didn't know anyone inside.\n\nWhen he stepped into the room, the noise of students chatting filled his ears. He stood quietly, not sure what to say or do. Then, a girl sitting by the window noticed him and smiled.\n\n'Hi!' she said cheerfully. 'What's your name?'\n\nRaka blinked, surprised by her friendly voice. 'I'm Raka,' he replied softly.\n\n'I'm Nia. Nice to meet you!' she said.\n\nRaka smiled, a little more relaxed. 'Nice to meet you too.'\n\nThat short exchange was enough to make him feel welcome. It didn't take much—just a few kind words to turn a stranger into a friend."
        },
        pengertian: "Greeting others is something we do every day, often without even thinking about it. But behind every 'hello' is something meaningful. It shows that we notice people around us, that we care enough to speak kindly, and that we are ready to connect.",
        subtopics: [
          {
            title: "Why We Greet People",
            content: [
              "In English, we use different greetings depending on the time of day. These greetings are polite and help us sound respectful and friendly.",
              {
                examples: [
                  "Good morning: when the day begins, often before noon",
                  "Good afternoon: after lunch, usually until the evening",
                  "Good evening: when it's getting dark",
                  "Good night: before going to bed, as a way to say goodbye",
                  "Hello: any time of the day",
                  "Hi: casual and friendly"
                ]
              },
              {
                text: "When we leave someone, we say:",
                examples: [
                  "Goodbye",
                  "Bye",
                  "See you later"
                ]
              },
              "These words may be short, but they can make someone smile. Even a quiet 'hi' can turn a lonely morning into a warm beginning."
            ]
          },
          {
            title: "Asking 'How Are You?'",
            content: [
              "After we greet someone, we often follow up with a kind question: 'How are you?'",
              "This is one of the most polite things you can ask. It shows that you're not only saying hello—you're also thinking about how the other person feels.",
              {
                text: "People might answer in many different ways:",
                examples: [
                  "I'm fine, thank you.",
                  "I'm happy.",
                  "I'm okay.",
                  "I'm tired.",
                  "I'm not feeling well."
                ]
              },
              "It's nice to reply with a smile, and don't forget to ask back: 'How about you?'",
              "These little exchanges may seem small, but they can brighten someone's mood and open the door to longer conversations."
            ]
          },
          {
            title: "Introducing Yourself",
            content: [
              "When we meet someone for the first time, they don't know who we are. That's why we introduce ourselves—it's a way of saying, 'I want to know you, and I want you to know me.'",
              {
                text: "There are different ways to do this:",
                examples: [
                  "My name is Dinda.",
                  "I'm Farhan.",
                  "This is my friend, Arif."
                ]
              },
              {
                text: "To ask someone else, we say:",
                examples: ["What's your name?"]
              },
              {
                text: "Once we share names, we often say:",
                examples: [
                  "Nice to meet you.",
                  "And the other person replies: Nice to meet you too."
                ]
              },
              "Simple, isn't it? But these sentences help us take the first step in getting to know each other."
            ]
          }
        ]
      },
      {
        title: "My Body and Face",
        color: "green",
        cerita: {
          judul: "The Face in the Mirror",
          isi: "One morning, before class began, Miss Rina brought a mirror into the room. She didn't say anything at first. She simply placed it on her desk and smiled.\n\n'Today,' she said, 'I want you to meet someone very important.'\n\nThe students looked around, confused. 'Is someone coming?' asked Lala.\n\n'No,' said Miss Rina. 'They're already here.'\n\nShe picked up the mirror and held it out. 'Come and see.'\n\nWhen Budi looked into the mirror, he laughed. 'That's me!'\n\n'Yes,' said Miss Rina. 'That's the most important person you'll learn to talk about—yourself.'"
        },
        pengertian: "Our body is with us all the time. It helps us do everything—run, play, speak, eat, and even sleep. We use it every single day, but how often do we stop and think about how amazing it is?",
        subtopics: [
          {
            title: "Our Body: A Wonderful Gift",
            content: [
              "From the top of your head to the tips of your toes, your body works like a team. And when you know the names of its parts, you can understand it better and talk about it clearly—in English too!",
              {
                text: "On your face, you have:",
                examples: [
                  { text: "Eyes: to see things clearly", image: "images/eyes.jpeg" },
                  { text: "Ears: to hear sounds and voices", image: "images/ears.jpeg" },
                  { text: "Nose: to smell good things (and bad!)", image: "images/nose.jpeg" },
                  { text: "Mouth: to speak, smile, and eat", image: "images/mouth.jpeg" },
                  { text: "Teeth and tongue: to chew and taste", image: "images/teeth.jpeg" },
                  { text: "Hair: to keep your head warm and stylish!", image: "images/hair.jpeg"}
                ]
              },
              {
                text: "From your head down, there's:",
                examples: [
                  { text: "Neck: holds your head up high", image: "images/neck.jpeg" },
                  { text: "Shoulders and arms: help you carry, hug, and reach", image: "images/shoulders.jpeg" },
                  { text: "Hands and fingers: for writing, holding, waving, and clapping", image: "images/hands.jpeg" },
                  { text: "Chest and stomach: keep your heart and tummy safe", image: "images/chest.jpeg" },
                  { text: "Legs and knees: strong for walking, jumping, and climbing", image: "images/legs.jpeg" },
                  { text: "Feet and toes: to balance and move around", image: "images/feet.jpeg" }
                ]
              },
              "Each part of your body helps you do something. Together, they make you able to explore, create, and enjoy the world around you."
            ]
          },
          {
            title: "Talking About the Body in English",
            content: [
              "Once you know the parts, it's time to talk about them.",
              {
                text: "When you show one part, use:",
                examples: [
                  "This is my nose.",
                  "This is my arm."
                ]
              },
              {
                text: "If you talk about more than one, say:",
                examples: [
                  "These are my eyes.",
                  "These are my fingers."
                ]
              },
              {
                text: "And when you want to describe what you have:",
                examples: [
                  "I have ten toes.",
                  "I have black hair.",
                  "I have strong legs."
                ]
              },
              "These simple phrases help you describe your body in everyday conversations."
            ]
          },
          {
            title: "Describing Your Face and Body",
            content: [
              "No two people look the same. That's what makes us all special! Some people have small ears, some have long hair. Some have round cheeks or big eyes. You can learn to talk about your appearance in a kind and happy way.",
              {
                text: "Use words like:",
                examples: [
                  "Big / small",
                  "Long / short",
                  "Curly / straight",
                  "Black / brown / blonde (for hair)",
                  "Soft / strong / round"
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "My hair is long and black.",
                  "I have a small nose and big eyes.",
                  "My fingers are short, but very quick!",
                  "My voice is soft, and my smile is wide."
                ]
              },
              "By describing yourself, you're not only using English, you're also learning to notice and appreciate who you are."
            ]
          }
        ]
      },
      {
        title: "My Family",
        color: "purple",
        cerita: {
          judul: "Nina's Big Picture",
          isi: "It was a Friday morning when Miss Rina gave each student a large sheet of paper. 'Today, I want you to draw the people who make your home feel warm,' she said.\n\nThe classroom filled with quiet focus. Crayons scratched gently on paper. Nina drew her father first—tall and smiling, with glasses. Then her mother, holding a plate of cookies. Next, her baby brother with chubby cheeks, and her grandmother in a red scarf.\n\nWhen she finished, she looked at it for a moment. It wasn't just a drawing. It was her family—each person full of stories, memories, and love.\n\n'Can you tell us about them, Nina?' asked Miss Rina.\n\nNina stood proudly. 'This is my family. They are my home.'"
        },
        pengertian: "A family is not just people who live in the same house. A family is a group of people who care for one another. They share hugs, food, laughter, and sometimes even tears. In a family, everyone belongs.",
        subtopics: [
          {
            title: "What Is a Family?",
            content: [
              "Families come in all shapes and sizes. Some are small, some are big. Some children live with parents, others with grandparents or aunts and uncles. But all families are special, and every family is worth talking about.",
              {
                text: "In English, we use simple words to name the people in our family:",
                examples: [
                  { text: "Father or Dad: our strong, loving guide", image: "images/father.jpeg" },
                  { text: "Mother or Mom: our gentle, caring heart", image: "images/mother.jpeg" },
                  { text: "Brother: a boy in the family", image: "images/brother.jpeg" },
                  { text: "Sister: a girl in the family", image: "images/sister.jpeg" },
                  { text: "Grandfather or Grandpa: wise and kind", image: "images/grandpa.jpeg" },
                  { text: "Grandmother or Grandma: full of stories and smiles", image: "images/grandma.jpeg" }
                ]
              }
            ]
          },
          {
            title: "Describing Our Family in English",
            content: [
              "When we talk about our family in English, we don't just say their names—we tell who they are to us, what they look like, and why we love them.",
              {
                text: "We start by using:",
                examples: [
                  "This is my mother.",
                  "This is my sister.",
                  "He is my father.",
                  "She is my grandmother.",
                  "I have two brothers and one baby sister.",
                  "I have a big family with four cousins!"
                ]
              },
              "These sentences are simple, but they carry a lot of meaning. They tell others who is in your life—and how proud you are to talk about them."
            ]
          },
          {
            title: "Describing What They're Like",
            content: [
              "Each person in your family is different. Maybe your dad loves to cook, or your sister laughs very loudly. Maybe your grandma wears glasses, or your little brother always runs around.",
              {
                text: "In English, we use describing words (adjectives) to talk about our family members:",
                examples: [
                  "My dad is tall and wears glasses.",
                  "My mom has long hair and a warm smile.",
                  "My baby brother is very small and cute.",
                  "My sister is funny and always singing.",
                  "My grandfather walks slowly, but he tells great stories."
                ]
              },
              "These descriptions help others picture the people who are important to us."
            ]
          }
        ]
      },
      {
        title: "Things Around Me",
        color: "teal",
        cerita: {
          judul: "Malik Learns to Notice",
          isi: "It was a quiet Sunday morning when Malik sat by the window in his room. He looked at the bright light coming in and then noticed the clock ticking softly on the wall. His lamp was still on from the night before. On the table, his pencil case was open, and a book lay waiting to be read.\n\nMalik began to whisper to himself in English.\n'This is my lamp. That is my clock. The book is on the table.'\n\nHis mother peeked in and smiled. 'Are you talking to yourself?'\n\n'No,' said Malik, grinning. 'I'm talking to everything around me!'"
        },
        pengertian: "At home, at school, in the car, even in the park—there are things around us all the time. Some help us study. Some help us eat. Some help us sleep or play. These things are part of our daily life.",
        subtopics: [
          {
            title: "We Live Among Things",
            content: [
              "Learning to name them in English helps us describe our world, ask questions, give directions, and understand stories better.",
              {
                text: "At Home: Objects We Know and Use",
                examples: [
                  { text: "Bed: where we rest after a long day", image: "images/bed.jpeg" },
                  { text: "Pillow: soft, for our head", image: "images/pillow.jpeg" },
                  { text: "Lamp: gives light when it's dark", image: "images/lamp.jpeg" },
                  { text: "Clock: tells us what time it is", image: "images/clock.jpeg" },
                  { text: "Bookshelf: to hold our books", image: "images/bookshelf.jpeg" },
                  { text: "Window: lets air and sunshine in", image: "images/window.jpeg" },
                  { text: "Curtains: cover the window", image: "images/curtains.jpeg" },
                  { text: "Chair and table: to sit, draw, or read", image: "images/chair-table.jpeg" }
                ]
              },
              {
                text: "In the kitchen or dining area:",
                examples: [
                  { text: "Plate, spoon, fork, and cup: help us eat and drink", image: "images/plate, spoon, fork, and cup.jpeg", },
                  { text: "Fridge: keeps food fresh and cold", image: "images/fridge.jpeg" },
                  { text: "Stove: where food is cooked", image: "images/stove.jpeg" },
                  { text: "Sink: for washing hands and dishes", image: "images/sink.jpeg" }
                ]
              },
              {
                text: "Example descriptions:",
                examples: [
                  "This is my pillow. It is soft and white.",
                  "That is the fridge. It is next to the sink.",
                  "I have a small bookshelf in my room.",
                  "The lamp is on the table, beside my clock."
                ]
              }
            ]
          },
          {
            title: "At School: The Place for Learning",
            content: [
              "Now imagine you are in your classroom. What do you see?",
              {
                examples: [
                  { text: "Blackboard: where teachers write lessons", image: "images/blackboard.jpeg" },
                  { text: "Desk and chair: where you sit and work", image: "images/chair-table.jpeg" },
                  { text: "Pencil, pen, and eraser: your writing tools", image: "images/pencil, pen, and eraser.jpeg" },
                  { text: "Notebook: for writing and drawing", image: "images/notebook.jpeg" },
                  { text: "Bag: where you keep your things", image: "images/bag.jpeg" },
                  { text: "Ruler: to draw straight lines", image: "images/ruler.jpeg" },
                  { text: "Sharpener: to make pencils sharp", image: "images/sharpener.jpeg" },
                  { text: "Scissors: for cutting paper", image: "images/scissors.jpeg" },
                  { text: "Crayons: to add color to your drawings", image: "images/crayons.jpeg" }
                ]
              },
              {
                text: "Sample sentences:",
                examples: [
                  "This is my desk. It is clean and tidy.",
                  "My pencil is in my pencil case.",
                  "That is the whiteboard. The teacher writes on it.",
                  "I have crayons, a ruler, and an eraser in my bag."
                ]
              }
            ]
          },
          {
            title: "Where Are These Things?",
            content: [
              "To talk about where things are, we use simple words called prepositions. They help us give clear and friendly instructions.",
              {
                text: "Here are the most common ones:",
                examples: [
                  { text: "on: 'The book is on the table.'", image: "images/book-on-table.jpeg" },
                  { text: "under: 'The shoes are under the bed.'", image: "images/shoes-under-bed.jpeg" },
                  { text: "in: 'The pencil is in the box.'", image: "images/pencil-in-the-box.jpeg" },
                  { text: "next to: 'The bag is next to the chair.'", image: "images/bag-next-to-chair.jpeg" },
                  { text: "behind: 'The clock is behind the door.'", image: "images/clock-behind-door.jpeg" },
                  { text: "in front of: 'The teacher is in front of the class.'", image: "images/teacher-in-front-of-class.jpeg" }
                ]
              },
              "These words help you describe space. That means you can say where something is—or help someone find it."
            ]
          }
        ]
      },
      {
        title: "Food and Drinks",
        color: "orange",
        cerita: {
          judul: "A Tasty Morning",
          isi: "It was Saturday morning. Dika smelled something delicious from the kitchen. He ran downstairs and saw his mother preparing breakfast.\n\nOn the table, there were slices of bread, boiled eggs, a plate of fried rice, and a glass of warm milk. His little sister was already eating with a spoon in one hand and a banana in the other.\n\n'Good morning!' said Dika. 'This looks yummy!'\n\n'Do you want rice or bread?' asked his mom.\n\n'I want both!' he said, laughing.\n\nAfter breakfast, they went to the market. The stalls were full of fresh vegetables, bright fruits, and colorful drinks in bottles. Dika pointed to a stall with red apples and green mangoes.\n\n'I like apples,' he told his mom. 'But mangoes are my favorite.'"
        },
        pengertian: "Food is more than just something we eat. Food gives us energy, helps us grow, and makes us feel good. Some food is soft, some is crunchy. Some is sweet, some is salty. Some is warm and comforting, some is cool and fresh.",
        subtopics: [
          {
            title: "Food Makes Us Happy and Healthy",
            content: [
              "We eat three main meals every day:",
              {
                examples: [
                  "Breakfast in the morning",
                  "Lunch in the afternoon",
                  "Dinner in the evening"
                ]
              },
              "And sometimes we enjoy snacks in between!",
              "By learning the names of food and drinks in English, we can talk about what we eat, share what we like, and understand what others are saying too."
            ]
          },
          {
            title: "Common Foods We See and Eat",
            content: [
              "Let's look at some foods we may find at home, in our lunchbox, or at school canteens:",
              {
                examples: [
                  { text: "Rice: white and fluffy, usually eaten with vegetables or meat", image: "images/rice.jpeg" },
                  { text: "Bread: soft or toasted, often eaten for breakfast", image: "images/bread.jpeg" },
                  { text: "Noodles: long and tasty, sometimes spicy or soupy", image: "images/noodles.jpeg" },
                  { text: "Egg: can be boiled, fried, or scrambled", image: "images/egg.jpeg" },
                  { text: "Chicken: can be crispy, grilled, or cooked in soup", image: "images/chicken(1).jpeg" },
                  { text: "Fish: fresh from the sea or river, full of protein", image: "images/fish(1).jpeg" },
                  { text: "Soup: warm and perfect for rainy days", image: "images/soup.jpeg" },
                  { text: "Vegetables: like spinach, carrots, corn, and cabbage", image: "images/vegetables.jpeg" },
                  { text: "Fruits: such as apple, banana, orange, mango, watermelon", image: "images/fruits.jpeg" }

                ]
              },
              {
                text: "Natural-sounding example sentences:",
                examples: [
                  "My mom made chicken soup for dinner. It was warm and delicious.",
                  "I eat rice every day with vegetables.",
                  "I like bananas. They are sweet and soft.",
                  "My favorite food is fried noodles. They are spicy but tasty.",
                  "I don't like carrots. They are too hard for me."
                ]
              }
            ]
          },
          {
            title: "Drinks for Every Time of Day",
            content: [
              "After eating, we often need something to drink. Drinks keep our body hydrated and give us energy too.",
              {
                text: "Here are drinks many children know and like:",
                examples: [
                  { text: "Water: clean and healthy", image: "images/water.jpeg" },
                  { text: "Milk: good for bones and teeth", image: "images/milk.jpeg" },
                  { text: "Juice: made from fruits like orange, mango, or apple", image: "images/juice.jpeg" },
                  { text: "Tea: sometimes warm, sometimes sweet with honey", image: "images/tea.jpeg" },
                  { text: "Chocolate drink: sweet and perfect for breakfast", image: "images/chocolate.jpeg" },
                  { text: "Soda: fizzy and cold (but not for every day)", image: "images/soda.jpeg" }
                ]
              },
              {
                text: "Example sentences in natural form:",
                examples: [
                  "I always drink water when I feel hot.",
                  "My favorite drink is cold mango juice.",
                  "I don't like soda. It makes my throat tickle.",
                  "Milk helps me grow strong."
                ]
              }
            ]
          },
          {
            title: "Talking About Likes and Dislikes",
            content: [
              "Everyone has favorite foods and drinks. We all have something we love, and something we don't.",
              {
                text: "To express this in English, we use:",
                examples: [
                  "I like...",
                  "I love...",
                  "I don't like...",
                  "My favorite food is...",
                  "My favorite drink is..."
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "I like rice and fried egg.",
                  "I love chocolate milk!",
                  "I don't like spicy food.",
                  "My favorite drink is orange juice.",
                  "I don't like fish. It smells funny."
                ]
              },
              "These sentences help us in real conversations—with friends, with teachers, and even in restaurants!"
            ]
          }
        ]
      },
      {
        title: "Colors, Shapes, and Numbers",
        color: "pink",
        cerita: {
          judul: "A Colorful Surprise",
          isi: "It was art day at school. Miss Ana brought a big box into the classroom. 'Today,' she smiled, 'you can use any colors, shapes, and ideas you like!'\n\nThe children opened the box and saw colored paper, crayons, glue, and stickers. Naya took a red circle and stuck it onto a blue square. Raka made a house with four rectangles and added a yellow triangle as the roof.\n\n'How many shapes did you use, Raka?' asked Miss Ana.\n\nRaka counted proudly. 'One triangle, four rectangles, and five circles!'\n\nMiss Ana nodded. 'That's how we use colors, shapes, and numbers—to build and describe the world around us.'"
        },
        pengertian: "When we look around, we see colors, shapes, and numbers everywhere. On clothes, in books, in buildings, in nature—even in the food we eat! These are not just pretty or useful. They help us recognize, remember, and talk about what we see.",
        subtopics: [
          {
            title: "Colors Around Us",
            content: [
              "Colors give life to everything we see. When we know their names, we can say exactly what we mean.",
              {
                text: "Here are some common colors:",
                examples: [
                  { text: "Red: like apples or roses", image: "images/red.png" },
                  { text: "Blue: like the sky or ocean", image: "images/blue.png" },
                  { text: "Yellow: like bananas or the sun", image: "images/yellow.png" },
                  { text: "Green: like leaves and grass", image: "images/green.png" },
                  { text: "Orange: like carrots or oranges", image: "images/orange.png" },
                  { text: "Purple: like grapes", image: "images/purple.png" },
                  { text: "Pink: like cotton candy", image: "images/pink.png" },
                  { text: "Black: like the night sky", image: "images/black.png" },
                  { text: "White: like snow", image: "images/white.png" },
                  { text: "Brown: like chocolate or tree bark", image: "images/brown.png" }
                ]
              },
              {
                text: "Example phrases:",
                examples: [
                  "My pencil case is blue and green.",
                  "She wears a pink dress.",
                  "The apple is red.",
                  "The chair is black."
                ]
              },
              "Colors help us talk about what things look like—and how they make us feel."
            ]
          },
          {
            title: "Shapes Everywhere",
            content: [
              "Shapes help us understand how things are formed. Whether we're drawing, building, or just looking around, shapes help us describe objects more completely.",
              {
                text: "Basic shapes:",
                examples: [
                  { text: "Circle: round like a coin", image: "images/circle-shape.jpeg" },
                  { text: "Square: four equal sides like a window", image: "images/square-shape.png" },
                  { text: "Rectangle: longer sides like a book or door", image: "images/rectangle-shape.png" },
                  { text: "Triangle: three corners like a slice of pizza", image: "images/triangle-shape.png" },
                  { text: "Oval: like an egg", image: "images/oval-shape.png" },
                  { text: "Star: many points, like in the sky", image: "images/star-shape.png" },
                  { text: "Heart: the shape we draw when we show love", image: "images/heart-shape.png" }
                ]
              },
              {
                text: "Example use:",
                examples: [
                  "The ball is a circle. It is red.",
                  "The table is a rectangle. It is brown.",
                  "I drew a pink heart and two yellow stars.",
                  "My clock is a white circle on the wall."
                ]
              },
              "Knowing shapes lets us tell others not just what something is, but how it looks."
            ]
          },
          {
            title: "Numbers Help Us Count and Compare",
            content: [
              "We use numbers all day—when we count toys, share food, or talk about how many books we read.",
              {
                text: "Let's review numbers 1-10:",
                examples: [
                  "1: one",
                  "2: two",
                  "3: three",
                  "4: four",
                  "5: five",
                  "6: six",
                  "7: seven",
                  "8: eight",
                  "9: nine",
                  "10: ten"
                ]
              },
              {
                text: "How to use them:",
                examples: [
                  "I have two pencils.",
                  "There are five apples in the basket.",
                  "He has one red backpack.",
                  "She saw three birds in the tree."
                ]
              },
              "You can also use numbers with shapes and colors:",
              {
                examples: [
                  "I drew four blue circles.",
                  "There are six red hearts on the card.",
                  "I have two yellow books and one green ruler."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Animals and Nature",
        color: "indigo",
        cerita: {
          judul: "The Park of Wonders",
          isi: "It was a bright Sunday morning when Fira and her older brother Arya went to the town park. The air was fresh. The sky was clear blue, and the trees were dancing with the wind.\n\nAs they walked along the path, Fira saw something move in the grass.\n'Look, Arya! A rabbit!' she whispered. It had white fur and long ears.\n\nThey saw a butterfly land on a yellow flower. A bird flew above them, singing a soft melody. In the small pond nearby, they saw fish swimming slowly.\n\n'I love nature,' said Fira. 'It's full of surprises.'"
        },
        pengertian: "Animals are part of the world we live in. Some we see every day, like cats and birds. Others we see in books, at the zoo, or on farms. Each animal is different—some are fast, some are slow. Some fly, some swim. Some are quiet, some roar loudly!",
        subtopics: [
          {
            title: "Animals Make the World Alive",
            content: [
              "Let's learn to name animals in English and talk about where they live and what they do.",
              {
                text: "Animals Around Us:",
                examples: [
                  { text: "Cat: soft and quiet, says 'meow'", image: "/images/cat.jpeg" },
                  { text: "Dog: loyal and playful, says 'woof'", image: "/images/dog.jpeg" },
                  { text: "Rabbit: fast and cute, has long ears", image: "images/rabbit.jpeg" },
                  { text: "Bird: flies and sings, builds nests in trees", image: "images/bird.jpeg" },
                  { text: "Fish: swims in water, has fins and scales", image: "images/fish.jpeg" },
                  { text: "Cow: lives on farms, gives milk", image: "/images/cow.jpeg" },
                  { text: "Goat: climbs, eats leaves", image: "images/goat.jpeg" },
                  { text: "Horse: runs fast, used to ride", image: "images/horse.jpeg" },
                  { text: "Chicken: lays eggs, says 'cluck'", image: "images/chicken.jpeg" },
                  { text: "Duck: swims and walks, says 'quack'", image: "images/duck.jpeg" }
                ]
              },
              {
                text: "Descriptive examples:",
                examples: [
                  "The dog is brown and big.",
                  "Birds have wings. They can fly in the sky.",
                  "A cow is slow. It gives milk.",
                  "I see a rabbit. It is white and fast.",
                  "The fish is swimming in the pond."
                ]
              }
            ]
          },
          {
            title: "Exploring Nature",
            content: [
              "Nature is everything that is not made by people. It includes the sky, the land, water, trees, and all living things.",
              {
                text: "Elements of Nature:",
                examples: [
                  { text: "Tree: tall, green leaves, home to birds", image: "images/tree.jpeg" },
                  { text: "Flower: colorful and soft, grows in gardens", image: "images/flower.jpeg" },
                  { text: "Grass: short and green, covers the ground", image: "images/grass.jpeg" },
                  { text: "River: flows with water, home for fish", image: "images/river.jpeg" },
                  { text: "Mountain: very tall and strong", image: "images/mountain.jpeg" },
                  { text: "Sun: bright and hot, gives us light", image: "images/sun.jpeg" },
                  { text: "Moon: round, shines at night", image: "images/moon.jpeg" },
                  { text: "Cloud: white or grey, brings rain", image: "images/cloud.jpeg" },
                  { text: "Rain: water that falls from the sky", image: "images/rain.jpeg" }
                ]
              },
              {
                text: "Descriptive examples:",
                examples: [
                  "The tree is big and green.",
                  "Clouds are white and soft.",
                  "The sun is yellow and hot.",
                  "Rivers have water and fish.",
                  "The grass is wet after the rain."
                ]
              }
            ]
          },
          {
            title: "Where Animals Live",
            content: [
              "Every animal needs a home. This home is called a habitat. It gives animals food, water, and a safe place to live.",
              {
                text: "Here are some animals and where they live:",
                table: {
                  headers: ["Image", "Animal", "Habitat"],
                  rows: [
                    { image: "/images/dog.jpeg", animal: "Dog", habitat: "House" },
                    { image: "/images/cow.jpeg", animal: "Cow", habitat: "Farm" },
                    { image: "/images/fish.jpeg", animal: "Fish", habitat: "Pond / River / Ocean" },
                    { image: "/images/bird.jpeg", animal: "Bird", habitat: "Tree or Sky" },
                    { image: "/images/lion.jpeg", animal: "Lion", habitat: "Jungle" },
                    { image: "/images/duck.jpeg", animal: "Duck", habitat: "Near water" }
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
        title: "Hobbies and Daily Activities",
        color: "teal",
        cerita: {
          judul: "My Favorite Kind of Day",
          isi: "It was a sunny Saturday, and Lani didn't have school. She opened her eyes and stretched.\n'Hmm... what should I do today?' she whispered.\n\nShe got up, brushed her teeth, and helped her mom prepare breakfast. After eating, she took out her crayons and started drawing flowers. Later, she rode her bike with her brother in front of the house.\n\nIn the afternoon, Lani read a storybook, watered the plants, and sang her favorite song while helping fold laundry.\n\nBefore bed, she wrote in her notebook:\n\n*'Today I helped, I played, I drew, and I sang. What a happy day!'*"
        },
        pengertian: "Daily activities are things we do every day. They help us stay clean, healthy, smart, and organized. Some are small, like tying your shoes. Some are big, like going to school.",
        subtopics: [
          {
            title: "What Is a Daily Activity?",
            content: [
              "We do many of them at the same time each day, like a routine.",
              {
                text: "Common Daily Activities:",
                examples: [
                  "Wake up: open your eyes in the morning",
                  "Brush your teeth: to keep your smile healthy",
                  "Take a bath: clean your body",
                  "Get dressed: put on your clothes",
                  "Eat meals: breakfast, lunch, and dinner",
                  "Go to school: learn, read, and play",
                  "Do homework: review and practice",
                  "Play: relax and have fun",
                  "Help at home: tidy, sweep, water plants",
                  "Sleep: rest and get ready for tomorrow"
                ]
              },
              {
                text: "Examples:",
                examples: [
                  "I wake up at six in the morning.",
                  "She brushes her teeth after breakfast.",
                  "We go to school every day.",
                  "I help my mom sweep the floor."
                ]
              }
            ]
          },
          {
            title: "What Is a Hobby?",
            content: [
              "A hobby is something you enjoy doing in your free time. It's not something you have to do—it's something you like to do.",
              {
                text: "Popular Hobbies for Kids:",
                examples: [
                  { text: "Reading storybooks: enjoy adventures in your mind", image: "images/reading.jpeg" },
                  { text: "Drawing and coloring: create pictures and use colors", image: "images/drawing.jpeg" },
                  { text: "Singing: express feelings through songs", image: "images/singing.jpeg" },
                  { text: "Dancing: move to the rhythm and have fun", image: "images/dancing.jpeg" },
                  { text: "Playing sports: football, badminton, or running", image: "images/sport.jpeg" },
                  { text: "Cycling: ride your bicycle", image: "images/cycling.jpeg" },
                  { text: "Gardening: take care of plants and flowers", image: "images/gardening.jpeg" },
                  { text: "Playing musical instruments: piano, drum, or flute", image: "images/playing-music.jpeg" },
                  { text: "Cooking simple snacks: with an adult's help", image: "images/cooking.jpeg" }
                ]
              },
              {
                text: "Example sentences:",
                examples: [
                  "My hobby is drawing. I draw animals and trees.",
                  "He loves to sing with his sister.",
                  "I enjoy reading storybooks in the afternoon.",
                  "They like playing football every weekend."
                ]
              }
            ]
          },
          {
            title: "Talking About Your Day and Hobbies",
            content: [
              "To share what you do every day and what you enjoy, we use:",
              {
                text: "Daily routine:",
                examples: [
                  "I wake up at six.",
                  "She eats lunch at school.",
                  "After dinner, I brush my teeth and go to bed."
                ]
              },
              {
                text: "Hobbies:",
                examples: [
                  "My hobby is drawing.",
                  "I like singing and dancing.",
                  "I enjoy helping my dad in the garden.",
                  "We ride our bikes every Sunday."
                ]
              },
              "By using clear and simple sentences, we can tell stories about our daily lives."
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
                              {item.table?.rows.map((row, rowIdx) => (
                                  <tr key={rowIdx}>
                                    <td className="px-4 py-2 border-b">
                                      <img src={row.image} alt={row.animal} className="w-25 h-auto" />
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
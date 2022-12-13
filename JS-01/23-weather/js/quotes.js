const quotes = [{
      quote: "We all have big changes in our lives that are more or less a second chance.",
      author: "Harrison Ford",
   },
   {
      quote: "You don't need fancy highbrow traditions or money to really learn. You just need people with the desire to better themselves.",
      author: "Adam Cooper",
   },
   {
      quote: "You create your opportunities by asking for them.",
      author: "Patty Hansen",
   },
   {
      quote: "To be successful you have to be selfish, or else you never achieve. And once you get to your highest level, then you have to be unselfish. Stay reachable. Stay in touch. Don't isolate.",
      author: "Michael Jordan",
   },
   {
      quote: "Men are not prisoners of fate, but only prisoners of their own minds.",
      author: "Franklin D. Roosevelt",
   },
   {
      quote: "You are built not to shrink down to less but to blossom into more.",
      author: "Oprah Winfrey",
   },
   {
      quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
      author: "Confucius",
   },
   {
      quote: "Waste no more time talking about great souls and how they should be. Become one yourself!",
      author: "Marcus Aurelius Antoninus"
   },
   {
      quote: "I know of no more encouraging fact than the unquestioned ability of a man to elevate his life by conscious endeavor.",
      author: "Henry David Thoreau",
   },
   {
      quote: "The value of a man resides in what he gives and not in what he is capable of receiving.",
      author: "Albert Einstein"
   }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//  Math.random() 0부터 1사이의 랜덤한 숫자를 제공(float의 형태)
//  Math.random() 소수점을 반올림한 숫자를 제공(1.1~1.4 = 1, 1.5~1.9 = 2)
//  Math.ceil() 무조건 소수점을 올림한 숫자를 제공(1.1 = 2, 1.01 = 2, 1.0 = 1)
//  Math.floor() 소수점이 없는 숫자를 제공
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
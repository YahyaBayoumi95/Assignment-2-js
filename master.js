var quoteYahya = {
  quote: "“expect the worst , get the best”",
  authorName: "Yehia Bayoumi",
};

var quote1 = {
  quote: "“Be yourself; everyone else is already taken.“",
  authorName: "Oscar Wilde",
};
var quote2 = {
  quote:
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  authorName: " Marilyn Monroe",
};
var quote3 = {
  quote: "“So many books, so little time.”",
  authorName: "Frank Zappa",
};
var quote4 = {
  quote:
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  authorName: "Albert Einstein",
};
var quote5 = {
  quote: "“A room without books is like a body without a soul.”",
  authorName: "Marcus Tullius Cicero",
};
var quote6 = {
  quote:
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  authorName: " Bernard M. Baruch",
};
var quote7 = {
  quote:
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  authorName: "Dr. Seuss",
};

var quoteArray = [
  quoteYahya,
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
  quote6,
  quote6,
];

var author = document.querySelector("#authorOutput");
var quote = document.querySelector("#quoteOutput");
var historyObject;
var current;

var generateQuote = function () {
  console.log(historyObject);
  current = quoteArray[Math.trunc(Math.random() * quoteArray.length)];
  console.log(current);
  if (historyObject === current) {
    current = quoteArray[Math.trunc(Math.random() * quoteArray.length)];
  } else if (historyObject !== current) {
    quote.innerHTML = current.quote;
  }
  quote.innerHTML = current.quote;

  historyObject = current;
};

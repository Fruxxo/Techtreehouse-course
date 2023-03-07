/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [   //just creating an array object with different properties. properties are quote, source, citation, year
  {
    quote: "When in doubt, say nothing and move on.",
    source: " Arthur C. Clarke",
    citation: "Rendezvous with Rama",
    year: 1973,
  },
  {
    quote: "But at least we have answered one ancient question. We are not alone. The stars will never again be the same to us.",
    source: " Arthur C. Clarke",
    citation: "Rendezvous with Rama",
    year: 1973,
  },
  {
    quote: "Violence is the last refuge of the incompetent.",
    source: "Isaac Asimov",
    citation: "Foundation",
    year: 1951,
  },
  {
    quote: "I've seen things you people wouldn't believe. Attack ships on fire off shoulder of Orion. I watched c-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.",
    source: "Blade Runner",
    citation: "Roy Batty last speech",
    year: 1982,
  },
  {
    quote: "That's one small step for man, one giant leap for mankind.",
    source: "Neil Armstrong",
    citation: "Apollo 11 after landing on Moon",
    year: 1969,
  },
];
/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {    //declare the getRandomquote function
  var quoteIndex = Math.floor(Math.random() * (quotes.length)); // this method will get random quotes from 0 to 4, the math.floor will round down to the biggest integer 
  for (var i = 0; i < array.length; i++) {  //here the for loop start. first step is initialization with a variable declaration evaluated once before the loop begins, then add the expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. If the expression evaluates to false, will exit from loop. Then expression will be evaluated at the end of each loop iteration.
      var randomQuote = array[quoteIndex];
  }
  return randomQuote; // Return the variable storing the random quote object

}


/***
 * `printQuote` function
***/
function printQuote() {
  var message = "";     // Initializing the message variable with empty string
  var result = getRandomQuote(quotes);
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  message += "<span class='citation'>" + result.citation + "</span>";
  message += "<span class='year'>" + result.year + "</span>"
  message += "</p>";
  document.getElementById('quote-box').innerHTML = message
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
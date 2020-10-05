/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * create an array of quotes 
***/
let randomQuote;
const quoteButton = document.getElementById('load-quote');
//create a variable that holds an array of quotes with sources and citation at least one has a tag
const ruthQuotes = [
  {Quote: "Don't be distracted by emotions like anger, envy, resentment. These just zap energy and waste time",
source: "Ruth Bader Ginsburg", citation: "My Own Words"},
  {Quote: "Woman will have achieved true equality when men share with them the responsibility of bringing up the next generation.",
source: "Ruther Bader Ginsburg", citation: "an interview with the New York City Bar Associations",
year: 2001},
  {Quote: "Fight for the things you care about, but do it in a way that will lead others to join you.",
source: "Ruther Bader Ginsburg", citation: "Luncheon at Harvard",
year: 2015},
{Quote:"If you want to be a true professional, you must do something outside yourself.",
source: "Ruther Bader Ginsburg", citation:"My own words", },
{Quote: "Real change, enduring change, happens one step at a time.", 
source: "Ruth Bader Ginsburg"}
];
//not sure how to create a tag. 

/***
 *  a function that pulls the above quotes at random
***/
function randomRuthQuote () {
  const quoteIndex = Math.floor(Math.random() * ruthQuotes.length);
  randomQuote = ruthQuotes[quoteIndex];
    return randomQuote;
}

/***
 * a `printQuote` function that selects each quote to display
***/
function printQuote () {
  let HTML = '';
  //call randomRuthQuote function
  randomRuthQuote(); 
  HTML += '<p class="quote">' + randomQuote.Quote;
  HTML += '<p class="source">' + randomQuote.source;
  //a conditional statement that checks if the quote includes a year 
  if(randomQuote.year) {
  HTML += '<span class="year">' + randomQuote.year + '</span>'; 
  }
  // a conditional statement that check if the quote includes source
  if(randomQuote.citation) {
  HTML += '<span class="citation">' + randomQuote.citation + '</span>';
  '</p>';
  }
  //displays the HTML in the quote box 
  document.getElementById('quote-box').innerHTML = HTML;
} 
//creating a funtion that changes the background color when the button is clicked

quoteButton.addEventListener('click', () => {
  let html;
  let blue;
  let green;
  let red; 
  let randomColor;
  let randomRBB;
  let i;
  const quoteBox = document.querySelector('.quote-box');
  const randomValue = () => Math.floor(Math.random() * 256);
  for( i = 1; i <= ruthQuotes.length; i++) {
    red = randomValue();
    blue = randomValue();
    green = randomValue();
    randomRGB = `rgb(${red}, ${blue}, ${green})`;
  }
  quoteBox.style.backgroundColor = randomRGB;
}); 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

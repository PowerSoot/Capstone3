

/*************************** 
This JavaScript function, `convertCard`, takes a `cardObject` as 
input and returns a string of HTML code that represents a card
 with an image, title, and description. The HTML structure is
dynamically generated using the properties of the `cardObject` (i.e., `src`, `title`, and `description`).
**************************/

function convertCard(cardObject) {
  // Initialize card string with opening div tag for card
  let cardString = '<div class="card">';

  // Add image element with source from cardObject
  cardString += '<img class="card-image-top" src="' + cardObject.src + '">';

  // Add card body div
  cardString += '<div class="card-body">';

  // Add card title as an h3 element
  cardString += '<h3 class="card-title">' + cardObject.title + "</h3>";

  // Add card description
  cardString += cardObject.description;

  // Close card body div
  cardString += "</div>";

  // Close card div
  cardString += "</div>";

  // Return the complete card HTML string
  return cardString;
}

//Displays a given message on the document.
function display(message) {
  // Pause execution for debugging purposes
  debugger;

  // Write the message to the document
  document.write(message);
}

//Appends a given message to the HTML content of an element with the id `outputTag`, followed by a line break.

function output(message) {
  // Append message and a line break to the innerHTML of the element with id 'outputTag'
  outputTag.innerHTML += message + "<br>";
}

  
/**
 * Updates the innerHTML of the element with the id `outputQotdTag`
 * with the provided message, effectively displaying the message
 * as the Quote of the Day on the webpage.
 *
 */
  function outputQotd(message) {
        window.outputQotdTag.innerHTML = message;
  }
  
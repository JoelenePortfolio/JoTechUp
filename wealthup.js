document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('challenge-form');
    const challengeList = document.getElementById('challenge-list');
    
    //To handle form submission
    form.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form input values
    const title = document.getElementById('challenge-title').value;
    const description = document.getElementById('challenge-description').value;

    // Create new list of challenge after input
    const challengeItem = document.createElement('li');
    challengeItem.innerHTML = `
        <strong>${title}</strong>: ${description}
        <div class="actions">
            <button class="thumbs-up">👍<span class="thumbsupcount">0</span></button>
            <button class="add-comment">Add a Comment to share your Progress</button>
        </div>
        <ul class="comments-list"></ul>
    `;

    // Append new challenge
    challengeList.appendChild(challengeItem);

    // Clear form inputs
    form.reset();
    });
});

//For thumbs-up count
function incrementThumbsup(button) {
    const thumbsupcount = button.queryselector(
        '.thumbsupcount');
    const currentCount = parseInt (thumbsUpCountSpan.textContent); thumbsUpCountSpan.textContent = currentCount + 1;
}

//To get homepage

// About pages
app.get('/about', function(req, res) {
    res.render('./About Me.html');
});

// New post page
app.get('/new', function(req, res) {
    res.render('pages/new');
});

// Needed for dotenv
require("dotenv").config();

// Needed for Express
var express = require('express')
var app = express()

// Needed for EJS
app.set('view engine', 'ejs');

// Needed for public directory
app.use(express.static(__dirname + '/public'));

  // Tells the app which port to run on
app.listen(5500);

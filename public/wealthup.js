document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('challenge-form');
    const challengeList = document.getElementById('challenge-list');
    
    //To handle form submission
    form.addEventListener('submit', function(event) {
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

//For different layers in WealthUp
function showLayer(layerId) {
    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        if (layer.id === layerId) {
            layer.classList.remove('hidden');
        } else {
            layer.classList.add('hidden');
        }
    });
}
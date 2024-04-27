// redirect.js
function navigateYes() {
    window.location.href = 'yes.html';
}

function navigateNo() {
    
    if (window.location.href.endsWith('no1.html')) {
        window.location.href = 'no2.html';
    } else if (window.location.href.endsWith('no2.html')) {
        window.location.href = 'no3.html';

    }else if (window.location.href.endsWith('yes.html')) {
        updateContent('https://media.tenor.com/Gr8vwEb9h1cAAAAi/mochi-mochi-peach-cat-gif-mochi-cat.gif',"No point in deying now")
    }

    
    else {
        window.location.href = 'no1.html';  // Default if not on no1.html or no2.html
    }
}




function updateContent(newImageUrl, newText) {
    // Update the image source
    document.getElementById('mainImage').src = newImageUrl;

    // Update the text of the h3 element
    document.getElementById('messageText').textContent = newText;
}



function randomizePosition() {
    // Get the "No" button and its container
    var noButton = document.getElementById('no-button');
    var container = document.getElementById('buttonsContainer');

    // Calculate maximum available positions within the container
    var maxHeight = container.clientHeight - noButton.clientHeight;
    var maxWidth = container.clientWidth - noButton.clientWidth;

    // Generate random top and left positions
    var randomTop = Math.floor(Math.random() * maxHeight);
    var randomLeft = Math.floor(Math.random() * maxWidth);

    // Set the "No" button's position
    noButton.style.top = randomTop + 'px';
    noButton.style.left = randomLeft + 'px';
}

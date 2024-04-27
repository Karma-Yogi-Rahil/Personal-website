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
        updateContent('https://media.tenor.com/Gr8vwEb9h1cAAAAi/mochi-mochi-peach-cat-gif-mochi-cat.gif',"No point in denying now")
    }
    else if (window.location.href.endsWith('no3.html')) {
        updateContent('https://media.tenor.com/dNLReRVOU4sAAAAi/mochi-mochi-peach-cat-crying.gif',"Rah Dekhenge Teri Chahe Zamane Lag Jaaye, Ya Tu Aa Jaaye, Ya Hum Hi Thikane Lag Jaaye")
        randomizePosition()
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
    var noButton = document.getElementById('no-button');

    // Use the viewport height and width minus the height and width of the button for positioning
    var maxHeight = window.innerHeight - noButton.offsetHeight;
    var maxWidth = window.innerWidth - noButton.offsetWidth;

    // Generate random top and left positions within the viewport
    var randomTop = Math.floor(Math.random() * (maxHeight + 1)); // +1 to include the edge case
    var randomLeft = Math.floor(Math.random() * (maxWidth + 1)); // +1 to include the edge case

    // Check if the button would go off-screen and adjust if necessary
    if (randomTop < 0) randomTop = 0;
    if (randomLeft < 0) randomLeft = 0;

    // Set the "No" button's position to be random within the visible viewport
    noButton.style.top = randomTop + 'px';
    noButton.style.left = randomLeft + 'px';
}







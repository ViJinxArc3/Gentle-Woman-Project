// Define an empty array to store the liked items
let likedItems = [];


//Number of likes
const storedLikes = localStorage.getItem('likedItems');
if (storedLikes) {
    likedItems = JSON.parse(storedLikes);
}

// Get all the like buttons
const likeButtons = document.querySelectorAll('.like');

// Add a click event listener to each like button
likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Get the card data from the data attribute
        const card = button.getAttribute('data-card');

        // Check if the card is already in the liked items array
        if (!likedItems.includes(card)) {
            // Add the card to the liked items array
            likedItems.push(card);

            // Show the alert message
            const numLikes = likedItems.length;
            localStorage.setItem('likedItems', JSON.stringify(likedItems));
            alert(`You have liked the "${card}" workshop. You now have ${numLikes} items in your Likes.`);

            // Perform any action you want with the liked items
            if (confirmSave) {
                localStorage.setItem('likedItems', JSON.stringify(likedItems));
            }
        } else {
            // Show an error message if the card is already in the liked items array
            alert('You have already liked this item.');
        }
    });
});


//display liked items --- see code in likes html file


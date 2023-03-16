// Get references to the form, textarea, submit button, and comment list
const commentForm = document.querySelector('#comment-form');
const commentTextarea = document.querySelector('#comment-textarea');
const submitButton = document.querySelector('#comment-form button[type="submit"]');
const commentList = document.querySelector('#comment-list');

// Retrieve comments from session storage and add them to the comment list on page load
window.addEventListener('load', () => {
    let comments = JSON.parse(sessionStorage.getItem('comments')) || [];
    comments.forEach(comment => {
        let commentItem = document.createElement('li');
        commentItem.innerHTML = comment;
        commentList.appendChild(commentItem);
    });
});

// Add an event listener to the form that adds a new comment to the comment list when submitted
commentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default form submission behavior
    let comment = commentTextarea.value.trim(); // get the comment text, trimmed of whitespace
    if (comment.length > 0) { // only add non-empty comments
        let commentItem = document.createElement('li'); // create a new comment list item
        commentItem.innerHTML = comment;
        commentList.appendChild(commentItem); // add the comment to the list

        let comments = JSON.parse(sessionStorage.getItem('comments')) || []; // retrieve existing comments from session storage or create an empty array
        comments.push(comment); // add the new comment to the array
        sessionStorage.setItem('comments', JSON.stringify(comments)); // save the updated array to session storage

        commentTextarea.value = ''; // clear the textarea
    }
});


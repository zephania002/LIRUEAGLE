// Function to add a new comment
function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value;

    if (commentText.trim() !== "") {
        const commentSection = document.querySelector(".comments");
        
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p><strong>You:</strong> ${commentText}</p>`;
        
        commentSection.appendChild(newComment);

        // Clear input field after posting
        commentInput.value = "";
    } else {
        alert("Please write a comment before posting.");
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.querySelector("input[name='username']").value;
    const comment = document.querySelector("textarea[name='comment']").value;

    if (username && comment) {
        const commentBox = document.createElement("div");
        commentBox.classList.add("comment");

        const userNameElement = document.createElement("strong");
        userNameElement.textContent = username;

        const commentText = document.createElement("p");
        commentText.textContent = comment;

        const commentDate = document.createElement("small");
        commentDate.textContent = "الآن"; 

        commentBox.appendChild(userNameElement);
        commentBox.appendChild(commentDate);
        commentBox.appendChild(commentText);

        
        document.querySelector(".comments").prepend(commentBox);

        
        document.querySelector("input[name='username']").value = "";
        document.querySelector("textarea[name='comment']").value = "";
    }
});

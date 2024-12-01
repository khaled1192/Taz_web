
document.getElementById("sendMessage").addEventListener("click", function() {
    const chatInput = document.getElementById("chatInput");
    const userMessage = chatInput.value;

    if (userMessage.trim() !== "") {
        const chatBox = document.getElementById("chatBox");

      
        const userBubble = document.createElement("div");
        userBubble.classList.add("message", "user");
        userBubble.textContent = userMessage;
        chatBox.appendChild(userBubble);

        
        setTimeout(function() {
            const botReply = document.createElement("div");
            botReply.classList.add("message", "bot");
            botReply.textContent = "مرحبًا! كيف يمكنني مساعدتك؟";
            chatBox.appendChild(botReply);
            chatBox.scrollTop = chatBox.scrollHeight; // التمرير لأسفل تلقائيًا
        }, 1000);

        
        chatInput.value = "";
    }
});

window.addEventListener("load", function() {
    document.getElementById("stream-description").style.color = "#1e90ff";
    document.getElementById("stream-description").style.fontSize = "1.2rem";
});

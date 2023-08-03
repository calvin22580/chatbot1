async function getReply() {
    let input = document.getElementById('userInput').value;
    let chatbox = document.getElementById('chatbox');

    let userText = document.createElement('p');
    userText.textContent = 'User: ' + input;
    chatbox.appendChild(userText);

    let response = await fetch('https://chatbot-uojyc.northeurope.inference.ml.azure.com/score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer <NoamZjwQX5gWz4yfElEOZfnt6B6I2Nfk>',
        },
        body: JSON.stringify({
            'question': input,
        }),
    });

    let data = await response.json();

    let botText = document.createElement('p');
    botText.textContent = 'Bot: ' + data.answer;
    chatbox.appendChild(botText);

    // Automatically scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;

    document.getElementById('userInput').value = '';
}

async function getReply() {
    let input = document.getElementById('userInput').value;
    let chatbox = document.getElementById('chatbox');

    let userText = document.createElement('p');
    userText.textContent = 'User: ' + input;
    chatbox.appendChild(userText);

    try {
        let response = await fetch('https://chatbot-uojyc.northeurope.inference.ml.azure.com/score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'NoamZjwQX5gWz4yfElEOZfnt6B6I2Nfk',
            },
            body: JSON.stringify({
                'question': input,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        let botText = document.createElement('p');
        botText.textContent = 'Bot: ' + data.answer;
        chatbox.appendChild(botText);
    } catch(e) {
        console.error('An error occurred:', e);
    }

    // Automatically scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;

    document.getElementById('userInput').value = '';
}

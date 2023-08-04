onst chatBox = document.getElementById('chatBox');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');

function register() {
  const username = usernameInput.value;
  // Send a request to the backend to register the user
  // Handle the response and display any error messages
}

function sendMessage() {
  const message = messageInput.value;
  // Send a request to the backend to send the message
  // Handle the response and display any error messages
  messageInput.value = '';
}

// Function to display incoming messages in the chat box
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

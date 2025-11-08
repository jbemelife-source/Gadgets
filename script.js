// Floating chat toggle
const chatButton = document.getElementById('chatButton');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

chatButton.addEventListener('click', () => {
    chatBox.style.display = 'flex';
});

closeChat.addEventListener('click', () => {
    chatBox.style.display = 'none';
});

// Send message on Enter
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        const msg = document.createElement('p');
        msg.textContent = chatInput.value;
        chatMessages.appendChild(msg);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
// Aside
const toggleBtn = document.getElementById('asideToggle');
const aside = document.getElementById('gadgetAside');

toggleBtn.addEventListener('click', () => {
    aside.classList.toggle('active');
});
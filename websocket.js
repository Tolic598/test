// Создаем WebSocket подключение
const socket = new WebSocket("ws://tolic598.github.io/");

// Обработчик события открытия соединения
socket.onopen = event => {
    console.log("WebSocket connection opened");
};

// Обработчик события приема сообщения от сервера
socket.onmessage = event => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>Server says: ${event.data}</p>`;
};

// Обработчик события закрытия соединения
socket.onclose = event => {
    console.log("WebSocket connection closed");
};

// Функция для отправки сообщения на сервер
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    // Отправляем сообщение на сервер
    socket.send(message);

    // Очищаем поле ввода
    messageInput.value = "";
}
// Datos de clientes TecnoPlay
let customers = [
    {
        id: 1,
        name: 'Juan Pérez',
        email: 'juan.perez@email.com',
        messages: [
            { text: 'Hola, quisiera consultar por la PS5', sent: false, timestamp: new Date() },
            { text: '¡Claro! Tenemos stock disponible', sent: true, timestamp: new Date() },
            { text: '¿Cuál es el precio final con envío?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 2,
        name: 'María García',
        email: 'maria.garcia@email.com',
        messages: [
            { text: '¿Tienen Nintendo Switch OLED?', sent: false, timestamp: new Date() },
            { text: 'Sí, disponible en tienda', sent: true, timestamp: new Date() },
            { text: '¿Aceptan tarjeta de crédito?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 3,
        name: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@email.com',
        messages: [
            { text: 'Necesito un control de PS5', sent: false, timestamp: new Date() },
            { text: 'Tenemos DualSense disponibles', sent: true, timestamp: new Date() }
        ]
    },
    {
        id: 4,
        name: 'Ana Martínez',
        email: 'ana.martinez@email.com',
        messages: [
            { text: '¿Tienen PlayStation VR2 en stock?', sent: false, timestamp: new Date() },
            { text: 'Sí, nos quedan 5 unidades', sent: true, timestamp: new Date() },
            { text: '¿Puedo reservar una?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 5,
        name: 'Luis Torres',
        email: 'luis.torres@email.com',
        messages: [
            { text: 'Busco el nuevo Spider-Man 2', sent: false, timestamp: new Date() },
            { text: 'Disponible en físico y digital', sent: true, timestamp: new Date() }
        ]
    }
];

// Cargar lista de clientes
function loadCustomerList() {
    const customerList = document.getElementById('customerList');
    customerList.innerHTML = '';

    customers.forEach(customer => {
        const customerElement = document.createElement('a');
        customerElement.href = '#';
        customerElement.className = 'list-group-item list-group-item-action';
        customerElement.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <h6 class="mb-1">${customer.name}</h6>
                <small class="text-muted">${customer.messages.length} mensajes</small>
            </div>
            <small>${customer.email}</small>
        `;
        customerElement.onclick = () => loadChat(customer.id);
        customerList.appendChild(customerElement);
    });
}

// Cargar chat
function loadChat(customerId) {
    const customer = customers.find(c => c.id === customerId);
    if (!customer) return;

    document.getElementById('currentCustomer').textContent = customer.name;
    document.getElementById('chatArea').classList.remove('d-none');
    document.getElementById('noChatSelected').classList.add('d-none');

    const messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = '';

    customer.messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sent ? 'sent' : 'received'}`;
        messageElement.textContent = message.text;
        messageArea.appendChild(messageElement);
    });

    messageArea.scrollTop = messageArea.scrollHeight;
}

// Enviar mensaje
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        // Aquí iría la lógica para enviar el mensaje al servidor
        input.value = '';
    }
});

// Cargar lista inicial de clientes
loadCustomerList();
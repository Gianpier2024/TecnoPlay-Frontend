// Datos de clientes TecnoPlay
let customers = [
    {
        id: 1,
        name: 'Juan Pérez',
        email: 'juan.perez@email.com',
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
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
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
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
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
        messages: [
            { text: 'Necesito un control de PS5', sent: false, timestamp: new Date() },
            { text: 'Tenemos DualSense disponibles', sent: true, timestamp: new Date() }
        ]
    },
    {
        id: 4,
        name: 'Ana Martínez',
        email: 'ana.martinez@email.com',
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
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
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
        messages: [
            { text: 'Busco el nuevo Spider-Man 2', sent: false, timestamp: new Date() },
            { text: 'Disponible en físico y digital', sent: true, timestamp: new Date() }
        ]
    },
    {
        id: 6,
        name: 'Jorge Gómez',
        email: 'jorge.gomez@email.com',
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
        messages: [
            { text: '¿Cuánto cuesta la Xbox Series X?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 7,
        name: 'Elena Díaz',
        email: 'elena.diaz@email.com',
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen audífonos inalámbricos para PS5?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 8,
        name: 'Pedro López',
        email: 'pedro.lopez@email.com',
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
        messages: [
            { text: '¿Aceptan pagos contra entrega?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 9,
        name: 'Laura Vega',
        email: 'laura.vega@email.com',
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen Nintendo Switch OLED?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 10,
        name: 'Andrés Rojas',
        email: 'andres.rojas@email.com',
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen Nintendo Switch OLED?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 11,
        name: 'Ricardo Medina',
        email: 'ricardo.medina@email.com',
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen Nintendo Switch OLED?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 12,
        name: 'Gabriela Flores',
        email: 'gabriela.flores@email.com',
        photo: 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen Nintendo Switch OLED?', sent: false, timestamp: new Date() }
        ]
    },
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
            <div class="d-flex align-items-center">
                <img src="${customer.photo}" alt="Foto de ${customer.name}" class="rounded-circle me-3" style="width: 50px; height: 50px; object-fit: cover;">
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-1">${customer.name}</h6>
                        <small class="text-muted">${customer.messages.length} mensajes</small>
                    </div>
                    <small>${customer.email}</small>
                </div>
            </div>
        `;
        customerElement.onclick = () => loadChat(customer.id);
        customerList.appendChild(customerElement);
    });
}

// Cargar chat
function loadChat(customerId) {
    const customer = customers.find(c => c.id === customerId);
    if (!customer) return;

    // Actualiza el encabezado del chat
    const chatHeader = document.querySelector('.chat-header');
    chatHeader.innerHTML = `
        <div class="d-flex align-items-center">
            <img src="${customer.photo}" alt="Foto de ${customer.name}" class="rounded-circle me-3" style="width: 50px; height: 50px;">
            <h4 id="currentCustomer" class="mb-0">${customer.name}</h4>
        </div>
    `;

    document.getElementById('chatArea').classList.remove('d-none');
    document.getElementById('noChatSelected').classList.add('d-none');

    const messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = '';

    customer.messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sent ? 'sent' : 'received'}`;
        
        // Formatear el timestamp
        const formattedDate = formatDate(new Date(message.timestamp));

        if (message.type === 'image') {
            messageElement.innerHTML = `
                <div>
                    <img src="${message.text}" alt="Imagen enviada" style="max-width: 100%; border-radius: 10px;">
                </div>
                <span class="message-time">${formattedDate}</span> <!-- Hora y fecha -->
            `;
        } else {
            messageElement.innerHTML = `
                <div>${message.text}</div>
                <span class="message-time">${formattedDate}</span> <!-- Hora y fecha -->
            `;
        }

        messageArea.appendChild(messageElement);
    });

    messageArea.scrollTop = messageArea.scrollHeight;
}



// Enviar mensaje o imagen -- agregado
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('messageInput');
    const imageInput = document.getElementById('imageInput');
    const message = input.value.trim();

    const customerName = document.getElementById('currentCustomer').textContent;
    const customer = customers.find(c => c.name === customerName);

    if (customer) {
        // Obtener la fecha y hora del mensaje
        const timestamp = new Date();
        const formattedDate = formatDate(timestamp); // Usamos la función para formatear la fecha

        // Si hay un mensaje de texto
        if (message) {
            customer.messages.push({ text: message, sent: true, timestamp: timestamp });

            const messageArea = document.getElementById('messageArea');
            const messageElement = document.createElement('div');
            messageElement.className = 'message sent';
            
            // Crear el mensaje
            messageElement.innerHTML = `
                <div>${message}</div>
                <span class="message-time">${formattedDate}</span> <!-- Hora y fecha -->
            `;
            messageArea.appendChild(messageElement);

            messageArea.scrollTop = messageArea.scrollHeight;
            input.value = ''; // Limpiar el campo de mensaje
        }

        // Si se selecciona una imagen
        if (imageInput.files.length > 0) {
            const file = imageInput.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                // Mostrar la imagen en el chat
                customer.messages.push({ 
                    text: e.target.result, 
                    sent: true, 
                    type: 'image', 
                    timestamp: timestamp 
                });

                const messageArea = document.getElementById('messageArea');
                const messageElement = document.createElement('div');
                messageElement.className = 'message sent';

                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Imagen enviada';
                img.style.maxWidth = '100%';
                img.style.borderRadius = '10px';

                // Añadir la imagen y la fecha al mensaje
                messageElement.innerHTML = `
                    <div><img src="${e.target.result}" alt="Imagen enviada" style="max-width: 100%; border-radius: 10px;"></div>
                    <span class="message-time">${formattedDate}</span> <!-- Hora y fecha -->
                `;
                messageArea.appendChild(messageElement);

                messageArea.scrollTop = messageArea.scrollHeight;
                imageInput.value = ''; // Limpiar el campo de imagen
            };

            reader.readAsDataURL(file);
        }
    }
});

// -- Agregado
document.getElementById("imageInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    
    if (file) {
        // Mostrar el nombre del archivo
        const fileName = file.name;
        document.getElementById("imageName").textContent = fileName;

        // Mostrar el área de vista previa y el nombre del archivo
        document.getElementById("imagePreview").classList.remove("d-none");

        // Hacer visible el botón de eliminar
        document.getElementById("removeImage").addEventListener("click", function() {
            // Limpiar el archivo seleccionado
            document.getElementById("imageInput").value = "";

            // Ocultar el área de vista previa
            document.getElementById("imagePreview").classList.add("d-none");
        });
    }
});

// Función para formatear la fecha y hora -- Agregado
function formatDate(date) {
    const options = {
        weekday: 'short', // 'lun' para lunes
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true // para el formato de 12 horas
    };

    return date.toLocaleString('es-PE', options); // 'es-PE' es el código para español (Perú)
}

function updateCustomerTitle() {
    const customerCount = customers.length; // Calcula el número total de clientes
    const titleElement = document.getElementById('customersTitle');
    titleElement.textContent = `Clientes (${customerCount})`;
}

// Llama a la función para actualizar el título al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCustomerTitle();
});

// Si los clientes pueden añadirse o eliminarse dinámicamente, llama a `updateCustomerTitle()` después de modificar la lista.

function addCustomer(newCustomer) {
    customers.push(newCustomer);
    updateCustomerTitle(); // Actualiza el título después de añadir un cliente
}

function removeCustomer(customerId) {
    customers = customers.filter(customer => customer.id !== customerId);
    updateCustomerTitle(); // Actualiza el título después de eliminar un cliente
}



// Cargar lista inicial de clientes
loadCustomerList();
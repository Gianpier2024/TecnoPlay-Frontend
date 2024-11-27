// Datos de clientes TecnoPlay
let customers = [
    {
        id: 1,
        name: 'Juan Pérez',
        email: 'juan.perez@email.com',
        photo: 'https://media.istockphoto.com/id/1090878494/es/foto/retrato-de-joven-sonriente-a-hombre-guapo-en-camiseta-polo-azul-aislado-sobre-fondo-gris-de.jpg?s=612x612&w=0&k=20&c=dHFsDEJSZ1kuSO4wTDAEaGOJEF-HuToZ6Gt-E2odc6U=', // URL de la foto del cliente
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
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1p_drkpqBOR28-lPqO2RGt8nEcOpUZwUaKg&s', // URL de la foto del cliente
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
        photo: 'https://www.uoh.cl/wp-content/uploads/2022/06/Jorge-Leon-web-500x500.jpg', // URL de la foto del cliente
        messages: [
            { text: 'Necesito un control de PS5', sent: false, timestamp: new Date() },
            { text: 'Tenemos DualSense disponibles', sent: true, timestamp: new Date() }
        ]
    },
    {
        id: 4,
        name: 'Ana Martínez',
        email: 'ana.martinez@email.com',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8HDtDNAddqCY85gBh-wSjULISFdQEIvD97nbsZWGmC4GyK0_KThw_ACnlHSFK2u9hyw&usqp=CAU', // URL de la foto del cliente
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
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUJ9cYfbS6CT-dig6V_cDsT3x_Zx-izVqAg&s', // URL de la foto del cliente
        messages: [
            { text: 'Busco el nuevo Spider-Man 2', sent: false, timestamp: new Date() },
            { text: 'Disponible en físico y digital', sent: true, timestamp: new Date() }
        ]
    },
    {
        id: 6,
        name: 'Jorge Gómez',
        email: 'jorge.gomez@email.com',
        photo: 'https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-hipster-lumbersexual-empresario-modelo-hombre-vestido-ropa-chaqueta-jeans_158538-1746.jpg', // URL de la foto del cliente
        messages: [
            { text: '¿Cuánto cuesta la Xbox Series X?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 7,
        name: 'Elena Díaz',
        email: 'elena.diaz@email.com',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JkthmCBPmb5RBWiw1oX5UG2w-gVjTkz_2FIxc3QNyJGjTUyJ3tUfkLUgCm7WOeCYy78&usqp=CAU', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen audífonos inalámbricos para PS5?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 8,
        name: 'Pedro López',
        email: 'pedro.lopez@email.com',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_zPrH2af4uFa5ZDZ43MYaU0zsjBXy9lyC4ahKqmaI_KGlINHL7WKTIkHBO4sCuPPpS4&usqp=CAU', // URL de la foto del cliente
        messages: [
            { text: '¿Aceptan pagos contra entrega?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 9,
        name: 'Laura Vega',
        email: 'laura.vega@email.com',
        photo: 'https://us.123rf.com/450wm/fizkes/fizkes1902/fizkes190201146/117288626-disparo-a-la-cabeza-retrato-de-mujer-de-raza-mixta-aut%C3%B3noma-con-sonrisa-sincera-abierta-amistosa.jpg?ver=6', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen Nintendo Switch OLED?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 10,
        name: 'Andrés Rojas',
        email: 'andres.rojas@email.com',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtzCXNeV7wD2KmVjL3BtnCcbIWhzMEffzzR1lICTiu6VTDfvZwGg0bBK6ycFs8kIsHas&usqp=CAU', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen Nintendo Switch OLED?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 11,
        name: 'Ricardo Medina',
        email: 'ricardo.medina@email.com',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIf-hovsZXTMwOXcmRMvn9IxNLG--swyr8Vq0wnNpFiL62mP-FBt69aAED-kfEuWDalM&usqp=CAU', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen Nintendo Switch OLED?', sent: false, timestamp: new Date() }
        ]
    },
    {
        id: 12,
        name: 'Gabriela Flores',
        email: 'gabriela.flores@email.com',
        photo: 'https://static7.depositphotos.com/1192060/760/i/450/depositphotos_7608779-stock-photo-portrait-of-a-young-woman.jpg', // URL de la foto del cliente
        messages: [
            { text: '¿Tienen Nintendo Switch OLED?', sent: false, timestamp: new Date() }
        ]
    },
];

// Cargar lista de clientes
function loadCustomerList() {
    const customerList = document.getElementById('customerList');
    customerList.innerHTML = ''; // Limpiar la lista antes de cargarla

    customers.forEach(customer => {
        // Filtrar solo los mensajes no leídos
        const unreadMessages = customer.messages.filter(message => !message.sent);

        // Determinar el último mensaje
        const lastMessage = customer.messages[customer.messages.length - 1];
        const lastMessageText = lastMessage ? lastMessage.text : "No hay mensajes";
        const lastMessageSender = lastMessage.sent ? "Tú" : customer.name;

        const customerElement = document.createElement('a');
        customerElement.href = '#';
        customerElement.className = 'list-group-item list-group-item-action';
        customerElement.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${customer.photo}" alt="Foto de ${customer.name}" class="rounded-circle me-3" style="width: 50px; height: 50px; object-fit: cover;">
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-1">${customer.name}</h6>
                        
                        <!-- Mostrar el número de mensajes no leídos solo si hay mensajes no leídos -->
                        ${unreadMessages.length > 0 ? `<small class="text-muted">${unreadMessages.length} mensajes nuevos</small>` : ''}
                    </div>
                    <small class="customer-email">${customer.email}</small>
                    <!-- Mostrar el último mensaje -->
                    <p class="text-muted mt-1" style="font-size: 0.85rem;">
                        ${lastMessageSender}: ${lastMessageText}
                    </p>
                </div>
            </div>
        `;
        customerElement.onclick = () => loadChat(customer.id, unreadMessages.length); // Pasa la cantidad de mensajes no leídos
        customerList.appendChild(customerElement);
    });
}


// Cargar chat
function loadChat(customerId, unreadMessagesCount) {
    const customer = customers.find(c => c.id === customerId);
    
    if (!customer) return;


    // Actualiza el encabezado del chat
    const chatHeader = document.querySelector('.chat-header');
    chatHeader.innerHTML = `
        <div class="d-flex align-items-center">
            <img src="${customer.photo}" alt="Foto de ${customer.name}" class="rounded-circle me-3" style="width: 50px; height: 50px;">
            <div>
                <h4 id="currentCustomer" class="mb-0">${customer.name}</h4>
                <small class="customer-email">${customer.email}</small> <!-- Aquí agregamos el email debajo del nombre -->
            </div>
        </div>
    `;

    document.getElementById('chatArea').classList.remove('d-none');
    document.getElementById('noChatSelected').classList.add('d-none');

    const messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = '';

    let lastDateHeader = null; // Variable para rastrear el último encabezado de fecha agregado
    
    customer.messages.forEach(message => {
        const messageDate = new Date(message.timestamp);
        const formattedHeaderDate = formatHeaderDate(messageDate);

        
        // Insertar un encabezado de fecha si cambia
        if (formattedHeaderDate !== lastDateHeader) {
            const dateHeader = document.createElement('div');
            dateHeader.className = 'date-header text-center my-3';
            dateHeader.textContent = formattedHeaderDate;
            messageArea.appendChild(dateHeader);
            lastDateHeader = formattedHeaderDate;
        }
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
    loadCustomerList(); // Recargar la lista de clientes después de marcar los mensajes como leídos
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
        const formattedHeaderDate = formatHeaderDate(timestamp);

        const messageArea = document.getElementById('messageArea');

        // Mostrar la cabecera de la fecha si es necesario
        const lastMessage = customer.messages[customer.messages.length - 1];
        const lastMessageDate = lastMessage ? formatHeaderDate(new Date(lastMessage.timestamp)) : null;

        if (lastMessageDate !== formattedHeaderDate) {
            const dateHeader = document.createElement('div');
            dateHeader.className = 'date-header';
            dateHeader.textContent = formattedHeaderDate;
            messageArea.appendChild(dateHeader);
        }

        // Si hay un mensaje de texto
        if (message) {
            customer.messages.push({ text: message, sent: true, timestamp: timestamp });

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
                document.getElementById('imagePreview').classList.add('d-none'); // Ocultar la vista previa
            };

            reader.readAsDataURL(file);
        }

        // Reorganizar la lista de clientes para que el cliente con el mensaje más reciente esté en primer lugar
        customers.sort((a, b) => {
            // Si el último mensaje de 'a' es enviado por el usuario y el de 'b' no, 'a' va primero
            const lastMessageA = a.messages[a.messages.length - 1];
            const lastMessageB = b.messages[b.messages.length - 1];

            if (lastMessageA.timestamp > lastMessageB.timestamp) {
                return -1; // 'a' va primero
            } else if (lastMessageA.timestamp < lastMessageB.timestamp) {
                return 1; // 'b' va primero
            }
            return 0; // Son iguales, mantener el orden
        });

        loadCustomerList(); // Recargar la lista de clientes

        // Actualizar el encabezado del cliente al que se le ha enviado el mensaje
        const customerList = document.getElementById('customerList');
        customerList.scrollTop = 0; // Desplazar la lista hacia arriba para que el cliente más reciente esté visible
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

// Formatear fecha para la cabecera (e.g., "Lunes, 25/11/2024")
function formatHeaderDate(date) {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const dayName = days[date.getDay()];
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${dayName}, ${day}/${month}/${year}`;
}

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
//---------------------------------------------------------
// Filtrar clientes
document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase().trim(); // Convertir texto a minúsculas para búsqueda insensible a mayúsculas
    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchValue)
    );

    // Recargar la lista de clientes con los resultados filtrados
    loadFilteredCustomerList(filteredCustomers);
});

// Cargar lista filtrada de clientes
function loadFilteredCustomerList(filteredCustomers) {
    const customerList = document.getElementById('customerList');
    customerList.innerHTML = '';

    if (filteredCustomers.length === 0) {
        customerList.innerHTML = `<p class="text-muted text-center">No se encontraron clientes</p>`;
        return;
    }

    filteredCustomers.forEach(customer => {
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
                    <small class="customer-email">${customer.email}</small>
                </div>
            </div>
        `;
        customerElement.onclick = () => loadChat(customer.id);
        customerList.appendChild(customerElement);
    });
}


// Cargar lista inicial de clientes
loadCustomerList();



// Datos de pedidos TecnoPlay
let orders = [
    {
        id: 1,
        customer: {
            name: 'Juan Pérez',
            email: 'juan.perez@email.com',
            address: 'Av. Principal 123'
        },
        products: [
            { name: 'PlayStation 5', quantity: 1, price: 499.99 },
            { name: 'DualSense Controller', quantity: 1, price: 69.99 }
        ],
        status: 'processing',
        date: new Date('2024-02-20')
    },
    {
        id: 2,
        customer: {
            name: 'María García',
            email: 'maria.garcia@email.com',
            address: 'Calle Secundaria 456'
        },
        products: [
            { name: 'Nintendo Switch OLED', quantity: 1, price: 349.99 },
            { name: 'The Legend of Zelda: TOTK', quantity: 1, price: 59.99 }
        ],
        status: 'pending',
        date: new Date('2024-02-21')
    },
    {
        id: 3,
        customer: {
            name: 'Carlos Rodríguez',
            email: 'carlos.rodriguez@email.com',
            address: 'Plaza Central 789'
        },
        products: [
            { name: 'DualSense Controller', quantity: 2, price: 69.99 }
        ],
        status: 'shipped',
        date: new Date('2024-02-19')
    },
    {
        id: 4,
        customer: {
            name: 'Ana Martínez',
            email: 'ana.martinez@email.com',
            address: 'Av. Los Pinos 234'
        },
        products: [
            { name: 'PlayStation VR2', quantity: 1, price: 549.99 }
        ],
        status: 'pending',
        date: new Date('2024-02-21')
    },
    {
        id: 5,
        customer: {
            name: 'Luis Torres',
            email: 'luis.torres@email.com',
            address: 'Calle Los Olivos 567'
        },
        products: [
            { name: 'Spider-Man 2', quantity: 1, price: 69.99 },
            { name: 'DualSense Controller', quantity: 1, price: 69.99 }
        ],
        status: 'processing',
        date: new Date('2024-02-20')
    }
];

// Cargar lista de pedidos
function loadOrderList() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';

    orders.forEach(order => {
        const total = order.products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
        const orderElement = document.createElement('a');
        orderElement.href = '#';
        orderElement.className = 'list-group-item list-group-item-action';
        orderElement.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <h6 class="mb-1">Pedido #${order.id}</h6>
                <span class="badge bg-${getStatusBadgeColor(order.status)}">${getStatusText(order.status)}</span>
            </div>
            <p class="mb-1">${order.customer.name}</p>
            <small>Total: $${total.toFixed(2)}</small>
        `;
        orderElement.onclick = () => loadOrderDetails(order.id);
        orderList.appendChild(orderElement);
    });
}

// Cargar detalles del pedido
function loadOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById('orderDetails').classList.remove('d-none');
    document.getElementById('noOrderSelected').classList.add('d-none');

    // Información del cliente
    document.getElementById('customerInfo').innerHTML = `
        <p><strong>Cliente:</strong> ${order.customer.name}</p>
        <p><strong>Email:</strong> ${order.customer.email}</p>
        <p><strong>Dirección:</strong> ${order.customer.address}</p>
    `;

    // Productos
    const orderProducts = document.getElementById('orderProducts');
    orderProducts.innerHTML = '';
    order.products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>$${(product.price * product.quantity).toFixed(2)}</td>
        `;
        orderProducts.appendChild(row);
    });

    // Estado del pedido
    document.getElementById('orderStatus').value = order.status;
}

// Utilidades
function getStatusBadgeColor(status) {
    const colors = {
        pending: 'warning',
        processing: 'info',
        shipped: 'primary',
        delivered: 'success'
    };
    return colors[status] || 'secondary';
}

function getStatusText(status) {
    const texts = {
        pending: 'Pendiente',
        processing: 'En Proceso',
        shipped: 'Enviado',
        delivered: 'Entregado'
    };
    return texts[status] || status;
}

// Actualizar pedido
document.getElementById('updateOrder').addEventListener('click', function() {
    const status = document.getElementById('orderStatus').value;
    // Aquí iría la lógica para actualizar el estado del pedido
    alert('Estado del pedido actualizado');
});

// Cargar lista inicial de pedidos
loadOrderList();
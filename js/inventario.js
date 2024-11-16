// Datos de inventario TecnoPlay
let inventory = [
    {
        id: 1,
        name: 'PlayStation 5',
        category: 'Consolas',
        stock: 15,
        price: 499.99
    },
    {
        id: 2,
        name: 'Xbox Series X',
        category: 'Consolas',
        stock: 12,
        price: 499.99
    },
    {
        id: 3,
        name: 'Nintendo Switch OLED',
        category: 'Consolas',
        stock: 20,
        price: 349.99
    },
    {
        id: 4,
        name: 'DualSense Controller',
        category: 'Accesorios',
        stock: 30,
        price: 69.99
    },
    {
        id: 5,
        name: 'God of War Ragnarök',
        category: 'Juegos',
        stock: 25,
        price: 59.99
    },
    {
        id: 6,
        name: 'The Legend of Zelda: TOTK',
        category: 'Juegos',
        stock: 18,
        price: 59.99
    },
    {
        id: 7,
        name: 'Xbox Elite Controller',
        category: 'Accesorios',
        stock: 8,
        price: 179.99
    },
    {
        id: 8,
        name: 'PlayStation VR2',
        category: 'Accesorios',
        stock: 5,
        price: 549.99
    },
    {
        id: 9,
        name: 'Spider-Man 2',
        category: 'Juegos',
        stock: 22,
        price: 69.99
    },
    {
        id: 10,
        name: 'Nintendo Pro Controller',
        category: 'Accesorios',
        stock: 15,
        price: 69.99
    }
];

// Cargar inventario
function loadInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';

    inventory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td class="${item.stock < 10 ? 'stock-warning' : ''}">${item.stock}</td>
            <td>$${item.price}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-sm btn-primary" onclick="editProduct(${item.id})">Editar</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteProduct(${item.id})">Eliminar</button>
                </div>
            </td>
        `;
        inventoryList.appendChild(row);
    });
}

// Cargar inventario inicial
loadInventory();
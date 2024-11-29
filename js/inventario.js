// Datos de ejemplo
let inventory = [
    {
        id: 1,
        name: 'PlayStation 5',
        category: 'Consolas',
        stock: 15,
        price: 2199.90
    },
    {
        id: 2,
        name: 'Xbox Series X',
        category: 'Consolas',
        stock: 12,
        price: 2299.90
    },
    {
        id: 3,
        name: 'Nintendo Switch OLED',
        category: 'Consolas',
        stock: 20,
        price: 1499.90
    }
];

let editingProductId = null;
let deletingProductId = null;

// Cargar categorías
const categories = ['Consolas', 'Juegos', 'Accesorios', 'Otros'];

function loadCategories() {
    const categorySelect = document.getElementById('productCategory');
    categorySelect.innerHTML = '';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Formatear precio en soles
function formatPrice(price) {
    return `S/ ${price.toFixed(2)}`;
}

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
            <td>${formatPrice(item.price)}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-sm btn-primary" onclick="window.editProduct(${item.id})">Editar</button>
                    <button class="btn btn-sm btn-danger" onclick="window.deleteProduct(${item.id})">Eliminar</button>
                </div>
            </td>
        `;
        inventoryList.appendChild(row);
    });
}

// Limpiar formulario
function clearForm() {
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = categories[0];
    document.getElementById('productStock').value = '';
    document.getElementById('productPrice').value = '';
    editingProductId = null;
    document.querySelector('#addProductModal .modal-title').textContent = 'Agregar Producto';
}

// Agregar/Editar producto
document.getElementById('saveProduct').addEventListener('click', function() {
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const stock = parseInt(document.getElementById('productStock').value);
    const price = parseFloat(document.getElementById('productPrice').value);

    if (name && category && !isNaN(stock) && !isNaN(price)) {
        if (editingProductId) {
            // Editar producto existente
            const index = inventory.findIndex(p => p.id === editingProductId);
            if (index !== -1) {
                inventory[index] = {
                    ...inventory[index],
                    name,
                    category,
                    stock,
                    price
                };
            }
        } else {
            // Agregar nuevo producto
            const newProduct = {
                id: inventory.length > 0 ? Math.max(...inventory.map(p => p.id)) + 1 : 1,
                name,
                category,
                stock,
                price
            };
            inventory.push(newProduct);
        }

        loadInventory();
        
        // Cerrar modal y limpiar formulario
        const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
        modal.hide();
        clearForm();
    } else {
        alert('Por favor, complete todos los campos correctamente');
    }
});

// Hacer las funciones accesibles globalmente
window.editProduct = function(id) {
    const product = inventory.find(p => p.id === id);
    if (product) {
        editingProductId = id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productStock').value = product.stock;
        document.getElementById('productPrice').value = product.price;
        
        document.querySelector('#addProductModal .modal-title').textContent = 'Editar Producto';
        const modal = new bootstrap.Modal(document.getElementById('addProductModal'));
        modal.show();
    }
};

window.deleteProduct = function(id) {
    deletingProductId = id;
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
    deleteModal.show();
};

// Confirmar eliminación
document.getElementById('confirmDelete').addEventListener('click', function() {
    if (deletingProductId !== null) {
        inventory = inventory.filter(p => p.id !== deletingProductId);
        loadInventory();
        const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmModal'));
        deleteModal.hide();
        deletingProductId = null;
    }
});

// Event listener para el botón de agregar producto
document.querySelector('[data-bs-target="#addProductModal"]').addEventListener('click', clearForm);

// Event listener para cuando se cierra el modal
document.getElementById('addProductModal').addEventListener('hidden.bs.modal', clearForm);

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadInventory();
});
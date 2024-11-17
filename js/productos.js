// Datos de productos TecnoPlay
let products = [
    {
        id: 1,
        name: 'PlayStation 5',
        category: 'Consolas',
        price: 399.99,
        image: 'https://www.efe.com.pe/media/catalog/product/p/s/ps5-slim-discja_1.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
    {
        id: 2,
        name: 'Xbox Series X',
        category: 'Consolas',
        price: 499.99,
        image: 'https://www.falabella.com.pe/cdn-cgi/imagedelivery/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/124503431/width=240,height=240,quality=70,format=webp,fit=pad'
    },
    {
        id: 3,
        name: 'Nintendo Switch OLED',
        category: 'Consolas',
        price: 349.99,
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20224969_2/w=1500,h=1500,fit=pad'
    },
    {
        id: 4,
        name: 'DualSense Controller',
        category: 'Accesorios',
        price: 69.99,
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/117541651_03/w=1500,h=1500,fit=pad'
    },
    {
        id: 5,
        name: 'God of War Ragnarök',
        category: 'Juegos',
        price: 59.99,
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/113903708_01/w=1500,h=1500,fit=pad'
    },
    {
        id: 6,
        name: 'The Legend of Zelda: TOTK',
        category: 'Juegos',
        price: 59.99,
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/120615915_01/w=1500,h=1500,fit=padd'
    },
    {
        id: 7,
        name: 'Xbox Elite Controller',
        category: 'Accesorios',
        price: 179.99,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 8,
        name: 'PlayStation VR2',
        category: 'Accesorios',
        price: 549.99,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 9,
        name: 'Spider-Man 2',
        category: 'Juegos',
        price: 69.99,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 10,
        name: 'Nintendo Pro Controller',
        category: 'Accesorios',
        price: 69.99,
        image: 'https://via.placeholder.com/150'
    }
];

// Cargar productos
function loadProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4';
        productCard.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Categoría: ${product.category}</p>
                    <p class="card-text">Precio: $${product.price}</p>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Búsqueda y filtros
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    loadProducts(filteredProducts);
});

document.getElementById('priceFilter').addEventListener('change', function(e) {
    const sortOrder = e.target.value;
    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else if (sortOrder === 'desc') {
            return b.price - a.price;
        }
        return 0;
    });
    loadProducts(sortedProducts);
});

// Cargar productos iniciales
loadProducts(products);
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
        image: 'https://assets.xboxservices.com/assets/8e/e5/8ee5992b-f4d3-436a-8b55-1208b6ad216a.jpg?n=Xbox-Wireless-Controller_Image-0_Share-Button-Poster_1600x808.jpg'
    },
    {
        id: 8,
        name: 'PlayStation VR2',
        category: 'Accesorios',
        price: 549.99,
        image: 'https://elcomercio.pe/resizer/v2/X4OMT7WL7NE77NPBTDPMB6LHG4.jpg?auth=a4bd3005ec3e8e97e4a4b127e3186bd913b51c3c6beacdaadf544ea8737ddd50&width=1200&height=675&quality=75&smart=true'
    },
    {
        id: 9,
        name: 'Spider-Man 2',
        category: 'Juegos',
        price: 69.99,
        image: 'https://coolboxpe.vtexassets.com/arquivos/ids/335359/GC03354.jpg?v=638393056914930000'
    },
    {
        id: 10,
        name: 'Nintendo Pro Controller',
        category: 'Accesorios',
        price: 69.99,
        image: 'https://oechsle.vteximg.com.br/arquivos/ids/1674629/image-33fb25f515b24da8a35610bb2c61af1b.jpg?v=637494897637700000'
    }
    ,
    {
        id: 11,
        name: 'Logitech G Pro X Headset',
        category: 'Accesorios',
        price: 129.99,
        image: 'https://hca.pe/storage/media/large_xHtcPPAInlTJsKisMV8EeFX5e2tbYOGtAJZw9pL9.png'
    },
    {
        id: 12,
        name: 'Cyberpunk 2077',
        category: 'Juegos',
        price: 49.99,
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/126951058_01/w=800,h=800,fit=pad'
    },
    {
        id: 13,
        name: 'Razer BlackWidow Keyboard',
        category: 'Accesorios',
        price: 139.99,
        image: 'https://m.media-amazon.com/images/I/815XJdl7fXL.jpg'
    },
    {
        id: 14,
        name: 'Assassin\'s Creed Valhalla',
        category: 'Juegos',
        price: 39.99,
        image: 'https://m.media-amazon.com/images/I/817XK+M405L.jpg'
    },
    {
        id: 15,
        name: 'Oculus Quest 2',
        category: 'Accesorios',
        price: 299.99,
        image: 'https://images-cdn.ubuy.co.in/633aaa80549a314c872acdf6-oculus-quest-2-advanced-all-in-one.jpg'
    }
];

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
                    <p class="card-text">Precio: S/${product.price}</p>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Cargar categorías
function loadCategories(products) {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = [...new Set(products.map(product => product.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Función para aplicar filtros
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
    const sortOrder = document.getElementById('priceFilter').value;

    let filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (sortOrder === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    loadProducts(filteredProducts);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('priceFilter').addEventListener('change', applyFilters);
document.getElementById('categoryFilter').addEventListener('change', applyFilters);

// Cargar productos y categorías iniciales
loadProducts(products);
loadCategories(products);
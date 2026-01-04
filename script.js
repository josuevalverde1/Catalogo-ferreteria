// Catálogo de productos de ferretería
const products = [
    {
        id: 1,
        name: "Taladro Percutor Profesional 750W",
        description: "Taladro percutor de alto rendimiento con 750W de potencia, velocidad variable y función de impacto. Ideal para trabajos en concreto, madera y metal. Incluye maletín y juego de brocas.",
        price: 89.99,
        category: "electricas",
        icon: "fas fa-bolt",
        stock: 15,
        rating: 4.8,
        features: ["750W de potencia", "Velocidad variable", "Función percutor", "Maletín incluido"]
    },
    {
        id: 2,
        name: "Juego Completo de Llaves Mixtas",
        description: "Set profesional de 30 llaves mixtas de acero cromado vanadio, medidas desde 6mm hasta 24mm. Resistentes a la corrosión y al desgaste.",
        price: 45.50,
        category: "manuales",
        icon: "fas fa-wrench",
        stock: 25,
        rating: 4.6,
        features: ["30 piezas", "Acero cromado", "Medidas 6-24mm", "Garantía de por vida"]
    },
    {
        id: 3,
        name: "Pintura Latex Interior Premium",
        description: "Pintura latex de máxima calidad para interiores, acabado mate. Alta cubrición (15m² por litro), resistente a lavados y de secado rápido.",
        price: 28.75,
        category: "pintura",
        icon: "fas fa-fill-drip",
        stock: 40,
        rating: 4.7,
        features: ["Alta cubrición", "Resistente a lavados", "Secado rápido", "Sin olor"]
    },
    {
        id: 4,
        name: "Cable Eléctrico THHN 2.5mm 100m",
        description: "Cable eléctrico THHN calibre 2.5mm, 100 metros. Ideal para instalaciones eléctricas residenciales e industriales. Certificado y garantizado.",
        price: 55.30,
        category: "materiales",
        icon: "fas fa-bolt",
        stock: 12,
        rating: 4.9,
        features: ["100 metros", "Calibre 2.5mm", "THHN certificado", "Resistente al calor"]
    },
    {
        id: 5,
        name: "Destornilladores Profesionales Set 12",
        description: "Juego de 12 destornilladores profesionales con puntas intercambiables. Mangos ergonómicos antideslizantes y puntas magnetizadas.",
        price: 22.90,
        category: "manuales",
        icon: "fas fa-screwdriver",
        stock: 35,
        rating: 4.5,
        features: ["12 piezas", "Puntas magnetizadas", "Mangos ergonómicos", "Estuche organizador"]
    },
    {
        id: 6,
        name: "Cemento Rápido 25kg",
        description: "Cemento de fraguado rápido en 15 minutos. Ideal para reparaciones urgentes, anclajes y trabajos menores. Alta resistencia final.",
        price: 18.25,
        category: "materiales",
        icon: "fas fa-cube",
        stock: 20,
        rating: 4.4,
        features: ["Fraguado 15 min", "Alta resistencia", "25kg", "Multiusos"]
    },
    {
        id: 7,
        name: "Kit de Cerraduras de Seguridad",
        description: "Kit completo con 2 cerraduras de alta seguridad para puertas principales. Incluye 5 llaves maestras, mecanismo anti-bumping y anti-taladro.",
        price: 65.80,
        category: "seguridad",
        icon: "fas fa-key",
        stock: 8,
        rating: 4.8,
        features: ["Alta seguridad", "5 llaves", "Anti-bumping", "Garantía 5 años"]
    },
    {
        id: 8,
        name: "Sierra Circular Profesional 1800W",
        description: "Sierra circular profesional de 1800W con disco de 7 1/4. Guía láser integrada, ajuste de profundidad y ángulo. Corte preciso en madera y láminas.",
        price: 145.50,
        category: "electricas",
        icon: "fas fa-cut",
        stock: 6,
        rating: 4.9,
        features: ["1800W potencia", "Guía láser", "Ajuste de profundidad", "Maletín incluido"]
    },
    {
        id: 9,
        name: "Martillo de Carpintero Fibra Vidrio",
        description: "Martillo profesional con cabeza de acero forjado y mango de fibra de vidrio antideslizante. Peso balanceado para mayor control y reducción de vibración.",
        price: 18.75,
        category: "manuales",
        icon: "fas fa-hammer",
        stock: 30,
        rating: 4.7,
        features: ["Fibra de vidrio", "Antideslizante", "Reducción de vibración", "Peso balanceado"]
    },
    {
        id: 10,
        name: "Brochas Profesionales Set 8",
        description: "Set de 8 brochas profesionales para pintura. Cerdas sintéticas de alta calidad, mango ergonómico y durabilidad excepcional.",
        price: 32.50,
        category: "pintura",
        icon: "fas fa-paint-brush",
        stock: 45,
        rating: 4.6,
        features: ["8 brochas", "Cerdas sintéticas", "Ergonómicas", "Larga duración"]
    },
    {
        id: 11,
        name: "Casco de Seguridad con Visor",
        description: "Casco de seguridad industrial con visor transparente integrado. Ajuste regulable, material ABS de alta resistencia y banda reflectante.",
        price: 24.99,
        category: "seguridad",
        icon: "fas fa-hard-hat",
        stock: 25,
        rating: 4.5,
        features: ["Visor integrado", "Ajuste regulable", "ABS resistente", "Reflectante"]
    },
    {
        id: 12,
        name: "Escalera Extensible Aluminio 4m",
        description: "Escalera extensible de aluminio profesional, altura máxima 4 metros. Sistema de bloqueo seguro, peso ligero y alta estabilidad.",
        price: 89.99,
        category: "materiales",
        icon: "fas fa-ladder",
        stock: 10,
        rating: 4.8,
        features: ["Aluminio ligero", "4m altura", "Bloqueo seguro", "Plegable"]
    }
];

// Sistema de carrito mejorado
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('ferreteria_cart')) || [];
        this.init();
    }

    init() {
        this.renderProducts();
        this.setupEventListeners();
        this.updateCartUI();
        this.setupFilters();
    }

    setupEventListeners() {
        // Botón abrir/cerrar carrito
        document.getElementById('open-cart').addEventListener('click', () => this.toggleCart(true));
        document.getElementById('close-cart').addEventListener('click', () => this.toggleCart(false));
        document.getElementById('overlay').addEventListener('click', () => this.toggleCart(false));

        // Botón WhatsApp
        document.getElementById('whatsapp-sidebar-btn').addEventListener('click', () => this.sendToWhatsApp());

        // Cerrar modal
        document.getElementById('close-modal').addEventListener('click', () => this.closeModal());
        document.getElementById('product-modal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) this.closeModal();
        });
    }

    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterProducts(btn.dataset.category);
            });
        });
    }

    filterProducts(category) {
        const filtered = category === 'all'
            ? products
            : products.filter(p => p.category === category);

        this.renderProducts(filtered);
    }

    renderProducts(productsToRender = products) {
        const grid = document.getElementById('products-grid');
        grid.innerHTML = '';

        productsToRender.forEach(product => {
            const cartItem = this.items.find(item => item.id === product.id);
            const quantity = cartItem ? cartItem.quantity : 0;

            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;

            productCard.innerHTML = `
                ${product.stock < 5 ? `<span class="product-badge">¡Últimas ${product.stock}!</span>` : ''}
                <div class="product-image">
                    <i class="${product.icon}"></i>
                </div>
                <button class="btn-quick-view" onclick="cart.showProductModal(${product.id})">
                    <i class="fas fa-search-plus"></i>
                </button>
                <div class="product-content">
                    <span class="product-category">${this.getCategoryName(product.category)}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description.substring(0, 100)}...</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="cart.decreaseQuantity(${product.id})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity-display" id="qty-${product.id}">${quantity}</span>
                            <button class="quantity-btn" onclick="cart.increaseQuantity(${product.id})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <button class="btn-add ${quantity > 0 ? 'in-cart' : ''}" 
                                onclick="cart.toggleProduct(${product.id})" 
                                id="btn-add-${product.id}">
                            ${quantity > 0 ?
                    `<i class="fas fa-check"></i> En carrito` :
                    `<i class="fas fa-cart-plus"></i> Agregar`}
                        </button>
                    </div>
                </div>
            `;

            grid.appendChild(productCard);
        });
    }

    getCategoryName(categoryKey) {
        const categories = {
            'electricas': 'Herramientas Eléctricas',
            'manuales': 'Herramientas Manuales',
            'pintura': 'Pinturas y Accesorios',
            'materiales': 'Materiales de Construcción',
            'seguridad': 'Equipo de Seguridad'
        };
        return categories[categoryKey] || categoryKey;
    }

    increaseQuantity(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = this.items.find(item => item.id === productId);

        if (cartItem) {
            if (cartItem.quantity < product.stock) {
                cartItem.quantity++;
                this.showNotification(`${product.name} aumentado a ${cartItem.quantity}`, 'success');
            } else {
                this.showNotification(`Stock máximo alcanzado para ${product.name}`, 'warning');
            }
        } else {
            this.items.push({
                id: productId,
                name: product.name,
                price: product.price,
                quantity: 1,
                icon: product.icon
            });
            this.showNotification(`${product.name} agregado al carrito`, 'success');
        }

        this.updateCart();
    }

    decreaseQuantity(productId) {
        const cartItemIndex = this.items.findIndex(item => item.id === productId);

        if (cartItemIndex !== -1) {
            if (this.items[cartItemIndex].quantity > 1) {
                this.items[cartItemIndex].quantity--;
                const product = products.find(p => p.id === productId);
                this.showNotification(`${product.name} disminuido a ${this.items[cartItemIndex].quantity}`, 'info');
            } else {
                this.items.splice(cartItemIndex, 1);
            }
            this.updateCart();
        }
    }

    toggleProduct(productId) {
        const cartItemIndex = this.items.findIndex(item => item.id === productId);
        const product = products.find(p => p.id === productId);

        if (cartItemIndex !== -1) {
            this.items.splice(cartItemIndex, 1);
            this.showNotification(`${product.name} removido del carrito`, 'info');
        } else {
            this.items.push({
                id: productId,
                name: product.name,
                price: product.price,
                quantity: 1,
                icon: product.icon
            });
            this.showNotification(`${product.name} agregado al carrito`, 'success');
        }

        this.updateCart();
    }

    updateCart() {
        // Guardar en localStorage
        localStorage.setItem('ferreteria_cart', JSON.stringify(this.items));

        // Actualizar UI
        this.updateCartUI();
        this.renderCartItems();
        this.renderProducts();
    }

    updateCartUI() {
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // Actualizar contador del header
        document.getElementById('header-cart-count').textContent = totalItems;

        // Actualizar subtotal y total en sidebar
        document.getElementById('subtotal').textContent = `$${totalPrice.toFixed(2)}`;
        document.getElementById('total-cart').textContent = `$${(totalPrice + 5).toFixed(2)}`;

        // Habilitar/deshabilitar botón WhatsApp
        const whatsappBtn = document.getElementById('whatsapp-sidebar-btn');
        whatsappBtn.disabled = totalItems === 0;
    }

    renderCartItems() {
        const container = document.getElementById('cart-items');
        container.innerHTML = '';

        if (this.items.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Tu carrito está vacío</p>
                </div>
            `;
            return;
        }

        this.items.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <i class="${product.icon}"></i>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} c/u</div>
                    <div class="cart-item-actions">
                        <div class="cart-item-quantity">
                            <button class="cart-item-quantity-btn" onclick="cart.decreaseQuantity(${item.id})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span>${item.quantity}</span>
                            <button class="cart-item-quantity-btn" onclick="cart.increaseQuantity(${item.id})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <button class="remove-item" onclick="cart.toggleProduct(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;

            container.appendChild(cartItem);
        });
    }

    toggleCart(show) {
        const sidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('overlay');

        if (show) {
            sidebar.classList.add('open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    showProductModal(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = this.items.find(item => item.id === productId);
        const quantity = cartItem ? cartItem.quantity : 0;

        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <div class="modal-product">
                <div class="modal-product-image">
                    <i class="${product.icon}"></i>
                </div>
                <div class="modal-product-info">
                    <span class="product-category">${this.getCategoryName(product.category)}</span>
                    <h2>${product.name}</h2>
                    <div class="modal-rating">
                        ${this.generateStars(product.rating)}
                        <span>${product.rating} (${Math.floor(Math.random() * 50) + 20} reseñas)</span>
                    </div>
                    <p class="modal-description">${product.description}</p>
                    
                    <div class="modal-features">
                        <h3>Características:</h3>
                        <ul>
                            ${product.features.map(feat => `<li><i class="fas fa-check"></i> ${feat}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-stock">
                        <i class="fas fa-box"></i>
                        <span>Disponible: ${product.stock} unidades</span>
                    </div>
                    
                    <div class="modal-price">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <div class="modal-actions">
                            <div class="quantity-controls modal-quantity">
                                <button class="quantity-btn" onclick="cart.decreaseQuantity(${product.id})">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity-display" id="modal-qty-${product.id}">${quantity}</span>
                                <button class="quantity-btn" onclick="cart.increaseQuantity(${product.id})">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button class="btn-add ${quantity > 0 ? 'in-cart' : ''}" 
                                    onclick="cart.toggleProduct(${product.id}); cart.updateModalQuantity(${product.id})">
                                ${quantity > 0 ?
                `<i class="fas fa-check"></i> En carrito` :
                `<i class="fas fa-cart-plus"></i> Agregar al carrito`}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('product-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    updateModalQuantity(productId) {
        const cartItem = this.items.find(item => item.id === productId);
        const quantity = cartItem ? cartItem.quantity : 0;

        const qtyElement = document.getElementById(`modal-qty-${productId}`);
        if (qtyElement) {
            qtyElement.textContent = quantity;
        }
    }

    generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    closeModal() {
        document.getElementById('product-modal').classList.remove('active');
        document.body.style.overflow = '';
    }

    showNotification(message, type = 'info') {
        const notifications = document.getElementById('notifications');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;

        const icon = type === 'success' ? 'fas fa-check-circle' :
            type === 'warning' ? 'fas fa-exclamation-triangle' : 'fas fa-info-circle';

        notification.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
        `;

        notifications.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    sendToWhatsApp() {
        if (this.items.length === 0) return;

        const phoneNumber = "58249298";
        const totalPrice = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // Crear mensaje detallado
        let message = "🚀 *PEDIDO FERRETERÍA MODERNA* 🚀\n\n";
        message += "Hola! Quiero realizar el siguiente pedido:\n\n";
        message += "══════════════════════\n";

        this.items.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            message += `*${index + 1}. ${item.name}*\n`;
            message += `   Cantidad: ${item.quantity}\n`;
            message += `   Precio: $${item.price.toFixed(2)} c/u\n`;
            message += `   Subtotal: $${subtotal.toFixed(2)}\n`;
            message += `   ──────────────────\n`;
        });

        message += `\n*📦 RESUMEN DEL PEDIDO*\n`;
        message += `══════════════════════\n`;
        message += `Subtotal: $${totalPrice.toFixed(2)}\n`;
        message += `Envío: $5.00\n`;
        message += `*TOTAL: $${(totalPrice + 5).toFixed(2)}*\n\n`;
        message += `📱 *Contacto:* 58249298\n`;
        message += `📍 *Envío a domicilio disponible*\n\n`;
        message += `Por favor confírmenme disponibilidad y tiempo de entrega.\n`;
        message += `¡Gracias!`;

        // Codificar mensaje para URL
        const encodedMessage = encodeURIComponent(message);

        // Crear enlace WhatsApp (web)
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Abrir en nueva ventana
        window.open(whatsappURL, '_blank');

        // Mostrar confirmación
        this.showNotification('Redirigiendo a WhatsApp...', 'success');

        // Opcional: Limpiar carrito después de enviar
        setTimeout(() => {
            if (confirm('¿Deseas vaciar el carrito después de enviar el pedido?')) {
                this.items = [];
                this.updateCart();
                this.toggleCart(false);
            }
        }, 1000);
    }
}

// Inicializar la aplicación
const cart = new ShoppingCart();

// Hacer disponible globalmente para los eventos onclick
window.cart = cart;
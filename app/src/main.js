import './style.css';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

const app = document.querySelector('#app');
let cart = [];

const renderApp = async () => {
    // 1. Gọi Mock API
    const response = await fetch('http://localhost:3001/products');
    const products = await response.json();

    // 2. Dựng khung Web
    app.innerHTML = `
        ${Header}
        <section class="hero">
            <h1>Gửi Trao Yêu Thương</h1>
            <p>Lựa chọn mẫu hoa đẹp nhất cho người thân yêu</p>
        </section>
        <div class="container" id="products">
            <h2 class="title">Danh Mục Sản Phẩm</h2>
            <div class="product-grid">
                ${products.map(p => `
                    <div class="product-card">
                        <img src="${p.image}" alt="${p.name}">
                        <h3>${p.name}</h3>
                        <p class="price">${p.price.toLocaleString()}đ</p>
                        <button class="add-to-cart" data-id="${p.id}">Thêm vào giỏ</button>
                    </div>
                `).join('')}
            </div>
        </div>
        ${Footer}
    `;

    // 3. Xử lý sự kiện Thêm vào giỏ
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            const product = products.find(p => p.id == id);
            cart.push(product);
            document.getElementById('cart-count').innerText = cart.length;
            alert(`Đã thêm ${product.name} vào giỏ hàng!`);
        });
    });
};

renderApp();
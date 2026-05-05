import 'antd/dist/reset.css'; 
import { AppHeader } from './components/Header';
import { AppFooter } from './components/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const app = document.querySelector<HTMLDivElement>('#app')!;
let cart: Product[] = [];

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:3002/products');
  return await response.json();
}

async function renderApp() {
  const products = await fetchProducts();

  app.innerHTML = `
    <div class="ant-layout" style="min-height: 100vh;">
      <header class="ant-layout-header" style="background: #fff; padding: 0 50px; border-bottom: 1px solid #f0f0f0;">
        ${AppHeader(cart.length)}
      </header>
      
      <main class="ant-layout-content" style="padding: 50px; background: #f5f5f5;">
        <div class="ant-row" style="margin: -8px;">
          ${products.map(p => `
            <div class="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6" style="padding: 8px;">
              <div class="ant-card ant-card-bordered ant-card-hoverable">
                <div class="ant-card-cover">
                  <img alt="${p.name}" src="${p.image}" style="height: 250px; object-fit: cover; width: 100%;" />
                </div>
                <div class="ant-card-body">
                  <h4 style="margin-bottom: 12px; font-size: 16px;">${p.name}</h4>
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: #cf1322; font-size: 18px; font-weight: bold;">
                      ${p.price.toLocaleString()}đ
                    </span>
                    <button class="ant-btn ant-btn-primary add-btn" data-id="${p.id}" style="background: #eb2f96; border-color: #eb2f96;">
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </main>

      <footer class="ant-layout-footer" style="background: #fff; border-top: 1px solid #f0f0f0;">
        ${AppFooter()}
      </footer>
    </div>
  `;

  setupEvents(products);
}

function setupEvents(products: Product[]) {
  document.querySelectorAll('.add-btn').forEach((btn: any) => {
    btn.onclick = () => {
      const id = parseInt(btn.dataset.id);
      const item = products.find(p => p.id === id);
      if (item) {
        cart.push(item);
        // Cập nhật Badge mà không render lại toàn trang
        const badge = document.querySelector('.ant-badge-count');
        if (badge) badge.innerHTML = cart.length.toString();
      }
    };
  });
}

renderApp();
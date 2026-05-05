export const AppHeader = (cartCount: number): string => {
    return `
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
        <div style="font-size: 24px; font-weight: bold; color: #eb2f96;">
            FlowerShop <small style="font-size: 10px; color: #999;">TS Edition</small>
        </div>
        <div style="display: flex; align-items: center; gap: 30px;">
            <div class="ant-badge">
                <i class="fas fa-shopping-cart" style="font-size: 20px;"></i>
                <sup class="ant-scroll-number ant-badge-count" style="background: #f5222d;">${cartCount}</sup>
            </div>
        </div>
    </div>`;
};
export const AppHeader = (cartCount: number): string => `
    <div style="display: flex; justify-content: space-between; align-items: center; height: 100%;">
        <div style="font-size: 24px; font-weight: bold; color: #eb2f96;">🌸 Flower Shop</div>
        <div style="display: flex; align-items: center; gap: 20px;">
            <span class="ant-badge" style="cursor: pointer;">
                <span style="font-size: 20px;">🛒</span>
                <sup class="ant-scroll-number ant-badge-count" style="background: #f5222d;">${cartCount}</sup>
            </span>
        </div>
    </div>
`;
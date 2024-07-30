<template>
 <div class="container1">
        <h1>Your Order</h1>
        <div class="cart">
            <div class="cart-item">
                <div class="item-details">
                    <img src="" alt="Smartphone case">
                    <div>
                        <h2>Smartphone case</h2>
                        <p>A34E6YYU</p>
                    </div>
                </div>
                <div class="item-quantity">
                    <button>-</button>
                    <input type="text" value="1" readonly>
                    <button>+</button>
                </div>
                <div class="item-price">55,00 €</div>
                <button class="item-remove">×</button>
            </div>
            <div class="cart-item">
                <div class="item-details">
                    <img src="" alt="Wallet">
                    <div>
                        <h2>Wallet</h2>
                        <p>A34E6YYU</p>
                    </div>
                </div>
                <div class="item-quantity">
                    <button>-</button>
                    <input type="text" value="2" readonly>
                    <button>+</button>
                </div>
                <div class="item-price">190,00 €</div>
                <button class="item-remove">×</button>
            </div>
            <div class="cart-item">
                <div class="item-details">
                    <img src="" alt="Black Courier">
                    <div>
                        <h2>Black Courier</h2>
                        <p>A34E6YYU</p>
                    </div>
                </div>
                <div class="item-quantity">
                    <button>-</button>
                    <input type="text" value="2" readonly>
                    <button>+</button>
                </div>
                <div class="item-price">790,00 €</div>
                <button class="item-remove">×</button>
            </div>
            <div class="cart-total">
                <span>Subtotal:</span>
                <span>1 035 €</span>
            </div>
            <button class="purchase-button">Purchase</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cart'

}
</script>
<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 20px;
}

.container1 {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.cart {
    width: 100%;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}

.item-details {
    display: flex;
    align-items: center;
}

.item-details img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 4px;
}

.item-details h2 {
    font-size: 18px;
    margin: 0;
}

.item-details p {
    color: #888;
    margin: 5px 0 0;
}

.item-quantity {
    display: flex;
    align-items: center;
}

.item-quantity button {
    background-color: #e0e0e0;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 18px;
    margin: 0 5px;
}

.item-quantity input {
    width: 30px;
    text-align: center;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 5px;
}

.item-price {
    font-size: 18px;
    font-weight: bold;
}

.item-remove {
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #d9534f;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0;
}

.purchase-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
}

.purchase-button:hover {
    background-color: #0056b3;
}

</style>
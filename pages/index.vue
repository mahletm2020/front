<template>
  <div>
    <div class="container">
      <header>
        <nav>
          <div class="logo">TechPulse</div>
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <NuxtLink to="/cart" class="cart-icon">
            <i class="fas fa-shopping-cart"></i>
          </NuxtLink>
        </nav>
        <hr>
      </header>
      <main class="main-content">
        <div class="product-container">
          <div class="product-image">
            <img src="https://res.cloudinary.com/dcvmxkajf/image/upload/v1722166871/pexels-caleboquendo-7772548-removebg-preview_1_clgnbb.png" alt="Product Image">
          </div>
          <div class="product-details">
            <h1 class="product-title">Tachpulse Electronics</h1>
            <p class="product-description">Experience the best sound quality with our state-of-the-art Electronics. Designed for comfort and engineered with superior quality.</p>
            <button class="explore-button">explore</button>
            <div class="product-details-link">
              <a href="#">Product details</a>
            </div>
          </div>
        </div>
      </main>
      <Productlist />
    </div>
  </div>
</template>

<script setup>
import Productlist from '../components/productlist.vue';
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #b2c1c8;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  color: #262525;
  padding: 10px 20px;
  margin: auto;
  justify-content: center;
}

nav {
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin: right; /* Ensure the logo is pushed to the start */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  flex-grow: 1;
  justify-content: center; /* Center the nav links */
}

.nav-links li a {
  color: #1e1e1e;
  text-decoration: none;
}

.cart-icon {
  font-size: 24px;
  color: #1e1e1e;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: left; /* Ensure the cart icon is pushed to the end */
}

.cart-icon i {
  font-size: 24px;
}

.main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.product-container {
  display: flex;
  max-width: 1200px;
  width: 100%;
}

.product-image {
  flex: 1;
  padding-right: 24px;
  margin-top: -27rem;
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-details {
  flex: 1;
  padding-left: 24px;
}

.product-title {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

.product-description {
  margin-top: 16px;
  color: #555;
}

.explore-button {
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #0055ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.product-details-link {
  margin-top: 16px;
}

.product-details-link a {
  text-decoration: none;
  color: #007bff;
}

.footer {
  padding: 16px;
  background-color: #eaeaea;
  /* text-align: center; */
}

.footer a {
  margin: 0 8px;
  text-decoration: none;
  color: #555;
}
.hr{
  width: 100%;
}
</style>
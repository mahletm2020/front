<template>
    
    
  
  <!-- <div class="container">
        <div class="product-card" >
            <img src="" alt="Leather gloves">
            <h3>product.name</h3>
            <p>product.description</p>
            <p>product.price </p>
        </div>
        
    
   </div> -->
  <div class="container">
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.image" alt="Product Image">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>


</template>

<script>
import { defineComponent } from 'vue';
import { gql, useQuery } from '@apollo/client';
import GetProducts from '@/queries/product.gql';

export default defineComponent({
  name: 'ProductList',
  setup() {
    const { result, loading, error } = useQuery(gql`${GetProducts}`);

    if (loading) {
      console.log('Loading...');
    }

    if (error) {
      console.error('Error:', error);
    }

    const products = result?.value?.schematech1_product_list || [];

    return {
      products,
    };
  },
});
</script>


<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #342f2f;
    color: #333;
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
    flex-direction: row;
}

.product-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    text-align: center;
    width: 250px;
}

.product-card img {
    max-width: 50%; 
    height: 12rem;
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
}

.product-card h3 {
    font-size: 18px;
    margin: 10px 0;
}

.product-card p {
    font-size: 14px;
    margin: 5px 0;
}

</style>

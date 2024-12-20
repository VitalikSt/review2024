<template>
  <Container>
    <h1>Wishlist</h1>
    <div class="wishlist">
      <div class="row">
        <template v-if="wishlistStoreItems.length === 0">
          <h3>Wishlist is empty</h3>
        </template>
        <template v-for="product in wishlistStoreItems" :key="product.id">
          <ProductItem :product="product" @remove="removeProduct" />
        </template>
      </div>
    </div>
  </Container>
</template> 

<script setup>
  import { ref, watch } from 'vue';
  import Container from '@/components/_common/Container/Container.vue';
  import ProductItem from '@/components/Product/ProductItem/ProductItem.vue';
  useHead({ title: 'Wishlist' });

  const wishlistStore = ref(localStorage.getItem('wishlistStore'));
  const wishlistStoreItems = ref(wishlistStore.value ? JSON.parse(wishlistStore.value) : []);
  const updateLocalStorage = () => localStorage.setItem('wishlistStore', JSON.stringify(wishlistStoreItems.value));

  const removeProduct = product => {
    wishlistStoreItems.value = wishlistStoreItems.value.filter(item => item.id !== product.id);
    updateLocalStorage();
  };

  watch(wishlistStore, (newValue) => {
    wishlistStoreItems.value = newValue ? JSON.parse(newValue) : [];
  });
</script>

<style scoped lang="scss">
  @import './style.scss';
</style>

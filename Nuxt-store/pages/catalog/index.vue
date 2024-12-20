<template>
  <Container>
    <h1>Catalog</h1>
    <div class="cols">
      <SideBar :selectCategoryFunc="selectCategoryFunc" />
      <div class="catalog-grid">
        <template v-if="isLoading">
          <strong>Loading...</strong>
        </template>
        <template v-else>
          <template v-for="product in filteredProducts" :key="product.id">
            <ProductItem :product="product" />
          </template>
        </template>
      </div>
    </div>
  </Container>
</template>

<script setup>
  useHead({title: 'Catalog'});
  import { ref, reactive, computed, onMounted } from 'vue';
  import Container from '@/components/_common/Container/Container.vue';
  import ProductItem from '@/components/Product/ProductItem/ProductItem.vue';
  import SideBar from '@/components/SideBar/index.vue';

  const productData = reactive([]);
  const selectedCategory = ref(null);
  const isLoading = ref(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      productData.push(...json);
    } catch(error) {
      console.log('Error', error);
    } finally {
      isLoading.value = false; 
    }
  }

  onMounted(fetchProducts);

  const selectCategoryFunc = category => selectedCategory.value = category;

  const filteredProducts = computed(() => {
    if (!selectedCategory.value) {
      return productData;
    }
    return productData.filter(product => product.category === selectedCategory.value);
  });

</script>

<style scoped lang="scss">
  @import './style.scss';
</style>

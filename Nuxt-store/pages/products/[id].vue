<template>
  <Container>
    <h1>{{ productData.title }}</h1>
    <div class="row">
      <div class="col-1">
        <NuxtImg :src="productData.image" width="100" height="100" />
      </div>
      <div class="col-2">
        <template v-if="productData">
          <div class="controls">
            <WishlistButton @click="addToWishlist(productData)" />
            <ShoppingCartButton @click="addToCart(productData)" />
          </div>
          <Quantity v-model="quantityValue" />
          <p>{{ productData.description }}</p>
          <strong>Price: {{ productData.price }} $</strong>
        </template>
        <strong v-else>Loading...</strong>
      </div>
    </div>
  </Container>
</template>

<script setup>
	import { useRoute } from 'vue-router';
	import { reactive, ref, onMounted } from 'vue';
	import Container from '@/components/_common/Container/Container.vue';
	import ShoppingCartButton from '@/components/Cart/ShoppingCartButton/ShoppingCartButton.vue';
	import WishlistButton from '@/components/Wishlist/WishlistButton/WishlistButton.vue';
	import Quantity from '@/components/_common/Quantity/Quantity.vue';
	import { useAddToWishlist } from '~/store/addToWishlist';
	import { useAddToCart } from '~/store/addToCart';

	const productId = useRoute().params.id;
	const productData = reactive({});
	const quantityValue = ref(1);

	const useAddToWishlistStore = useAddToWishlist();
	const useAddToCartStore = useAddToCart();

	const fetchProductData = async () => {
		try {
			const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
			if (!response.ok) throw new Error('Product not found');
			const data = await response.json();
			Object.assign(productData, data);
			useHead({title: productData.title});
		} catch (error) {
			console.error('Error fetching product data:', error);
		}
	};

	onMounted(fetchProductData);

	const addToWishlist = (product) => {
		useAddToWishlistStore.add(product);
	};

	const addToCart = (product) => {
		const updatedProduct = { ...product, quantity: quantityValue.value };
		useAddToCartStore.add(updatedProduct);
	};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>

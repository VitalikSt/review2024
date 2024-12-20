<template>
	<div class="product-item" :id="product.id">
		<NuxtLink :to="'/products/' + product.id">
			<NuxtImg :src="product.image" width="100" height="100" />
    </NuxtLink>
		<NuxtLink :to="'/products/' + product.id" class="title">{{ product.title }}</NuxtLink>
		<div class="info">
			<strong>{{ product.price }} $</strong>
			<div class="controls">
				<WishlistButton @click="addToWishlist(product)" />
				<RemoveButton  @click="removeHandler(product)" />
				<ShoppingCartButton @click="addToCart(product)" />
			</div> 
		</div>
	</div>
</template>

<script setup>
	import { defineEmits } from 'vue';
	import ShoppingCartButton from  '@/components/Cart/ShoppingCartButton/ShoppingCartButton.vue';
	import WishlistButton from  '@/components/Wishlist/WishlistButton/WishlistButton.vue';
	import RemoveButton from  '@/components/_common/RemoveButton/RemoveButton.vue';
	import { useAddToCart } from  '~/store/addToCart';
	import { useAddToWishlist } from  '~/store/addToWishlist';

	const emit = defineEmits(['remove']);

	const props = defineProps({
		product: Object,
	});

	const useAddToWishlistStore = useAddToWishlist();
	const useAddToCartStore = useAddToCart();
	const addToWishlist = product => useAddToWishlistStore.add(product);
	const quantityValue = ref(1);
	
	const addToCart = product => {
		const updatedProduct = { ...product, quantity: quantityValue.value };
		useAddToCartStore.add(updatedProduct);
	};

	const removeHandler = product => {
		useAddToWishlistStore.remove(product);
		emit('remove', product);
	}

</script>


<style scoped lang="scss">
	@import './style.scss';
</style>
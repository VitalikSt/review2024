<template>
	<div class="count">{{ useAddToCartStore.count }}</div>
</template>

<script setup>
	import { useAddToCart } from  '~/store/addToCart';
	const useAddToCartStore = useAddToCart();
	
	onMounted(() => {
  	useAddToCartStore.initialize();
	});
	
</script>

<style scoped lang="scss">
	@import './style.scss';
</style>
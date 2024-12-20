<template>
	<div class="count">{{ useAddToWishlistStore.count }}</div>
</template>

<script setup>
	import { useAddToWishlist } from  '~/store/addToWishlist';
	const useAddToWishlistStore = useAddToWishlist();

	onMounted(() => {
  	useAddToWishlistStore.initialize();
	});
	

</script>

<style scoped lang="scss">
	@import './style.scss';
</style>
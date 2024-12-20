<template>
	<div class="cart-button">
		<ShoppingCartIcon :width="30" :height="30" :fill="'#6610f2'" />
	</div>
</template>

<script setup>
	import ShoppingCartIcon from  '@/components/_icons/ShoppingCart.vue';
</script>

<style scoped lang="scss">
	@import './style.scss';
</style>

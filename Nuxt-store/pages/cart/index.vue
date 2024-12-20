<template>
	<Container>
		 <h2>Shopping Cart</h2>
		 <template v-if="cartStoreItems.length === 0">
			 <h3>Shopping is empty</h3>
		 </template>
		 <template v-else>
			 <div class="cart" v-for="product in cartStoreItems" :key="product.id">
				 <ShoppingCartItem :product="product" @remove="removeProduct" />
			 </div>
			 <h3>Total: {{ totalAmount.toFixed(2) }}</h3>
		 </template>
	 </Container>
 </template>
 
 <script setup>
	 useHead({ title: 'Shopping cart' });
	 import Container from '@/components/_common/Container/Container.vue';
	 import ShoppingCartItem from '@/components/Cart/ShoppingCartItem/ShoppingCartItem.vue';
 
	 const cartStore = ref(localStorage.getItem('cartStore'));
	 const cartStoreItems = ref(cartStore.value ? JSON.parse(cartStore.value) : []);
 
	 const updateLocalStorage = () => localStorage.setItem('cartStore', JSON.stringify(cartStoreItems.value));
 
	 const removeProduct = product => {
		 cartStoreItems.value = cartStoreItems.value.filter(item => item.id !== product.id);
		 updateLocalStorage();
	 };
 
	 watch(cartStore, (newValue) => {
		 cartStoreItems.value = newValue ? JSON.parse(newValue) : [];
	 });
 
	 const totalAmount = computed(() => {
		 return cartStoreItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
	 });
 </script>
 
 <style scoped lang="scss">
	 @import './style.scss';
 </style>
 
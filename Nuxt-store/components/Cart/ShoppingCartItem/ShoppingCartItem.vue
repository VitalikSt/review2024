<template>
	<div class="cart-item">
		<NuxtLink :to="'/products/' + product.id">
			<NuxtImg :src="props.product.image" width="100" height="100" />
		</NuxtLink>
		<div class="info">
			<h2>{{ product.title }}</h2>
			<p>{{ product.description }}</p>
		</div>
		<div class="price">
			<strong>{{ props.product.price }} $</strong>
			<Quantity v-model="props.product.quantity" />
			<strong>{{ total }} $</strong>
		</div>
		<RemoveButton @click="removeHandler(product)" />
	</div>
</template>

<script setup>
	import { defineEmits, computed } from 'vue';
	import Quantity from '@/components/_common/Quantity/Quantity';
	import RemoveButton from '@/components/_common/RemoveButton/RemoveButton';
	import { useAddToCart } from '~/store/addToCart';
	const useAddToCartStore = useAddToCart();
	const emit = defineEmits(['remove']);

	const props = defineProps({
		product: Object,
	});

	const removeHandler = product => {
		useAddToCartStore.remove(product);
		emit('remove', product);
	}

	const total = computed(() => {
		return (props.product.price * props.product.quantity).toFixed(2);
	});
</script>

<style scoped lang="scss">
	@import './style.scss';
</style>

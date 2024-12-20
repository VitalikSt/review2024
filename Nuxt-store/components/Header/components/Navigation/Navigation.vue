<template>
	<nav>
		<ul>
			<li v-for="route in NAVIGATION_ROUTES" :key="route.name">
				<NuxtLink :to="route.path">
					<div class="icon-wrap" v-if="route.wishlist">
						<WishlistButton />
						<WishlistCount />
					</div>
					<div class="icon-wrap" v-if="route.cart">
						<ShoppingCartButton />
						<ProductCount />
					</div>
					{{ route.name }}
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script setup>
	import NAVIGATION_ROUTES from '@/components/Header/components/Navigation/consts';
	import ShoppingCartButton from  '@/components/Cart/ShoppingCartButton/ShoppingCartButton.vue';
	import WishlistButton from  '@/components/Wishlist/WishlistButton/WishlistButton.vue';
	import ProductCount from  '@/components/Product/ProductCount/ProductCount.vue';
	import WishlistCount from  '@/components/Wishlist/WishlistCount/WishlistCount.vue';

</script>

<style scoped lang="scss">
	@import '@/assets/stylesheet/helpers/variables.scss';

	nav {
		ul {
			display: flex;
			gap: 2rem;
			list-style: none;
			padding: 0;
			li {
				a {
					display: block;
					text-decoration: none;
					color: $black;
					font-weight: 500;
				}
			}
		}
	}

	.icon-wrap {
		display: flex;
    gap: 0.5rem;
	}
</style>
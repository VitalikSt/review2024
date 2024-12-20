import CatalogPage from '@/pages/catalog/index.vue';
import WishlistPage from '@/pages/wishlist/index.vue';
import ShoppingCartPage from '@/pages/cart/index.vue';

const NAVIGATION_ROUTES = [
	{
		name: 'Catalog',
		path: '/catalog',
		component: CatalogPage,
	},
	{
		name: '',
		path: '/wishlist',
		wishlist: 'wishlist-icon',
		component: WishlistPage,
	},
	{
		name: '',
		path: '/cart',
		cart: 'cart-icon',
		component: ShoppingCartPage,
	},
];

 export default NAVIGATION_ROUTES;
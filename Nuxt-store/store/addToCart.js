import { defineStore } from 'pinia';

export const useAddToCart = defineStore('cart', {
	state() {
    return {
      cartStore: [],
    };
  },
	getters: {
    count() {
      return this.cartStore.length;
    }
  },
  actions: {
		initialize() {
      if (typeof localStorage !== 'undefined') {
        const storedData = localStorage.getItem("cartStore");
        if (storedData) {
          this.cartStore = JSON.parse(storedData);
        }
      }
    },
    add(product) {
			const isDuplicate = this.cartStore.some(item => item.id === product.id);

      if (isDuplicate) {
        alert("Product with the same ID is already in the cart.");
      } else {
				this.cartStore.push(product);
        localStorage.setItem("cartStore", JSON.stringify(this.cartStore));
				alert("Product added to cart: " + product.title);
      }
    },
		remove(product) {
			this.cartStore = this.cartStore.filter(item => item.id !== product.id);
      localStorage.setItem("cartStore", JSON.stringify(this.cartStore));
		}
  },
});

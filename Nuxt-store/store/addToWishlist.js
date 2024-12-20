import { defineStore } from 'pinia';

export const useAddToWishlist = defineStore('wishlist', {
  state() {
    return {
      wishlistStore: [],
    };
  },
  getters: {
    count() {
      return this.wishlistStore.length;
    }
  },
  actions: {
    initialize() {
      if (typeof localStorage !== 'undefined') {
        const storedData = localStorage.getItem("wishlistStore");
        if (storedData) {
          this.wishlistStore = JSON.parse(storedData);
        }
      }
    },
    add(product) {
      const isDuplicate = this.wishlistStore.some(item => item.id === product.id);

      if (isDuplicate) {
        alert("Product with the same ID is already in the wishlist.");
      } else {
        this.wishlistStore.push(product);
        localStorage.setItem("wishlistStore", JSON.stringify(this.wishlistStore));
        alert("Product added to wishlist: " + product.title);
      }
    },
		remove(product) {
			this.wishlistStore = this.wishlistStore.filter(item => item.id !== product.id);
      localStorage.setItem("wishlistStore", JSON.stringify(this.wishlistStore));
		}
  },
});

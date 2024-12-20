<template>
	<aside>
		<h3>SideBar</h3>
		<div class="sidebar-controls">
			<template v-if="isLoading">
          <strong>Loading...</strong>
        </template>
			<template v-for="category  in categoriesData" :key="category">
				<SideBarControls :categories="[category]" :selectCategoryFunc="selectCategoryFunc"/>
			</template>
		</div>
	</aside>
</template>

<script setup>
	import { ref, reactive, onMounted } from 'vue';
	import SideBarControls from '@/components/SideBar/components/SidebarControls.vue';

	const props = defineProps({
		selectCategoryFunc: Function
	});

	const categoriesData = reactive([]);
	const isLoading = ref(true);

	const fetchCategories = async () => {
		try {
			const response = await fetch('https://fakestoreapi.com/products/categories');
			const json = await response.json();
			categoriesData.push(...json);
		} catch(e) {
			console.log('Error', error);
		} finally {
      isLoading.value = false; 
    }
	};

	onMounted(fetchCategories);
</script>
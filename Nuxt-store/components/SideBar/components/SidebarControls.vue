<template>
	<Label :for="categories[0]">
		<Checkbox :id="categories[0]" @click="selectCategoryFunc(categories[0])"/>
		<span>{{ categories[0] }}</span>
	</Label>
</template>

<script setup>
	import Checkbox from '@/components/UI/Checkbox/Checkbox.vue';
	import Label from '@/components/UI/Label/Label.vue';

	const props = defineProps({
		categories: Array,
		selectCategoryFunc: Function
	});

</script>


<style scoped lang="scss">
	@import './style.scss';
</style>
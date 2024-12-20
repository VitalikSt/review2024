<template>
  <div class="quantity">
    <Button @click="increment">+</Button>
    <Input readonly :value="quantityValue" />
    <Button @click="decrement">-</Button>
  </div>
</template>

<script setup>
	import { ref, watch } from 'vue';
	import Input from '@/components/UI/Input/Input.vue';
	import Button from '@/components/UI/Buttons/Buttons.vue';

	const props = defineProps({
		modelValue: {
			type: Number,
			required: true
		}
	});

	const emit = defineEmits(['update:modelValue']);

	const quantityValue = ref(props.modelValue);

	watch(quantityValue, (newValue) => {
		emit('update:modelValue', newValue);
	});

	const increment = () => {
		quantityValue.value += 1;
	};

	const decrement = () => {
		if (quantityValue.value > 1) {
			quantityValue.value -= 1;
		}
	};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>

<template>
	<footer>
		<Container>
			<NuxtLink to="/">
				<LogoIcon :width="100" :height="100" />
			</NuxtLink>
			<h3>Footer</h3>
		</Container>
	</footer>
</template>

<script setup>
	import Container from '@/components/_common/Container/Container.vue';
	import LogoIcon from  '@/components/_icons/Logo.vue';
</script>

<style scoped lang="scss">
	@import './style.scss'
</style>
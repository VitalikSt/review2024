<template>
	<header>
		<Container>
			<div class="col-1">
				<NuxtLink to="/">
					<LogoIcon :width="100" :height="100" />
				</NuxtLink>
			</div>
			<div class="col-2">
				<Navigation />
			</div>
		</Container>
	</header>
</template>

<script setup>
	import Navigation from '@/components/Header/components/Navigation/Navigation.vue';
	import Container from '@/components/_common/Container/Container.vue';
	import LogoIcon from  '@/components/_icons/Logo.vue';
</script>


<style scoped lang="scss">
	@import './style.scss';
</style>

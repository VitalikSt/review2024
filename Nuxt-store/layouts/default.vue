<template>
  <div id="wrapper">
    <Header />
			<main>
				<NuxtPage />
			</main>
		<Footer />
  </div>
</template>

<script setup>
	import Header from '@/components/Header/index.vue';
	import Footer from '@/components/Footer/index.vue';
</script>
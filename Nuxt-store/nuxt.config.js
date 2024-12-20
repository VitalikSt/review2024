export default defineNuxtConfig({
 devtools: { enabled: true },

 app: {
   head: {
     htmlAttrs: { 
       lang: 'uk', 
     },
     meta: [
       { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0' },
     ],
     link: [
       { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'images/favicon.png' },
     ],
     title: 'Nuxt App',
   },
 },

 css: [
   '@/assets/stylesheet/styles.scss',
 ],

 modules: [
   "@nuxt/image",
   '@pinia/nuxt',
 ],

 pinia: {
	storesDirs: ['./store/**'],
},

 compatibilityDate: '2024-07-06',
});
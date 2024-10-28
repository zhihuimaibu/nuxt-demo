<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage/>
    <AppAlert>
      auto imported components
    </AppAlert>
  </div>
</template>

<script setup>
  const layout = "custom"
  useHead({
    title: 'My Amazing Site',
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
    },
  })

  // useHead({
  //   title: 'Nuxt SSR',
  //   meta: [
  //     {name: 'description', content: 'This is my style'}
  //   ],
  //   bodyAttrs: {
  //     class: 'aaa'
  //   },
  //   script: [{
  //     innerHTML: 'console.log(\'hello world\')'
  //   }]
  // })
  // useSeoMeta({
  //   title: 'My Amazing Site, Thank you very much,sdfs',
  //   ogTitle: 'My Amazing Site',
  //   description: 'This is my amazing site, let me tell you all about it.',
  //   ogDescription: 'This is my amazing site, let me tell you all about it.',
  //   ogImage: 'https://example.com/image.png',
  //   twitterCard: 'summary_large_image',
  // })
</script>
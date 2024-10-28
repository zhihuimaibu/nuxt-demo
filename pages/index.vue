<template>
  <div class="">
    <ul>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/posts/1">Post1</NuxtLink></li>
      <li><NuxtLink to="/posts/2" >Post2</NuxtLink></li>
      <li><NuxtLink to="/dashboard">dashboard</NuxtLink></li>
    </ul>
    <button @click="handleClick">{{ a }}</button>
    <h1>{{ data }}-000</h1>
    <Html lang="en">
      <Head>
        <Title>page1</Title>
        <Meta name="description" content="`My page's description`" />
      </Head>
    </Html>
  </div>
</template>

<script setup>
 const a = ref(45)
 function handleClick() {
  a.value++
 }
//  const {data} =await useFetch('/api/hello')
</script>
<style scoped>
</style>
function isAuthenticated() { return true }
// ---cut---
export default defineNuxtRouteMiddleware((to, from) => {
  if (isAuthenticated() === false) {
    return navigateTo('/bms/login')
  }
})



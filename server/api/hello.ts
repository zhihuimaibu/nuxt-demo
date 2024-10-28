export default defineEventHandler(async (event) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        hello: 'world'
      })
    }, 5000)
  })
})
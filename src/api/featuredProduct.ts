export const getFeaturedProducts = async () => {
  try {
    return await (await fetch('https://dummyjson.com/products')).json();
  } catch (error) {
    console.error(`Error fetching featured product: `, error)
  }
}
const nome = document.getElementById("category-name").value
const sku = document.getElementById("category-code").value
const button = document.getElementById("category-button")

button.onclick = async function createCategory() {
  try {
    return await axios.post('http://localhost:3333/categories/create',{
        nome,
        sku,
      })
    } catch (error) {
      console.error(error)
    }
}

async function listCategories() {
  try {
    return await axios.get('http://localhost:3333/categories/get')
  } catch (error) {
    console.error(error)
  }
}
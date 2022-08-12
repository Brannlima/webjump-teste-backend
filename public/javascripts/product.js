const sku = document.getElementById("sku").value
const nome = document.getElementById("name").value
const preco = document.getElementById("price").value
const quantidade = document.getElementById("quantity").value
const categoria = document.getElementById("category").value
const descricao = document.getElementById("description").value
const button = document.getElementById("product-button")

button.onclick = async function createProduct() {
  try {
    return await axios.post('http://localhost:3333/products/create',{
        nome,
        sku,
        preco,
        quantidade,
        categoria,
        descricao,
      })
    } catch (error) {
      console.error(error)
    }
}

const listProducts = async () => {
  try {
    return await axios.get('http://localhost:3333/products/get')
  } catch (error) {
    console.error(error)
  }
}
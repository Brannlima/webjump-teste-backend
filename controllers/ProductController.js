const Categoria = require('../models/CategoryModel');
const Produto = require('../models/ProductModel');

module.exports = {
  async renderProduct(req, res) {
    res.render('products');
  },

  async renderAddProduct(req, res) {
    res.render('addProduct');
  },

  async getAll(req, res){
    const products = await Produto.findAll({
      include:['categoria']
    });

    return res.json(products);
  },

  async getOne(req, res){
    const products = await Produto.findOne({
      include: ['categoria'],
      where: {
        id: req.params.id
      }
    });

    return res.json(products);
  },

  async createProduct(req, res){
    const {nome, sku, preco, descricao, quantidade, category_id} = req.body;

    const category = await Categoria.findOne({
      where:{
        id: category_id
      }
    });

    if(!category) return res.status(400).json({error: 'Categoria não cadastrada.'});

    const product = await Produto.create({
      nome,
      sku,
      preco,
      descricao,
      quantidade,
      category_id
    });

    return res.json(product);
  },

  async updateProduct(req, res){
    const updated = await Produto.update(
      req.body, 
      {
        where: {
          id: req.params.id
        }
      }
    );
    
    return res.json(updated);
  },

  async deleteProduct(req, res){
    await Produto.destroy({
      where: {id: req.params.id}
    });

    res.json('Produto excluído com sucesso');
  }
};

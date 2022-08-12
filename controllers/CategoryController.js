const Category = require('../models/CategoryModel');

module.exports = {
  async renderCategory(req, res) {
    res.render('categories');
  },

  async renderAddCategory(req, res) {
    res.render('addCategory');
  },

  async getAll(req, res){
    const categories = await Category.findAll();

    return res.json(categories);
  },

  async getOne(req, res){
    const category = await Category.findOne({
      where: {
        id: req.params.id
      }
    });

    return res.json(category);
  },

  async createCategory(req, res){
    const {nome, sku} = req.body;

    console.log(req.body);

    const categoria = await Category.create({
      nome,
      sku
    });

    return res.json(categoria);
  },

  async updateCategory(req, res){
    const updated = await Category.update(
      req.body, 
      {
        where: {
          id: req.params.id
        }
      }
    );
    
    return res.json(updated);
  },

  async deleteCategory(req, res){
    try {
      await Category.destroy({
        where: {id: req.params.id}
      });

      return res.json('Categoria excluído com sucesso');
    } catch (error) {
      return res.json(error);
    }
  }
};

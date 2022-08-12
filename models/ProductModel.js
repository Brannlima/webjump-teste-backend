const { Model, DataTypes } = require('sequelize');
const Categoria = require('./CategoryModel');

class Produto extends Model {
	static init (sequelize){
		super.init({
			nome: DataTypes.STRING,
			sku: DataTypes.STRING,
      preco: DataTypes.DOUBLE,
      descricao: DataTypes.STRING,
      quantidade: DataTypes.INTEGER,

			category_id: {
				type: DataTypes.INTEGER,

				model: Categoria,
				key: 'id'
			}
		},
		{
			sequelize,
		})
	}

	static associate(models) {
    this.belongsTo(models.Categoria, { foreignKey: 'category_id', as: 'categoria' });
  }
}
 
module.exports = Produto;

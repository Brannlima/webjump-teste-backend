const { Model, DataTypes } = require('sequelize');

class Categoria extends Model {
	static init (sequelize){
		super.init({
			nome: DataTypes.STRING,
			sku: DataTypes.STRING,
		},
		{
			sequelize
		})
	}

	static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'products_id', as: 'product' });
  }
}
 
module.exports = Categoria;

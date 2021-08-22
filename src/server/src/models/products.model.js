import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Product extends Model {
		static associate(models) {
			this.belongsTo(models.Category);
			this.hasMany(models.WorkAsset, { as: 'assets'});
		}
	}

	Product.init(
		{
			title: DataTypes.STRING,
      brand: DataTypes.STRING,
			description: DataTypes.TEXT,
      price: DataTypes.NUMBER,
      tag: DataTypes.TEXT,
      synopsis: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Products',
		},
	);

	return Product;
};

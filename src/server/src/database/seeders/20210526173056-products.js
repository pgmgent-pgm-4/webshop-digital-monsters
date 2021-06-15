// import/no-extraneous-dependencies
import 'babel-polyfill';

import database from '..';

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.Products.tableName,
			[
				{
          title: "Playstation",
          brand: "Sony",
          description: "Playstation",
          ProductImage: "../../../../client/assets/media/playstation.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.Products.tableName, null, {});
	},
};

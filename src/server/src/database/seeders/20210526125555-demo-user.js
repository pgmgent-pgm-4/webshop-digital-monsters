import faker from 'faker'
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // /**
    //  * Add seed commands here.
    //  *
    //  * Example:
    //  * await queryInterface.bulkInsert('People', [{
    //  *   name: 'John Doe',
    //  *   isBetaMember: false
    //  * }], {});
    // */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


// import/no-extraneous-dependencies
import 'babel-polyfill';

import database from '..';

export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			database.Users,
			[
				{
					userName: faker.internet.userName(),
					password: faker.internet.password(),
					email: faker.internet.email(),
          createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(database.Users.tableName, null, {});
	},
};

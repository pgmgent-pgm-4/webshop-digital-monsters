import { handleHTTPError } from '../../utils';
import database from '../../database';

/*
Get all users
*/
const getUsers = async (req, res, next) => {
	try {
		// Get products from database
		const users = await database.Users.findAll();
		// Send response
		res.status(200).json(users);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific Users
*/
const getUsersById = async (req, res, next) => {
	try {
		// Get productId parameter
		const { id } = req.params;
		// Get specific product from database
		const users = await database.Users.findAll({
			where: {
				id: id,
			},
		});
		// Send response
		res.status(200).json(users);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a specific Users
*/
const createUsers = async (req, res, next) => {
	try {
		// Get body from response
		const model = req.body;
		// Create a post
		const users = await database.Users.create(model);
    console.log(users)
		// Send response
		res.status(201).json(users);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a specific product
*/
const updateUsers = async (req, res, next) => {
	try {
		// Get categoryId parameter
		const { id } = req.params;
		console.log(id);
		// Get specific category from database
		const users = await database.Users.findByPk(id);

		if (users === null) {
			throw new HTTPError(`Could not found the category with id ${id}!`, 404);
		}

		// Update a specific post
		const model = req.body;
		const updatedUsers = await database.Users.update(model, {
			where: {
				id: id,
			},
		});

		// Send response
		res.status(200).json(updatedUsers);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a specific Users
*/
const deleteUsers = async (req, res, next) => {
	try {
		// Get productId parameter
		const { id } = req.params;
		// Get specific product from database
		const users = await database.Users.findByPk(id);

		if (users === null) {
			throw new HTTPError(`Could not found the category with id ${id}!`, 404);
		}

		// Delete a product with specified id
		const message = await database.Users.destroy({
			where: {
				id: id,
			},
		});

		// Send response
		res.status(200).json(message);
	} catch (error) {
		handleHTTPError(error, next);
	}
};
export { getUsersById, getUsers, createUsers, updateUsers, deleteUsers };

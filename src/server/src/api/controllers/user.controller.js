import { handleHTTPError } from '../../utils';
import database from '../../database';

/*
Get all products
*/
const getUsers = async (req, res, next) => {
	try {
		// Get products from database
		const users = await database.Products.findAll();
		// Send response
		res.status(200).json(products);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific product
*/
const getProductById = async (req, res, next) => {
	try {
		// Get productId parameter
		const { productId } = req.params;
		// Get specific product from database
		const product = await database.Products.findAll({
			where: {
				id: productId,
			},
		});
		// Send response
		res.status(200).json(product);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a specific product
*/
const createProduct = async (req, res, next) => {
	try {
		// Get body from response
		const model = req.body;
		// Create a post
		const product = await database.Products.create(model);
		// Send response
		res.status(201).json(product);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a specific product
*/
const updateProduct = async (req, res, next) => {
	try {
		// Get categoryId parameter
		const { productId } = req.params;
		console.log(productId);
		// Get specific category from database
		const product = await database.Products.findByPk(productId);

		if (product === null) {
			throw new HTTPError(`Could not found the category with id ${productId}!`, 404);
		}

		// Update a specific post
		const model = req.body;
		const updatedProduct = await database.Products.update(model, {
			where: {
				id: productId,
			},
		});

		// Send response
		res.status(200).json(updatedProduct);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a specific product
*/
const deleteProduct = async (req, res, next) => {
	try {
		// Get productId parameter
		const { productId } = req.params;
		// Get specific product from database
		const product = await database.Products.findByPk(productId);

		if (product === null) {
			throw new HTTPError(`Could not found the category with id ${productId}!`, 404);
		}

		// Delete a product with specified id
		const message = await database.Products.destroy({
			where: {
				id: productId,
			},
		});

		// Send response
		res.status(200).json(message);
	} catch (error) {
		handleHTTPError(error, next);
	}
};
export { getProductById, getProducts, createProduct, updateProduct, deleteProduct };

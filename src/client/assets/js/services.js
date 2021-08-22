const PRODUCT_BASE_PATH = 'http://localhost:8080/api';

function ShopApi () {
  this.getProducts = async () => {    
    try {
      const response = await fetch(`${PRODUCT_BASE_PATH}/products`);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.log('An error occured happened', error);
    }
  };

  this.getCategories = async () => {
    try {
      const response = await fetch(`${PRODUCT_BASE_PATH}/categories`);
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.log('An error occured happened', error);
    }
  };
  this.getCategoriesById = async (id) => {
    try {
      const response = await fetch(`${PRODUCT_BASE_PATH}/categories/${id}`);
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.log('An error occured happened', error);
    }
  };

  this.getUsers = async () => {
    try {
      const response = await fetch(`${PRODUCT_BASE_PATH}/users`);
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.log('An error occured happened', error);
    }
  };
}
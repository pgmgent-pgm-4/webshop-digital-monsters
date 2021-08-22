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
}
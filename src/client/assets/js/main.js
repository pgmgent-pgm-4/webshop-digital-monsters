(() => {
  const app = {
    async initialize() {
      console.log('start')
      this.shop = new ShopApi();
      this.products = null;
      this.cacheElements();
      this.eventListener();
      this.fetchProducts();
    },
    cacheElements() {
      console.log('2. Caching the elemnts');
      this.$button = document.querySelector('.hamburger');
      this.$button2 = document.querySelector('.nav');
      this.$getProducts = document.querySelector('.card');
      
    },
    eventListener(){
      this.$button.addEventListener('click', () => this.hamburgerMenu());
      this.$button2.addEventListener('click', () => this.hamburgerMenu());
    },
    hamburgerMenu() {
      let box = document.querySelector('.mobile-nav');
      console.log(box)
      if (box.classList.contains('open')) {
        box.classList.remove('open');
      } else {
        box.classList.add('open');
      }
    },

    async fetchProducts () {
      console.log(this.shop)
      this.products = await this.shop.getProducts();
      this.$getProducts.innerHTML = this.products.map(prod => 
        `
        <h1>${prod.title}</h1>
          <div class="card-info">
              <ul>
                  <li>${prod.description}</li>
              </ul>
          </div>
      <p class="price">€ ${prod.price}</p>
      <p><button>Add to Cart</button></p>
        `
      );
  }
   
  }
  app.initialize();
})();
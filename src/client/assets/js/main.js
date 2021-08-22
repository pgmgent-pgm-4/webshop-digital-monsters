(() => {
  const app = {
    async initialize() {
      console.log('start')
      this.shop = new ShopApi();
      this.products = null;
      this.cacheElements();
      this.eventListener();
      this.fetchProducts();
      this.getCategories();
      this.getCategoriesById();
    },
    cacheElements() {
      console.log('2. Caching the elemnts');
      this.$button = document.querySelector('.hamburger');
      this.$button2 = document.querySelector('.nav');
      this.$getProducts = document.querySelector('.card');
      this.$allCategories = document.querySelector('.cat');
      
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
          <ul class="card-each">
              <div class="card-info">
                <h1>${prod.title}</h1>
                <img src="../media/playstation.png">
                  <strong><li>${prod.tag}</li></strong>
                  <li>${prod.synopsis}</li>
                    <li>${prod.brand}</li>
                    <li>${prod.description}</li>
                    <p class="price">€ ${prod.price}</p>
              </div>
                    <button>Add to Cart</button>
          </ul>
          `
      ).join('');
  },

  async getCategories () {
    this.categories = await this.shop.getCategories();
    this.categoryId = this.categories[0].id;
    this.$allCategories.innerHTML = this.categories.map (category => `
    <ul>
        <li><a class="category" href="#">${category.name}</a></li>
    </ul>
    `).join('');
    this.getCategoriesById(this.categoryId);
    const $categories = document.querySelectorAll('.category')
    $categories.forEach(c => {
      c.addEventListener('click',async (e) => {
        this.categoryId = e.target.dataset.id || e.target.parentNode.dataset.id;
        console.log(this.categoryId)
        this.getReceivedMessagesFromUser(this.categoryId)
      })
    })
  }


}
  app.initialize();
})();
(() => {
  const app = {
    initialize() {
      console.log('1 App started');
      this.cacheElements();
      this.eventListener();
    },
    cacheElements() {
      console.log('2. Caching the elemnts');
      this.$button = document.querySelector('.hamburger');
      this.$button2 = document.querySelector('.mobile-close');
    },
    eventListener(){
      this.$button.addEventListener('click', () => this.hamburgerMenu());
      this.$button2.addEventListener('click', () => this.hamburgerMenu());
    },
    hamburgerMenu() {
      let box = document.querySelector(".mobile-nav")
      console.log(box)
      if (box.classList.contains('open')) {
        box.classList.remove('open');
      } else {
        box.classList.add('open');
      }
    }

  }
  app.initialize();
})();
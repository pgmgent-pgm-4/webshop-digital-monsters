const CARD_API = 'http://localhost:8080/api/products';

(() => {
    const app = {
      initialize() {
        console.log("1. Application started!");
        this.cacheElements();
        this.buildUI();
        this.MenuClickEventListener();
        // this.sidebarClickEventListener();
      },
  
      cacheElements() {
        console.log("2. Chache all exisiting DOM elements!");
        // this.$hamburgermenu = document.querySelector('.hamburgermenu');
        // this.$hambutten = document.querySelector('.hambutten');
        this.$card = document.querySelector('.card-more');
        // this.$ = document.querySelector('.');
        // this.$ = document.querySelector('.');
        // this.$winkelmandjeSidebar = document.querySelector('.winkelmandjeSidebar');
      },
  
      buildUI() {
        console.log("3. Build the user interface!");
        // this.$hamburgermenu.innerHTML = this.createHTMLForNavbar();
        this.$card.innerHTML = this.getDataFromCardAPI();
        // this.$.innerHTML = this.();
        // this.$.innerHTML = this.();
        // this.$winkelmandje.innerHTML = this.sidebarClickEventListener();
      },
  
    //   createHTMLForNavbar() {
    //     console.log("creating HTML for navbar");
    //     let tempStr = '';
  
    //     tempStr +=`<ul>`
    //     hamburgermenu.forEach(hammenu => {
    //       tempStr += `
    //       <li class="hamburgermenu"><a href="${hammenu.link}">${hammenu.name}</a></li>`
    //     });
    //     tempStr += `</ul>`
    //     return tempStr;
    //   },
  
    //   MenuClickEventListener() {
    //     console.log('Menu Click Event Listener');
    //     this.$hambutten.addEventListener('click', (evt) => {
    //       if (this.$hamburgermenu.classList.contains('open')) {
    //         this.$hamburgermenu.classList.remove('open');
    //       } else {
    //         this.$hamburgermenu.classList.add('open');
    //       } 
    //     })
    //   },

    getDataFromCardAPI() {
        fetch(CARD_API, {})
            .then(response => response.json())
            .then(json => this.updateCard(json))
            .catch(error => console.log(error));
      },
  
      updateCard(data) {
        this.$card.innerHTML = data.slice(0,3).map((ca) => {
          return `
          <article class="card-all">
            <div class="card">
              <img src="${ca.img}" alt="">
            </div>
      </article>
            `;
        }).join('');
      },
  
  
      // sidebarClickEventListener() {
      //   console.log('sidebar Click Event Listener');
      //   this.$winkelmandje.addEventListener('click', (evt) => {
      //     if (this.$winkelmandjeSidebar.classList.contains('open')) {
      //       this.$winkelmandjeSidebar.classList.remove('open');
      //     } else {
      //       this.$winkelmandjeSidebar.classList.add('open');
      //     } 
      //   })
      // },
  
    };
    app.initialize();
  })();


                    // <div class="card-text">
                    //   <h1>${ca.}</h1>
                    //       <div class="card-info">
                    //           <ul>
                    //               <li>${ca.}</li>
                    //               <li>${ca.}</li>
                    //               <li>${ca.}</li>
                    //           </ul>
                    //       </div>
                    //   <p class="price">${ca.}</p>
                    //   <button>add Winkel</button>
                    // </div>
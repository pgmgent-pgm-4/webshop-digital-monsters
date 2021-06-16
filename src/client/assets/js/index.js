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
        this.$hamburgermenu = document.querySelector('.hamburgermenu');
        this.$hambutten = document.querySelector('.hambutten');
        // this.$winkelmandje = document.querySelector('.winkelmandje');
        // this.$winkelmandjeSidebar = document.querySelector('.winkelmandjeSidebar');
      },
  
      buildUI() {
        console.log("3. Build the user interface!");
        this.$hamburgermenu.innerHTML = this.createHTMLForNavbar();
        // this.$winkelmandje.innerHTML = this.sidebarClickEventListener();
      },
  
      createHTMLForNavbar() {
        console.log("creating HTML for navbar");
        let tempStr = '';
  
        tempStr +=`<ul>`
        hamburgermenu.forEach(hammenu => {
          tempStr += `
          <li class="hamburgermenu"><a href="${hammenu.link}">${hammenu.name}</a></li>`
        });
        tempStr += `</ul>`
        return tempStr;
      },
  
      MenuClickEventListener() {
        console.log('Menu Click Event Listener');
        this.$hambutten.addEventListener('click', (evt) => {
          if (this.$hamburgermenu.classList.contains('open')) {
            this.$hamburgermenu.classList.remove('open');
          } else {
            this.$hamburgermenu.classList.add('open');
          } 
        })
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
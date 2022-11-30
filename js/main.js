window.onload = function () {
  let url = document.location.pathname;

  //INDEX.HTML START
  if (url == "/" || url == "/index.html") {
    // OnClick hamburger transform
    const hamburger = document.querySelector(".hamburger-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("menu-active");
    });

    // OnClick opens mobile navigation
    const nav_menu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
      nav_menu.classList.toggle("mobile-nav");
    });

    // Dynamic navigation active links
    const navigation = document.querySelectorAll(".navigation a");

    navigation.forEach((link) => {
      if (link.href.includes(`${url}`)) {
        link.classList.add("active-link");
      }
    });

    //Stats counting animation
    let numberStats = document.querySelectorAll(".number-stats");
    const intervalStats = 4000;

    numberStats.forEach((number) => {
      let numberStart = 0;
      let numberEnd = parseInt(number.getAttribute("data-val"));
      let durationStats = Math.floor(intervalStats / numberEnd);
      let counter = setInterval(() => {
        numberStart += 1;
        number.innerHTML = numberStart + "+";
        if (numberStart == numberEnd) {
          clearInterval(counter);
        }
      }, durationStats);
    });

    //Filter by destination (Kada korisnik izabere neku drzavu, prikazuju mu se svi gradovi iz iste)
    let filterSelectAll = document.querySelector("#filterSelect"); //Ceo select
    let cardsAll = document.querySelectorAll(".recommended-card"); //Sve kartice

    filterSelectAll.addEventListener("change", () => {
      let selectedCategory =
        filterSelectAll.options[filterSelectAll.selectedIndex].value; //Value izabranog option-a
      cardsAll.forEach((card) => {
        //Prolazak petljom kroz sve kartice, skidanje dispay:block na pocetku i postavljanje display:block po uslovu, ako je potrebno
        card.classList.remove("show-card");
        let cardCategory = card.getAttribute("data-category"); //uzimanje atributa data-category trenutne kartice
        if (selectedCategory == "0") {
          card.classList.add("show-card");
        } else if (cardCategory.includes(selectedCategory)) {
          card.classList.add("show-card");
        }
      });
    });

    // Testimonials changing text

    let passengerTexts = document.querySelectorAll(".passenger-text"); //niz svih tekstova

    let passengerIconAll = document.querySelectorAll(".passenger-icon"); //niz svih ikonica

    passengerIconAll.forEach((iconAll, iconIndex) => {
      iconAll.addEventListener("click", () => {
        passengerTexts.forEach((text) => {
          text.classList.remove("active-text"); //skidamo klasu kad se klikne sa svih tekstova
        });
        passengerIconAll.forEach((icon) => {
          icon.classList.remove("active-icon"); //skidamo klasu kad se klikne sa svih slika
        });
        iconAll.classList.add("active-icon"); //dodajemo klasu ikonici na koju je kliknuto
        passengerTexts[iconIndex].classList.add("active-text"); //dodajemo klasu tekstu da bude vidljiv u odnosu na to, koja je ikonica aktivna
      });
    });
  }
  //INDEX.HTML END
  //CONTACT.HTML START
  else if (url == "/contact.html") {
    // Dynamic navigation active links
    const navigation = document.querySelectorAll(".navigation a");
    navigation.forEach((link) => {
      if (link.href.includes(`${url}`)) {
        link.classList.add("active-link");
      }
    });
  }
  //CONTACT.HTML END
  //ABOUT-US.HTML START
  else if (url == "/about-us.html") {
    // Dynamic navigation active links
    const navigation = document.querySelectorAll(".navigation a");
    navigation.forEach((link) => {
      if (link.href.includes(`${url}`)) {
        link.classList.add("active-link");
      }
    });
  }
  //ABOUT-US.HTML END
  //AUTHOR.HTML START
  else {
    // Dynamic navigation active links
    const navigation = document.querySelectorAll(".navigation a");
    navigation.forEach((link) => {
      if (link.href.includes(`${url}`)) {
        link.classList.add("active-link");
      }
    });
  }
  //AUTHOR.HTML END
};

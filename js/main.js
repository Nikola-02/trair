$(document).ready(() => {
  let url = window.location.pathname;
  
  //Function for dynamic active links
  function DynamicActiveLinks() {
    let navigation = document.querySelectorAll(".navigation a");
    navigation.forEach((link) => {
      if (link.href.includes(`${url}`)) {
        link.classList.add("active-link");
      }
    });
  }

  // OnClick opens mobile navigation
  let nav_menu = document.querySelector(".nav-menu");
  let hamburger = document.querySelector(".hamburger-menu");

  function OpenMobile(){
    hamburger.addEventListener("click", () => {
      nav_menu.classList.toggle("mobile-nav");
    });
  }

  // OnClick hamburger transform
  function HamburgerAnimation(){
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("menu-active");
    });
  }

  //INDEX.HTML START
  if (url == "/" || url.includes("/index.html")) {
    
    //Mobile nav opening
    OpenMobile();

    //Hamburger menu
    HamburgerAnimation();

    //Navigation active links

    let navigation = document.querySelectorAll(".navigation a");
    navigation[0].classList.add("active-link");

    //About us changing images

    $("#about-us-img").hover(function() {
      $(this).find("img:eq(1)").stop(true,true).fadeIn();
    }, function() {
      $(this).find("img:eq(1)").fadeOut();
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

    //MODAL
    //modal appearing

    let modal=document.querySelector(".modal");
    let modal_timer=document.querySelector(".modal_timer");
    function ShowModal(){
      modal_timer.classList.add("showModalTimer");
      modal.classList.add("darkscale");
    }
    setTimeout(ShowModal, 5200);

    //modal timer
    let modal_date = new Date("2022/12/31 23:59:59").getTime();

    let modal_Interval_timer = setInterval(()=>{
      let timer_show_span = document.getElementById("timer-show");
      let modal_now_date = new Date().getTime();

      let modal_difference = modal_date - modal_now_date;

      let modal_hours = Math.floor((modal_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let modal_minutes = Math.floor((modal_difference % (1000 * 60 * 60)) / (1000 * 60));
      let modal_seconds = Math.floor((modal_difference % (1000 * 60)) / 1000);

      timer_show_span.innerHTML = modal_hours + "h "+ modal_minutes + "m " + modal_seconds + "s ";

      if (modal_difference < 0) {
        clearInterval(modal_Interval_timer);
        timer_show_span.innerHTML = "I am sorry, you are late";
      }
    }, 1000);

    //onClick closing modal
    let modal_close=document.getElementById("modal-close");

    modal_close.addEventListener("click",()=>{
      modal.classList.add("hideModal");
      modal_timer.classList.add("hideModalTimer");
    });

    modal.addEventListener("click",()=>{
      modal.classList.add("hideModal");
      modal_timer.classList.add("hideModalTimer");
    });
      
    //SCROLL TO TOP
    let scrollToTop=$(".scroll-to-top");
    $(window).scroll(()=>{
      let scrolledOnPage = $(this).scrollTop();
      if(scrolledOnPage>400){
        $(scrollToTop).fadeIn(500);
      }
      else{
        $(scrollToTop).fadeOut(500);
      }
    });

    $(scrollToTop).on("click", $(scrollToTop), ()=>{
      $("html").animate({
        scrollTop:0
      },1000);
    });
  }
  //INDEX.HTML END
  //CONTACT.HTML START
  else if (url.includes("/contact.html")) {

    //Mobile nav opening
    OpenMobile();

    //Hamburger menu
    HamburgerAnimation();

    // Dynamic navigation active links
    DynamicActiveLinks();

    //FORM VALIDATION

    //USERNAME
    let usernameForm = document.getElementById("username-form");
    let usernameError = document.querySelector(".usernameError");
    let reUsername = /^[a-z]{3,10}(\.[a-z0-9]+)+$/;
    function ProveraUsername() {
      if (!reUsername.test(usernameForm.value)) {
        usernameError.classList.add("showError");
        usernameError.innerHTML =
          "Format of this field is not valid. Example: pera.peric123";
        usernameForm.classList.add("red-border");
      } else {
        usernameError.classList.remove("showError");
        usernameForm.classList.remove("red-border");
      }
    }
    usernameForm.addEventListener("keyup", ProveraUsername);
    usernameForm.addEventListener("blur", ProveraUsername);

    //EMAIL
    let emailForm = document.getElementById("email-form");
    let emailError = document.querySelector(".emailError");
    let reEmail =
      /^[a-z0-9]{3,}([\.][a-z0-9\-\$\*\_]+)*[\@](gmail.com|yahoo.com)$/;
    function ProveraEmail() {
      if (!reEmail.test(emailForm.value)) {
        emailError.classList.add("showError");
        emailError.innerHTML =
          "Format of this field is not valid. Example: peraperic123@gmail.com or @yahoo.com";
        emailForm.classList.add("red-border");
      } else {
        emailError.classList.remove("showError");
        emailForm.classList.remove("red-border");
      }
    }
    emailForm.addEventListener("keyup", ProveraEmail);
    emailForm.addEventListener("blur", ProveraEmail);

    //RADIO BUTTONS
    let radioButtonsDiv=document.querySelector("#radio-buttons");
    let radiosForm = document.form1.radioButtonForm;
    let radioError = document.querySelector(".radioError");
    let radios_valid = false;
    function ProveraRadioButtons(){
      radios_valid = false;
      radiosForm.forEach((radio) => {
        if(radio.checked){
          radios_valid = true;
        }
        if(!radios_valid){
          radioError.classList.add("showError");
          radioError.innerHTML =
          "You have to choose one option.";
          radioButtonsDiv.classList.add("red-border");
        }
        else{
          radioError.classList.remove("showError");
          radioButtonsDiv.classList.remove("red-border");
        }
      });
    }
    radioButtonsDiv.addEventListener("change", ProveraRadioButtons);

    //CHECK BOXES
    let checkBoxesDiv=document.querySelector("#check-boxes");
    let chBoxesForm = document.querySelectorAll(".checkBoxes");
    let checkBoxError = document.querySelector(".checkBoxError");
    let chBox_valid = 0;
    function ProveraCheckBoxes(){
      chBox_valid = 0;
      chBoxesForm.forEach((chBox) => {
        if(chBox.checked){
          chBox_valid +=1;
        }
        if(!chBox_valid){
          checkBoxError.classList.add("showError");
          checkBoxError.innerHTML =
          "You have to choose at least one option.";
          checkBoxesDiv.classList.add("red-border");
        }
        else{
          checkBoxError.classList.remove("showError");
          checkBoxesDiv.classList.remove("red-border");
        }
      });
    }
    checkBoxesDiv.addEventListener("change", ProveraCheckBoxes);

    //DROPDOWN LIST
    let ddlSelectForm = document.getElementById("ddlForm");
    let ddlError = document.querySelector(".ddlError");

    function ProveraDLL(){
      ddl_valid = "";
      if((ddlSelectForm.options[ddlSelectForm.selectedIndex].value)=="0"){
        ddlError.classList.add("showError");
        ddlError.innerHTML =
          "You have to choose one agent.";
      }
      else{
        ddlError.classList.remove("showError");
      }
    }
    ddlSelectForm.addEventListener("change", ProveraDLL);

    //BUTTON
    btnForm = document.getElementById("btnForm");
    btnSuccess = document.querySelector(".btnSuccess");
    btnForm.addEventListener("click", () => {
      ProveraUsername();
      ProveraEmail();
      ProveraRadioButtons();
      ProveraCheckBoxes();
      ProveraDLL();
      if (
        reUsername.test(usernameForm.value) &&
        reEmail.test(emailForm.value) && radios_valid 
        && chBox_valid && !((ddlSelectForm.options[ddlSelectForm.selectedIndex].value)=="0")
      ) {
        btnSuccess.classList.add("showError");
        btnSuccess.innerHTML = "We will answer you, as soon as possible!";
      } else {
        btnSuccess.classList.remove("showError");
      }
    });
  }
  //CONTACT.HTML END

  //ABOUT-US.HTML START
  else if (url.includes("/about-us.html")) {

    //Mobile nav opening
    OpenMobile();

    //Hamburger menu
    HamburgerAnimation();

    // Dynamic navigation active links
    DynamicActiveLinks();

    // Read more jQuery
    let click_number=0;
    let readMoreBtn=$("#read-more-btn");
    $(readMoreBtn).on("click", (event)=>{
      event.preventDefault();

      if(click_number%2==0){
        $("#added-about-us").slideDown();
        $(readMoreBtn).html("Show less");
      }
      else{
        $("#added-about-us").slideUp();
        $(readMoreBtn).html("Read more");
      }
      click_number++;
    });
  }
  //ABOUT-US.HTML END

  //AUTHOR.HTML START
  else if (url.includes("/author.html")) {

    //Mobile nav opening
    OpenMobile();

    //Hamburger menu
    HamburgerAnimation();

    // Dynamic navigation active links
    DynamicActiveLinks();
  }
  //AUTHOR.HTML END
});

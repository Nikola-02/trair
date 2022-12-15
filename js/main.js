$(document).ready(() => {
  let url = window.location.pathname;
  

  //Dynamic function for every navigation
  function NavigationIspis(klasaZaIspis){
    let navLink=["index.html", "contact.html", "about-us.html", "author.html"];
    let navText=["Home", "Contact", "About us", "Author"];
    let ispisNav="<ul>";
    for(let i=0;i<navLink.length;i++){
      ispisNav+=`<li>
                    <a href="${navLink[i]}">${navText[i]}</a>
                 </li>`;
    }
    ispisNav+="</ul>";
    document.querySelector(`${klasaZaIspis}`).innerHTML=ispisNav;
  }

  //Dynamic navigation header
  NavigationIspis(".navigation");

  //Dynamic Mobile navigation header
  NavigationIspis(".nav-menu");

  //Dynamic footer navigation links
  NavigationIspis(".footer-links");

  //Dynamic footer contact links
  let iconsFooterCenter=["map-pin", "phone", "envelope", "book"];
  let hrefFooterCenter=["https://www.google.com/maps", "tel:+3812049485", "mailto:trair@trair.com", "dokumentacija.pdf"];
  let textFooterCenter=["Strosmajerova 29", "+381204948589", "trair@trair.com", "Documentation"];
  let ispisFooterCenter="";
  for(let i=0;i<iconsFooterCenter.length;i++){
    ispisFooterCenter+=`<div class="footer-center-content">
                  <i class="fa-solid fa-${iconsFooterCenter[i]}"></i>
                  <p><a href="${hrefFooterCenter[i]}" target="_blank">${textFooterCenter[i]}</a></p>
               </div>`;
  }
  document.querySelector(".footer-center").innerHTML=ispisFooterCenter;
          

  //Dynamic footer social links
  let hrefSocial=
  [
    "https://www.instagram.com", 
    "https://www.facebook.com", 
    "https://github.com", 
    "https://www.linkedin.com", 
    "https://twitter.com"
  ];

  let iconsSocial=["square-instagram", "square-facebook", "square-github", "linkedin", "square-twitter"];

  let ispisSocial="<ul>";
  for(let i=0;i<iconsSocial.length;i++){
    ispisSocial+=`<li>
                      <a href="${hrefSocial[i]}">
                         <i class="fa-brands fa-${iconsSocial[i]}"></i>
                      </a>
                  </li>`;
  }
  ispisSocial+="</ul>";
  $(".footer-social").html(ispisSocial);


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
  if (url == "/trair/" || url.includes("/index.html")) {

    //Dynamic counting content
    let countingIcon=["ticket", "face-smile", "user-tie", "plane-up"];
    let countingDataVal=[250, 450, 150, 55];
    let countingText=["Number of flights", "Happy passengers", "Staff number", "Number of planes"];
    let ispisCounting="";

    for(let i=0;i<countingIcon.length;i++){
      ispisCounting+=`<div class="counting-stats">
                        <i class="fa-solid fa-${countingIcon[i]}"></i>
                        <span class="number-stats" data-val="${countingDataVal[i]}">000</span>
                        <span class="text-stats">${countingText[i]}</span>
                      </div>`;
    }
    document.querySelector(".counting-content").innerHTML=ispisCounting; 


    //Dynamic options in select for recommended flights
    let optionRecommendedVal=["0", "quatar", "uk", "turkey", "spain", "france"];
    let optionRecommendedText=["All", "Quatar", "United Kingdoms", "Turkey", "Spain", "France"];
    let optionRecommendedIspis="";

    for(let i=0;i<optionRecommendedVal.length;i++){
      optionRecommendedIspis+=`<option value="${optionRecommendedVal[i]}">${optionRecommendedText[i]}</option>`;
    }
    document.querySelector("#filterSelect").innerHTML=optionRecommendedIspis;


    //Dynamic recommended cards
    let dataCatRecommCard=["quatar", "uk", "turkey", "spain", "france", "spain", "france", "uk", "spain"];
    let imgRecommCard=[
      "doha-card.jpg", 
      "london-card.jpg",
      "istanbul-card.jpg", 
      "madrid-card.jpg", 
      "paris-card.jpg", 
      "catalonia-card.jpg",
      "lyon-card.jpg",
      "liverpool-card.jpg",
      "seville-card.jpg"
    ];

    let destinationAndAltRecommCard=
    [
      "Doha", 
      "London", 
      "Istanbul", 
      "Madrid", 
      "Paris", 
      "Catalonia", 
      "Lyon", 
      "Liverpool", 
      "Seville"
    ];

    let dateOfTravelRecommCard=
    [
      "2022/12/12", 
      "2022/12/15", 
      "2022/12/28", 
      "2023/01/15", 
      "2023/07/14", 
      "2022/12/18", 
      "2022/12/17", 
      "2022/12/20", 
      "2022/12/27"
    ];
    let flightDurationRecommCard=["8h 45min", "4h", "6h 15min", "5h", "6h", "5h 30min", "6h 20min", "3h 45min", "4h 40min"];

    let RecommCardIspis="";
    for(let i=0;i<dataCatRecommCard.length;i++){
      RecommCardIspis+=`<div class="recommended-card show-card" data-category="${dataCatRecommCard[i]}">
                                  <div class="img-card">
                                    <img src="img/${imgRecommCard[i]}" alt="${destinationAndAltRecommCard[i]}"/>
                                  </div>
                                  <div class="content-card">
                                    <p>Destination: <strong>${destinationAndAltRecommCard[i]}</strong></p>
                                    <p>Date of travel: <strong>${dateOfTravelRecommCard[i]}</strong></p>
                                    <p>Flight duration: <strong>${flightDurationRecommCard[i]}</strong></p>
                                  </div>
                               </div>`;
    }
    document.querySelector(".recommended-content").innerHTML=RecommCardIspis;

    //Dynamic Testimonial passenger text
    let classPassengerText=["passenger-text", "passenger-text active-text", "passenger-text"];
    let PassengerText=
    [
      `I had a very pleasant time on the trip. The staff is very kindly
       They are quite fast, I arrived at my destination in no time
       short time, compared to flights of other companies. Service is
       very cheap, worth flying for that price.`,

      `What caught my attention the most on the plane was a room used
       for make-up. I spent a few hours there. They have too many
       things to do on the plane, so you will never be bored. The food
       is excellent, and the flight attendants are very kind and
       polite.`,

       `The quality of the airplane is unsurpassed. I just don't have
        any complaints. Business class is modern, equipped with
        everything you can imagine. It is very comfortable, even on long
        flights you will not feel tired.`
    ];
    let spanPassenger=["MIKE OUSTER, DIRECTOR MONLUX", "ELENA WARSIK, MENAGER LOPX", "JOLAN FOUTS, CEO MEC"];

    let TestimonialsTextIspis="";
    for(let i=0;i<classPassengerText.length;i++){
      TestimonialsTextIspis+=`<div class="${classPassengerText[i]}">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>${PassengerText[i]}</p>
                                <span>${spanPassenger[i]}</span>
                              </div>`;
    }
    document.querySelector(".passenger-content").innerHTML=TestimonialsTextIspis;

    //Dynamic Testimonial passenger icons
    let classPassengerIcons=["passenger-icon", "passenger-icon active-icon", "passenger-icon"];
    let TestimonialsIconsIspis="";
    for(let i=0;i<classPassengerIcons.length;i++){
      TestimonialsIconsIspis+=`<img src="img/passenger-${i+1}.jpg" class="${classPassengerIcons[i]}" alt="Passenger ${i+1}"/>`;
    }
    document.querySelector(".passenger-icons").innerHTML=TestimonialsIconsIspis;


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

    //Dynamic username and email in form
    let elementFormIdAndFor=["username-form", "email-form"];
    let labelNames=["Username", "Email"];
    let typesForm=["text", "email"];
    let placeholdersForm=["pera.peric123", "peraperic123@gmail.com"];
    let errorNamesForm=["usernameError", "emailError"];

    let usernameEmailIspis="";
    for(let i=0;i<elementFormIdAndFor.length;i++){
      usernameEmailIspis+=`<div class="form-div">
                              <label for="${elementFormIdAndFor[i]}" class="label-form label-main">${labelNames[i]}</label>
                              <input
                                type="${typesForm[i]}"
                                id="${elementFormIdAndFor[i]}"
                                placeholder="${placeholdersForm[i]}"
                              />
                              <span class="${errorNamesForm[i]}"></span>
                           </div>`;
    }
    $(usernameEmailIspis).insertBefore(".radio-forma");

    //Dynamic radio buttons
    let radioTexts=["Male", "Female", "Rather not say"];
    let ispisRadio="";
    for(let i=0;i<radioTexts.length;i++){
      ispisRadio+=`<label for="radio${i+1}" class="label-form">${radioTexts[i]}</label>
                        <input
                          type="radio"
                          name="radioButtonForm"
                          id="radio${i+1}"
                        />`
    }
    $("#radio-buttons").html(ispisRadio);

    //Dynamic check boxes
    let chBoxTexts=["Information", "Booking", "Job apply"];
    let ispisChBox="";
    for(let i=0;i<chBoxTexts.length;i++){
      ispisChBox+=`<label for="checkBoxForm${i+1}" class="label-form">${chBoxTexts[i]}</label>
                        <input
                          type="checkbox"
                          name="checkBoxForm${i+1}"
                          class="checkBoxes"
                        />`
    }
    $("#check-boxes").html(ispisChBox);

    //FORM VALIDATION 

    //Functions for validation

    //Username, Email
    function ProveraUserEmail(regex, elemForm, elemError, messageError) {
      if (!regex.test(elemForm.value)) {
        elemError.classList.add("showError");
        elemError.innerHTML = messageError;
        elemForm.classList.add("red-border");
      } else {
        elemError.classList.remove("showError");
        elemForm.classList.remove("red-border");
      }
    }

    //Radio button, check box
    function ProveraRadioCheckBox(typeElement, formElement, formError, formDiv, messageError){
      if(typeElement=="radio"){
        radios_valid=false;
        formElement.forEach((elem) => {
          if(elem.checked){
            radios_valid=true;
          }
          if(!radios_valid){
            formError.classList.add("showError");
            formError.innerHTML = messageError;
            formDiv.classList.add("red-border");
          }
          else{
            formError.classList.remove("showError");
            formDiv.classList.remove("red-border");
          }
        });
      }
      else{
        chBox_valid=false;
        formElement.forEach((elem) => {
          if(elem.checked){
            chBox_valid=true;
          }
          if(!chBox_valid){
            formError.classList.add("showError");
            formError.innerHTML = messageError;
            formDiv.classList.add("red-border");
          }
          else{
            formError.classList.remove("showError");
            formDiv.classList.remove("red-border");
          }
        });
      }
    }

    //USERNAME
    let usernameForm = document.getElementById("username-form");
    let usernameError = document.querySelector(".usernameError");
    let reUsername = /^[a-z]{3,10}(\.[a-z0-9]+)+$/;

    usernameForm.addEventListener("keyup", ()=>{ProveraUserEmail(reUsername, usernameForm, usernameError, "Format of this field is not valid. Example: pera.peric123")});
    usernameForm.addEventListener("blur", ()=>{ProveraUserEmail(reUsername, usernameForm, usernameError, "Format of this field is not valid. Example: pera.peric123")});

    //EMAIL
    let emailForm = document.getElementById("email-form");
    let emailError = document.querySelector(".emailError");
    let reEmail = /^[a-z0-9]{3,}([\.][a-z0-9\-\$\*\_]+)*[\@](gmail.com|yahoo.com)$/;

    emailForm.addEventListener("keyup", ()=>{ProveraUserEmail( reEmail, emailForm, emailError, "Format of this field is not valid. Example: peraperic123@gmail.com or @yahoo.com")});
    emailForm.addEventListener("blur", ()=>{ProveraUserEmail( reEmail, emailForm, emailError, "Format of this field is not valid. Example: peraperic123@gmail.com or @yahoo.com")});

    //RADIO BUTTONS
    let radioButtonsDiv=document.querySelector("#radio-buttons");
    let radiosForm = document.form1.radioButtonForm;
    let radioError = document.querySelector(".radioError");
    let radios_valid=false;
      

    radioButtonsDiv.addEventListener("change", ()=>{ProveraRadioCheckBox("radio", radiosForm, radioError, radioButtonsDiv,"You have to choose one option.")});

    //CHECK BOXES
    let checkBoxesDiv=document.querySelector("#check-boxes");
    let chBoxesForm = document.querySelectorAll(".checkBoxes");
    let checkBoxError = document.querySelector(".checkBoxError");
    let chBox_valid=false;

    checkBoxesDiv.addEventListener("change", ()=>{ProveraRadioCheckBox("checkBox", chBoxesForm, checkBoxError, checkBoxesDiv, "You have to choose at least one option.")});

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
      ProveraUserEmail(reUsername, usernameForm, usernameError, "Format of this field is not valid. Example: pera.peric123");
      ProveraUserEmail(reEmail, emailForm, emailError, "Format of this field is not valid. Example: peraperic123@gmail.com or @yahoo.com");
      ProveraRadioCheckBox(radios_valid, radiosForm, radioError, radioButtonsDiv,"You have to choose one option.");
      ProveraRadioCheckBox(chBox_valid, chBoxesForm, checkBoxError, checkBoxesDiv, "You have to choose at least one option.");
      ProveraDLL();
      if (
        reUsername.test(usernameForm.value) &&
        reEmail.test(emailForm.value) && radios_valid 
        && chBox_valid && !((ddlSelectForm.options[ddlSelectForm.selectedIndex].value)=="0")
      ) {
        btnSuccess.classList.add("showError");
        btnSuccess.innerHTML = "We will answer you, as soon as possible!";
        document.getElementById("form").reset();
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

    //Dynamic about author
    let textSpan=["Ime i prezime:", "Broj indeksa:", "Datum rodjenja:", "Trenutno pohadja:"];
    let textP=[" Nikola Đunisić", " 15/21", " 26-05-2002", " Visoku ICT školu"];
    let ispisAuthor="";
    for(let i=0;i<textSpan.length;i++){
      ispisAuthor+=`<p><span>${textSpan[i]}</span>${textP[i]}</p>`;
    }
    $(".author-text").html(ispisAuthor);
  }
  //AUTHOR.HTML END
});

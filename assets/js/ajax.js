//define the elements used for ajax
const homeButton = document.getElementById('homeButton');
const aboutButton = document.getElementById('aboutButton');
const contactButton = document.getElementById('contactButton');
const bookButton = document.getElementById('bookButton');


const main = document.querySelector('main');
const header = document.querySelector('header');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

function resetActive() 
{
    homeButton.classList.remove("active")
    aboutButton.classList.remove("active");
    contactButton.classList.remove("active");
    bookButton.classList.remove("active");

};

function homePageLoaded()
{
    const heroBookButton = document.getElementById('heroBookButton');

      heroBookButton.addEventListener('click', (event) => {
          event.preventDefault()
          const xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
              if (this.readyState === 4 && this.status === 200) 
              {
                  main.innerHTML = this.responseText;

                  // remove active class from all buttons
                  resetActive();
                  // add active class to homeButton
                  bookButton.classList.add("active");

                  //fix header style
                  header.classList.add('header-inner-pages')

                  //fix main style
                  main.style.marginTop = "50px";
              }
          };
        xhr.open('GET', 'assets/templates/bookingPage.html', true);
        xhr.send();
      });
};


//Fill out mainpage when page loads

const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) 
        {
            main.innerHTML = this.responseText;
            homeButton.classList.add("active")
            
            //fix header style
            header.classList.remove('header-inner-pages')

            //fix main style
            main.style.marginTop = "0px";

            //Load the event listiner for the main page
            homePageLoaded();

        }
    };
  xhr.open('GET', 'assets/templates/mainPage.html', true);
  xhr.send();


//Ajax for when home button is clicked

homeButton.addEventListener('click', (event) => {
    event.preventDefault()
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) 
        {
            main.innerHTML = this.responseText;

            // remove active class from all buttons
            resetActive();
            // add active class to homeButton
            homeButton.classList.add("active");

            //fix header style
            header.classList.remove('header-inner-pages')

            //fix main style
            main.style.marginTop = "0px";

            //Load the event listiner for the main page
            homePageLoaded();

            // If the mobile nav toggle icon is visible, click it to close the navbar
            if (mobileNavToggle.offsetParent !== null) {
                mobileNavToggle.click();
            }
        }
    };
  xhr.open('GET', 'assets/templates/mainPage.html', true);
  xhr.send();
});


//Ajax for when about button is clicked



aboutButton.addEventListener('click', (event) => {
    event.preventDefault()
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) 
        {
            main.innerHTML = this.responseText;

            // remove active class from all buttons
            resetActive();
            // add active class to homeButton
            aboutButton.classList.add("active");

            //fix header style
            header.classList.add('header-inner-pages')

            //fix main style
            main.style.marginTop = "50px";

            // If the mobile nav toggle icon is visible, click it to close the navbar
            if (mobileNavToggle.offsetParent !== null) {
                mobileNavToggle.click();
            }
        }
    };
  xhr.open('GET', 'assets/templates/aboutUsPage.html', true);
  xhr.send();
});


//Ajax for when contact button is clicked

contactButton.addEventListener('click', (event) => {
    event.preventDefault()
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) 
        {
            main.innerHTML = this.responseText;

            // remove active class from all buttons
            resetActive();
            // add active class to homeButton
            contactButton.classList.add("active");

            //fix header style
            header.classList.add('header-inner-pages')

            //fix main style
            main.style.marginTop = "50px";

            // If the mobile nav toggle icon is visible, click it to close the navbar
            if (mobileNavToggle.offsetParent !== null) {
                mobileNavToggle.click();
            }

        }
    };
  xhr.open('GET', 'assets/templates/contactUsPage.html', true);
  xhr.send();
  
});


//Ajax for when book button is clicked

bookButton.addEventListener('click', (event) => {
    event.preventDefault()
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) 
        {
            main.innerHTML = this.responseText;

            // remove active class from all buttons
            resetActive();
            // add active class to homeButton
            bookButton.classList.add("active");

            //fix header style
            header.classList.add('header-inner-pages')

            //fix main style
            main.style.marginTop = "50px";

            // If the mobile nav toggle icon is visible, click it to close the navbar
            if (mobileNavToggle.offsetParent !== null) {
                mobileNavToggle.click();
            }
        }
    };
  xhr.open('GET', 'assets/templates/bookingPage.html', true);
  xhr.send();
});

//Ajax for when the heroBookVutton is clicked

      
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
$(document).ready(function(){
  $(".slider-5").owlCarousel({
      items : 5,
      nav : true,
      navText : [
        '<i class="fa-solid fa-chevron-left bg-light text-secondary border-end rounded-2 px-1 py-3"></i>',
        '<i class="fa-solid fa-chevron-right bg-light text-secondary border-start rounded-2 px-1 py-3"></i>'
      ],
      loop:true,
      checkVisible:false,
  });

  $(".slider-3").owlCarousel({
      items : 3,
      nav : true,
      margin:20 ,
      navText : [
        '<i class="fa-solid fa-chevron-left bg-light text-secondary border-end rounded-2 px-1 py-3"></i>',
        '<i class="fa-solid fa-chevron-right bg-light text-secondary border-start rounded-2 px-1 py-3"></i>'
      ],
      loop:true,
      checkVisible:false,
  });
    $(".slider-8").owlCarousel({
      items : 5,
      nav : true,
       navText : [
        '<i class="fa-solid fa-chevron-left bg-light text-secondary border-end rounded-2 px-1 py-3"></i>',
        '<i class="fa-solid fa-chevron-right bg-light text-secondary border-start rounded-2 px-1 py-3"></i>'
      ],
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause: true,
  });
});

const overlay = document.querySelector(".overlay");
const dropdownButtons = document.querySelectorAll(".dropdown-toggle");

dropdownButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      if (btn.getAttribute("aria-expanded") === "true") {
        overlay.style.display = "block";
        console.log("overlay shown");
      } else {
        overlay.style.display = "none";
        console.log("overlay hidden");
      }
    }, 150);
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  dropdownButtons.forEach((btn) => {
    const dropdown = bootstrap.Dropdown.getInstance(btn);
    if (dropdown) {
      dropdown.hide();
    }
  });
});
$(".slider-5-2").owlCarousel({
      items : 8,
      nav : true,
      margin:10 ,
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause: true,
  });

  window.addEventListener('scroll' , (e)=>{
    console.log('scrolling')
    console.log(e.target.documentElement.scrollTop)
    if(e.target.documentElement.scrollTop > 270){
        let topButton = document.getElementById('topButton')
        topButton.classList.remove('d-none')
    }
    else{
         topButton.classList.add('d-none')
    }
});

const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const newImageSrc = thumbnail.getAttribute('data-large-src');
    mainImage.src = newImageSrc;
  });
});
 const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const formAlert = document.getElementById('formAlert');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  
  function validateName() {
    const pattern = /^[A-Za-z\s\.\-]{5,}$/;
    if (name.value.trim() === "") {
      nameError.textContent = "The field is required.";
      nameError.classList.remove('d-none');
      return false;
    } else if (!pattern.test(name.value.trim())) {
      nameError.textContent = "Name must be at least 5 characters (letters, spaces, . or -).";
      nameError.classList.remove('d-none');
      return false;
    } else {
      nameError.classList.add('d-none');
      return true;
    }
  }

  function validateEmail() {
    const pattern = /^[^ ]+@[^ ]+\.(com|net|org|edu|gov|info|mash)$/i;
    if (email.value.trim() === "") {
      emailError.textContent = "The field is required.";
      emailError.classList.remove('d-none');
      return false;
    } else if (!pattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email (must end with .com, .net, .mash, etc).";
      emailError.classList.remove('d-none');
      return false;
    } else {
      emailError.classList.add('d-none');
      return true;
    }
  }

  function validateSubject() {
    if (subject.value.trim() === "") {
      subjectError.textContent = "The field is required.";
      subjectError.classList.remove('d-none');
      return false;
    } else if (subject.value.trim().length < 10) {
      subjectError.textContent = "Subject must be at least 10 characters.";
      subjectError.classList.remove('d-none');
      return false;
    } else {
      subjectError.classList.add('d-none');
      return true;
    }
  }

  


  name.addEventListener('input', validateName);
  email.addEventListener('input', validateEmail);
  subject.addEventListener('input', validateSubject);
  

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    if (!validateName()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateSubject()) valid = false;
  

    if (!valid) {
      formAlert.classList.remove('d-none');
    } else {
      formAlert.classList.add('d-none');
      alert("Form submitted successfully ✅");
      this.reset();
    }
  });
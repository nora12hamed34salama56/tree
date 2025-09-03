const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
        items : 5,
        nav : true,
        navText : ['<i class="fa-solid fa-chevron-left bg-light text-secondary border border- end rounded-2 px-1 py-3"></i>' , '<i class="fa-solid fa-chevron-right bg-light text-secondary border-start rounded-2  px-1 py-3"></i>'],
        loop:true,
    }
  );
});
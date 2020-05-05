  //smooth scrolling
  var $root = $('html, body');
  $('#navbarID a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function() {
        window.location.hash = href;
      });
    }
    return false;
  });


// hide navbar 
$(function() {
  $('.nav-item a').on('click', function(){ 
      if($('.navbar-toggler').css('display') !='none'){
          $('.navbar-toggler').trigger( "click" );
      }
  });
});

setInterval(function() {
  $('.blink').toggleClass('button-contact-me-color');
}, 1000);


// Projects
const projects = document.querySelector('.projects-container');

// projects
const fetchUrl = './projects.json';
fetch(fetchUrl)
.then(response => response.json())
.then(data => {

// Create Projects
  data.forEach(element => {
    const projectTemplate =
    `<div class="projects-wrapper">
      <a href="#" class="image-link"target="_blank">
        <div class="card">              
          <img src="img/${element.image}" class="card-img" alt="...">              
          <div class="card-img-overlay">
            <h5 class="card-title">${element.projectTitle}</h5>
            <p class="card-text hidden">${element.projectDescription}</p>
          </div>
        </div>
      </a>
    </div>`;
    projects.innerHTML += projectTemplate;
  });
  
  // Animate cards 
  const getCard = document.querySelectorAll('.projects-wrapper');
  const getText = document.querySelectorAll('.card-text');

  // Hide Show project description
  getCard.forEach((element,index) => {
    element.addEventListener('mouseenter', function(){ 
        getText[index].classList.add('show');   
        getText[index].classList.remove('hidden');        
     })
    element.addEventListener('mouseleave', function() {
      getText[index].classList.remove('show');        
      getText[index].classList.add('hidden');        
    })
  })
});




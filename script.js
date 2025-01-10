
document.getElementById('menu-icon').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
  });
  document.addEventListener('click', function (event) {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
  
    if (!event.target.matches('.menu-icon, .menu-icon *') && !event.target.matches('.nav-links, .nav-links *')) {
      navLinks.classList.remove('active');
    }
  });
  const modeToggle = document.getElementById('mode-toggle');
  const body = document.body;
  
  modeToggle.addEventListener('click', function () {
    body.classList.toggle('mode-clair');
    const icon = modeToggle.querySelector('i');
    if (body.classList.contains('mode-clair')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
  
  $('#formulaire-contact').on('submit', function (e) {
    e.preventDefault(); 
    const nom = $('#nom').val();
    const email = $('#email').val();
    const message = $('#message').val();
    console.log('Nom:', nom);
    console.log('Email:', email);
    console.log('Message:', message);
    $('#message-succes').text('Merci, ' + nom + ' ! Votre message a été envoyé avec succès.').fadeIn().delay(3000).fadeOut();
    $(this).trigger('reset');
  });
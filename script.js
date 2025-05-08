document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); 
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  document.querySelectorAll('button[type="submit"], input[type="submit"]').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
  
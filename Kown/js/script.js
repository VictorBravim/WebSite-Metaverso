const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        navbar.style.height = "80px"; // altere o valor aqui para a altura desejada
      } else {
        navbar.style.height = "100px"; // altere o valor aqui para a altura original
      }
    });


    // seleciona todos os links da barra de navegação
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    const sections = document.querySelectorAll('.content div[id]');
    // adiciona um evento de clique a cada link
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault(); // previne o comportamento padrão do link

        // adiciona a classe "active" ao link clicado e remove essa classe de todos os outros links
        navLinks.forEach(navLink => {
          navLink.classList.remove('active');
        });
        link.classList.add('active');

        const sectionId = link.getAttribute('href'); // obtém o id da seção correspondente

        document.querySelector(sectionId).scrollIntoView({ // rola para a seção
          behavior: 'smooth'
        });
      });
    });

    // adiciona um evento de scroll na janela
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      // verifica cada seção para ver se está visível na janela
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
          // adiciona a classe "active" ao link correspondente e remove essa classe de todos os outros links
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
            if (navLink.getAttribute('href') === `#${sectionId}`) {
              navLink.classList.add('active');
            }
          });
        }
      });
    });

    //scroll visible
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    var elements = document.querySelectorAll('.animation');

    function callbackFunc() {
      for (var i = 0; i < elements.length; i++) {
        if (isElementInViewport(elements[i])) {
          elements[i].classList.add("show");
        } else {
          elements[i].classList.remove("show");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    window.addEventListener("resize", callbackFunc);

// Espera a página carregar completamente 
window.addEventListener("load", function () {
  // Remove o preloader 
  document.querySelector(".preloader").style.display = "none";
});
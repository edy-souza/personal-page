document.addEventListener('DOMContentLoaded', function() {
    // Encontrar todos os links internos
    var internalLinks = document.querySelectorAll('a[href^="#"]');
  
    // Adicionar um ouvinte de evento a cada link interno
    internalLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Obter o destino da âncora (o ID da seção)
        var targetId = this.getAttribute('href').substring(1);
  
        // Encontrar o elemento alvo
        var targetElement = document.getElementById(targetId);
  
        // Role suavemente até o elemento alvo
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
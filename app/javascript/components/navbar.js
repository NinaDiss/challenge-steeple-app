const switchActiveLink = () => {
  // Pour chaque lien du menu
  document.querySelectorAll('.main-nav-link').forEach((link) => {
    // Au clic sur un lien du menu
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const activeLink = document.querySelector('.main-nav-link.active')
      // Supprimer la classe active du lien qui possede la classe active
      activeLink.classList.remove('active');
      // Ajouter la classe active au lien clique
      event.currentTarget.classList.add('active');
    });
  });
}

export { switchActiveLink };


const heartIcons = document.querySelectorAll('#heart-icon');


heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener('click', () => {
    const path = heartIcon.querySelector('path');
    const currentFill = path.getAttribute('fill');

    
    if (currentFill === 'white' || currentFill === 'none') {
      path.setAttribute('fill', '#ec7100'); 
    } else {
      path.setAttribute('fill', 'white');  
    }
  });
});

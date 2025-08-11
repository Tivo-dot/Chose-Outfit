javascript
function caricaImmagini(event, categoria) {
  const files = event.target.files;
  const lista = document.getElementById('lista-' + categoria);
  let immagini = JSON.parse(localStorage.getItem('vestiti-' + categoria)) || [];

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const src = e.target.result;
      immagini.push(src);

      const img = document.createElement('img');
      img.src = src;
      img.alt = categoria;
      img.style.width = '80px';
      img.style.height = '80px';
      img.style.objectFit = 'cover';
      img.style.margin = '5px';

      lista.appendChild(img);
      localStorage.setItem('vestiti-' + categoria, JSON.stringify(immagini));
    };
    reader.readAsDataURL(file);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ['superiore', 'inferiore', 'scarpe'].forEach(categoria => {
    const lista = document.getElementById('lista-' + categoria);
    const salvati = JSON.parse(localStorage.getItem('vestiti-' + categoria)) || [];

    salvati.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = categoria;
      img.style.width = '80px';
img.style.height = '80px';
      img.style.objectFit = 'cover';
      img.style.margin = '5px';

      lista.appendChild(img);
    });
  });
});

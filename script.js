javascript
const upload = document.getElementById('upload');
const galleria = document.getElementById('galleria-vestiti');

upload.addEventListener('change', (e) => {
  const files = e.target.files;
  galleria.innerHTML = ''; // Pulisce la galleria
  for (let file of files) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = document.createElement('img');
      img.src = event.target.result;
      galleria.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

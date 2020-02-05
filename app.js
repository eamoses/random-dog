function loader() {
  const loader = document.getElementById('loader');
  const background = document.getElementById('container');
  background.style.opacity = '0.3';
  loader.style.display = 'block';
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const fetchIt = document.getElementById('fetchIt');
    loader.style.display = 'none';
    fetchIt.innerHTML = `
        <img onload='sizeModal()' id='dog-image' src=${data.message}>
    `;
  });
}

function closeModal() {
  const modal = document.getElementById('modal');
  const background = document.getElementById('container');
  const fetchIt = document.getElementById('fetchIt');
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
  modal.style.display = 'none';
  background.style.opacity = '1';
  fetchIt.innerHTML = '';
}

function sizeModal() {
  const dogimg = document.getElementById('dog-image');
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  modal.style.height = dogimg.height;
  modal.style.width = dogimg.width;
}

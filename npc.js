document.addEventListener('DOMContentLoaded', function() {
  var agregarBtn = document.getElementById('agregar-btn');
  var cardContainer = document.getElementById('card-container');
  var cardCount = 0;

  agregarBtn.addEventListener('click', function() {
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="stats">
        <label>Name:</label>
        <input type="text">
      </div>
      <div class="stats">
        <label>Life points:</label>
        <input type="number" value="100">
      </div>
      <div class="stats">
        <label>Step:</label>
        <input type="number" value="10" id="modificar-vida-input">
      </div>
      <div class="btn-container">
        <button class="restar-btn">-</button>
        <span class="vida">100</span>
        <button class="sumar-btn">+</button>
      </div>
    `;

    cardContainer.appendChild(card);
    cardCount++;

    var restarBtn = card.querySelector('.restar-btn');
    var sumarBtn = card.querySelector('.sumar-btn');
    var vidaSpan = card.querySelector('.vida');
    var vidaInput = card.querySelector('input[type="number"]');
    var modificarVidaInput = card.querySelector('#modificar-vida-input');

    restarBtn.addEventListener('click', function() {
      var modificarVida = parseInt(modificarVidaInput.value);
      var vida = parseInt(vidaSpan.textContent);
      vida -= modificarVida;
      vidaSpan.textContent = vida;
      vidaInput.value = vida;
    });

    sumarBtn.addEventListener('click', function() {
      var modificarVida = parseInt(modificarVidaInput.value);
      var vida = parseInt(vidaSpan.textContent);
      vida += modificarVida;
      vidaSpan.textContent = vida;
      vidaInput.value = vida;
    });

    vidaInput.addEventListener('input', function() {
      var vida = parseInt(vidaInput.value);
      vidaSpan.textContent = vida;
    });
  });
});

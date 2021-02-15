// document. (front) 
// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;


//Crinado object para passar como parametro na funcao a baixo (opcoes de manipulacao do mapa)
const options = {
  dragging: false, // arrastando
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// Criando o mapa - Tratando os objetos do leaflet e colocando dentro da minha const map
const map = L.map("mapid", options).setView([lat, lng], 14); //[longitude, latitude, zoom]

// criando e adicionando camada(tileLayer) do OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// criando icone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// adicionando um popup e um icone (marcador)
L.marker([lat, lng], { icon }).addTo(map);

/**Image Gallery */
function selectImage(event) {
  /* event - objeto do tipo event (funcoes proprias)  */

  const button = event.currentTarget; // retorna o alvo atual que esta disparando, no caso o type=button

  console.log(button.children);

  /**Removendo todas as classes "active" */
  const buttonsNoActive = document.querySelectorAll(".images button");
  // console.log("buttonsNoActive = " + buttonsNoActive); // Retorna um Array do tipo NodeList

  // buttonsNoActive.forEach((button) => {button.classList.remove("active");}) // Usando funcao do tipo arrow

  buttonsNoActive.forEach(removeActiveClass);

  function removeActiveClass(button) {
    // button local
    button.classList.remove("active"); // removendo a classe active
  }

  /** Selecionar Imagem clicada */

  const image = button.children[0]; // tipo CollectionHtml pega o filho clicado
  const imageContainer = document.querySelector(".orphanage-details > img");

  /** Atualizar o container da Imagem Visualizada */
  imageContainer.src = image.src;

  /**Atualizar classe active para o button selecionado */

  button.classList.add("active");
  // console.log(button);
}

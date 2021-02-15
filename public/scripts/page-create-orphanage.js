
// Criando o mapa - Tratando os objetos do leaflet e colocando dentro da minha const map 
const map = L.map('mapid').setView([2.8196864,-60.6712085], 15); //[longitude, latitude, zoom] 


// criando e adicionando camada(tileLayer) do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // add contribuidores no mapa
}).addTo(map); 


// criando icone 
const icon = L.icon({

    iconUrl: "/images/map-marker.svg", 
    iconSize: [ 58, 68], 
    iconAnchor: [29, 68], 
   
}); 

let marker; // alteravel a cada clique

// create and add marker 
map.on('click', (event) => {
    const lat = event.latlng.lat; //latitude do clique
    const lng = event.latlng.lng; //longitude do clique 

    //JS passa para o HTML o valor das const 
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker); // && = caso o marker seja true (tenha conteudo), faca o passo seguinte

    //add icon layer 
    marker = L.marker([lat,lng], {icon}).addTo(map);

})

//add photo field 
function addPhotoField(){
    
    // pega o container de photos #images 
    const container = document.querySelector('#images');

    // pega o container para duplicar #new-upload 
    const newUploads = document.querySelectorAll('.new-upload'); // pega todos da classe new-upload 

    // realizar o clone da ultima imagem adicionada 
    const clonedContainer = newUploads[newUploads.length - 1].cloneNode(true); // true - clona todo o conteudo / false - clona o container vazio (<div>) 

    //verificar se o campo esta vazio, if(true), nao adicionar ao container #images
    const input = clonedContainer.children[0]; 

    if(input.value == ""){ return } // return = nao executa mais, como o break, stop function

    //limpar o campo antes de add ao container #images 
    input.value = ""; 

    // adicionar o clone ao container de #images 
    container.appendChild(clonedContainer);

} 

//delete photo fiel 
function deletePhotoField(event){
    const span = event.currentTarget; 

    const newUploads = document.querySelectorAll('.new-upload'); 

    if(newUploads.length <= 1){
        //limpar o campo 
        span.parentNode.children[0].value = ""; // no caso vai limpar o valor do input
        
        return};
    
    //remove o container pai (.new-upload)
    span.parentNode.remove();
} 

//funcao para alternar S e N selecionado 
function toggleSelect(event){  

    //pegar o botao clicado 
    const button = event.currentTarget;  
    
    //atualizar o meu input hidden com o valor selecionado 
    const input = document.querySelector('[name=open-on-weekends]'); 
    input.value = button.dataset.value; // pega o valor do data-value

    // retirar a class .active (dos botoes)  
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active');
    });

    //colocar a class active nesse botao 
    button.classList.add('active');

} 

function validate(event) {

    const lat = document.querySelector('[name=lat]').value; 
    const lng = document.querySelector('[name=lng]').value; 
    
    if (lat == '' && lng == ''){

        //cancel formulary
        event.preventDefault(); 
        alert('Marque um ponto no mapa.');
    }


}
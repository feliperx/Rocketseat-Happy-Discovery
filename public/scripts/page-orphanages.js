
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
    popupAnchor: [170, 2]

}); 

// adicionar marcador ao mapa, passando com parametro um objeto com DESTRUCTOR ({})
function addMarker({id, name, lat, lng}) { 

    //criando popup overlay
    const popup = L.popup({
        closeButton: false, 
        className: "map-popup", 
        minWidth: 240, 
        minHeight: 240
    }).setContent(`${name} <a href="orphanage-profile?id=${id}"> <img src="/images/arrow-white.svg"></a>`)

    // adicionando um popup e um icone (marcador)
    L.marker([lat, lng],{icon}).addTo(map)
        .bindPopup(popup);
} 

const orphanagesSpan = document.querySelectorAll('.orphanages span'); //Nodelist

orphanagesSpan.forEach( (span) => {
    
    const orphanage = { 
        id: span.dataset.id, 
        name: span.dataset.name, 
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }

    addMarker(orphanage)

})


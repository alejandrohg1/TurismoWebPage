// Initialize and add the map
var map = L.map('map').setView([12.8691653, -85.1411896],7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.querySelectorAll('.a-button').forEach(e=>{
    e.addEventListener("click",function(){ 
        let coords = e.dataset.coordinate.split(",")
        console.log(coords)
        map.flyTo(coords,13);
    })
})
const getLocationBtn = document.getElementById("get-btn");
const removeLocationBtn = document.getElementById("remove-btn");
const mapDiv = document.getElementById("map");

if(navigator.geolocation) {
    getLocationBtn.addEventListener("click", getLocation)    
}
else {
    alert("Getlocation is not supported by your browser");
}

function getLocation(){
    getLocationBtn.disabled = true;
    navigator.geolocation.getCurrentPosition(showPosition);
   
}

function showPosition(position){
    const lat = position.coords.latitude;
	const long = position.coords.longitude;

    localStorage.setItem("lat", lat)
    localStorage.setItem("long", long)

    const myURL =  `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;
    mapDiv.innerHTML = `<iframe height= "400", width="100%", frameborder = "1" src= "${myURL}"></iframe>`;
    removeLocationBtn.disabled=false;
}
const lat = localStorage.getItem('lat')
const long = localStorage.getItem('long')

if(lat && long) {
    const myURL =  `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;
    mapDiv.innerHTML = `<iframe height= "400", width="100%", frameborder = "1" src= "${myURL}"></iframe>`;
    getLocationBtn.disabled = true;
    removeLocationBtn.disabled = false;
}

function removeLocation(){
    localStorage.removeItem("lat")
    localStorage.removeItem("long")
    mapDiv.innerHTML ="";
    removeLocationBtn.disabled = true;
    getLocationBtn.disabled = false;
    
}
removeLocationBtn.addEventListener("click", removeLocation);


const d = document,
n = navigator;
export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy:true,  //alta precisión
        timeout:5000,  //máximo 5seg en realizar la localización
        maximumAge:0  //No guarda caché
    };

    const success = (position) => {
        let coords = position.coords;
        //console.log(position);

        $id.innerHTML = `
        <p>Tu posición actual es:</p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Latitud: <b>${coords.longitude}</b></li>
        <li>Presición: <b>${coords.accuracy}</b>metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z"
        target="_blank" rel="noopener">Ver en Google Maps</a>`;
        
    };

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        //console.log(`Error ${err.code}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success, error, options);

}
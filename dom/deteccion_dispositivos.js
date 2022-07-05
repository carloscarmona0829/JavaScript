const d = document,
    n = navigator,
    ua = n.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
        isMobile = {
            android: () => ua.match(/android/i), //la /expresión regular/i busca en la cadena esa descripción sin key sensitive
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function () {
                return (this.android() || this.ios() || this.windows());
            },
        },
        isDesktop = {
            linux: () => ua.match(/linux/i), //la /expresión regular/i busca en la cadena esa descripción sin key sensitive
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return (this.linux() || this.mac() || this.windows());
            },
        },
        isBrowser = {
            chrome: () => ua.match(/chrome/i), //la /expresión regular/i busca en la cadena esa descripción sin key sensitive
            firefox: () => ua.match(/firefox/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return (this.chrome() || this.firefox() || this.edge());
            },
        };
    // console.log(ua);
    // console.log(isMobile.ios());
    $id.innerHTML = 
    `<ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${isMobile.any()? isMobile.any():isDesktop.any()}</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;

    //Contenido Exclusivo
    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`; 
        //+= adiciona contenido al innerHTML sin borrar lo que ya había en el.
    }

    if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en firefox</mark></p>`;
    }

    if(isBrowser.edge()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en edge</mark></p>`;
    }

    //Redirecciones
    if(isMobile.android()){
        window.location.href = "https://jonmircha.com"
    }
}
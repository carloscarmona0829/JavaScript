export function PostCard(props) {
    let { date, id, _embedded, slug, title } = props;
    let dateFormat = new Date(date).toLocaleString(),
        urlPoster = _embedded["wp:featuredmedia"]
            ? _embedded["wp:featuredmedia"][0].source_url
            : "app/assets/Favicon.png";

    document.addEventListener("click", (e) => {
        //Si el click no toca el enlace "".post-card a" entonces retorna y no ejecuta la programación
        if (!e.target.matches(".post-card a")) return false;
        //Establece la propiedad "wpPostId", coge el data atribute que es .id. Esto guarda el id del enlace del link seleccionado.
        localStorage.setItem("wpPostId", e.target.dataset.id);
    });

    return `
    <article class="post-card">
    <img src="${urlPoster}" alt"${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
    </p>
    </article>
    `;
}

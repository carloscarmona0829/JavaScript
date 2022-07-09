const d =  document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]")

    const cb = (entries)=>{
        //console.log("entries", entries)

        entries.forEach((entry)=>{
            //console.log("entry", entry);
            const id = entry.target.getAttribute("id");
            //console.log(id);
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        });
    };    

    const observer = new IntersectionObserver(cb, {
    //console.log("observer", observer)
    // rootMargin //Detecta por medio de px cuando esta en una seccion o en otra
    threshold: [0.5, 0.75] //se visibiliza cuando el elemento tenga entre un 50 y 75% de su altura
    });
    

    $sections.forEach((el)=>observer.observe(el));
}
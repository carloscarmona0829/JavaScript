const d = document,
w = window;

export default function scrollTopButton(btn){
const $scrollBtn = d.querySelector(btn);

w.addEventListener("scroll", e=>{
    //Los dos métodos hacen lo mismo solo que algunos navegadores no reciben el uno u el otro
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if(scrollTop > 500){
        $scrollBtn.classList.remove("hidden")
    }else{
        $scrollBtn.classList.add("hidden")
    }
    //console.log(w.pageYOffset, d.documentElement.scrollTop);
});
d.addEventListener("click", (e)=>{
    if(e.target.matches(btn)){
        w.scrollTo({
            behavior:"smooth",
            top:0
        });
    }
});
}
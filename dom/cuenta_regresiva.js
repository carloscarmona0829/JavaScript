const d = document;

export default function contdown(id, limitDay, finalMessage){
    const $contdwon = d.getElementById(id),
    contdownDate = new Date(limitDay).getTime();

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
        limitTime = contdownDate - now,
        days = Math.floor(limitTime/(1000*60*60*24)),
        hours = ("0" + Math.floor(limitTime % (1000*60*60*24)/(1000*60*60))).slice(-2),
        minutes = ("0" + Math.floor(limitTime % (1000*60*60)/(1000*60))).slice(-2),
        seconds = ("0" + Math.floor(limitTime % (1000*60)/(1000))).slice(-2);

        $contdwon.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos y ${seconds} segundos </h3>`;

        if(limitTime < 0){
            clearInterval(countdownTempo);
            $contdwon.innerHTML = `<h3> ${finalMessage} </h3>`;    
        }  
        //console.log(contdownDate, now, limitTime);
    },1000)
}
function carregar(){
    let msg = document.getElementById('msg');
    let imagem = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    msg.innerHTML = `Agora são ${hora} horas ${min} minutos e ${seg} segundos!`;

    if(hora >= 0 && hora < 12){
        // Bom Dia
        imagem.src = "img/fotomanha.jpg"
        document.body.style.background = "#87CEEB"
    }else if(hora >= 12 && hora <= 18){
        // Boa Tarde
        imagem.src = "img/fototarde.jpg"
        document.body.style.background = "#FFE4B5"
    }else{
        // Boa Noite
        imagem.src = "img/fotonoite.jpg"
        document.body.style.background = "#4F4F4F"
    }
}

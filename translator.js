// Troca o Buscar para Search
buscar = document.getElementsByClassName("header__search__input")[0]
if(buscar.placeholder == "Buscar"){
buscar.setAttribute("placeholder","Search")
}

// Troca botão de Entrar para Login 
if(document.getElementsByClassName("header__login__label")[0].textContent == "Entrar"){
document.getElementsByClassName("header__login__label")[0].innerText="Login"
}

// Troca Capas das editorias para termo em inglês
if(document.getElementsByClassName("menu-exposto__itens__item theme-color-primary")){
    capas = document.getElementsByClassName("menu-exposto__itens__item theme-color-primary")
    //Loop para tradução das capas
    for(var i=0; i<capas.length; i++){
        if(capas[i].textContent.indexOf("Brasil") > -1){
            capas[i].innerText="Brazil"
        }else if(capas[i].textContent.indexOf("Política") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Finanças") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Empresas") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Mundo") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Agronegócios") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Legislação") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Opinião") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Carreira") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Eu &") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Últimas") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Valor Data") > -1){
            capas[i].innerText="Politics"
        }else if(capas[i].textContent.indexOf("Valor Investe") > -1){
            capas[i].innerText="Politics"
        }else{
            console.log("Não foi possível localizar a capa " + capas[i].textContent)
        }
        
        }
}else{
    console.log("Não foi possível localizar o html de capas")
}

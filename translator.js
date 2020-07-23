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
            capas[i].firstElementChild.innerText="Brazil"
        }else if(capas[i].textContent.indexOf("Política") > -1){
            capas[i].firstElementChild.innerText="Politics"
        }else if(capas[i].textContent.indexOf("Finanças") > -1){
            capas[i].firstElementChild.innerText="Business"
        }else if(capas[i].textContent.indexOf("Empresas") > -1){
            capas[i].firstElementChild.innerText="Companies"
        }else if(capas[i].textContent.indexOf("Mundo") > -1){
            capas[i].firstElementChild.innerText="World"
        }else if(capas[i].textContent.indexOf("Agronegócios") > -1){
            capas[i].firstElementChild.innerText="Agribusiness"
        }else if(capas[i].textContent.indexOf("Legislação") > -1){
            capas[i].firstElementChild.innerText="Legislation"
        }else if(capas[i].textContent.indexOf("Opinião") > -1){
            capas[i].firstElementChild.innerText="Opinion"
        }else if(capas[i].textContent.indexOf("Carreira") > -1){
            capas[i].firstElementChild.innerText="Career"
        }else if(capas[i].textContent.indexOf("Eu &") > -1){
            capas[i].firstElementChild.innerText="Me &"
        }else if(capas[i].textContent.indexOf("Últimas") > -1){
            capas[i].firstElementChild.innerText="Latest news"
        }else if(capas[i].textContent.indexOf("Valor Data") > -1){
            capas[i].firstElementChild.innerText="Valor Data"
        }else if(capas[i].textContent.indexOf("Valor Investe") > -1){
            capas[i].firstElementChild.innerText="Valor Investe"
        }else{
            console.log("Não foi possível localizar a capa " + capas[i].textContent)
        }
        
        }
}else{
    console.log("Não foi possível localizar o html de capas")
}


// Traduz rodapé
rodape = document.getElementsByClassName("footer__sections__section__name")
for(var i=0; i<rodape.length; i++){
    if(rodape[i].textContent == "Valor"){
        rodape[i].innerText="Valor"
    }else if(rodape[i].textContent == "Produtos"){
        rodape[i].innerText="Products"
    }else if(rodape[i].textContent == "Central do Leitor"){
        rodape[i].innerText="Reader Center"
    }else if(rodape[i].textContent == "Siga o Valor"){
        rodape[i].innerText="Follow us"
    }else if(rodape[i].textContent == "Assine"){
        rodape[i].firstElementChild.innerText="Subscribe"
    }else if(rodape[i].textContent == " Anuncie "){
        rodape[i].firstElementChild.innerText="Advertise"
    }else if(rodape[i].textContent == " Venda de conteúdo "){
        rodape[i].firstElementChild.innerText="Selling content"
    }
}


document.getElementsByClassName("footer__sections__section__name")[4].innerText="Subscribe"
document.getElementsByClassName("footer__sections__section__name")[5].innerText="Advertise"
document.getElementsByClassName("footer__sections__section__name")[6].innerText="Selling content"

//Traduz os filhos do rodapé
filhos = document.getElementsByClassName("footer__sections__section__subsection")

for(var i=0; i<filhos.length; i++){
    if(filhos[i].textContent.indexOf("Termos de Uso") > -1){
        filhos[i].firstElementChild.innerText="Terms of service"
    }else if(filhos[i].textContent.indexOf("Política de Privacidade") > -1){
        filhos[i].firstElementChild.innerText="Privacy Policy"
    }else if(filhos[i].textContent.indexOf("Princípios Editoriais") > -1){
        filhos[i].firstElementChild.innerText="Editorial Principles"
    }else if(filhos[i].textContent.indexOf("Expediente") > -1){
        filhos[i].firstElementChild.innerText="Executive Team"
    }else if(filhos[i].textContent.indexOf("Análise Setorial") > -1){
        filhos[i].firstElementChild.innerText="Sectorial Analysis"
    }else if(filhos[i].textContent.indexOf("Edição Impressa") > -1){
        filhos[i].firstElementChild.innerText="Print Edition"
    }else if(filhos[i].textContent.indexOf("Valor Investe") > -1){
        filhos[i].firstElementChild.innerText="Valor Investe"
    }else if(filhos[i].textContent.indexOf("Valor PRO") > -1){
        filhos[i].firstElementChild.innerText="Valor PRO"
    }else if(filhos[i].textContent.indexOf("Valor RI") > -1){
        filhos[i].firstElementChild.innerText="Valor RI"
    }else if(filhos[i].textContent.indexOf("Valor International") > -1){
        filhos[i].firstElementChild.innerText="Valor International"
    }else if(filhos[i].textContent.indexOf("Revistas e Anuários") > -1){
        filhos[i].firstElementChild.innerText="Magazines and Yearbooks"
    }else if(filhos[i].textContent.indexOf("Seminários") > -1){
        filhos[i].firstElementChild.innerText="Workshops"
    }else if(filhos[i].textContent.indexOf("Editar Perfil ") > -1){
        filhos[i].firstElementChild.innerText="Edit Profile"
    }else if(filhos[i].textContent.indexOf("Newsletter") > -1){
        filhos[i].firstElementChild.innerText="Newsletter"
    }else if(filhos[i].textContent.indexOf("Fale Conosco ") > -1){
        filhos[i].firstElementChild.innerText="Contact us"
    }else if(filhos[i].textContent.indexOf("Portal do Assinante") > -1){
        filhos[i].firstElementChild.innerText="Subscriber Portal"
    }

}

// Renomeia test-international para International
document.getElementsByClassName("header__brand__sublink header__brand__sublink--sm")[0].innerText = "International"

// Tradução do menu lateral
traducao_login = "Log in with your account <br><small>or sign up for free</small>"
document.getElementsByClassName("menu-product-color")[0].innerHTML = traducao_login


if(document.getElementsByClassName("menu-item-title")){
    editorias_laterais = document.getElementsByClassName("menu-item-title")

    for(var i=0; i<editorias_laterais.length; i++){
        if(editorias_laterais[i].textContent == "Home"){
            editorias_laterais[i].innerText="Home"
        }else if(editorias_laterais[i].textContent == "Ações"){
            editorias_laterais[i].innerText="Stock Market"
        }else if(editorias_laterais[i].textContent == "Cambial"){
            editorias_laterais[i].innerText="Exchange"
        }else if(editorias_laterais[i].textContent == "Multimercados"){
            editorias_laterais[i].innerText="Multimarkets"
        }else if(editorias_laterais[i].textContent == "Previdência"){
            editorias_laterais[i].innerText="Social Security"
        }else if(editorias_laterais[i].textContent == "Renda Fixa"){
            editorias_laterais[i].innerText="Fixed Income"
        }else if(editorias_laterais[i].textContent == "Política"){
            editorias_laterais[i].innerText="Politcs"
        }else if(editorias_laterais[i].textContent == "Finanças"){
            editorias_laterais[i].innerText="Finances"
        }else if(editorias_laterais[i].textContent == "Empresas"){
            editorias_laterais[i].innerText="Companies"
        }else if(editorias_laterais[i].textContent == "Agronegócios"){
            editorias_laterais[i].innerText="Agribusiness"
        }else if(editorias_laterais[i].textContent == "Internacional"){
            editorias_laterais[i].innerText="International"
        }else if(editorias_laterais[i].textContent == "Opinião"){
            editorias_laterais[i].innerText="Opinion"
        }else if(editorias_laterais[i].textContent == "Legislação"){
            editorias_laterais[i].innerText="Legislation"
        }else if(editorias_laterais[i].textContent == "Carreira"){
            editorias_laterais[i].innerText="Career"
        }else if(editorias_laterais[i].textContent == "Cultura & Estilo"){
            editorias_laterais[i].innerText="Style & Culture"
        }else if(editorias_laterais[i].textContent == "Conteúdo Publicitário"){
            editorias_laterais[i].innerText="Advertising Content"
        }else if(editorias_laterais[i].textContent == "Guia de Fundos"){
            editorias_laterais[i].innerText="Fund Guide"
        }
    }
}else{
    console.log("Não foram encontradas editorias laterais para processamento")
}
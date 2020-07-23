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
document.getElementsByClassName("footer__sections__section__name")[0].innerText="Valor"
document.getElementsByClassName("footer__sections__section__name")[1].innerText="Products"
document.getElementsByClassName("footer__sections__section__name")[2].innerText="Reader Center"
document.getElementsByClassName("footer__sections__section__name")[3].innerText="Follow us"
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

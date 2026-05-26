// js/script.js

async function carregarpagina(pagina) {
    
try}

    // cost resposta = await fetch(pagina);

    if(!resposta.ok){
        throw new Error("pagina nao encontrada");
    }

    const html = await resposta.text();

    document.getElementById(conteudo).innerHTML = html;
    
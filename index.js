var not = [...document.querySelectorAll(".Not")];

var desmarcartodas = document.querySelector(".desmarcartodas")

var l = not.map((e, i) => {
    desmarcartodas.addEventListener("click", (evento) => {
        var verifica = e.classList.contains("notificacaoNaoLida")
        if (verifica = true) {
            e.classList.remove("notificacaoNaoLida")
            atualizado()
        }
    })
})

// TODO: CRIANDO A PARTIR DAQUI A CONTAGEM DE NOTIFICACOES -------------------------------


// !Pegando a classe numero (onde entra os numeros de notificacoes)
var numero = document.querySelector(".numero");
// ! A QNTD DE NOTIFY VÊM DA QNTD DE ELEMENTOS COM A CLASSE notificacaoNaoLida
//! ENTAO, DE TODOS OS NOT DA LINHA 1, DEVO VER QUAIS TEM A CLASSE ACIMA.
var not2 = [...document.querySelectorAll(".notificacaoNaoLida")]
var total = not2.length
if (total != 0) {
    numero.innerHTML = total
} else {
    numero.innerHTML = 0
}

//! CRIAR UMA FUNCAO PARA ATUALIZAR O NUMERO DE NOT E CHAMA-LA NO CLICK ACIMA
function atualizado() {
    var att = numero.innerHTML = 0
}
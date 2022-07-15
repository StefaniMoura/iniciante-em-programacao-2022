const X = "X";
const O = "O";



function reiniciarJogo() {
    
    document.querySelector(`[data-linha='1'][data-coluna='1']`).textContent = ''; 
    document.querySelector(`[data-linha='1'][data-coluna='2']`).textContent = '';
    document.querySelector(`[data-linha='1'][data-coluna='3']`).textContent = '';
    document.querySelector(`[data-linha='2'][data-coluna='1']`).textContent = '';
    document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent = '';
    document.querySelector(`[data-linha='2'][data-coluna='3']`).textContent = '';
    document.querySelector(`[data-linha='3'][data-coluna='1']`).textContent = '';
    document.querySelector(`[data-linha='3'][data-coluna='2']`).textContent = '';
    document.querySelector(`[data-linha='3'][data-coluna='3']`).textContent = ''; 
    exibirResultado("");
    marcarJogadorAtivo(X);

}

function selecionarArea(posicaoLinha, posicaoColuna) {
    let jogador = document.querySelector(".jogador-ativo > span").textContent;
    let vencedor = '';
   
    if(jogador == 'X'){
        desenharSimbolo(X, posicaoLinha, posicaoColuna);
        // VENCEDOR X NA VERTICAL
        if (document.querySelector(`[data-linha='1'][data-coluna='1']`).textContent == 'X' && document.querySelector(`[data-linha='1'][data-coluna='2']`).textContent == 'X' && document.querySelector(`[data-linha='1'][data-coluna='3']`).textContent == 'X'){
            exibirResultado("Parabéns o vencendor é o jogador X !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='2'][data-coluna='1']`).textContent == 'X' && document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent == 'X' && document.querySelector(`[data-linha='2'][data-coluna='3']`).textContent == 'X'){
            exibirResultado("Parabéns o vencendor é o jogador X !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='3'][data-coluna='1']`).textContent == 'X' && document.querySelector(`[data-linha='3'][data-coluna='2']`).textContent == 'X' && document.querySelector(`[data-linha='3'][data-coluna='3']`).textContent == 'X'){
            exibirResultado("Parabéns o vencendor é o jogador X !");
            vencedor = jogador;
        }

        // VENCEDOR X NA HORIZONTAL
        if (document.querySelector(`[data-linha='1'][data-coluna='1']`).textContent == 'X' && document.querySelector(`[data-linha='2'][data-coluna='1']`).textContent == 'X' && document.querySelector(`[data-linha='3'][data-coluna='1']`).textContent == 'X'){
            exibirResultado("Parabéns o vencendor é o jogador X !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='1'][data-coluna='2']`).textContent == 'X' && document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent == 'X' && document.querySelector(`[data-linha='3'][data-coluna='2']`).textContent == 'X'){
            exibirResultado("Parabéns o vencendor é o jogador X !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='1'][data-coluna='3']`).textContent == 'X' && document.querySelector(`[data-linha='2'][data-coluna='3']`).textContent == 'X' && document.querySelector(`[data-linha='3'][data-coluna='3']`).textContent == 'X'){
            exibirResultado("Parabéns o vencendor é o jogador X !");
            vencedor = jogador;
        }


        // VENCEDOR X NA DIAGONAL
        if (document.querySelector(`[data-linha='1'][data-coluna='1']`).textContent == 'X' && document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent == 'X' && document.querySelector(`[data-linha='3'][data-coluna='3']`).textContent == 'X'){
            exibirResultado("Parabéns o vencendor é o jogador X !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='1'][data-coluna='3']`).textContent == 'X' && document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent == 'X' && document.querySelector(`[data-linha='3'][data-coluna='1']`).textContent == 'X'){
            exibirResultado("Parabéns o vencendor é o jogador X !");
            vencedor = jogador;
        }

        marcarJogadorAtivo(O);

    }else{
        
        desenharSimbolo(O, posicaoLinha, posicaoColuna);

        // VENCEDOR O NA VERTICAL
        if (document.querySelector(`[data-linha='1'][data-coluna='1']`).textContent == 'O' && document.querySelector(`[data-linha='1'][data-coluna='2']`).textContent == 'O' && document.querySelector(`[data-linha='1'][data-coluna='3']`).textContent == 'O'){
            exibirResultado("Parabéns o vencendor é o jogador O !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='2'][data-coluna='1']`).textContent == 'O' && document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent == 'O' && document.querySelector(`[data-linha='2'][data-coluna='3']`).textContent == 'O'){
            exibirResultado("Parabéns o vencendor é o jogador O !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='3'][data-coluna='1']`).textContent == 'O' && document.querySelector(`[data-linha='3'][data-coluna='2']`).textContent == 'O' && document.querySelector(`[data-linha='3'][data-coluna='3']`).textContent == 'O'){
            exibirResultado("Parabéns o vencendor é o jogador O !");
            vencedor = jogador;
        }

        // VENCEDOR O NA HORIZONTAL
        if (document.querySelector(`[data-linha='1'][data-coluna='1']`).textContent == 'O' && document.querySelector(`[data-linha='2'][data-coluna='1']`).textContent == 'O' && document.querySelector(`[data-linha='3'][data-coluna='1']`).textContent == 'O'){
            exibirResultado("Parabéns o vencendor é o jogador O !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='1'][data-coluna='2']`).textContent == 'O' && document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent == 'O' && document.querySelector(`[data-linha='3'][data-coluna='2']`).textContent == 'O'){
            exibirResultado("Parabéns o vencendor é o jogador O !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='1'][data-coluna='3']`).textContent == 'O' && document.querySelector(`[data-linha='2'][data-coluna='3']`).textContent == 'O' && document.querySelector(`[data-linha='3'][data-coluna='3']`).textContent == 'O'){
            exibirResultado("Parabéns o vencendor é o jogador O !");
            vencedor = jogador;
        }


        // VENCEDOR O NA DIAGONAL
        if (document.querySelector(`[data-linha='1'][data-coluna='1']`).textContent == 'O' && document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent == 'O' && document.querySelector(`[data-linha='3'][data-coluna='3']`).textContent == 'O'){
            exibirResultado("Parabéns o vencendor é o jogador O !");
            vencedor = jogador;
        }

        if (document.querySelector(`[data-linha='1'][data-coluna='3']`).textContent == 'O' && document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent == 'O' && document.querySelector(`[data-linha='3'][data-coluna='1']`).textContent == 'O'){
            exibirResultado("Parabéns o vencendor é o jogador O !");
            vencedor = jogador;
        }

        marcarJogadorAtivo(X);
    }

    if(vencedor == '' 
        && document.querySelector(`[data-linha='1'][data-coluna='1']`).textContent != '' 
        && document.querySelector(`[data-linha='1'][data-coluna='2']`).textContent != ''
        && document.querySelector(`[data-linha='1'][data-coluna='3']`).textContent != ''
        && document.querySelector(`[data-linha='2'][data-coluna='1']`).textContent != '' 
        && document.querySelector(`[data-linha='2'][data-coluna='2']`).textContent != ''
        && document.querySelector(`[data-linha='2'][data-coluna='3']`).textContent != ''
        && document.querySelector(`[data-linha='3'][data-coluna='1']`).textContent != '' 
        && document.querySelector(`[data-linha='3'][data-coluna='2']`).textContent != ''
        && document.querySelector(`[data-linha='3'][data-coluna='3']`).textContent != ''){
            
            exibirResultado("Vixi deu velha!!!");
    }
}

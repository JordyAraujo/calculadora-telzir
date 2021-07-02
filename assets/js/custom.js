var $origem = $('#origem');
var $destino = $('#destino');
var $plano = $('#plano');
var $tempo = $('#tempo');
var $botaoCalcular = $('#botaoCalcular');
var $resultado = $('#resultado');

// var dados = {
//     origem: $origem.val(),
//     destino: $destino.val(),
//     plano: $plano.val(),
//     tempo: $tempo.val(),
//     precoPorMinuto: '0',
//     precoPorMinutoPlano: '0',
//     valorFinal: '0',
//     valorFinalPlano: '0',
//     tempoExcedente: '0',
//     msg: ""
// };

var origem = $origem.val();
var destino = $destino.val();
var plano = $plano.val();
var tempo = $tempo.val();

var precoPorMinuto = 0;
var precoPorMinutoPlano = 0;
var valorFinal = 0;
var valorFinalPlano = 0;
var tempoExcedente = 0;
var msg = '';

// const teste = e => {
//     e.preventDefault()
//     console.log(`Origem = ${origem}`);
//     console.log(`Destino = ${destino}`);
//     console.log(`Plano = ${plano}`);
//     console.log(`Tempo = ${tempo}`);

//     calcularPrecoPorMinuto();
//     calcularTempoExcedente();
//     calcularValoresFinais();

//     console.log(`precoPorMinuto = ${precoPorMinuto}`);
//     console.log(`precoPorMinutoPlano = ${precoPorMinutoPlano}`);
//     console.log(`tempoExcedente = ${tempoExcedente}`);
//     console.log(`valorFinal = ${valorFinal}`);
//     console.log(`valorFinalPlano = ${valorFinalPlano}`);
//     console.log(`msg = ${msg}`);
// }

const calcularPrecoPorMinuto = () => {
    if (origem === '11') {
        if (destino === '16') { // 011 -> 016
            precoPorMinuto = 1.9;
            precoPorMinutoPlano = precoPorMinuto * 1.1;
        } else if (destino === '17') { // 011 -> 017
            precoPorMinuto = 1.7;
            precoPorMinutoPlano = precoPorMinuto * 1.1;
        } else { // 011 -> 018
            precoPorMinuto = 0.9;
            precoPorMinutoPlano = precoPorMinuto * 1.1;
        }
    } else if (origem === '16') { // 016 -> Só permite ligar para 011
        if (destino === '11') { // 016 -> 011
            precoPorMinuto = 2.9;
            precoPorMinutoPlano = precoPorMinuto * 1.1;
        } else {
            msg = 'O DDD 016 permite ligações apenas para o DDD 011'
        }
    } else if (origem === '17') { // 017 -> Só permite ligar para 011
        if (destino === '11') { // 017 -> 011
            precoPorMinuto = 2.7;
            precoPorMinutoPlano = precoPorMinuto * 1.1;
        } else {
            msg = 'O DDD 017 permite ligações apenas para o DDD 011'
        }
    } else if (origem === '18') { // 018 -> Só permite ligar para 011
        if (destino === '11') { // 018 -> 011
            precoPorMinuto = 1.9;
            precoPorMinutoPlano = precoPorMinuto * 1.1;
        } else {
            msg = 'O DDD 018 permite ligações apenas para o DDD 011'
        }
    }
}

const calcularTempoExcedente = () => {
    const t = Number(tempo);
    const p = Number(plano);
    if (t > p) {
        tempoExcedente = t - p;
    } else {
        tempoExcedente = 0;
    }
}

const calcularValoresFinais = () => {
    const t = Number(tempo);
    valorFinal = Number((t * precoPorMinuto).toFixed(2));
    valorFinalPlano = Number((tempoExcedente * precoPorMinutoPlano).toFixed(2));

    return {
        valorFinal,
        valorFinalPlano
    }
}

$botaoCalcular.click(() => {
    $origem = $('#origem');
    $destino = $('#destino');
    $plano = $('#plano');
    $tempo = $('#tempo');
    $botaoCalcular = $('#botaoCalcular');
    $resultado = $('#resultado');

    origem = $origem.val();
    destino = $destino.val();
    plano = $plano.val();
    tempo = $tempo.val();

    precoPorMinuto = 0;
    precoPorMinutoPlano = 0;
    valorFinal = 0;
    valorFinalPlano = 0;
    tempoExcedente = 0;
    msg = '';

    inputMudou();

    let origemOk = !$origem.hasClass("form-control-danger");
    let destinoOk = !$destino.hasClass("form-control-danger");
    let planoOk = !$plano.hasClass("form-control-danger");
    let tempoOk = !$tempo.hasClass("form-control-danger");

    if (origemOk && destinoOk && planoOk && tempoOk) {
        calcularPrecoPorMinuto();
        calcularTempoExcedente();
        calcularValoresFinais();
        $resultado.html(`Valor sem plano = R$ ${valorFinal.toFixed(2)} <br> Valor com plano = R$ ${valorFinalPlano.toFixed(2)}`);
        $('#modalResultado').modal('toggle');
    }

    // console.log(`precoPorMinuto = ${precoPorMinuto}`);
    // console.log(`precoPorMinutoPlano = ${precoPorMinutoPlano}`);
    // console.log(`tempoExcedente = ${tempoExcedente}`);
    // console.log(`valorFinal = ${valorFinal}`);
    // console.log(`valorFinalPlano = ${valorFinalPlano}`);
    // console.log(`msg = ${msg}`);
});

$('.valor').bind('input', e => {
    inputMudou(e);
})

const inputMudou = e => {
    let target = '';
    if (e) {
        target = e.target.id;
    }
    origem = $origem.val();
    destino = $destino.val();
    plano = $plano.val();
    tempo = $tempo.val();

    switch (target) {
        case 'origem':
            alteraInput($origem);
            if (origem === "11") {
                $destino.html(`
                    <option id="placeholderDestino" value="" disabled>DDD de destino</option>
                    <option value="16">016</option>
                    <option value="17">017</option>
                    <option value="18">018</option>
                `);
                $destino.val(destino === "11" ? "" : destino);
            } else {
                $destino.html(`
                    <option id="placeholderDestino" value="" disabled>DDD de destino</option>
                    <option value="11">011</option>
                `);
                alteraInput($destino);
                $destino.val("11");
            }
            break;
        case 'destino':
            alteraInput($destino);
            break;
        case 'plano':
            alteraInput($plano);
            break;
        case 'tempo':
            alteraInput($tempo);
            break;
        default:
            alteraInput($origem);
            alteraInput($destino);
            alteraInput($plano);
            alteraInput($tempo);
            break;
    }
}

const alteraInput = $input => {
    if (!$input.val() || isNaN($input.val())) {
        $input.addClass('form-control-danger');
        $input.parent().addClass('has-danger');
        return false;
    } else {
        $input.removeClass('form-control-danger');
        $input.parent().removeClass('has-danger');
        return true;
    }
}
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
        $resultado.html(`Valor sem plano = ${valorFinal} <br> Valor com plano = ${valorFinalPlano}`);
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

// const inputMudou = () => {
//     var disabled = $tempo.attr('disabled');

//     if ($tempo.val() === "" || !$.isNumeric($tempo.val())) {
//         if (typeof disabled === 'undefined' || disabled === false) {
//             $tempo.addClass('form-control-danger');
//             $tempo.parent().addClass('has-danger');
//             $tempo.val() === "" ? $tempo.attr('placeholder', 'Duração da ligação') : $tempo.attr('placeholder', 'Tempo inválido');
//         }
//         $botaoCalcular.attr('disabled', 'disabled');
//     } else {
//         $tempo.removeClass('form-control-danger');
//         $tempo.parent().removeClass('has-danger');
//         $tempo.attr('placeholder', 'Duração da ligação');
//         $botaoCalcular.removeAttr('disabled');
//     }
// }

// /** "Handler" de select de destino ao selecionar origem */
// $origem.on('change', () => {
//     switch ($origem.val()) {
//         case '11':
//             $destino.children().first().html('Selecione um DDD de Destino');
//             $destino.removeAttr('disabled');
//             $destino.prev().removeClass('disabled');
//             $destino.append('<option value="16">016</option>');
//             $destino.append('<option value="17">017</option>');
//             $destino.append('<option value="18">018</option>');
//             $plano.html('<option id="placeholderPlano" value="" selected disabled>Primeiro selecione um DDD de origem</option>');
//             $plano.attr('disabled', 'disabled');
//             $plano.prev().addClass('disabled');
//             $tempo.attr('placeholder', 'Agora selecione um DDD de Destino');
//             $tempo.attr('disabled', 'disabled');
//             $botaoCalcular.attr('disabled', 'disabled');
//             break;
//         default:
//             $destino.children().first().html('Selecione um DDD de Destino');
//             $destino.removeAttr('disabled');
//             $destino.prev().removeClass('disabled');
//             $destino.html(`<option value="11">011 - O DDD 0${$origem.val()} só faz ligações para o DDD 011</option>`);
//             $destino.change();
//             $plano.children().first().html('Agora selecione um DDD de Destino');
//             $tempo.children().first().html('Agora selecione um DDD de Destino');
//             $tempo.prev().removeClass('disabled');
//             $tempo.attr('disabled', 'disabled');
//             $botaoCalcular.attr('disabled', 'disabled');
//             break;
//     }
// });

// /** "Handler" de select de plano ao selecionar destino */
// $destino.on('change', () => {
//     console.log($plano.children().first());
//     if ($origem !== '11') {
//         $plano.html('<option id="placeholderPlano" value="" selected disabled>Selecione um Plano FaleMais</option>');
//         $plano.append('<option value="30">FaleMais 30</option>');
//         $plano.append('<option value="60">FaleMais 60</option>');
//         $plano.append('<option value="120">FaleMais 120</option>');
//     } else {
//         $plano.html('<option id="placeholderPlano" value="" selected disabled>Primeiro selecione um DDD de origem</option>');
//     }
//     $plano.removeAttr('disabled');
//     $plano.prev().removeClass('disabled');
//     $tempo.attr('placeholder', 'Agora selecione um DDD de Destino');
// });

// /** "Handler" de input de tempo e botão ao selecionar plano */
// $plano.on('change', () => {
//     $tempo.attr('placeholder', 'Duração da ligação');
//     $tempo.removeAttr('disabled');
//     $tempo.prev().removeClass('disabled');
// });
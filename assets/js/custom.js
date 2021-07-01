const $origem = $('#origem');
const $destino = $('#destino');
const $plano = $('#plano');
const $tempo = $('#tempo');
const $botaoCalcular = $('#botaoCalcular');
const $teste = $('#teste');

$botaoCalcular.click(() => {
    $teste.html('Resultados aqui');
});

$('.valor').bind('change input', () => {
    inputMudou();
})

function inputMudou() {
    console.log('inputMudou');
    var disabled = $tempo.attr('disabled');

    if ($tempo.val() === "" || !$.isNumeric($tempo.val())) {
        if (typeof disabled === 'undefined' || disabled === false) {
            $tempo.addClass('form-control-danger');
            $tempo.parent().addClass('has-danger');
            $tempo.val() === "" ? $tempo.attr('placeholder', 'Duração da ligação') : $tempo.attr('placeholder', 'Tempo inválido');
        }
        $botaoCalcular.attr('disabled', 'disabled');
    } else {
        $tempo.removeClass('form-control-danger');
        $tempo.parent().removeClass('has-danger');
        $tempo.attr('placeholder', 'Duração da ligação');
        $botaoCalcular.removeAttr('disabled');
    }
}

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
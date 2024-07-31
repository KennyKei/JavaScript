function calcular()
{
    var txtvel = window.document.querySelector('input#txtVelocidade')
    var resultado = window.document.querySelector('div#resultado')
    var velocidade = Number(txtvel.value)

    resultado.innerHTML += `<p>Sua velocidade atual é de: <strong>${velocidade}</strong></p>`
    if (velocidade > 80)
    {
        resultado.innerHTML +='<p><strong>MOTORISTA ARROMBADO</strong></p>'
    }
    else
    {
        window.document.write('Velocidade permitida')
    }
}
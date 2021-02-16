
ePayco.setPublicKey('9ef36c3c7950b8d23196bfed2d71a198');

function payment(event, form){
    //detiene el evento automático del formulario
    event.preventDefault();
    //captura el contenido del formulario
    var $form = form;
    //deshabilita el botón para no acumular peticiones
    $form.find("button").prop("disabled", true);
    console.log("entro")
    //hace el llamado al servicio de tokenización
    ePayco.token.create($form, function(error, token) {
        //habilita el botón al obtener una respuesta
        $form.find("button").prop("disabled", false);
        if(!error) {
            //si la petición es correcta agrega un input "hidden" con el token como valor
            $form.append($('<input type="hidden" name="epaycoToken">').val(token));
            //envia el formulario para que sea procesado
            $form.get(0).submit();
        } else {
            //muestra errores que hayan sucedido en la transacción
           // $('.customer-errors').text(error.data.description);
           console.log(error)
        }
    });
}
function pagar1(){
    
    var handler = ePayco.checkout.configure({
        key: "9ef36c3c7950b8d23196bfed2d71a198", //public_key d42ae82ca25bd9b0f3877a574183c4d7
        test: true,
    });
    var valorBase = 50;
    valor = (50)*0.02,99;
    valor += 0.25;
    valor = valor + valorBase;
    var data = {
        //Parametros compra (obligatorio)
        name: "Membresia Great Style FX Academy ",
        description: "Membresia Great Style FX Academy",
        currency: "usd",
        amount: valor,

        country: "co",
        lang: "es",
        //Onpage="false" - Standard="true"
        external: "false",

        //Atributos opcionales
        extra1: "extra1",
        extra2: "extra2",
        extra3: "extra3",
        confirmation: "http://localhost:4200/response",
        response: "http://localhost:4200/response",



        //atributo deshabilitación metodo de pago
        //methodsDisable: ["TDC", "PSE","SP","CASH","DP"]
        methodsDisable: ["CASH", "SP"], //habilito los otros metodos de pago
    };

    handler.open(data);
}

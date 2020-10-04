
const palindrome = (req, res) =>{

    try {
        const  { frase } = req.body;

        var resultado = "La cadena \""+frase+"\" \n";

        //console.log(frase);


        var cadenaOriginal = frase.toLowerCase();
        var letrasEspacios = cadenaOriginal.split("");

        //console.log(letrasEspacios)

        var cadenaSinEspacios = "";
        for(i in letrasEspacios) {

            if(letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];

            }
        }

        //console.log(cadenaSinEspacios);

        var letras = cadenaSinEspacios.split("");
        var letrasReves = cadenaSinEspacios.split("").reverse();

        var iguales = true;
        for(i in letras) {
            if(letras[i] == letrasReves[i]) {
           
            }
            else {
            
            iguales = false;
            }
        }

        if(iguales) {
            
            res.json({
                palindromo: true
            })
        }
        else {
           
            res.json({
                palindromo: false
            })
        }
        

        
    } catch (error) {
        res.status(500).send({
            err: true,
            message: error.message
        });
    }

}

const aaa = (req, res) =>{

    res.json('El cacas')

}


module.exports={
    palindrome,
    aaa
}
/*Resultado abaixo de 17 - Muito abaixo do peso; <br>
        Resultado entre de 17 e 18,40 - Abaixo do peso; <br>
        Resultado entre 18,5 e 24,99 - Peso ideal; <br>
        Resultado entre 25 e 29,99 - Sobrepeso; <br>
        Resultado entre 30 e 34,9 - Obesidade grau I; <br>
        Resultado entre 35 e 39,9 - Obesidade Grau II (severa); <br>
        Resultado acima de 40 - Obesidade grau III(mórbida); <br>*/

        /*começo do script*/
        var altura;
        var peso;
        var imc;
        var Resultado;
        /*começo da função*/
        function calcular(event){
            event.preventDefault();

            peso = parseFloat(document.getElementById("peso").value.replace(",","."));
            altura = parseFloat(document.getElementById("altura").value.replace(",","."));

            imc = peso / (altura*altura);
            /*=-----------------------*/
            /*parte para ver se qaul o user se encaixa*/
           resultado = document.getElementById("resultado");

           if( imc < 17){
            
            resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "</br> Cuidado você está muito abaixo do peso!";
           }
           else if (imc >= 17 && imc <= 18.99) {
            
            resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + " </br> Abaixo do peso!";
           }
           else if (imc >= 18.99 && imc <= 24.99) {
           
            resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + " </br>Você está no peso ideal!";
           }
           else if (imc >= 24.99 && imc <= 29.99) {
            
            resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + " </br>Você está com sobrepeso!";
           }
           else if (imc >= 29.99 && imc <= 34.99) {
            
            resultado.innerHTML = "<br/> Seu resultado foi: " +imc.toFixed(2) + " </br>Cuidado, obesidade grau I!";
           }
           else if (imc >= 34.99 && imc <= 39.99) {
           
            resultado.innerHTML = "<br/> Seu resultado foi: " +imc.toFixed(2) + " </br>Cuidado, obesidade grau II";
           }
           else if (imc >= 40) {
           
            resultado.innerHTML = "<br/> Seu resultado foi: " +imc.toFixed(2) + " </br>Cuidado, obesidade grau III";
           }
           document.getElementById("peso").value = "";
           document.getElementById("altura").value = "";
        }
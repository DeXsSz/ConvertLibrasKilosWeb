const inputLibras = document.querySelector('.inputLibras');
const btnLibras = document.querySelector('#btnLibras');
const infoHtml = document.querySelector('.info');
const p_res = document.querySelector('.res');
inputLibras.addEventListener('blur', mostrarLibras);
btnLibras.addEventListener('click', calcular);

//Verifica si existe algn parrafo con la clase res dentro de infoHtml.
if(p_res){
    calcular(); 
}else{//Si no hace la imprime en el Html lo Default
    mostrarHTML();
    console.log('No ocurrio nada! Todo en orden.');
}

function mostrarHTML(){
    let valorLibras = mostrarLibras();
    let valorKilos = calcularKilos();

    const htmlP = `<span>${valorLibras === '' ? 'X': valorLibras}</span> Libras = <span>${valorKilos}</span> Kilos`;

    if(valorLibras === ''){ // Si el valor es igual a nada, imprime el parafo sin la clase, ya que si le ponia la clase siempre en la primer condicion if entraba.
        const parrafo = document.createElement('p');
        parrafo.innerHTML = htmlP;
        infoHtml.appendChild(parrafo);
    }else {//Si tiene valor establecido, le agrego la clase res, entonces puede en entrar en la primer condicion y hacer los calculos
        const parrafo = document.createElement('p');
        parrafo.setAttribute('class', 'res');
        parrafo.innerHTML = htmlP;
        infoHtml.appendChild(parrafo);
    }

}

function calcular(){
    borrar();
    mostrarHTML();
    console.log('Se Elimino con Exito! el resultado anterior');
}

function borrar(){
    return infoHtml.removeChild(infoHtml.children[0]);
}

function mostrarLibras(){
    // Captura el Valor del INPUT y lo retorna
    if(inputLibras.value == 0){
        return 'X';
    }
    return valor = inputLibras.value;
}

function calcularKilos(){
    // Convierte la variable a Number, ya q se encontraba en string
    console.clear();
    if(mostrarLibras() === 'X'){
        return 0;
    }
    let valorNumber = Number(mostrarLibras());
    console.log(typeof valorNumber);
    console.log('el valor es:', valorNumber);

    // Hace el Calculo para convertir a kilos. Muestra solo los 4 primeros decimales gracias a el .ToFixed(), Y lo vuelve a convertir en Numero! y por ultimo 
    let kilos = valorNumber / 2.2046;
    let fixKilos = kilos.toFixed(4)
    let resKilos = Number(fixKilos);
    console.log(resKilos, typeof resKilos);
    return resKilos;
}




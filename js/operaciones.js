var PrimerValor=parseInt( prompt("Ingrese su primer valor"));
var SegundoValor=parseInt(prompt("Ingrese su segundo valor"));
var resultado=0;
for(i=0;i<5; i++){
    switch(i){
        case 0:
            alert("Se procedera a sumar sus valores ingresados");
            resultado=PrimerValor+SegundoValor;
            alert("El resultado de la suma de sus dos valores es: "+resultado);
            break;
        case 1:
            alert("Se procedera a restar sus valores ingresados");
            resultado=PrimerValor-SegundoValor;
            alert("El resultado de la resta de sus dos valores es: "+resultado);
            break;
        case 2:
            alert("Se procedera a multiplicar sus valores ingresados");
            resultado=PrimerValor*SegundoValor;
            alert("El resultado de la multiplicación de sus dos valores es: "+resultado);
            break;
        case 3:
            alert("Se procedera a división sus valores ingresados");
            resultado=PrimerValor/SegundoValor;
            alert("El resultado de la División de sus dos valores es: "+resultado);
            break;
        case 4:
            alert("Se procedera a sacar el modulo sus valores ingresados");
            resultado=PrimerValor%SegundoValor;
            alert("El resultado de la modulo de sus dos valores es: "+resultado);
            break;
    }
}
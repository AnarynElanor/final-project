##Una web que por medio de un prompt(), pide el número de una tarjeta de crédito y confirma su validez según el algoritmo de Luhn. 

Requerimientos: 

- Tu código debe estar compuesto por 1 función: isValidCard 
- El usuario no debe poder ingresar un campo vacío


*Pseudocóigo: 

1. Se solicíta valor de entrada. 
2. Verificar que el valor ingresado no esté vacío. 
	2.1 De ser así, no continuar con el programa. 
3. Si el valor es adecuado, guardar los elementos del string como arreglo 	 y convertirlos a tipo number.
4. Invertir el arreglo obtenido.
5. Para las posiciones pares del arreglo, doblar el valor. 
	5.1 Si el valor es es >10. Convertir a string. 
		5.1.1 Guardarlo en un arreglo. 
		5.1.2 Realizar la suma de los valores para que sea <10.
		5.1.3 Sustituir el nuevo valor en su posición del arreglo con los demás números. 
	5.2 Si es <10 ingresar sustituir el nuevo valor en su posición del arreglo con los demás números.
6. Realizar la suma completo del array invertido y con los nuevos valores. 
7. Obtener el modulo de la suma y 10. 
	7.1 Si el resultado es igual a 0. Indicar que es una tarjeta válida y retornar verdadero.
	7.2 Si es diferente de 0. Indicar que la tarjeta no es válida y retornar falso. 

*Diagrama de flujo: 







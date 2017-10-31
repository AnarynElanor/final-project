
//Solicitamos el valor de entrada (número de la tarjeta).
var numCard = prompt('Por favor ingresa un número a validar:');


//Se declara variable isValidCard
var isValidCard = function(num){
  
  if(num.length === null || num.length === undefined || num.length === 0){ //if para que el usuario no pueda ingresar campo vacío.
        
        alert('Intenta de nuevo');
        return false; 

	}else{ //Si se ingresa un valor comienza a trabajar con él.
  
  		var newNumber = 0; //Variable para guardar los valores de la conversión de string a number.
  		var array=[]; //Arreglo vacío para guardar los datos numeros de la tarjeta.
  		  
        //for para recorrer los números del string recibido del prompt, convertirlos a número y guardarlos como elementos del array.
  		for (var i = 0; i < num.length; i++) { 
        	newNumber = parseInt(num.substr(i, 1));
        	array[i]= newNumber;
    	}
        
        var newArray= array.reverse();  //Se declara variable para guardar el arreglo ya invertido. 
  		var sum=0; 						//Variable para guardar la suma de los números de la tarjeta.
  		console.log(newArray);			//Visualizar en consola el nuevo arreglo. 
  

        //Ciclo for para doblar el valor de los elementos pares del arreglo y realizar suman de dígitos si es > 10.
  		for(var j=1; j <= newArray.length-1 ; j= j+2){
      		var dobleNum = (newArray[j]*2);    //Se declara variable para guardar el valor multiplicado por dos.
      

        	if (dobleNum>=10){		//if para cuando el número > 10 se suman los digitos. 
          
            	var minorTen= String(dobleNum); 	//Se declara variable donde el numero se convierte a string.
            	var res = minorTen.split('');		//Se declara varible para guardar los elementos del string en un array.
            	var numero = 0;						//Varibale para guardar la suma de los números.
            

            	//Ciclo for para realizar la suma de los digitos
            	for (var k = 0; k < res.length; k++){

            		var a = Number(res[k]); 		//Se declara variable para guardar el valor del arreglo convertido en número.
           			numero = numero + a;
            	}
          
          		newArray[j]= numero; 				//Sustituye el nuevo valor en el arreglo de todos los números de la tarjeta.
         		//console.log(dobleNum);
          		//continue;
          
        	}else{			//Si el doble del número es < 10 se sustituye directo el valor en el arreglo de todos los números de la tarjeta. 
          		newArray[j]= dobleNum;				
        	}
   		}

        
        //Ciclo for para sumar los elementos del array con los nuevos valores. 
  		for(j=0; j <= newArray.length-1 ; j++){
    
    		sum= newArray[j]+sum; 
  		}
  
  		console.log(newArray);		//Despliega en consola el nuevo arreglo con valore modificados.
  		console.log(sum);			//Despliega en consola el valor de la suma de todos los numeros del arreglo. 
  


  		if(sum % 10 === 0){ 		//Si el modulo de la suma es 0, la tarjeta es válida. Envia alert de confirmación y retorna verdadero. 
    
    		alert('La tarjeta es válida'); 
    		return true; 
  		}else{ 						//Si el modulo de la suma es diferente de 0, la tarjeta no es válida. Envia alert de confirmación y retorna faso.

    		alert('Tarjeta rechazada');
    		return false;
    	}
  	}
} 

//Llamando la función para el valor requerido de entrada.     
isValidCard(numCard);
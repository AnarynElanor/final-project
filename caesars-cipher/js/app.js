

var phrase = prompt('Ingresa una frase para cifrar o descifrar');

 
var array = [];
for (var i = 0; i < phrase.length; i++) { 
  if(phrase.length === null || phrase.length === undefined || phrase.length === 0){ 
        alert('Intenta de nuevo');
        //return false; 

	}else{
	  
      var newLetter = phrase.charCodeAt(i);
      
      array[i]= newLetter;
      
  }
}
  
  console.log(array);
  


var cipher = function(text){
  
  var newArray=[];
  
  for (var i = 0; i < text.length; i++){
    
    var x = 0;
    
    if(array[i]>= 65 && array[i]<=90){
      
      x= (array[i]-32)%26;
      newArray[i] = 65 + x;
      
    }else if(array[i]>= 97 && array[i]<=122){
      
      x= (array[i]-64)%26;
      newArray[i] = 97 + x;
      
    }else {
      
      newArray[i]=array[i];
    }
  }
  
  console.log(newArray);
  var cipherArray = [];
  
  for (i = 0; i < newArray.length; i++) { 
      newLetter = String.fromCharCode(newArray[i]);
      cipherArray[i]= newLetter;
  }
  
  
  var message = cipherArray.join('');
  console.log(message);
  return message;
}

var decipher = function(text){
  var newArray=[];
  
  for (var i = 0; i < text.length; i++){
    
    var x = 0;
    
    if(array[i]>= 65 && array[i]<=90){
      
      x= (array[i] - 46)%26;
      newArray[i] = 65 + x;
      
    }else if(array[i]>= 97 && array[i]<=122){
      
      x= (array[i] -78)%26;
      newArray[i] = 97 + x;
      
    }else {
      
      newArray[i]=array[i];
    }
  }
  
  console.log(newArray);
  var cipherArray = [];
  
  for (i = 0; i < newArray.length; i++) { 
      newLetter = String.fromCharCode(newArray[i]);
      cipherArray[i]= newLetter;
  }
  
  
  var message = cipherArray.join('');
  console.log(message);
  return message;
}

cipher(array);
//decipher(array);
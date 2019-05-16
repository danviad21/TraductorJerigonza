var expReg = new RegExp('^[(a|e|i|o|u)]');
var codigoTecla=0;

function getTraduccion(){
  var cadena = document.getElementById('txtOrigen').value;
  var nuevaCadena = document.getElementById('txtResultado').value;
  var i = cadena.length-1;

  if(i>=0 && codigoTecla!=8){
    nuevaCadena += (expReg.test(cadena.charAt(i))) ?
     cadena.charAt(i) + 'p' + cadena.charAt(i) : cadena.charAt(i);
  }
  document.getElementById('txtResultado').innerHTML = nuevaCadena;
}

function getTraduccion1(event){
  codigoTecla = event.keyCode;
  var cadena = document.getElementById('txtOrigen').value;
  var nuevaCadena = document.getElementById('txtResultado').value;
  var i = cadena.length-1;
  var j = nuevaCadena.length;

  if(codigoTecla==8||codigoTecla==127){
    nuevaCadena = expReg.test(cadena.charAt(i))?
    nuevaCadena = nuevaCadena.substring(0,j-3):nuevaCadena.substring(0,j-1);
  }
  document.getElementById('txtResultado').innerHTML = nuevaCadena;
}

function reset(){
  document.getElementById('txtOrigen').value="";
  document.getElementById('txtResultado').innerHTML="";
}

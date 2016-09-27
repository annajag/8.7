var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);

console.log(allNames);

var newName ='Marian';
if (allNames.indexOf(newName) == -1)
{allNames.push('Marian');}

console.log(allNames);
  
/*var newName = allNames.push('Marian');
console.log(allNames);*/
             
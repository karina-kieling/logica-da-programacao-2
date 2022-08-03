//logica da programacao, turma 14, full-stack
//encontro remoto 2


//Se o numero for par, escreva "par" e o numero correspondente
//Se o numero for impar, escreva "impar" e o numero correspondente
//Se for zero, escreva "zero"
// % - pega o resto da divisao
// / - significa divisão

let numeroDeAlunos = [ "Ana","Beatriz","Caio","Douglas","Eliseu"]
   for (let contador = 0; contador < numeroDeAlunos.length; contador++) {
    
    if (contador == 0) {
        console.log("zero")
    
    }else if (contador % 2 == 0) {
        console.log("o numero "+ (contador) + " é par")
       
    }else {
        console.log("o numero "+ (contador) + " é impar")
       }
   }



 //numeroDeAlunos.forEach(cadaItem => {
  //console.log(cadaItem)
  // })
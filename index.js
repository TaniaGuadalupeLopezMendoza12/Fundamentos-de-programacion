console.log("Arreglo Original");
let Arreglo = [[1,2,3],
               [4,5,6],
               [7,8,9]]
for (let i=0; i< Arreglo.length; i++){
     console.log(Arreglo[i]);
    }
console.log(" ");
console.log("Salida 1");
 function print(mat){
    let renglon= ""
   for (let i=mat.length-1; i>= 0 ; i--){
         renglon=" [ "
         for (let j=mat[0].length-1; j >=0 ; j--){
         renglon += ""+mat[i][j]+ " ";
      }
      renglon += "]"
      console.log(renglon);
   }          
}
print(Arreglo);
console.log(" ");
console.log(" Salida 2");
   for (let i=0; i<Arreglo.length; i++){
      console.log(Arreglo[0][i],Arreglo[1][i],Arreglo[2][i]);  
      }

console.log(" ");
console.log("Salida 3");{
 function print(mat){
    let renglon= ""
   for (let i=mat[0].length-1; i>= 0; i--){
         renglon=" [ "
         for (let j=mat.length-1; j>=0 ; j--){
         renglon += ""+mat[j][i]+ " ";
      }
      renglon += "]"
      console.log(renglon);
   }          
}
print(Arreglo) 
}   
/* Apoyo
console.log("Arreglo Original");
for (let i=0; i<Arreglo.length; i++){
respuestaAr= Arreglo[0][i]
console.log(Arreglo[i][0],Arreglo[i][1],Arreglo[i][2]);    
} 
console.log("Salida 1*");
console.log(Arreglo[2][2],Arreglo[2][1],Arreglo[2][0]);
console.log(Arreglo[1][2],Arreglo[1][1],Arreglo[1][0]);
console.log(Arreglo[0][2],Arreglo[0][1],Arreglo[0][0]);
                  /*i  j    
console.log("3 ejemplo *");
console.log(Arreglo[2][2],Arreglo[1][2],Arreglo[0][2]);
console.log(Arreglo[2][1],Arreglo[1][1],Arreglo[0][1]);
console.log(Arreglo[2][0],Arreglo[1][0],Arreglo[0][0]);*/
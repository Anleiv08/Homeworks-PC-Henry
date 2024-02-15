function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  if(a > b){
    
    let temp = a;
    a = b;
    b = temp;
  }
  for(let i = a; i <= b; i++){
    producto *= i;
  }
  return Math.abs(producto)

  

}
 

module.exports = productoEntreNúmeros;
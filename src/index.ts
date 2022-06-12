//Clase 15 - Viernes 10 de junio de 2022 - EJERCICIOS DE REPASO

/*(EJERCICIO 2 MODIFICADO PARA DESPEJAR DUDAS) 
Consigna:
Solicitar al usuario los precios de sus compras, 
agregarlos a un arreglo. 
Luego, efectuar un descuento en porcentajes, 
si la compra es mayor a $3000 el descuento es 10%,
si la compra es mayor a $5000 el descuento es 20%.
Mostar el resultado.*/

let cantidadProductos: number = Number(
  prompt("¿Cuántos productos desea ingresar? ")
);
let arregloDeProductos: number[] = new Array(cantidadProductos);

function cargarArreglo(arreglo: number[], longitud: number) {
  let indice: number;

  for (indice = 0; indice < longitud; indice++) {
    arreglo[indice] = Number(
      prompt("Ingrese el precio del producto en posición " + (indice + 1))
    );
  }
  console.log(arreglo);
}

function calcularCompra(arreglo: number[], cantidad: number) {
  let indice: number;
  let sumaTotal: number = 0;

  for (indice = 0; indice < cantidad; indice++) {
    sumaTotal += arreglo[indice];
  }
  if (sumaTotal > 3000 && sumaTotal <= 5000) {
    sumaTotal = sumaTotal * 0.9;
    console.log(
      "¡Usted ha obtenido un 10% de descuento! Su compra es: " + sumaTotal
    );
  } else if (sumaTotal > 5000) {
    sumaTotal = sumaTotal * 0.8;
    console.log(
      "¡Usted ha obtenido un 20% de descuento! Su compra es: " + sumaTotal
    );
  } else {
    console.log("El valor de su compra es: " + sumaTotal);
  }
}

cargarArreglo(arregloDeProductos, cantidadProductos);
calcularCompra(arregloDeProductos, cantidadProductos);

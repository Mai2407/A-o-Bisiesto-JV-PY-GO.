let año= Number(prompt('Digite el año: '))

     if ((año % 4 === 0 && año % 100 != 0) || año % 400 === 0) {
         console.log("Año bisiesto")

    } else {

         console.log("Año NO bisiesto")
}
año = int(input("Introduce el año: "))

if (año % 4 == 0 and año % 100 != 0) or año % 400 == 0:

    print("Año bisiesto")

else:

    print("Año NO bisiesto")

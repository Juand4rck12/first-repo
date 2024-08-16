# Sumar los datos de un array.

def sumarDatosArray(arr):
    acum = 0
    for x in arr:
        acum += x
    return acum
    
nums = [10,10,10,10]

print(sumarDatosArray(nums))
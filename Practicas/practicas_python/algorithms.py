# Imprimir la tabla de multiplicar de un numero n dado

def tableofmultiply(n):
    for i in range (2, 11):
        print(f"{n} x {i} = {n * i}")
        
tableofmultiply(5)
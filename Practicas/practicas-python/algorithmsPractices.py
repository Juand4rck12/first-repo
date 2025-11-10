# Practica de algoritmos con Python

# 1. Verificar si una palabra es un palíndromo 
#algoritmo 1
def isPalindrome(word):
    revWord = word.lower() [::-1]
    print(f"{word} " f"Es un palindromo" if revWord == word else "No es un palindromo.")
    
isPalindrome("roma")

# Algoritmo 2
"""
se recorre la palabra de izquierda a derecha y vicebersa mientras se va comparando letra
por letra para determinar si es igual a la otra, si no se sigue comparando hasta terminar el 
recorrido de la palabra o hasta encontrar una diferencia que signifique que no es palindromo
"""
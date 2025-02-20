a = 10
b = 5

print(f"---PRIMERO: ---\nA: {a} B: {b}")

a = a ^ b
b = a ^ b
a = a ^ b

print(f"---DESPUES: ---\nA: {a} B: {b}")

print(5 ^ 3)
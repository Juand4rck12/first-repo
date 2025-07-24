names = []

for i in range(3):
    names[0] = input("Digite un nombre para llenar el array: ")
    names[1] = input("Digite un nombre para llenar el array: ")
    names[2] = input("Digite un nombre para llenar el array: ")

rows = 2
longName = max(len(name) for name in names)
cols = longName + 4
for i in range(rows):
    for j in range(cols):
        if i == 1 and j == 0:
            for name in names:
                print(f"* {name.ljust(longName)} *")
            
        print("*", end="")
    print()
    
    

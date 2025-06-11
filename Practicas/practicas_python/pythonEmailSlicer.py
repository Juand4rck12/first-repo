# Obtener el email del usuario
email = input("Cual es tu email?: ").strip()

# Cortar el nombre del usuario
usuario = email[:email.index("@")]

# Cortar el dominio
dominio = email[email.index("@") + 1:]

# Formatear el mensaje
salida = "Tu nombre de usuario es: {} y tu nombre de dominio es {}".format(usuario, dominio)

# Mostrar mensaje de salida
print(salida)

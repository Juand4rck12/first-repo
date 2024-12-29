import os

# Ruta de la carpeta que contiene las fotos
folder_path = r"C:\Users\victus\OneDrive\Vídeos\Video navidad\Fotos en marco"  # Reemplaza con tu ruta

# Prefijo para los nuevos nombres
new_name_prefix = "foto "

# Extensión fija para las fotos
file_extension = ".jpeg"

try:
    # Listar los archivos en la carpeta
    files = os.listdir(folder_path)

    # Filtrar solo archivos con extensión .jpeg
    jpeg_files = [f for f in files if f.lower().endswith(file_extension)]

    # Ordenar los archivos (opcional, según su nombre original)
    jpeg_files.sort()

    # Renombrar cada archivo
    for index, file_name in enumerate(jpeg_files, start=1):
        # Ruta completa del archivo actual
        old_path = os.path.join(folder_path, file_name)

        # Nueva ruta con el nuevo nombre
        new_name = f"{new_name_prefix}{index}{file_extension}"
        new_path = os.path.join(folder_path, new_name)

        # Renombrar el archivo
        os.rename(old_path, new_path)
        print(f"Renombrado: {file_name} -> {new_name}")

    print("¡Renombrado completo!")
except Exception as e:
    print(f"Error: {e}")

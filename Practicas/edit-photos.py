from PIL import Image, ImageOps
import os

# Ruta de la carpeta que contiene las fotos
input_folder = r"C:\Users\victus\OneDrive\Vídeos\Video navidad\Fotos\Fotos 2"  # Cambia por tu carpeta
output_folder = r"C:\Users\victus\OneDrive\Vídeos\Video navidad\Fotos en marco"  # Carpeta de salida

# Tamaño del lienzo blanco (ancho, alto)
canvas_size = (800, 1000)  # Ajusta según tus necesidades

# Margen interior
inner_margin = 50  # Ajusta el tamaño del margen

# Crear la carpeta de salida si no existe
os.makedirs(output_folder, exist_ok=True)

# Procesar las fotos
for file_name in os.listdir(input_folder):
    if file_name.lower().endswith(('.jpg', '.jpeg', '.png')):
        try:
            # Ruta completa del archivo
            input_path = os.path.join(input_folder, file_name)
            output_path = os.path.join(output_folder, file_name)

            # Abrir la imagen
            img = Image.open(input_path)

            # Redimensionar la imagen para que quepa dentro del lienzo con margen
            max_width = canvas_size[0] - 2 * inner_margin
            max_height = canvas_size[1] - 2 * inner_margin
            img.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)

            # Crear un lienzo blanco
            canvas = Image.new("RGB", canvas_size, "white")

            # Calcular las coordenadas para centrar la imagen en el lienzo
            x_offset = (canvas_size[0] - img.width) // 2
            y_offset = (canvas_size[1] - img.height - inner_margin) // 2
            y_offset += 20  # Espacio extra para extender el marco inferior

            # Pegar la imagen en el lienzo
            canvas.paste(img, (x_offset, y_offset))

            # Guardar la nueva imagen
            canvas.save(output_path)
            print(f"Procesada: {file_name}")
        except Exception as e:
            print(f"Error al procesar {file_name}: {e}")

print("¡Todas las fotos han sido procesadas y guardadas con marcos!")

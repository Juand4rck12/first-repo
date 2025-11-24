import cv2

image = cv2.imread("C:/Users/victus/OneDrive/Escritorio/first-repo/Tareas/modulo_frontend/tarea_3/tareaTres/public/miles_morales.jpg")

# Ejercicio: Conversión a escala de grises y detección de bordes
if image is None:
    print("Error: no se pudo cargar la imagen")
    exit()
    
# Convertir la imagen a escala de grises
grayImage = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Aplicar el detector de bordes de Canny
bordes = cv2.Canny(grayImage, 50, 150)

# mostrar las imagenes originales y procesadas
cv2.imshow('Imagen original', image)
cv2.imshow('Imagen en escala de grises', grayImage)
cv2.imshow('Bordes detectados (Canny)', bordes)

cv2.waitKey(0)
cv2.destroyAllWindows()

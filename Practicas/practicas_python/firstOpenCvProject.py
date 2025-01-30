import cv2

# Leer una imagen desde el archivo
image = cv2.imread("C:/Users/victus/OneDrive/Escritorio/first-repo/Tareas/modulo_frontend/tarea_3/tareaTres/public/miles_morales.jpg")

# mostrar la imagen en una ventana
cv2.imshow("Mi imagen", image)

# Esperar hasta que se presione una tecla
cv2.waitKey(0)

cv2.destroyAllWindows()

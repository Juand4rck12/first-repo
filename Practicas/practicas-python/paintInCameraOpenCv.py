import cv2

# Iniciar la cámara
video = cv2.VideoCapture(0)

if not video.isOpened():
    print("No se pudo acceder a la cámara.")
    exit()

print("Presiona 'q' para salir...")

while True:
    # Leer cada cuadro del video
    ret, frame = video.read()
    if not ret:
        print("Error al capturar el cuadro.")
        break

    # Dibujar un rectángulo en el cuadro
    cv2.rectangle(frame, (100, 100), (300, 300), (0, 255, 0), 3)

    # Añadir texto al cuadro
    cv2.putText(frame, "Area de Interes", (110, 90), cv2.FONT_ITALIC, 0.7, (255, 0, 0), 2, cv2.LINE_AA)

    # Mostrar el cuadro con las modificaciones
    cv2.imshow("Video en Tiempo Real", frame)

    # Salir al presionar 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Liberar recursos
video.release()
cv2.destroyAllWindows()

# Capturar video en tiempo real
import cv2

# (usa el índice 0 para la cámara predeterminada)
video = cv2.VideoCapture(0)

# Verificar si la camara se abrio correctamente
if not video.isOpened():
    print("No se pudo acceder a la cámara")
    exit()
    
print("Presiona 'q' para salir...")

# Bucle para capturar video cuadro por cuadro
while True:
    # ret: Indica si se capturó el cuadro correctamente (True/False).
    # frame: Contiene los datos del cuadro capturado.
    ret, frame = video.read()
    
    # Verificar si el cuadro fue capturado correctamente
    if not ret:
        print("Error al capturar el cuadro")
        break
    
    # Convertir el cuadro a escala de grises
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Aplicar el detector de bordes de Canny
    bordes = cv2.Canny(gray, 50, 150)
        
    # Mostrar el cuadro en una ventana
    cv2.imshow("Video original", frame)
    cv2.imshow("Video en escala de grises", gray)
    cv2.imshow("Bordes detectados", bordes)
    
    # salir del bucle al presionar la tecla 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    
video.release()
cv2.destroyAllWindows()
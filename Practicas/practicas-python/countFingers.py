import cv2
import mediapipe as mp

# Inicializar la solución de manos de Mediapipe
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

# Crear el objeto de detección de manos
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=2, min_detection_confidence=0.8, min_tracking_confidence=0.8)

# Función para contar los dedos levantados
def contar_dedos(hand_landmarks):
    dedos = 0
    puntos = hand_landmarks.landmark

    # Coordenadas clave: Muñeca y puntas de los dedos
    # Thumb: punto 4 y 3 para el pulgar
    if puntos[4].x < puntos[3].x and abs(puntos[4].y - puntos[3].y) > 0.02:  # Verificar si el pulgar está levantado (mano izquierda o derecha)
        dedos += 1

    # Verificar dedos (índice, medio, anular, meñique)
    for i in [8, 12, 16, 20]:  # Índices de las puntas de los dedos
        if puntos[i].y < puntos[i - 2].y:  # Comparar punta con su base
            dedos += 1

    return dedos

# Iniciar la captura de video
video = cv2.VideoCapture(0)

print("Presiona 'q' para salir...")
while True:
    ret, frame = video.read()
    if not ret:
        print("Error al capturar el video.")
        break

    # Convertir el cuadro a RGB para Mediapipe
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Realizar la detección de manos
    resultado = hands.process(frame_rgb)

    # Inicializar variables de conteo
    suma_dedos = 0
    dedos_mano1 = 0
    dedos_mano2 = 0

    if resultado.multi_hand_landmarks:
        for i, hand_landmarks in enumerate(resultado.multi_hand_landmarks):
            # Dibujar los puntos clave en la mano
            mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

            # Contar los dedos para cada mano
            if i == 0:
                dedos_mano1 = contar_dedos(hand_landmarks)
            elif i == 1:
                dedos_mano2 = contar_dedos(hand_landmarks)

        # Calcular la suma si hay dos manos
        if len(resultado.multi_hand_landmarks) == 2:
            suma_dedos = dedos_mano1 + dedos_mano2

    # Mostrar los conteos en la pantalla
    cv2.putText(frame, f"Mano 1: {dedos_mano1} dedos", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
    cv2.putText(frame, f"Mano 2: {dedos_mano2} dedos", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
    cv2.putText(frame, f"Suma total: {suma_dedos}", (10, 90), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (50, 50, 50), 2)

    # Mostrar el video en tiempo real
    cv2.imshow("Detección de dedos", frame)

    # Salir al presionar 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Liberar recursos
video.release()
cv2.destroyAllWindows()

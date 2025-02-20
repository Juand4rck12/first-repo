# import pygame
# import math
# import sys

# # Inicializar Pygame
# pygame.init()

# # Configuración de la pantalla
# WIDTH, HEIGHT = 800, 800
# screen = pygame.display.set_mode((WIDTH, HEIGHT))
# pygame.display.set_caption("Bola en Hexágono Giratorio")

# # Colores
# WHITE = (255, 255, 255)
# BLACK = (0, 0, 0)
# RED = (255, 0, 0)
# BLUE = (0, 0, 255)

# # Configuración del hexágono
# HEX_RADIUS = 300  # Radio del hexágono
# HEX_CENTER = (WIDTH // 2, HEIGHT // 2)  # Centro del hexágono
# NUM_SIDES = 6  # Número de lados del hexágono

# # Configuración de la bola
# BALL_RADIUS = 10
# ball_x, ball_y = HEX_CENTER[0], HEX_CENTER[1] - HEX_RADIUS + BALL_RADIUS  # Posición inicial de la bola
# ball_velocity = [0, 0]  # Velocidad inicial de la bola
# GRAVITY = 0.1  # Aceleración gravitatoria
# FRICTION = 0.99  # Fricción para reducir la velocidad

# # Configuración de la rotación
# rotation_angle = 0  # Ángulo inicial de rotación
# ROTATION_SPEED = 2  # Velocidad de rotación del hexágono

# # Función para dibujar un hexágono rotado
# def draw_rotated_hexagon(surface, center, radius, angle):
#     points = []
#     for i in range(NUM_SIDES):
#         # Calcular los vértices del hexágono
#         x = center[0] + radius * math.cos(math.radians(360 / NUM_SIDES * i + angle))
#         y = center[1] + radius * math.sin(math.radians(360 / NUM_SIDES * i + angle))
#         points.append((x, y))
#     pygame.draw.polygon(surface, BLUE, points, 2)  # Dibujar el hexágono con bordes azules

# # Función para verificar colisiones con los bordes del hexágono
# def check_collision(ball_pos, hex_center, hex_radius, angle):
#     # Convertir la posición de la bola a coordenadas polares relativas al centro del hexágono
#     dx = ball_pos[0] - hex_center[0]
#     dy = ball_pos[1] - hex_center[1]
#     distance = math.hypot(dx, dy)
#     theta = math.atan2(dy, dx) - math.radians(angle)

#     # Normalizar el ángulo al rango [0, 2π]
#     theta = theta % (2 * math.pi)

#     # Determinar el segmento del hexágono más cercano
#     segment_angle = 2 * math.pi / NUM_SIDES
#     segment_index = int(theta // segment_angle)

#     # Calcular el ángulo del punto medio del segmento
#     segment_mid_angle = segment_angle * (segment_index + 0.5)

#     # Proyectar la bola hacia el borde del hexágono si está fuera
#     if distance > hex_radius - BALL_RADIUS:
#         new_distance = hex_radius - BALL_RADIUS
#         ball_pos[0] = hex_center[0] + new_distance * math.cos(segment_mid_angle + math.radians(angle))
#         ball_pos[1] = hex_center[1] + new_distance * math.sin(segment_mid_angle + math.radians(angle))
#         return True
#     return False

# # Bucle principal
# clock = pygame.time.Clock()
# running = True

# while running:
#     screen.fill(WHITE)

#     # Manejo de eventos
#     for event in pygame.event.get():
#         if event.type == pygame.QUIT:
#             running = False

#     # Actualizar la rotación del hexágono
#     rotation_angle += ROTATION_SPEED
#     rotation_angle %= 360

#     # Aplicar gravedad a la bola
#     ball_velocity[1] += GRAVITY

#     # Actualizar la posición de la bola
#     ball_x += ball_velocity[0]
#     ball_y += ball_velocity[1]

#     # Verificar colisiones con el hexágono
#     collision = check_collision([ball_x, ball_y], HEX_CENTER, HEX_RADIUS, rotation_angle)
#     if collision:
#         # Invertir la velocidad perpendicular al borde y aplicar fricción
#         ball_velocity[0] *= -FRICTION
#         ball_velocity[1] *= -FRICTION

#     # Dibujar el hexágono rotado
#     draw_rotated_hexagon(screen, HEX_CENTER, HEX_RADIUS, rotation_angle)

#     # Dibujar la bola
#     pygame.draw.circle(screen, RED, (int(ball_x), int(ball_y)), BALL_RADIUS)

#     # Actualizar la pantalla
#     pygame.display.flip()

#     # Controlar la velocidad del bucle
#     clock.tick(60)

# # Salir de Pygame
# pygame.quit()
# sys.exit()

import pygame
import math
import sys

# Inicializar Pygame
pygame.init()

# Configuración de la pantalla
WIDTH, HEIGHT = 800, 800
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Bola en Hexágono Giratorio - Versión Mejorada")

# Colores
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
SHADOW = (100, 100, 255)

# Configuración del hexágono
HEX_RADIUS = 300  # Radio del hexágono
HEX_CENTER = (WIDTH // 2, HEIGHT // 2)  # Centro del hexágono
NUM_SIDES = 6  # Número de lados del hexágono

# Configuración de la bola
BALL_RADIUS = 15
ball_x, ball_y = HEX_CENTER[0], HEX_CENTER[1] - HEX_RADIUS + BALL_RADIUS  # Posición inicial de la bola
ball_velocity = [0, 0]  # Velocidad inicial de la bola
GRAVITY = 0.1  # Aceleración gravitatoria
FRICTION = 0.97  # Fricción para reducir la velocidad
ball_rotation = 0  # Rotación de la bola

# Configuración de la rotación
rotation_angle = 0  # Ángulo inicial de rotación
ROTATION_SPEED = 2  # Velocidad de rotación del hexágono

# Efecto de estela
trail = []

# Función para dibujar un hexágono rotado con sombreado
def draw_rotated_hexagon(surface, center, radius, angle):
    points = []
    for i in range(NUM_SIDES):
        # Calcular los vértices del hexágono
        x = center[0] + radius * math.cos(math.radians(360 / NUM_SIDES * i + angle))
        y = center[1] + radius * math.sin(math.radians(360 / NUM_SIDES * i + angle))
        points.append((x, y))
    
    # Dibujar el hexágono con sombreado
    pygame.draw.polygon(surface, SHADOW, points)  # Sombra
    pygame.draw.polygon(surface, BLUE, points, 3)  # Borde azul

# Función para verificar colisiones con los bordes del hexágono
def check_collision(ball_pos, hex_center, hex_radius, angle):
    dx = ball_pos[0] - hex_center[0]
    dy = ball_pos[1] - hex_center[1]
    distance = math.hypot(dx, dy)
    theta = math.atan2(dy, dx) - math.radians(angle)

    # Normalizar el ángulo al rango [0, 2π]
    theta = theta % (2 * math.pi)

    # Determinar el segmento del hexágono más cercano
    segment_angle = 2 * math.pi / NUM_SIDES
    segment_index = int(theta // segment_angle)

    # Calcular el ángulo del punto medio del segmento
    segment_mid_angle = segment_angle * (segment_index + 0.5)

    # Proyectar la bola hacia el borde del hexágono si está fuera
    if distance > hex_radius - BALL_RADIUS:
        new_distance = hex_radius - BALL_RADIUS
        ball_pos[0] = hex_center[0] + new_distance * math.cos(segment_mid_angle + math.radians(angle))
        ball_pos[1] = hex_center[1] + new_distance * math.sin(segment_mid_angle + math.radians(angle))
        return True
    return False

# Bucle principal
clock = pygame.time.Clock()
running = True

while running:
    screen.fill(WHITE)

    # Manejo de eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Control de la velocidad de rotación con las teclas de flecha
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        ROTATION_SPEED -= 0.1
    if keys[pygame.K_RIGHT]:
        ROTATION_SPEED += 0.1

    # Limitar la velocidad de rotación
    ROTATION_SPEED = max(-10, min(10, ROTATION_SPEED))

    # Actualizar la rotación del hexágono
    rotation_angle += ROTATION_SPEED
    rotation_angle %= 360

    # Aplicar gravedad a la bola
    ball_velocity[1] += GRAVITY

    # Actualizar la posición de la bola
    ball_x += ball_velocity[0]
    ball_y += ball_velocity[1]

    # Verificar colisiones con el hexágono
    collision = check_collision([ball_x, ball_y], HEX_CENTER, HEX_RADIUS, rotation_angle)
    if collision:
        # Invertir la velocidad perpendicular al borde y aplicar fricción
        ball_velocity[0] *= -FRICTION
        ball_velocity[1] *= -FRICTION

    # Actualizar la rotación de la bola
    ball_rotation += math.hypot(ball_velocity[0], ball_velocity[1]) * 2
    ball_rotation %= 360

    # Agregar la posición actual de la bola a la estela
    trail.append((int(ball_x), int(ball_y)))
    if len(trail) > 20:  # Mantener solo las últimas posiciones
        trail.pop(0)

    # Dibujar el hexágono rotado
    draw_rotated_hexagon(screen, HEX_CENTER, HEX_RADIUS, rotation_angle)

    # Dibujar la estela de la bola
    for i, pos in enumerate(trail):
        alpha = int(255 * (i / len(trail)))  # Gradiente de opacidad
        pygame.draw.circle(screen, (255, 0, 0, alpha), pos, BALL_RADIUS // 2)

    # Dibujar la bola con rotación
    rotated_ball = pygame.Surface((BALL_RADIUS * 2, BALL_RADIUS * 2), pygame.SRCALPHA)
    pygame.draw.circle(rotated_ball, RED, (BALL_RADIUS, BALL_RADIUS), BALL_RADIUS)
    pygame.draw.line(rotated_ball, WHITE, (BALL_RADIUS, BALL_RADIUS), 
                     (BALL_RADIUS + BALL_RADIUS * math.cos(math.radians(ball_rotation)), 
                      BALL_RADIUS + BALL_RADIUS * math.sin(math.radians(ball_rotation))), 2)
    screen.blit(rotated_ball, (int(ball_x) - BALL_RADIUS, int(ball_y) - BALL_RADIUS))

    # Mostrar la velocidad de rotación
    font = pygame.font.SysFont("Arial", 20)
    text = font.render(f"Rotación: {ROTATION_SPEED:.1f}", True, BLACK)
    screen.blit(text, (10, 10))

    # Actualizar la pantalla
    pygame.display.flip()

    # Controlar la velocidad del bucle
    clock.tick(60)

# Salir de Pygame
pygame.quit()
sys.exit()
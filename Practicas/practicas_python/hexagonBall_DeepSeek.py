import pygame
import math
import random

# Inicializar Pygame
pygame.init()

# Configuración de la pantalla
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Bola en Hexágono Giratorio Mejorado")

# Colores
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)

# Parámetros de la bola
ball_radius = 20
ball_pos = [width // 2, height // 2]
ball_velocity = [0, 0]
ball_angular_velocity = 0  # Rotación de la bola
ball_rotation_angle = 0  # Inicializar el ángulo de rotación de la bola
gravity = 0.5
friction = 0.99

# Parámetros del hexágono
hexagon_radius = 200
hexagon_angle = 0
hexagon_rotation_speed = 0.01

# Función para dibujar un hexágono
def draw_hexagon(surface, position, radius, angle, color):
    points = []
    for i in range(6):
        x = position[0] + radius * math.cos(math.radians(60 * i + angle))
        y = position[1] + radius * math.sin(math.radians(60 * i + angle))
        points.append((x, y))
    pygame.draw.polygon(surface, color, points, 2)

# Función para verificar colisión con los lados del hexágono
def check_collision(ball_pos, ball_radius, hexagon_pos, hexagon_radius, angle):
    for i in range(6):
        x1 = hexagon_pos[0] + hexagon_radius * math.cos(math.radians(60 * i + angle))
        y1 = hexagon_pos[1] + hexagon_radius * math.sin(math.radians(60 * i + angle))
        x2 = hexagon_pos[0] + hexagon_radius * math.cos(math.radians(60 * (i + 1) + angle))
        y2 = hexagon_pos[1] + hexagon_radius * math.sin(math.radians(60 * (i + 1) + angle))

        # Distancia del punto a la línea
        numerator = abs((y2 - y1) * ball_pos[0] - (x2 - x1) * ball_pos[1] + x2 * y1 - y2 * x1)
        denominator = math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2)
        distance = numerator / denominator

        if distance < ball_radius:
            # Calcular el vector normal del lado del hexágono
            normal = [-(y2 - y1), (x2 - x1)]
            normal_magnitude = math.sqrt(normal[0] ** 2 + normal[1] ** 2)
            normal = [normal[0] / normal_magnitude, normal[1] / normal_magnitude]

            # Calcular el reflejo del vector de velocidad
            dot_product = ball_velocity[0] * normal[0] + ball_velocity[1] * normal[1]
            ball_velocity[0] -= 2 * dot_product * normal[0]
            ball_velocity[1] -= 2 * dot_product * normal[1]

            # Añadir rotación a la bola
            global ball_angular_velocity
            ball_angular_velocity += dot_product * 0.1

            return True
    return False

# Bucle principal
running = True
clock = pygame.time.Clock()

while running:
    screen.fill(WHITE)

    # Manejo de eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Control de la rotación del hexágono con las flechas
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        hexagon_rotation_speed -= 0.001
    if keys[pygame.K_RIGHT]:
        hexagon_rotation_speed += 0.001

    # Actualizar posición de la bola
    ball_velocity[1] += gravity  # Aplicar gravedad
    ball_pos[0] += ball_velocity[0]
    ball_pos[1] += ball_velocity[1]

    # Aplicar fricción
    ball_velocity[0] *= friction
    ball_velocity[1] *= friction

    # Rotar el hexágono
    hexagon_angle += hexagon_rotation_speed

    # Verificar colisión con el hexágono
    if check_collision(ball_pos, ball_radius, [width // 2, height // 2], hexagon_radius, hexagon_angle):
        ball_velocity[0] *= 0.9  # Reducir velocidad después del rebote
        ball_velocity[1] *= 0.9

    # Dibujar el hexágono
    draw_hexagon(screen, [width // 2, height // 2], hexagon_radius, hexagon_angle, BLACK)

    # Actualizar la rotación de la bola
    ball_rotation_angle = (ball_rotation_angle + ball_angular_velocity) % 360

    # Dibujar la bola con rotación
    rotated_ball = pygame.transform.rotate(
        pygame.Surface((ball_radius * 2, ball_radius * 2), pygame.SRCALPHA),
        ball_rotation_angle
    )
    screen.blit(rotated_ball, (int(ball_pos[0] - ball_radius), int(ball_pos[1] - ball_radius)))

    # Actualizar pantalla
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
import pygame
import math
import sys

# Initialize Pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Hexagon Ball Simulation")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)

# Hexagon parameters
hexagon_radius = 200
hexagon_angle = 0
hexagon_center = (WIDTH // 2, HEIGHT // 2)

# Ball parameters
ball_radius = 20
ball_pos = [WIDTH // 2, HEIGHT // 2 - hexagon_radius + ball_radius]
ball_vel = [0, 0]
gravity = 0.5
friction = 0.99

# Clock
clock = pygame.time.Clock()

def draw_hexagon(surface, color, center, radius, angle):
    points = []
    for i in range(6):
        theta = math.radians(angle + i * 60)
        x = center[0] + radius * math.cos(theta)
        y = center[1] + radius * math.sin(theta)
        points.append((x, y))
    pygame.draw.polygon(surface, color, points, 2)

def rotate_point(point, angle, center):
    s, c = math.sin(math.radians(angle)), math.cos(math.radians(angle))
    px, py = point
    cx, cy = center
    px -= cx
    py -= cy
    xnew = px * c - py * s
    ynew = px * s + py * c
    px = xnew + cx
    py = ynew + cy
    return px, py

def main():
    global hexagon_angle, ball_pos, ball_vel

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Update hexagon angle
        hexagon_angle += 1
        if hexagon_angle >= 360:
            hexagon_angle -= 360

        # Apply gravity to ball
        ball_vel[1] += gravity

        # Apply friction to ball
        ball_vel[0] *= friction
        ball_vel[1] *= friction

        # Update ball position
        ball_pos[0] += ball_vel[0]
        ball_pos[1] += ball_vel[1]

        # Check for collision with hexagon edges
        for i in range(6):
            p1 = rotate_point((hexagon_center[0] + hexagon_radius * math.cos(math.radians(hexagon_angle + i * 60)),
                               hexagon_center[1] + hexagon_radius * math.sin(math.radians(hexagon_angle + i * 60))), hexagon_angle, hexagon_center)
            p2 = rotate_point((hexagon_center[0] + hexagon_radius * math.cos(math.radians(hexagon_angle + (i + 1) * 60)),
                               hexagon_center[1] + hexagon_radius * math.sin(math.radians(hexagon_angle + (i + 1) * 60))), hexagon_angle, hexagon_center)
            if p1[1] < ball_pos[1] < p2[1] or p2[1] < ball_pos[1] < p1[1]:
                if p1[0] < ball_pos[0] < p2[0] or p2[0] < ball_pos[0] < p1[0]:
                    ball_vel[1] = -ball_vel[1]

        # Clear screen
        screen.fill(WHITE)

        # Draw hexagon
        draw_hexagon(screen, BLACK, hexagon_center, hexagon_radius, hexagon_angle)

        # Draw ball
        pygame.draw.circle(screen, RED, (int(ball_pos[0]), int(ball_pos[1])), ball_radius)

        # Update display
        pygame.display.flip()

        # Cap the frame rate
        clock.tick(60)

    pygame.quit()
    sys.exit()

if __name__ == "__main__":
    main()
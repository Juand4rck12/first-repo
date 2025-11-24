import pygame
import pymunk
import pymunk.pygame_util
import math

def crear_hexagono(space, pos, radio, velocidad_angular):
    """
    Crea un contenedor hexagonal (cuerpo kinemático) centrado en 'pos' con un radio dado.
    El hexágono rota con velocidad_angular (en radianes por segundo).
    """
    # Creamos un cuerpo kinemático (no afectado por fuerzas externas)
    cuerpo = pymunk.Body(body_type=pymunk.Body.KINEMATIC)
    cuerpo.position = pos
    cuerpo.angular_velocity = velocidad_angular  # Este valor lo usaremos para actualizar manualmente

    # Calculamos los vértices de un hexágono regular (en coordenadas locales del cuerpo)
    vertices = []
    for i in range(6):
        angulo = math.radians(60 * i)
        x = radio * math.cos(angulo)
        y = radio * math.sin(angulo)
        vertices.append((x, y))
        
    # Creamos la forma poligonal con fricción y elasticidad
    forma = pymunk.Poly(cuerpo, vertices)
    forma.friction = 1.0
    forma.elasticity = 0.9
    space.add(cuerpo, forma)
    return cuerpo, forma

def crear_bola(space, pos, radio):
    """
    Crea una bola dinámica en la posición 'pos' con el radio indicado.
    La bola tiene masa, momento de inercia, fricción y elasticidad.
    """
    masa = 1
    momento = pymunk.moment_for_circle(masa, 0, radio)
    cuerpo = pymunk.Body(masa, momento)
    cuerpo.position = pos
    forma = pymunk.Circle(cuerpo, radio)
    forma.friction = 0.5
    forma.elasticity = 0.9
    space.add(cuerpo, forma)
    return cuerpo, forma

def main():
    # Inicialización de Pygame y configuración de la ventana
    pygame.init()
    ancho, alto = 800, 600
    pantalla = pygame.display.set_mode((ancho, alto))
    pygame.display.set_caption("Bola en Hexágono Giratorio")
    reloj = pygame.time.Clock()
    
    # Creamos el espacio físico y definimos la gravedad (en píxeles/s²)
    espacio = pymunk.Space()
    espacio.gravity = (0, 980)  # La gravedad apunta hacia abajo

    # Posición central para el contenedor hexagonal
    centro = (ancho / 2, alto / 2)
    radio_hex = 200
    velocidad_angular_hex = 0.5  # radianes por segundo
    hex_cuerpo, hex_forma = crear_hexagono(espacio, centro, radio_hex, velocidad_angular_hex)
    
    # Creamos la bola dentro del hexágono (colocada un poco desplazada del centro)
    radio_bola = 20
    pos_bola = (centro[0], centro[1] - 100)
    bola_cuerpo, bola_forma = crear_bola(espacio, pos_bola, radio_bola)
    
    # Configuración para dibujar usando Pymunk (opcional)
    opciones_dibujo = pymunk.pygame_util.DrawOptions(pantalla)
    
    corriendo = True
    dt = 1 / 60.0  # Paso de tiempo fijo (60 FPS)
    while corriendo:
        # Manejo de eventos
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                corriendo = False

        # Limpiar la pantalla
        pantalla.fill((255, 255, 255))
        
        # Actualizamos la simulación de Pymunk
        espacio.step(dt)
        
        # Actualizamos manualmente la rotación del hexágono (los cuerpos kinemáticos no se actualizan solos)
        hex_cuerpo.angle += hex_cuerpo.angular_velocity * dt

        # Dibujamos el hexágono (obtenemos sus vértices en coordenadas del mundo)
        vertices_hex = [hex_cuerpo.local_to_world(v) for v in hex_forma.get_vertices()]
        puntos = [(int(x), int(y)) for x, y in vertices_hex]
        pygame.draw.polygon(pantalla, (0, 0, 0), puntos, 2)
        
        # Dibujamos la bola
        pos_bola_actual = bola_cuerpo.position
        pygame.draw.circle(pantalla, (255, 0, 0), (int(pos_bola_actual.x), int(pos_bola_actual.y)), int(bola_forma.radius))
        # Dibujo de una línea que indica la rotación de la bola
        longitud_linea = bola_forma.radius
        angulo_bola = bola_cuerpo.angle
        fin_linea = (
            pos_bola_actual.x + longitud_linea * math.cos(angulo_bola),
            pos_bola_actual.y + longitud_linea * math.sin(angulo_bola)
        )
        pygame.draw.line(pantalla, (0, 0, 0),
                         (int(pos_bola_actual.x), int(pos_bola_actual.y)),
                         (int(fin_linea[0]), int(fin_linea[1])), 2)
        
        # Actualizamos la pantalla
        pygame.display.flip()
        reloj.tick(60)
    
    pygame.quit()

if __name__ == '__main__':
    main()

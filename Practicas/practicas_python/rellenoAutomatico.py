from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from faker import Faker
import time
from webdriver_manager.chrome import ChromeDriverManager  # Importa webdriver-manager

# Configuración del navegador (modo visible o headless)
chrome_options = Options()
# chrome_options.add_argument("--headless")  # Si no quieres abrir la ventana del navegador
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# Usar webdriver-manager para instalar y gestionar ChromeDriver automáticamente
service = Service(ChromeDriverManager().install())  # Obtiene el chromedriver automáticamente
driver = webdriver.Chrome(service=service, options=chrome_options)

# Generador de datos aleatorios
faker = Faker()

# URL del enlace referido
referral_link = "https://videosfund.top/2588272247446629/"

# Contraseña fija para todos los registros
password_fija = "Password123"

registers = 30

# Función para registrar un usuario
def registrar_usuario():
    # Datos aleatorios
    username = faker.user_name()
    email = faker.email()
    password = password_fija
    
    try:
        # Abrir la página de registro
        driver.get(referral_link)
        # Esperar a que la página cargue completamente
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, 'body')))

        # Hacer clic en el botón para abrir el formulario de registro
        driver.find_element(By.CLASS_NAME, "fa-user-plus").click()

        # Esperar a que el formulario de registro esté visible
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "username")))

        # Rellenar los campos del formulario
        username = faker.user_name()
        email = faker.email()
        
        try:
            user_page = driver.find_element(By.NAME, "username")
            email_page = driver.find_element(By.NAME, "email")
            password_page = driver.find_element(By.NAME, "password")
            confirmPass_page = driver.find_element(By.NAME, "pasword1")
            
            user_page.click()
            user_page.send_keys(username)
            email_page.click()
            email_page.send_keys(email)
            password_page.click()
            password_page.send_keys(password)
            confirmPass_page.click()
            confirmPass_page.send_keys(password)
        except:
            print("no encontrado")
        
        
        
        # driver.find_element(By.NAME, "username").click().send_keys(username)  # Campo: Nombre de usuario
        # driver.find_element(By.NAME, "email").send_keys(email)  # Campo: Correo electrónico
        # driver.find_element(By.NAME, "password").send_keys(password)  # Campo: Contraseña
        # driver.find_element(By.NAME, "pasword1").send_keys(password)  # Campo: Confirmar contraseña

        # Enviar el formulario
        driver.find_element(By.CLASS_NAME, "btn btn-primary w-50").click()  # Botón de registro

        # Esperar un momento después del registro
        time.sleep(3)
        print(f"Usuario registrado: {username}, {email}")

    except Exception as e:
        print(f"Error durante el registro de {username}: {e}")

# Ejecutar el proceso para el número de registros deseados
try:
    for i in range(registers):
        print(f"Registrando usuario {i + 1} de {registers}...")
        registrar_usuario()
finally:
    # Cerrar el navegador
    driver.quit()
    print("Proceso completado.")

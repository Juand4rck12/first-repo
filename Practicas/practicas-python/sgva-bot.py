import requests, re, time, random, os
from dotenv import load_dotenv
import pandas as pd
# import json

load_dotenv()

# ================= CONFIGURACIÓN =================
# 1. Pega aquí el valor de tu cookie (La cadena larga que sacaste del Cookie Editor)
ASP_NET_SESSIONID = os.getenv('NET_SessionId')
SGVACOOKIE = os.getenv('SGVACookie1')

# Asegúrate de incluir 'ASP.NET_SessionId' y 'SGVACookie1' como mínimo.
MIS_COOKIES_STR = f"ASP.NET_SessionId={ASP_NET_SESSIONID}; SGVACookie1={SGVACOOKIE}"

# 2. Define tus palabras clave (Lo que quieres encontrar)
KEYWORDS_POSITIVAS = ["java", "python", "sql", "backend", "software", "programador", "base de datos", "javascript", "typescript"]
# Si aparece alguna de estas, descartamos la oferta (opcional)
KEYWORDS_NEGATIVAS = ["soporte técnico", "call center", "ventas", "mantenimiento de computadores"]

# 3. Filtros numéricos
MAX_APLICANTES = 50  # Si ya aplicaron más de 50, ignorar (demasiada competencia)

# =================================================

# Preparar headers
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Cookie': MIS_COOKIES_STR
}

def obtener_id_del_html(html_str):
    """Extrae el número 4185892 del string del botón usando Regex"""
    match = re.search(r'data-id-solicitud="(\d+)"', html_str)
    return match.group(1) if match else None

def analizar_oferta(texto_perfil, texto_funciones):
    """Devuelve True si la oferta coincide con tus intereses"""
    contenido = (str(texto_perfil) + " " + str(texto_funciones)).lower()
    
    # 1. Chequear palabras negativas
    for word in KEYWORDS_NEGATIVAS:
        if word in contenido:
            return False, "Contiene palabra negativa"
            
    # 2. Chequear palabras positivas
    match_words = [word for word in KEYWORDS_POSITIVAS if word in contenido]
    if len(match_words) > 0:
        return True, f"Match: {', '.join(match_words)}"
    
    return False, "No coinciden keywords"

def main():
    print("Iniciando búsqueda...")
    
    # URL 1: Búsqueda General (Trae todas las de ADSO - especialidad 136456)
    url_lista = 'https://caprendizaje.sena.edu.co/sgva/Solicitudes/AprendizConsultarSolicitudesRequeridas?especialidad=136456&dpto=0&ciudad=0&RSocial=&_=' + str(int(time.time()*1000))
    
    try:
        resp = requests.get(url_lista, headers=headers)
        if resp.status_code != 200:
            print(f"Error {resp.status_code}. Revisar si la cookie expiró.")
            return

        data_lista = resp.json().get('aaData', [])
        total_ofertas = len(data_lista)
        print(f"Se encontraron {total_ofertas} ofertas iniciales. Analizando detalles...")
        
        resultados = []
        
        # Iteramos sobre cada oferta encontrada
        for i, item in enumerate(data_lista):
            # Barra de progreso simple
            print(f"Procesando {i+1}/{total_ofertas}...", end='\r')
            
            # Extraer ID
            html_boton = item[0]
            solicitud_id = obtener_id_del_html(html_boton)
            
            if not solicitud_id:
                continue
                
            # URL 2: Detalle (Usamos el ID extraído)
            url_detalle = f'https://caprendizaje.sena.edu.co/sgva/Solicitudes/ConsultarSolicitud?solicitudID={solicitud_id}&_=' + str(int(time.time()*1000))
            
            # Pequeña pausa para no tumbar el servidor (Ética de scraping)
            time.sleep(random.uniform(0.3, 0.8)) 
            
            try:
                resp_detalle = requests.get(url_detalle, headers=headers)
                if resp_detalle.status_code == 200:
                    detalle_json = resp_detalle.json()
                    
                    if detalle_json.get('aaData'):
                        info = detalle_json['aaData'][0]
                        
                        # Mapeo de datos según tu investigación
                        perfil = info[1]
                        funciones = info[2]
                        vacantes = int(info[8])
                        aplicantes = int(info[15])
                        empresa = info[16]
                        ciudad = info[4].strip()
                        
                        # FILTRO LÓGICO
                        es_interesante, motivo = analizar_oferta(perfil, funciones)
                        competencia_aceptable = aplicantes <= MAX_APLICANTES
                        
                        if es_interesante and competencia_aceptable:
                            resultados.append({
                                'Empresa': empresa,
                                'Ciudad': ciudad,
                                'Vacantes': vacantes,
                                'Aplicantes': aplicantes,
                                'Ratio': round(aplicantes/vacantes, 2), # Personas por vacante
                                'Keywords Encontradas': motivo,
                                'Link': f"https://caprendizaje.sena.edu.co/sgva/Aprendices/Solicitudes/ (ID: {solicitud_id})",
                                'Perfil': perfil[:100] + "..." # Resumen
                            })
            except Exception as e:
                print(f"Error leyendo ID {solicitud_id}: {e}")

        print("\n\nAnálisis finalizado.")
        
        if resultados:
            df = pd.DataFrame(resultados)
            # Ordenar: Primero las que tienen menos competencia (Aplicantes)
            df = df.sort_values(by='Aplicantes', ascending=True)
            
            nombre_archivo = "Ofertas_SENA_Filtradas.xlsx"
            df.to_excel(nombre_archivo, index=False)
            print(f"¡Éxito! Se guardaron {len(resultados)} ofertas prometedoras en '{nombre_archivo}'.")
            print(df[['Empresa', 'Ciudad', 'Aplicantes', 'Keywords Encontradas']].to_string())
        else:
            print("No se encontraron ofertas que coincidan con tus filtros exactos.")

    except Exception as e:
        print(f"\nError fatal: {e}")

if __name__ == '__main__':
    main()
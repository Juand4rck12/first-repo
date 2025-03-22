import requests
from datetime import datetime

# 📌 Configuración
BOT_TOKEN = "7819735652:AAEriqem4hJRaxcDtVG02c82sdx-Uievc9g"
CHAT_ID = "1458053118"

# 📌 Lista de 30 verbos irregulares
verbs = [
    {"present": "go", "past": "went", "participle": "gone", "meaning": "ir"},
    {"present": "eat", "past": "ate", "participle": "eaten", "meaning": "comer"},
    {"present": "see", "past": "saw", "participle": "seen", "meaning": "ver"},
    {"present": "take", "past": "took", "participle": "taken", "meaning": "tomar"},
    {"present": "write", "past": "wrote", "participle": "written", "meaning": "escribir"},
    {"present": "speak", "past": "spoke", "participle": "spoken", "meaning": "hablar"},
    {"present": "begin", "past": "began", "participle": "begun", "meaning": "empezar"},
    {"present": "drive", "past": "drove", "participle": "driven", "meaning": "conducir"},
    {"present": "break", "past": "broke", "participle": "broken", "meaning": "romper"},
    {"present": "choose", "past": "chose", "participle": "chosen", "meaning": "elegir"},
    {"present": "drink", "past": "drank", "participle": "drunk", "meaning": "beber"},
    {"present": "fly", "past": "flew", "participle": "flown", "meaning": "volar"},
    {"present": "grow", "past": "grew", "participle": "grown", "meaning": "crecer"},
    {"present": "know", "past": "knew", "participle": "known", "meaning": "saber/conocer"},
    {"present": "run", "past": "ran", "participle": "run", "meaning": "correr"},
    {"present": "sing", "past": "sang", "participle": "sung", "meaning": "cantar"},
    {"present": "swim", "past": "swam", "participle": "swum", "meaning": "nadar"},
    {"present": "bring", "past": "brought", "participle": "brought", "meaning": "traer"},
    {"present": "buy", "past": "bought", "participle": "bought", "meaning": "comprar"},
    {"present": "catch", "past": "caught", "participle": "caught", "meaning": "atrapar"},
    {"present": "teach", "past": "taught", "participle": "taught", "meaning": "enseñar"},
    {"present": "think", "past": "thought", "participle": "thought", "meaning": "pensar"},
    {"present": "fall", "past": "fell", "participle": "fallen", "meaning": "caer"},
    {"present": "forget", "past": "forgot", "participle": "forgotten", "meaning": "olvidar"},
    {"present": "give", "past": "gave", "participle": "given", "meaning": "dar"},
    {"present": "read", "past": "read", "participle": "read", "meaning": "leer"},
    {"present": "sleep", "past": "slept", "participle": "slept", "meaning": "dormir"},
    {"present": "tell", "past": "told", "participle": "told", "meaning": "contar/decir"},
    {"present": "wear", "past": "wore", "participle": "worn", "meaning": "vestir/llevar puesto"},
    {"present": "find", "past": "found", "participle": "found", "meaning": "encontrar"}
]

# 📌 Selecciona el verbo del día
day = datetime.now().day % len(verbs)
verb = verbs[day]

# 📌 Mensaje a enviar
message = (
    f"📚 *Verbo Irregular del Día* 📚\n"
    f"✅ *Presente:* {verb['present']}\n"
    f"✅ *Pasado:* {verb['past']}\n"
    f"✅ *Participio:* {verb['participle']}\n"
    f"💡 *Significado:* {verb['meaning']}"
)

# 📌 Enviar mensaje a Telegram
url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
data = {"chat_id": CHAT_ID, "text": message, "parse_mode": "Markdown"}

response = requests.post(url, data=data)

# 📌 Verificar si el mensaje se envió correctamente
if response.status_code == 200:
    print("✅ Mensaje enviado con éxito.")
else:
    print("❌ Error al enviar el mensaje:", response.text)

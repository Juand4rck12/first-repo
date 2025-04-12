import requests, os
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("TEST_BOT_TOKEN")

CHATIDS = [os.getenv("CHAT_ID_1"), os.getenv("CHAT_ID_2"), os.getenv("CHAT_ID_3")]

message = (
    "*📚 Verbos Irregulares del Día 📚*\n\n"
    "```text\n"
    "Presente  Pasado    Participio   Español\n"
    "--------  -------   -----------  --------\n"
    "go        went      gone         ir\n"
    "eat       ate       eaten        comer\n"
    "see       saw       seen         ver\n"
    "```"
)

url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

def sendMessage(chatId, message, parseMode = "Markdown"):
    data = {"chat_id": chatId, "text": message, "parse_mode": parseMode }
    response = requests.post(url, data=data)
    if response.status_code == 200:
        print(f"Mensaje enviado con exito al chat: {chatId}")
    else:
        print(f"Error al enviar el mensaje al chat {chatId}", response.text) 

for chatId in CHATIDS:
    sendMessage(chatId, message)

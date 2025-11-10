import qrcode

# URL a la que quieres que apunte el QR
url = "https://wsp.registraduria.gov.co/estado_docs/documento/consultar/"

# Crear el objeto QR
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Crear la imagen
img = qr.make_image(fill_color="black", back_color="white")

# Guardar la imagen
img.save("qr_ejemplo.png")
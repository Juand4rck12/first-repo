import qrcode

# URL a la que quieres que apunte el QR
url = "https://www.google.com/maps/place/La+Hueca+Manabita/@40.7511067,-73.8745812,18z/data=!4m6!3m5!1s0x89c25f817d731d6b:0x9018f539ad4e44ac!8m2!3d40.7510694!4d-73.8733313!16s%2Fg%2F11gxtywhc7?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"

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
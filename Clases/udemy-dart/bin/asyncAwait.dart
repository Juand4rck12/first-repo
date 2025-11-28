// Login -> valida usuario y contraseña -> redirige al menu principal

void main() async {
  print("Consultando a la base de datos...");
  print(await crearOrden());
}
Future <String> crearOrden() async {
  var response = await consultarOrden();
  return "La orden es: ${response}";
}

Future <String> consultarOrden() => 
  Future.delayed(const Duration(seconds: 5), () => "Cafe express");
void main() {
  // Basic output example
  print("Hola mundo");

  // Data Types Section
  // Strings: Mutable text data
  String name = "Juan Diego";
  name = "Juan Diego Orrego Vargas";
  print(name);

  // Numbers: Integers and decimals
  int myNumber = 1;
  double myDecimal = 2.0;
  print(myNumber);
  print(myDecimal);

  // Booleans: True/false values
  bool condition = true;
  bool conditionTwo = false;
  print(condition);
  print(conditionTwo);

  // Dynamic: Flexible type that can change
  dynamic dm = 1;
  dm = "Hola mundo";
  dm = true;
  print(dm);

  // Var: Inferred type, fixed once assigned
  var dato = 2;
  // dato = "hola mundo"; // Error: Cannot reassign to different type
  dato = 3;
  print(dato);

  // Lists: Collections of items
  // Typed list for strings
  List<String> StringList = ["Juan", "Diego"];
  print(StringList);

  // Dynamic list for mixed types
  List<dynamic> dynamicList = ["Pepe", 121232];
  print(dynamicList);
  dynamicList.add("hola hola");
  print(dynamicList);
  dynamicList.removeAt(1);
  print(dynamicList);

  // Set - ignora repetidos
  Set datos = Set.from(["Franklin", "Hola mundo", "Franklin"]);
  print(datos);

  datos.add("blanco");
  datos.remove("Hola mundo");
  print(datos);
  datos.clear();
  print(datos);
  // Maps Section: Key-value pairs for storing data
  var colores = {"color1": "blanco", "color2": "azul"};
  var colores2 = {"color3": "amarillo"};
  colores.addAll(colores2); // Merge maps
  colores.remove("color2"); // Remove a key-value pair
  // colores.clear(); // Uncomment to clear the map
  print(colores);

  // Final and Const Section: Immutable variables
  const nombre = "Juan Diego"; // Compile-time constant, cannot be reassigned
  // nombre = "hola"; // Error: Cannot reassign a const variable
  print(nombre);

  // const fecha = DateTime.now(); // Error: Cannot use runtime values for const
  final fecha = DateTime.now(); // Runtime constant, assigned once
  print(fecha);

  // ==============================================================

  print(suma(15, 20));
  mostrarNombre(nombre: "Juan Diego");

  var pikachu = new Pokemon("Pikachu", "Pokemon");
  print(pikachu);

  var perro = new Animal(nombre: "Martin", especie: "Perruna");
  print(perro);
  print(perro.nombre);
  print(perro.especie);
}


// funciones
int suma(int a, int b) {
  return a + b;
}

void mostrarNombre({required String nombre}) {
  print("Aqui esta $nombre");
}


int resta (int a, int b) => (a - b);


// Clases
class Pokemon {
  late String nombre;
  late String tipo;

  Pokemon(String nombre, String tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  String toString() {
    return "nombre: ${this.nombre} - tipo: ${this.tipo}";
  }
}

// FORMA MODERNA Y PROFESIONAL (para Flutter):
class Animal {
  // Ya no necesitamos 'late' si usamos el constructor correctamente
  final String nombre;
  final String especie;

  // Constructor con parámetros nombrados y requeridos (Sintaxis moderna)
  Animal({required this.nombre, required this.especie});

  @override // Buena práctica indicar que sobreescribes un método
  String toString() {
    return "nombre: ${this.nombre} - especie: ${this.especie}";
  }

  /**
   * O se puede hacer el toString() asi:
   * String toString() => "nombre: ${this.nombre} - especie: ${this.especie}";
   */
}
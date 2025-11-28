import 'dart:convert';
import 'dart:math';

void main() {
  final rawJson = '{ "nombre" : "pikachu" , "tipo" : "electrico" }';
  final parsedJson = json.decode(rawJson);
  final pikachu = new Pokemon.fromJson(parsedJson);
  print(pikachu.nombre);

  print("=================================");

  Estudiante estudiante = new Estudiante();
  estudiante.edadEstudiante = 14;
  print(estudiante.edad);
  // print(estudiante.edadEstudiante);

  var response = TrianguloRectangulo(5, 8);
  print("La figura es un: ${response.nombre}");
  print("El área es: ${response.area()}");

  var responseTwo = Rectangulo(10, 5);
  print("La figura es un: ${responseTwo.nombre}");
  print("El área es: ${responseTwo.area()}");
}

class Pokemon {
  late String nombre;
  late String tipo;
  Pokemon(this.nombre, this.tipo);
  Pokemon.fromJson(parsedJson) {
    nombre = parsedJson['nombre'];
    tipo = parsedJson['tipo'];
  }
}


// GET Y SET
class Estudiante {
  String? nombre;
  int edad = 0;

  void set edadEstudiante(int edad) {
    if (edad <= 0) {
      print("La edad debe ser mayor a 0");
    } else {
      this.edad = edad;
    }
  }
  int get edadEstudiante {
    return edad;
  }
}

// CLASES ABSTRACTAS

abstract class Figura {
  late final String nombre;
  late final List<double> lados;

  double area();
}


class TrianguloRectangulo extends Figura {
  TrianguloRectangulo(double base, double altura) {
    nombre = "Triangulo rectangulo";
    lados = [base, altura, sqrt(pow(base, 2) + pow(altura, 2))];
  }

  @override
  double area() => (lados[0] * lados[1]) / 2;
  
}

class Rectangulo extends Figura {
  Rectangulo(double base, double altura) {
    nombre = "Rectangulo";
    lados = [base, altura, base, altura];
  }
  
  @override
  double area() => lados[0] * lados[1];
}
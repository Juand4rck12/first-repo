/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package arreglosdinamicos;

import java.util.ArrayList;
import java.util.List;

/**
 * Fecha: 25/11/2024
 * @author Juan Diego Orrego Vargas
 * Objetivo: Practicar los arreglos dinamicos.
 */
public class ArreglosDinamicos {
    public static void main(String[] args) {
        
        /* Array de tipo String
        List<String> animales = new ArrayList<>();
        
        // Agregar elementos al array
        animales.add("León");
        animales.add("Tigre");
        animales.add("Gato");
        animales.add("Perro");
        
        System.out.println("Primer array " + animales);
        
        animales.add(2, "Elefante");
        
        System.out.println("Segundo array " + animales);
        */
        
        List<String> lenguajesProgramacion = new ArrayList<>();
        
        lenguajesProgramacion.add("C++");
        lenguajesProgramacion.add("Python");
        lenguajesProgramacion.add("Java");
        lenguajesProgramacion.add("Ruby");
        
        System.out.println("Arreglo 1 " + lenguajesProgramacion);
        
        // Remover elemento del indice 3
        
        lenguajesProgramacion.remove(3);
        System.out.println("Lista sin el indice 3 " + lenguajesProgramacion);
    }
    
}

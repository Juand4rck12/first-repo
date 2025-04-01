package co.edu.sena.algorithmpractices;

import co.edu.sena.algorithmpractices.utils.MessageUtils;

/**
 * Fecha: Inicie el 25/02/2025
 * @author Juan Diego Orrego Vargas
 * Objetivo: Practicar algoritmos de programación, usando Java
 */

public class AlgorithmForPractices {
    public static void main(String[] args) {
        tableofmultiply(5);
    }
    
    /**
     * Muestra en pantalla la tabla de multiplicar de un número dado
     * @param num entero
     */
    public static void tableofmultiply(int num) {
        
        String message = "";
        
        for (int i = 1; i <= 10; i++) {        
            message += num + " x " + i + " = " + (num * i) + "\n";           
        }
        
        MessageUtils.showInfoMessage(message);
    }
}

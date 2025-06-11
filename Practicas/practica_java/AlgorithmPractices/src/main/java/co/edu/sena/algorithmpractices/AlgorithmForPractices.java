package co.edu.sena.algorithmpractices;

import co.edu.sena.algorithmpractices.utils.MessageUtils;

import javax.swing.*;

/**
 * Fecha: Inicie el 25/02/2025
 * @author Juan Diego Orrego Vargas
 * Objetivo: Practicar algoritmos de programación, usando Java
 */

public class AlgorithmForPractices {
    public static void main(String[] args) {
//        tableofmultiply(5);

        String password = JOptionPane.showInputDialog("Digite una contraseña:");

        if (password.length() >= 8 && password.contains("@")) {
            JOptionPane.showMessageDialog(null, "Contraseña segura tiene " +
                                            password.length() + " cantidad de caracteres");
        } else {
            JOptionPane.showMessageDialog(null, "Contraseña insegura");
        }
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

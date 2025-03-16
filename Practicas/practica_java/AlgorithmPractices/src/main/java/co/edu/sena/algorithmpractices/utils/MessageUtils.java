package co.edu.sena.algorithmpractices.utils;

import javax.swing.JOptionPane;

/**
 * Fecha: 09/10/2024
 * @author Juan Diego Orrego Vargas
 * Objetivo: clase para utileria de mensajes en pantalla
 */

public class MessageUtils {
    
    public static void showInfoMessage(String message){
        JOptionPane.showMessageDialog(null, message, "Mensaje", JOptionPane.INFORMATION_MESSAGE);
    }
    
    public static void showWarningMessage(String message){
        JOptionPane.showMessageDialog(null, message, "Advertencia", JOptionPane.WARNING_MESSAGE);
    }
    
    public static void showErrorMessage(String message){
        JOptionPane.showMessageDialog(null, message, "Error", JOptionPane.ERROR_MESSAGE);
    }
}

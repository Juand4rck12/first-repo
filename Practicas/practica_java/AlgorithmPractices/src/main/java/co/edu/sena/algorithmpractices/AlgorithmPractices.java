/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package co.edu.sena.algorithmpractices;

import javax.swing.JOptionPane;

/**
 * Fecha: Inicie el 25/02/2025
 * @author Juan Diego Orrego Vargas
 * Objetivo: Practicar algoritmos de programación, usando Java
 */

public class AlgorithmPractices {
    public static void main(String[] args) throws InterruptedException {
        
        Thread thread = new Thread(() -> {
            try {
//                Thread.sleep(10000);
                JOptionPane.showMessageDialog(null, "Mensaje 1");
            } catch (Exception e) {
            }
 
        });
        
        Thread thread1 = new Thread(() -> {
            try {
                JOptionPane.showMessageDialog(null, "Mensaje 2");
            } catch (Exception e) {
            }
        });
        
        Thread thread2 = new Thread(() -> {
            try {
                JOptionPane.showMessageDialog(null, "Mensaje 3");
            } catch (Exception e) {
            }
        });

        thread.start();
        thread1.start();
        thread2.start();
        tareaDos();
    }
    
    public static void tareaUno() throws InterruptedException {
        System.out.println("Obtener datos");
        Thread.sleep(10000);
    }
    
    public static void tareaDos() throws InterruptedException {
        System.out.println("Calcular");
    }
}

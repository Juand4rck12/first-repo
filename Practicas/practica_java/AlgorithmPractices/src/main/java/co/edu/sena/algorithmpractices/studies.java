package co.edu.sena.algorithmpractices;

import javax.swing.*;

public class studies {
    public static void main(String[] args) {
        // Comentarios kasjdksajdkjasdkjsdjk
        /**
         * Comentarios
         * de varias lineas
         */

        // Tipos de datos
        int number = 10; // Entero
        double decimalNumber = 10.5; // Double
        boolean autorizado = true;
        boolean noAutorizado = false;
        String texto = "asjkdjaskjsadks";
        // && Si esto Y esto
        // || Si esto O esto
        // != Si esto es diferente de esto
//        int num1 = Integer.parseInt(JOptionPane.showInputDialog("Digite el primer número:"));
//        int num2 = Integer.parseInt(JOptionPane.showInputDialog("Digite el segundo número:"));
//
//        while (num1 == 0) {
//            num1 = Integer.parseInt(JOptionPane.showInputDialog(
//                    "No puede ser 0 Digite el primer número:"));
//        }
//
//        while (num2 == 0) {
//            num2 = Integer.parseInt(JOptionPane.showInputDialog(
//                    "No puede ser 0 Digite el segundo número:"));
//        }

        String result = "";
//        result += "Suma: " + (num1 + num2);
//        result += "\nResta: " + (num1 - num2);
//        result += "\nMultiplicación: " + (num1 * num2);
//        result += "\nDivisión: " + (num1 / num2);

//        JOptionPane.showMessageDialog(null, result);
        int n = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el final:"));
        int div = 0;
        for (int i = 1; i <= n; i++) {
            div = i % 2;
            if (div == 0) {
                result += i + "\n";
            }
//            if (i % 2 == 0) {
//                result += i + "\n";
//            }
        }
        JOptionPane.showMessageDialog(null, result);
    }
}

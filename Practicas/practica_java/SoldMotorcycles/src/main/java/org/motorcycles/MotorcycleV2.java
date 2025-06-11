package org.motorcycles;

import javax.swing.*;

public class MotorcycleV2 {
    public static void main(String[] args) {
//        [0] → Nombre de la moto
//        [1] → Valor base (sin intereses)
//        [2] → Número de cuotas
//        [3] → Valor total con intereses del 15%
//        [4] → Valor de la cuota mensual

        int quantity = Integer.parseInt(JOptionPane.showInputDialog(
                "Ingrese la cantidad de motos"));
        String[][] motorcycles = new String[quantity][5];

        // Entrada de datos
        for (int i = 0; i < quantity; i++) {
            String name = JOptionPane.showInputDialog("Ingrese el nombre de la moto #" + i);
            Double baseValue = Double.parseDouble(JOptionPane.showInputDialog("Ingrese el valor base: "));
            int installments = Integer.parseInt(JOptionPane.showInputDialog("Ingrese la cantidad de cuotas:"));

            // Cálculos
            double totalWithInterest = baseValue + (baseValue * 0.15);
            double installmentsMonthly = totalWithInterest / installments;

            // asignacion de valores
            motorcycles[0][0] = name;
            motorcycles[0][1] = String.valueOf(baseValue);
            motorcycles[0][2] = String.valueOf(installments);
            motorcycles[0][3] = String.valueOf(totalWithInterest);
            motorcycles[0][4] = String.valueOf(installmentsMonthly);
        }
    }
}


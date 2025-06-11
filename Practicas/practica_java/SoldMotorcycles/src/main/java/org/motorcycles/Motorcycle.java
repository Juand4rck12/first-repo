package org.motorcycles;

import javax.swing.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Motorcycle {
    public static void main(String[] args) {
//        [0] → Nombre de la moto
//        [1] → Valor base (sin intereses)
//        [2] → Número de cuotas
//        [3] → Valor total con intereses del 15%
//        [4] → Valor de la cuota mensual

        int quantity = Integer.parseInt(JOptionPane.
                showInputDialog("Ingrese la cantidad de motos: "));

        String[][] motorcycle = new String[quantity][5];

        for (int i = 0; i < motorcycle.length; i++) {
                motorcycle[i][0] = JOptionPane.showInputDialog("Ingrese el nombre de la moto número " + (i + 1));
                motorcycle[i][1] = JOptionPane.showInputDialog("Ingrese el valor base de esa moto: ");
                motorcycle[i][2] = JOptionPane.showInputDialog("Ingrese el número de cuotas:");

                double interestValue = Integer.parseInt(motorcycle[i][1]) + (Integer.parseInt(motorcycle[i][1]) * 0.15);
                double monthlyFee = interestValue / Integer.parseInt(motorcycle[i][2]);

                motorcycle[i][3] = String.valueOf(interestValue);
                motorcycle[i][4] = String.valueOf(monthlyFee);
        }

        for (int i = 0; i < motorcycle.length; i++) {
            JOptionPane.showMessageDialog(null, "Moto número: " + (i + 1) +
                    "\nNombre: " + motorcycle[i][0] +
                    "\nValor base: " + motorcycle[i][1] +
                    "\nNúmero de cuotas: " + motorcycle[i][2] +
                    "\nValor total con intereses del 15%: " + motorcycle[i][3] +
                    "\nValor de la cuota mensual: " + motorcycle[i][4]);

            // Asignar el valor mas alto de cuota a la primera moto
            double highestFee = Double.parseDouble(motorcycle[i][4]);
            String highestFeeName = motorcycle[i][0];

            // Asignar el valor mas barato sin intereses a la primera moto
            int cheaperMotorcycle = Integer.parseInt(motorcycle[i][1]);
            String cheaperMotoName = motorcycle[i][0];

            // Comprobar si el valor de cuota es mayor al ya asignado
            if (Double.parseDouble(motorcycle[i][4]) > highestFee) {
                highestFee = Double.parseDouble(motorcycle[i][4]);
                highestFeeName = motorcycle[i][0];
            }

            double totalAverage = 0;
            totalAverage += Double.parseDouble(motorcycle[i][3]) / quantity;

            // Comprobar si el valor mas barato es mayor al ya asignado
            if (Integer.parseInt(motorcycle[i][1]) < cheaperMotorcycle) {
                cheaperMotorcycle = Integer.parseInt(motorcycle[i][1]);
                cheaperMotoName = motorcycle[i][0];
            }

            // Calcular cantidad de motos con cuotas mayores a 12
            int counter = 0;
            if (Integer.parseInt(motorcycle[i][2]) > 12) {
                counter++;
            }

            // Si se llego al final del recorrido se muestra la info final
            if (i == (motorcycle.length - 1)) {
                JOptionPane.showMessageDialog(null,
                        "Cuota mensual más alta: " + highestFee +
                                " moto: " + highestFeeName +
                                "\nMoto mas barata: " + cheaperMotorcycle +
                                " moto: " + cheaperMotoName +
                                "\nPromedio total con intereses: " + totalAverage +
                                "\nMotos con mas de 12 cuotas: " + counter);
            }
        }
    }
}
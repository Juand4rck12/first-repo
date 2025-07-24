package co.edu.sena.dataStructures;


import javax.swing.*;

public class Salchipapa {

    int[] inventario = new int[4];
    //precios
    int[] salchipapas = new int[4];

    public void inventarioInicial() {
        //papa
        inventario[0] = 80;

        //salchicha
        inventario[1] = 50;

        //queso
        inventario[2] = 20;

        //tope de Dinero
        inventario[3] = 150000;

        //precios salchipapas
        salchipapas[0] = 5000;
        salchipapas[1] = 8000;
        salchipapas[2] = 15000;
        salchipapas[3] = 20000;

    }

    public void mostrarInventario() {
        
        String message = "";
        
        message += "INVENTARIO" +
                "\nPapas: " + inventario[0] +
                "\nSalchicha: " + inventario[1] +
                "\nQueso: " + inventario[2] +
                "\nTope de dinero: " + inventario[3];

        
        JOptionPane.showMessageDialog(null, message);
//        System.out.println("Inventario:");
//        System.out.println("Papas: " + inventario[0]);
//        System.out.println("Salchicha: " + inventario[1]);
//        System.out.println("Queso: " + inventario[2]);
//        System.out.println("Tope de Dinero: " + inventario[3]);
    }

    public void gestionInventario() {
        int productos = Integer.parseInt(JOptionPane.showInputDialog("Cual producto quiere modificar: \n1.Papa \n2.Salchicha \n3.Queso \n4.Dinero"));
        int cant = Integer.parseInt(JOptionPane.showInputDialog("Ingrese la cantidad que desea agregar: "));

        switch (productos) {
            case 1:
                inventario[0] += cant;
                break;
            case 2:
                inventario[1] += cant;
                break;
            case 3:
                inventario[2] += cant;
            case 4:
                inventario[3] += cant;
            default:
                System.out.println("Opcion invalida");
        }

    }

    public void ventas() {
        boolean esVip = true;
        int seraVip = Integer.parseInt(JOptionPane.showInputDialog("Eres Del Club de Vips: \b1.Si \n2.No"));
        int tipoSalcipapa = Integer.parseInt(JOptionPane.showInputDialog("Ingrese la salchipapa desea: \n1.Sencilla \n2.Especial \n3.Gratinada \n4.Super Doble"));
        int cantSalchi = Integer.parseInt(JOptionPane.showInputDialog("Ingrese cuantas la cantidad de las salchipapas que va a llevar: "));
        int compra = 0;

        switch (tipoSalcipapa) {
            case 1:
                compra = salchipapas[0] * cantSalchi;
                System.out.println("Total a pagar: " + compra);
                break;
            case 2:
                compra = salchipapas[1] * cantSalchi;
                System.out.println("Total a pagar: " + compra);
                break;
            case 3:
                compra = salchipapas[2] * cantSalchi;
                System.out.println("Total a pagar: " + compra);
            case 4:
                compra = salchipapas[3] * cantSalchi;
                System.out.println("Total a pagar: " + compra);
            default:
                System.out.println("Opcion no valida");
        }

    }

    public static void main(String[] args) {
        Salchipapa sp = new Salchipapa();
        sp.inventarioInicial();
        boolean val = true;

        do {
            int option = Integer.parseInt(JOptionPane.showInputDialog("1.Mostrar inventario \n2.Gestionar inventario \n3.Realizar ventas \n4.Reporte de ventas \n5.Recomendaciones \n6.Salir"));

            switch (option) {
                case 1:
                    sp.mostrarInventario();
                    break;
                case 2:
                    sp.gestionInventario();
                    break;
                case 3:
                    sp.ventas();
                    break;
                case 6:
                    val = false;
            }

        } while (val);

    }
}

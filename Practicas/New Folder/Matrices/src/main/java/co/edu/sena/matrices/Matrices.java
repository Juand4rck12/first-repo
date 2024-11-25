/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package co.edu.sena.matrices;

/**
 * Fecha: 24/11/2024
 * @author Juan Diego Orrego Vargas
 * Objetivo: aprender y experimentar con las matrices multidimensionales de Java.
 */
public class Matrices {

    public static void main(String[] args) {
        
        /*
        
        // arreglo multidimencional 3 x 3
        int[][] numeros = new int [3][3];
        int i, j; // i = filas, j = columnas
        
        // Recorrer filas
        for (i = 0; i < numeros.length; i++) {
            System.out.println();
            // Recorrer las columnas
            for (j = 0; j < numeros.length; j++) {
                System.out.print(numeros[i][j] + "");
            }
        }

        */ 
        
        int[][] matriz = new int [4][4];
        matriz[0][0] = 4;
        matriz[0][1] = 4;
        matriz[1][0] = 7;
        matriz[1][1] = 6;
        matriz[3][3] = 2;
        matriz[2][2] = 1;
        
        int filas, columnas; // filas, columnas
        
        for (filas = 0; filas < matriz.length; filas++) {
            System.out.println("");
            // Recorrer columnas
            for (columnas = 0; columnas < matriz.length; columnas++) {
                System.out.print(matriz[filas][columnas] + " ");
            }
        }
    }
}

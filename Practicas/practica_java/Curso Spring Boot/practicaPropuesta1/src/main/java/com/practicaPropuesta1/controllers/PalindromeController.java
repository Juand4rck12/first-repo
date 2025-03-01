package com.practicaPropuesta1.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador para verificar palindromos
 */
@RestController
public class PalindromeController {

    /**
     * Endpoint para verificar si una palabra es un palindromo.
     * @param word la palabra a verificar.
     * @return un mensaje indicando si la mensaje es palindromo o no.
     */
    @GetMapping("/validar-palindromo/{word}")
    public String Palindrome(@PathVariable String word) {
        if (isPalindrome(word)) {
            return "La palabra " + word + " es un palindromo";
        } else {
            return "La palabra " + word + " NO es un palindromo";
        }
    }

    /**
     * Metodo para verificar si una palabra es un palindromo.
     * @param word la palabra a verificar.
     * @return true si la palabra es un palindromo, false de lo contrario
     */
    private boolean isPalindrome(String word) {
        int length = word.length();
        for (int i = 0; i < length / 2; i++) {
            if (word.charAt(i) != word.charAt(length - i - 1)) {
                return false;
            }
        }
        return true;
    }

}

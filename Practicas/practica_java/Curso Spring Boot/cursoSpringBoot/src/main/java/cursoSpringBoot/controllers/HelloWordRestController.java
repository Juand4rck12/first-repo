package cursoSpringBoot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWordRestController {

    @GetMapping({"/hello", "/hw", "/hola"})
    public String helloWord() {
        System.out.println("Solicitud ejecutada!");
        return "Hello Word! :D";
    }

}

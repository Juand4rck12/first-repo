package cursoSpringBoot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingRestController {

    @GetMapping("/saludo/{name}/{age}")
    public String gretting(@PathVariable String name,
                           @PathVariable int age) {
        int dateOfBirth = 2025 - age;
        return "Hola! " + name + " naciste en el " + dateOfBirth;
    }

}

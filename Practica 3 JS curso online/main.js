const diaSemana = prompt("Digite el dia de hoy:");

switch (diaSemana) {
    case "Lunes" :
        document.write("Es el primer dia de la semana.");
        break;
    case "Martes" :
        document.write("Es el segundo dia de la semana,");
        break;
    case "Miercoles":
        document.write("Es el tercer dia de la semana");
        break
    case "Jueves" :
        document.write("Es el cuarto dia de la semana.");
        break
    default :
    document.write("No hay un dia dicho")
}
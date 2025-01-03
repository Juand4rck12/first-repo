package models;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet; // Conjunto de datos que obtenemos al enviar la consulta
import javax.swing.JOptionPane;

/**
 * Fecha: 02/01/2025 
 * Autor: Juan Diego Orrego Vargas 
 * Objetivo: Esta clase implementa el patrón de diseño DAO (Data Access Object)
 * para la tabla "employees" de la base de datos. Su principal objetivo es centralizar todas
 * las operaciones de acceso a datos relacionadas con los empleados, como
 * consultas, inserciones, actualizaciones y eliminaciones, asegurando una
 * separación clara entre la lógica de negocio y la lógica de acceso a datos.
 *
 * Funcionalidades principales: 
 * - Ejecutar consultas SQL relacionadas con empleados. 
 * - Obtener datos de la base de datos y llenar objetos de tipo Employees. 
 * - Facilitar la reutilización del código y el mantenimiento. 
 * - Separar responsabilidades, delegando el acceso a la base de datos a esta clase.
 *
 * Relación con otras clases: - ConnectionMySQL: Proporciona la conexión a la
 * base de datos. - Employees: Representa un modelo de empleado, donde se
 * almacenan los datos obtenidos de la base de datos.

 */

public class EmployeesDao {

    // Instanciar la conexión a la base de datos
    ConnectionMySQL cn = new ConnectionMySQL();
    Connection conn; // Para establecer la conexión
    PreparedStatement pst; // Para preparar y ejecutar consultas SQL parametrizadas
    ResultSet rs; // Para almacenar los resultados de las consultas

    // Variables estáticas para compartir información del usuario entre interfaces
    public static int id_user = 0;
    public static String full_name_user = "";
    public static String username_user = "";
    public static String address_user = "";
    public static String rol_user = "";
    public static String email_user = "";
    public static String telephone_user = "";

    // Método para el inicio de sesión
    public Employees loginQuery(String user, String password) {
        // Consulta SQL para buscar un empleado con el usuario y la contraseña proporcionados
        String query = "SELECT * FROM employees WHERE username = ? AND password = ?";
        Employees employee = new Employees(); // Objeto empleado para almacenar los datos del resultado

        try {
            // Establecer conexión con la base de datos
            conn = cn.getConnection();

            // Preparar la consulta SQL con parámetros
            pst = conn.prepareStatement(query);
            pst.setString(1, user); // Primer parámetro: nombre de usuario
            pst.setString(2, password); // Segundo parámetro: contraseña

            // Ejecutar la consulta y obtener resultados
            rs = pst.executeQuery();

            // Si hay un resultado, extraer los datos y asignarlos al objeto empleado
            if (rs.next()) {
                employee.setId(rs.getInt("id"));
                id_user = employee.getId(); // Guardar ID en la variable estática

                employee.setFull_name(rs.getString("full_name"));
                full_name_user = employee.getFull_name(); // Guardar nombre completo

                employee.setUsername(rs.getString("username"));
                username_user = employee.getUsername(); // Guardar nombre de usuario

                employee.setAddress(rs.getString("address"));
                address_user = employee.getAddress(); // Guardar dirección

                employee.setTelephone(rs.getString("telephone"));
                telephone_user = employee.getTelephone(); // Guardar teléfono

                employee.setEmail(rs.getString("email"));
                email_user = employee.getEmail(); // Guardar email

                employee.setRol(rs.getString("rol"));
                rol_user = employee.getRol(); // Guardar rol
            }

        } catch (Exception e) {
            // Mostrar un mensaje de error en caso de excepción con un icono de advertencia
            JOptionPane.showMessageDialog(
                    null,
                    "Error al obtener al empleado: " + e.getMessage(),
                    "Error",
                    JOptionPane.ERROR_MESSAGE
            );
        }

        // Devolver el objeto empleado, aunque esté vacío si no se encontró
        return employee;
    }
}

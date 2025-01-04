package models;

import java.sql.Timestamp;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet; // Conjunto de datos que obtenemos al enviar la consulta
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.swing.JOptionPane;

/**
 * Fecha: 02/01/2025
 * Autor: Juan Diego Orrego Vargas
 * Objetivo: Esta clase implementa el patrón de diseño DAO (Data Access Object) para la tabla
 * "employees" de la base de datos. Su principal objetivo es centralizar todas
 * las operaciones de acceso a datos relacionadas con los empleados, como
 * consultas, inserciones, actualizaciones y eliminaciones, asegurando una
 * separación clara entre la lógica de negocio y la lógica de acceso a datos.
 *
 * Funcionalidades principales: - Ejecutar consultas SQL relacionadas con
 * empleados. - Obtener datos de la base de datos y llenar objetos de tipo
 * Employees. - Facilitar la reutilización del código y el mantenimiento. -
 * Separar responsabilidades, delegando el acceso a la base de datos a esta
 * clase.
 *
 * Relación con otras clases: - ConnectionMySQL: Proporciona la conexión a la
 * base de datos. - Employees: Representa un modelo de empleado, donde se
 * almacenan los datos obtenidos de la base de datos.
 *
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

        } catch (SQLException e) {
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

    // Registrar empleado
    /**
     * Método para registrar un nuevo empleado en la base de datos.
     *
     * @param employee Objeto de tipo Employees con los datos del empleado a
     * registrar.
     * @return true si el registro fue exitoso; false en caso contrario.
     *
     * Detalles relevantes: - El método utiliza una consulta parametrizada para
     * prevenir inyecciones SQL. - Se incluye un timestamp para registrar la
     * fecha y hora de creación y actualización. - La conexión es establecida
     * mediante ConnectionMySQL.
     */
    public boolean registerEmployeeQuery(Employees employee) {
        String query = "INSERT INTO employees "
                + "(id, full_name, username, address, telephone, email, password, rol, created, updated) "
                + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        // Generar la marca de tiempo actual para los campos de creación y actualización
        Timestamp datetime = new Timestamp(new Date().getTime());

        try {
            // Establecer conexión con la base de datos y preparar la consulta
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);

            // Asignar valores a los parámetros de la consulta
            pst.setInt(1, employee.getId());
            pst.setString(2, employee.getFull_name());
            pst.setString(3, employee.getUsername());
            pst.setString(4, employee.getAddress());
            pst.setString(5, employee.getTelephone());
            pst.setString(6, employee.getEmail());
            pst.setString(7, employee.getPassword());
            pst.setString(8, employee.getRol());
            pst.setTimestamp(9, datetime); // Fecha de creación
            pst.setTimestamp(10, datetime); // Fecha de actualización

            // Ejecutar la consulta
            pst.execute();
            return true;
        } catch (SQLException e) {
            // Manejo de excepciones en caso de error con mensaje al usuario
            JOptionPane.showMessageDialog(null, "Error al registrar el empleado: " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }

    // Listar empleados
    /**
     * Método para listar empleados de la base de datos.
     *
     * @param value Cadena de búsqueda opcional. Si está vacía, se listan todos
     * los empleados.
     * @return Lista de objetos Employees con la información obtenida de la base
     * de datos.
     *
     * Detalles relevantes: - Si se proporciona un valor, se filtra la búsqueda
     * por ID. - Utiliza una estructura de tipo List para almacenar múltiples
     * empleados. - Este método es útil para mostrar información en tablas o
     * interfaces gráficas.
     */
    public List<Employees> listEmployeesQuery(String value) {
        List<Employees> list_employees = new ArrayList<>();
        String query = "SELECT * FROM employees ORDER BY rol ASC"; // Consulta para obtener todos los empleados
        String query_search_employee = "SELECT * FROM employees WHERE id LIKE '%" + value + "%'"; // Consulta con filtro

        try {
            // Establecer conexión y preparar la consulta según el valor de búsqueda
            conn = cn.getConnection();
            if (value.equalsIgnoreCase("")) {
                pst = conn.prepareStatement(query);
                rs = pst.executeQuery(); // Obtener todos los empleados
            } else {
                pst = conn.prepareStatement(query_search_employee);
                rs = pst.executeQuery(); // Filtrar por ID
            }

            // Recorrer los resultados y mapearlos a objetos Employees
            while (rs.next()) {
                Employees employee = new Employees();
                employee.setId(rs.getInt("id"));
                employee.setFull_name(rs.getString("fullname"));
                employee.setUsername(rs.getString("username"));
                employee.setAddress(rs.getString("address"));
                employee.setTelephone(rs.getString("telephone"));
                employee.setEmail(rs.getString("email"));
                employee.setRol(rs.getString("rol"));
                list_employees.add(employee); // Agregar a la lista
            }
        } catch (SQLException e) {
            // Manejo de excepciones en caso de error
            JOptionPane.showMessageDialog(null, e.toString(), "Error", JOptionPane.ERROR_MESSAGE);
        }

        // Retornar la lista de empleados
        return list_employees;
    }

    // Mofidicar empleado
    public boolean updateEmployeeQuery(Employees employee) {
        String query = "UPDATE INTO employees SET "
                + "full_name = ?, username = ?, address = ?, telephone = ?, email = ?, rol = ?, updated = ? "
                + "WHERE id = ?";

        // Generar la marca de tiempo actual para los campos de creación y actualización
        Timestamp datetime = new Timestamp(new Date().getTime());

        try {
            // Establecer conexión con la base de datos y preparar la consulta
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);

            // Asignar valores a los parámetros de la consulta
            pst.setString(1, employee.getFull_name());
            pst.setString(2, employee.getUsername());
            pst.setString(3, employee.getAddress());
            pst.setString(4, employee.getTelephone());
            pst.setString(5, employee.getEmail());
            pst.setString(6, employee.getRol());
            pst.setTimestamp(7, datetime); // Fecha de actualización
            pst.setInt(8, employee.getId());
            
            // Ejecutar la consulta
            pst.execute();
            return true;
        } catch (SQLException e) {
            
            // Manejo de excepciones en caso de error con mensaje al usuario
            JOptionPane.showMessageDialog(null, "Error al modificar los datos del empleado: " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
    
    // Eliminar empleado
    public boolean deleteEmployeeQuery (int id) {
        // Elimina al empleado de la tabla cuyo id coincida con el del parametro recibido
        String query = "DELETE FROM employees WHERE id = " + id;
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.execute();
            return true;
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "No puede eliminar un empleado que tenga relación con otra tabla",
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
    
    // Cambiar la contraseña
    public boolean updateEmployeePassword (Employees employee) {
        /* Se cambia la contraseña solo si el usuario que esta intentando cambiarla coincide con el
           con el usuario que esta logeado. */
        String query = "UPDATE employees SET password = ? WHERE username = '" + username_user + "'";
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setString(1, employee.getPassword());
            pst.executeUpdate();
            return true;
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Ha ocurrido un error al modificar la contraseña " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
}

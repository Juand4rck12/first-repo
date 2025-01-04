/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package models;

import java.sql.Timestamp;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.swing.JOptionPane;

public class CustomersDao {
    // Instanciar la conexión a la base de datos
    ConnectionMySQL cn = new ConnectionMySQL();
    Connection conn; // Para establecer la conexión
    PreparedStatement pst; // Para preparar y ejecutar consultas SQL parametrizadas
    ResultSet rs; // Para almacenar los resultados de las consultas
    
    // Registar cliente
    public boolean registerCustomerQuery (Customers customer) {
        String query = "INSERT INTO customers "
                + "(id, full_name, address, telephone, email, created, updated) "
                + "VALUES (?, ?, ?, ?, ?, ?, ?)";
        Timestamp datetime = new Timestamp(new Date().getTime());
        
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setInt(1, customer.getId());
            pst.setString(2, customer.getFull_name());
            pst.setString(3, customer.getAddress());
            pst.setString(3, customer.getTelephone());
            pst.setString(4, customer.getEmail());
            pst.setTimestamp(5, datetime);
            pst.setTimestamp(6, datetime);
            pst.execute();
            return true;
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al registrar al cliente " + e.getMessage(), 
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
    
    // Listar clientes
    public List listCustomerQuery (String value) {
        List<Customers> list_customers = new ArrayList();
        String query = "SELECT * FROM customers";
        String query_search_customer = "SELECT * FROM customers WHERE id like '%" + value + "%'";
        
        try {
            // Establecer conexión y preparar la consulta según el valor de búsqueda
            conn = cn.getConnection();
            if (value.equalsIgnoreCase("")) {
                pst = conn.prepareStatement(query);
                rs = pst.executeQuery(); // Obtener todos los empleados
            } else {
                pst = conn.prepareStatement(query_search_customer);
                rs = pst.executeQuery(); // Filtrar por ID
            }
            
            while (rs.next()) {
                Customers customer = new Customers();
                customer.setId(rs.getInt("id"));
                customer.setFull_name(rs.getString("full_name"));
                customer.setTelephone(rs.getString("address"));
                customer.setTelephone(rs.getString("telephone"));
                customer.setEmail(rs.getString("email"));
                list_customers.add(customer);
            }
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.toString(), "Error", JOptionPane.ERROR_MESSAGE);
        }
        
        return list_customers;
    }
    
    // Modificar cliente
    public boolean updateCustomerQuery (Customers customer) {
        String query = "UPDATE customers SET "
                + "full_name = ?, address = ?, telephone = ?, email = ?, updated = ? "
                + "WHERE id = ?";
        
        Timestamp datetime = new Timestamp(new Date().getTime());
        
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setString(1, customer.getFull_name());
            pst.setString(2, customer.getAddress());
            pst.setString(3, customer.getTelephone());
            pst.setString(4, customer.getEmail());
            pst.setTimestamp(5, datetime);
            pst.setInt(6, customer.getId());
            pst.execute();
            return true;
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al modificar los datos del cliente " + e.getMessage(), 
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
    
    // Eliminar cliente
    public boolean deleteCustomerQuery (int id) {
        // Elimina al empleado de la tabla cuyo id coincida con el del parametro recibido
        String query = "DELETE FROM customers WHERE id = " + id;
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.execute();
            return true;
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "No puede eliminar un cliente que tenga relación con otra tabla",
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
}

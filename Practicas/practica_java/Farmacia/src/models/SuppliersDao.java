/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package models;

import java.sql.Timestamp;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.swing.JOptionPane;

public class SuppliersDao {
    // Instanciar la conexión a la base de datos
    ConnectionMySQL cn = new ConnectionMySQL();
    Connection conn; // Para establecer la conexión
    PreparedStatement pst; // Para preparar y ejecutar consultas SQL parametrizadas
    ResultSet rs; // Para almacenar los resultados de las consultas
    
    // Registrar proveedor
    public boolean registerSupplierQuery (Suppliers supplier) {
        String query = "INSERT INTO suppliers "
                + "(name, description, address, telephone, email, city, created, updated) "
                + "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        Timestamp datetime = new Timestamp(new Date().getTime());
        
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setString(1, supplier.getName());
            pst.setString(2, supplier.getDescription());
            pst.setString(3, supplier.getAddress());
            pst.setString(4, supplier.getTelephone());
            pst.setString(5, supplier.getEmail());
            pst.setString(6, supplier.getCity());
            pst.setTimestamp(7, datetime);
            pst.setTimestamp(8, datetime);
            pst.execute();
            return true;
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al registrar proveedor " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
    
    // Listar proveedores
    public List listSuppliersQuery (String value) {
        List<Suppliers> list_suppliers = new ArrayList();
        String query = "SELECT * FROM suppliers";
        String query_search_supplier = "SELECT * FROM suppliers "
                + "WHERE name like '%" + value + "%'";
        
        try {
            // Establecer conexión y preparar la consulta según el valor de búsqueda
            conn = cn.getConnection();
            if (value.equalsIgnoreCase("")) {
                pst = conn.prepareStatement(query);
                rs = pst.executeQuery(); // Obtener todos los empleados
            } else {
                pst = conn.prepareStatement(query_search_supplier);
                rs = pst.executeQuery(); // Filtrar por ID
            }
            
            while (rs.next()) {
                Suppliers supplier = new Suppliers();
                supplier.setId(rs.getInt("id"));
                supplier.setName(rs.getString("name"));
                supplier.setDescription(rs.getString("description"));
                supplier.setAddress(rs.getString("address"));
                supplier.setTelephone(rs.getString("telephone"));
                supplier.setEmail(rs.getString("email"));
                supplier.setCity(rs.getString("city"));
                list_suppliers.add(supplier);
            }
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al listar proveedores " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
        }
        return list_suppliers;
    }
    
    // Modificar proveedor
    public boolean updateSupplierQuery (Suppliers supplier) {
        String query = "UPDATE suppliers SET"
                + " name = ?, description = ?, address = ?, telephone = ?, email = ?, city = ?, updated = ? "
                + "WHERE id = ?";
        
        Timestamp datetime = new Timestamp(new Date().getTime());
        
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setString(1, supplier.getName());
            pst.setString(2, supplier.getDescription());
            pst.setString(3, supplier.getAddress());
            pst.setString(4, supplier.getTelephone());
            pst.setString(5, supplier.getEmail());
            pst.setString(6, supplier.getCity());
            pst.setTimestamp(7, datetime);
            pst.setInt(8, supplier.getId());
            pst.execute();
            return true;
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al modificar los datos del proveedor " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
    
    // Eliminar proveedor
    public boolean deleteSupplierQuery (int id) {
        String query = "DELETE FROM suppliers WHERE ID = " + id;
        
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.execute();
            return true;
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "No puedes eliminar un proveedor que tiene relación con otra tabla " + 
                    e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
}

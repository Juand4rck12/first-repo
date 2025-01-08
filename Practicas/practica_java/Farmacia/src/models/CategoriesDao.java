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


public class CategoriesDao {
    // Instanciar la conexión a la base de datos
    ConnectionMySQL cn = new ConnectionMySQL();
    Connection conn; // Para establecer la conexión
    PreparedStatement pst; // Para preparar y ejecutar consultas SQL parametrizadas
    ResultSet rs; // Para almacenar los resultados de las consultas
    
    // Registrar categoria
    public boolean registerCategoryQuery(Categories categorie) {
        String query = "INSERT INTO categories (name, created, updated) "
                + "VALUES (?,?,?)";
        
        Timestamp datetime = new Timestamp(new Date().getTime());
        
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setString(1, categorie.getName());
            pst.setTimestamp(2, datetime);
            pst.setTimestamp(3, datetime);
            pst.execute();
            return true;
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al registrar la categoria " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
    
    // Listar categorias
    public List listCategorieQuery(String value) {
        List<Categories> list_categories = new ArrayList();
        String query = "SELECT * FROM categories";
        String query_search_category = "SELECT * FROM categories WHERE name LIKE '% " + value + "%'";
        try {
            // Establecer conexión y preparar la consulta según el valor de búsqueda
            conn = cn.getConnection();
            if (value.equalsIgnoreCase("")) {
                pst = conn.prepareStatement(query);
                rs = pst.executeQuery(); // Obtener todos los empleados
            } else {
                pst = conn.prepareStatement(query_search_category);
                rs = pst.executeQuery(); // Filtrar por ID
            }
            
            while(rs.next()) {
                Categories category = new Categories();
                category.setId(rs.getInt("id"));
                category.setName(rs.getString("name"));
                list_categories.add(category);
            }
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al listar categorias " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
        }
        return list_categories;
    }
    
    // Modificar categoria
    public boolean updateCategoryQuery(Categories category) {
        String query = "UPDATE categories SET name = ?, updated = ? WHERE ID = ?";
        Timestamp datetime = new Timestamp(new Date().getTime());
        
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setString(1, category.getName());
            pst.setTimestamp(2, datetime);
            pst.setInt(3, category.getId());
            pst.execute();
            
            return true;
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al actualizar los datos de la categoria " +
                    e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
    
    // Eliminar categoria
    
    public boolean deleteCategoryQuery (int id) {
        String query = "DELETE FROM categories WHERE id = " + id;
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.execute();
            
            return true;
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "No se puede eliminar una categoria que tenga relacion con otra tabla " +
                    e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
}

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

public class ProductsDao {

    // Instanciar la conexión a la base de datos
    ConnectionMySQL cn = new ConnectionMySQL();
    Connection conn; // Para establecer la conexión
    PreparedStatement pst; // Para preparar y ejecutar consultas SQL parametrizadas
    ResultSet rs; // Para almacenar los resultados de las consultas

    // Registrar producto
    public boolean registerProductQuery(Products product) {
        String query = "INSERT INTO products "
                + "(code, name, description, unitprice, created, updated, category_id) VALUES "
                + "(?, ?, ?, ?, ?, ?, ?";

        Timestamp datetime = new Timestamp(new Date().getTime());

        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setInt(1, product.getCode());
            pst.setString(2, product.getName());
            pst.setString(3, product.getDescription());
            pst.setDouble(4, product.getUnit_price());
            pst.setTimestamp(5, datetime);
            pst.setTimestamp(6, datetime);
            pst.setInt(7, product.getCategory_id());
            pst.execute();

            return true;

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al registrar el producto " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }

    // Listar producto
    public List listProductsQuery(String value) {
        List<Products> list_products = new ArrayList();
        String query = "SELECT prod.*, cat.name AS category_name FROM products prod, categories cat"
                + "WHERE prod.category_id = cat.id";
        String query_search_product = "SELECT prod.*, cat.name AS category_name FROM products prod "
                + "INNER JOIN categories cat ON prod.category_id = cat.id "
                + "WHERE pro.name LIKE '%" + value + "%'";
        
        try {
            conn = cn.getConnection();
            
            // Si la persona no esta buscando un producto en especifico, se listan todos los productos
            if (value.equalsIgnoreCase("")) {
                pst = conn.prepareStatement(query);
                rs = pst.executeQuery();
            
            // Si busca uno en especifico se le muestra ese producto
            } else {
                pst = conn.prepareStatement(query_search_product);
                rs = pst.executeQuery(); 
            }
            
            while(rs.next()) {
                Products product = new Products();
                product.setId(rs.getInt("id"));
                product.setCode(rs.getInt("code"));
                product.setName(rs.getString("name"));
                product.setDescription(rs.getString("description"));
                product.setUnit_price(rs.getDouble("unit_price"));
                product.setProduct_quantity(rs.getInt("product_quantity"));
                product.setCategory_name(rs.getString("category_name"));
                list_products.add(product);
            }
            
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al listar productos " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
        }
        return list_products;
    }
}

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
                + "(code, name, description, unit_price, created, updated, category_id) VALUES "
                + "(?, ?, ?, ?, ?, ?, ?)";

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
        String query = "SELECT prod.*, cat.name AS category_name FROM products prod, categories cat "
                + "WHERE prod.category_id = cat.id";
        String query_search_product = "SELECT prod.*, cat.name AS category_name FROM products prod "
                + "INNER JOIN categories cat ON prod.category_id = cat.id "
                + "WHERE prod.name LIKE '%" + value + "%'";

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

            while (rs.next()) {
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

    // Modificar producto
    public boolean updateProductQuery(Products product) {
        String query = "UPDATE products SET "
                + "code = ?, name = ?, description = ?, unit_price = ?, updated = ?, category_id = ? "
                + "WHERE id = ?";

        Timestamp datetime = new Timestamp(new Date().getTime());

        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setInt(1, product.getCode());
            pst.setString(2, product.getName());
            pst.setString(3, product.getDescription());
            pst.setDouble(4, product.getUnit_price());
            pst.setTimestamp(5, datetime);
            pst.setInt(6, product.getCategory_id());
            pst.setInt(7, product.getId());
            pst.execute();

            return true;

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al modificar los datos del producto " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }

    // Eliminar producto
    public boolean deleteProductQuery(int id) {
        // Elimina al empleado de la tabla cuyo id coincida con el del parametro recibido
        String query = "DELETE FROM products WHERE id = " + id;
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.execute();
            return true;
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "No puede eliminar un producto que tenga relación con otra tabla",
                    "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }

    // Buscar productos
    public Products searchProducts(int id) {
        String query = "SELECT pro.*, cat.name AS category_name FROM products pro "
                        + "INNER JOIN categories cat ON pro.category_id = cat.id "
                        + "WHERE pro.id = ?";

        Products product = new Products();
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setInt(1, id);
            rs = pst.executeQuery();

            if (rs.next()) {
                product.setId(rs.getInt("id"));
                product.setCode(rs.getInt("code"));
                product.setName(rs.getString("name"));
                product.setDescription(rs.getString("description"));
                product.setUnit_price(rs.getDouble("unit_price"));
                product.setCategory_id(rs.getInt("category_id"));
                product.setCategory_name(rs.getString("category_name"));

            }

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
        }
        return product;
    }

    // Buscar producto por codigo
    public Products searchCode(int code) {
        String query = "SELECT prod.id, prod.name FROM products prod WHERE prod.code = ?";
        Products product = new Products();
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setInt(1, code);
            rs = pst.executeQuery();

            if (rs.next()) {
                product.setId(rs.getInt("id"));
                product.setName(rs.getString("name"));
            }

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
        }
        return product;
    }

    // Traer cantidad de productos
    public Products searchId(int id) {
        String query = "SELECT prod.product_quantity FROM products prod WHERE prod.id = ?";
        Products product = new Products();

        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setInt(1, id);
            rs = pst.executeQuery();

            if (rs.next()) {
                product.setProduct_quantity(rs.getInt("product_quantity"));
            }

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
        }
        return product;
    }

    // Actualizar stock
    public boolean updateStockQuery(int amount, int product_id) {
        String query = "UPDATE products SET product_quantity = ? WHERE ID = ?";
        try {
            conn = cn.getConnection();
            pst = conn.prepareStatement(query);
            pst.setInt(1, amount);
            pst.setInt(2, product_id);
            pst.execute();

            return true;

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
    }
}

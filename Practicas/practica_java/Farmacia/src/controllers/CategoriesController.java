package controllers;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.util.List;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;
import models.Categories;
import models.CategoriesDao;
import static models.EmployeesDao.rol_user;
import views.SystemView;

public class CategoriesController implements ActionListener, MouseListener, KeyListener {

    private Categories category;
    private CategoriesDao categoryDao;
    private SystemView views;
    String rol = rol_user;
    DefaultTableModel model = new DefaultTableModel();

    public CategoriesController(Categories categorie, CategoriesDao categoriesDao, SystemView views) {
        this.category = categorie;
        this.categoryDao = categoriesDao;
        this.views = views;
        // Boton de registrar categoria
        this.views.btn_register_category.addActionListener(this);
        // Boton de modificar categoria
        this.views.btn_update_category.addActionListener(this);
        // Boton de eliminar categoria
        this.views.btn_delete_category.addActionListener(this);
        // Boton de cancelar
        this.views.btn_cancel_category.addActionListener(this);
        this.views.categories_table.addMouseListener(this);
        this.views.txt_search_category.addKeyListener(this);
        this.views.txt_category_name.addKeyListener(this); // Para detectar "Esc" en el campo de texto
        this.views.categories_table.addKeyListener(this);  // Para detectar "Esc" en la tabla
        this.views.jLabelCategories.addMouseListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // Registrar categoria
        if (e.getSource() == views.btn_register_category) {
            if (views.txt_category_name.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "Todos los campos son obligatorios", "Advertencia",
                        JOptionPane.WARNING_MESSAGE);
            } else {
                category.setName(views.txt_category_name.getText().trim());

                if (categoryDao.registerCategoryQuery(category)) {
                    cleanTable();
                    cleanFields();
                    listAllCategories();
                    JOptionPane.showMessageDialog(null, "Categoria registrada con exito");
                } else {
                    JOptionPane.showMessageDialog(null, "Ha ocurrido un error al registrar la categoria", "Error",
                            JOptionPane.ERROR_MESSAGE);
                }
            }
        // Modificar categoria
        } else if (e.getSource() == views.btn_update_category) {
            if (views.txt_category_id.getText().equals("")) {
                JOptionPane.showMessageDialog(null, "Selecciona una fila para continuar");
            } else {
                if (views.txt_category_id.equals("")
                    || views.txt_category_name.equals("")) {
                    JOptionPane.showMessageDialog(null, "Todos los campos son obligatorios");
                } else {
                    category.setId(Integer.parseInt(views.txt_category_id.getText()));
                    category.setName(views.txt_category_name.getText().trim());
                    
                    if (categoryDao.updateCategoryQuery(category)) {
                        cleanTable();
                        cleanFields();
                        views.btn_register_category.setEnabled(true);
                        listAllCategories();
                    }
                }
            }
        // Eliminar categoria
        } else if (e.getSource() == views.btn_delete_category) {
            int row = views.categories_table.getSelectedRow();
            if (row == -1) {
                JOptionPane.showMessageDialog(null, "Debes seleccionar una categoria para eliminar!", "Advertencia",
                        JOptionPane.WARNING_MESSAGE);
            } else {
                int id = Integer.parseInt(views.categories_table.getValueAt(row, 0).toString());
                int question = JOptionPane.showConfirmDialog(null, "¿En realidad quieres eliminar esta categoría?");

                if (question == 0 && categoryDao.deleteCategoryQuery(id)) {
                    cleanFields();
                    cleanTable();
                    listAllCategories();
                    views.btn_register_category.setEnabled(true);
                    JOptionPane.showMessageDialog(null, "Categoria eliminada con exito");
                }
            }
        // Boton de cancelar
        } else if (e.getSource() == views.btn_cancel_category) {
            cleanFields();
            views.btn_register_category.setEnabled(true);
        }
    }

    // Listar categorias
    public void listAllCategories() {
        if (rol.equals("Administrador")) {
            List<Categories> list = categoryDao.listCategorieQuery(views.txt_search_category.getText());
            model = (DefaultTableModel) views.categories_table.getModel();
            Object[] row = new Object[2];
            for (int i = 0; i < list.size(); i++) {
                row[0] = list.get(i).getId();
                row[1] = list.get(i).getName();
                model.addRow(row);
            }
            views.categories_table.setModel(model);
        }
    }

    @Override
    public void mouseClicked(MouseEvent e) {
        if (e.getSource() == views.categories_table) {
            int row = views.categories_table.rowAtPoint(e.getPoint());
            views.txt_category_id.setText(views.categories_table.getValueAt(row, 0).toString());
            views.txt_category_name.setText(views.categories_table.getValueAt(row, 1).toString());
            views.btn_register_category.setEnabled(false);
        } else if (e.getSource() == views.jLabelCategories) {
            if (rol.equals("Administrador")) {
                views.jTabbedPane1.setSelectedIndex(6);
                cleanTable();
                cleanFields();
                listAllCategories();
            } else {
                views.jTabbedPane1.setEnabledAt(6, false);
                views.jLabelCategories.setEnabled(false);
                JOptionPane.showMessageDialog(null, "No tienes privilegios de administrador para acceder a esta vista");
            }
        }
    }

    @Override
    public void mousePressed(MouseEvent e) {
    }

    @Override
    public void mouseReleased(MouseEvent e) {
    }

    @Override
    public void mouseEntered(MouseEvent e) {
    }

    @Override
    public void mouseExited(MouseEvent e) {
    }

    @Override
    public void keyTyped(KeyEvent e) {
    }

    @Override
    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_ESCAPE) { // Detectar tecla ESC
            cleanTable();
            cleanFields();
            listAllCategories();
            views.btn_register_category.setEnabled(true);
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {
        if (e.getSource() == views.txt_search_category) {
            cleanTable(); // Limpiar tabla
            listAllCategories(); // Listar categorias
        }
    }

    public void cleanTable() {
        for (int i = 0; i < model.getRowCount(); i++) {
            model.removeRow(i);
            i = i - 1;
        }
    }
    
    public void cleanFields() {
        views.txt_category_id.setText("");
        views.txt_category_name.setText("");
    }
}

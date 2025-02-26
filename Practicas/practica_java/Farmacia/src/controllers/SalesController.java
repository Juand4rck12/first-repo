package controllers;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;
import static models.EmployeesDao.rol_user;
import models.Products;
import models.ProductsDao;
import models.Sales;
import models.SalesDao;
import views.SystemView;

public class SalesController implements ActionListener, MouseListener, KeyListener{
    
    private Sales sale;
    private SalesDao saleDao;
    private SystemView views;
    private int item = 0;
    String rol = rol_user;
    Products product = new Products();
    ProductsDao productDao = new ProductsDao();
    DefaultTableModel model = new DefaultTableModel();
    DefaultTableModel temp;

    public SalesController(Sales sale, SalesDao saleDao, SystemView views, DefaultTableModel temp) {
        this.sale = sale;
        this.saleDao = saleDao;
        this.views = views;
        this.temp = temp;
        views.btn_add_product_sale.addActionListener(this);
        views.btn_confirm_sale.addActionListener(this);
        views.btn_remove_sale.addActionListener(this);
        views.btn_new_sale.addActionListener(this);
        views.jLabelSales.addMouseListener(this);
    }
    
    
    
    @Override
    public void actionPerformed(ActionEvent e) {
        
    }

    @Override
    public void mouseClicked(MouseEvent e) {
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
        if (e.getSource() == views.txt_sale_product_code) {
            JOptionPane.showMessageDialog(null, "Ingrese el codigo del producto a vender");
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {
    }
    
}

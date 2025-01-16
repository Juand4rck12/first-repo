/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controllers;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JOptionPane;
import models.Employees;
import models.EmployeesDao;
import views.LoginView;
import views.SystemView;

public class LoginController implements ActionListener {

    Employees employee;
    EmployeesDao employees_dao;
    LoginView login_view;

    public LoginController(Employees employee, EmployeesDao employees_dao, LoginView login_view) {
        this.employee = employee;
        this.employees_dao = employees_dao;
        this.login_view = login_view;
        this.login_view.btn_enter.addActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // Obtener los datos de la vista
        String user = login_view.txt_username.getText().trim(); // .trim() limpia espacios en blanco
        String password = String.valueOf(login_view.txt_password.getPassword());

        if (e.getSource() == login_view.btn_enter) {
            // Validar que los campos no esten vacios
            if (!user.equals("") || !password.equals("")) {
                // Pasar los parametros al metodo login
                employee = employees_dao.loginQuery(user, password);

                // verificar la existencia del usuario
                if (employee.getUsername() != null) {
                    if (employee.getRol().equals("Administrador")) {
                        SystemView admin = new SystemView();
                        admin.setVisible(true);
                    } else {
                        SystemView aux = new SystemView();
                        aux.setVisible(true);
                    }
                    this.login_view.dispose();
                } else {
                    JOptionPane.showMessageDialog(null, "Usuario o contraseña incorrecto.",
                            "Error", JOptionPane.ERROR_MESSAGE);
                    login_view.txt_username.setText("");
                    login_view.txt_password.setText("");
                    login_view.txt_username.requestFocus();
                }
            } else {
                JOptionPane.showMessageDialog(null, "los campos estan vacios",
                        "Error", JOptionPane.ERROR_MESSAGE);
                login_view.txt_username.requestFocus();
            }
        }
    }
}

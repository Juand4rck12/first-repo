package controllers;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import views.SystemView;

public class ReportsController implements ActionListener {
    
    private SystemView views;

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == views.jButtonPrint) {
            
        }
    }
    
}

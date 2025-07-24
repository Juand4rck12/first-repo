package co.edu.sena.apinativeconnection;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.swing.JOptionPane;


/**
 *
 * @author Juan Diego Orrego
 */
public class ApiNativeConnection {

    public static void main(String[] args) {
        try {
            URL url = new URL("https://api.chucknorris.io/jokes/random");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            
            connection.setRequestMethod("GET");           
            int responseCode = connection.getResponseCode();
            
            if (responseCode == 200) {
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                StringBuilder response = new StringBuilder();
                String line = "";
                
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                
                reader.close();
                
                JOptionPane.showMessageDialog(null, response.toString());
                
                connection.disconnect();
                
            } else {
                throw new RuntimeException("Error al conectarnos a la API Code: " + responseCode);
            }
            
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

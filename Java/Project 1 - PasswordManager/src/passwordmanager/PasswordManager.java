
package passwordmanager;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class PasswordManager {

    public static void main(String[] args){
        
        try(BufferedReader reader = new BufferedReader(new FileReader("masterPassword.txt"))){
            String line = reader.readLine();
            
                
            if(line == null){
                PasswordManagerGUI passwordManager = new PasswordManagerGUI();
                
            }else if(line!= null){
                WindowLogin window3 = new WindowLogin();
               
            }
            
        
        }catch(IOException e){}
        
    }


//    WindowDisplayCredentials c = new WindowDisplayCredentials();

    
}

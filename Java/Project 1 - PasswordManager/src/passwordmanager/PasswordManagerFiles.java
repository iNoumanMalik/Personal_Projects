
package passwordmanager;
import java.io.FileWriter;
import java.io.IOException;
import javax.swing.JTextArea;
public class PasswordManagerFiles {
    private String masterPassword;
    private String enteredPassword;         // while login to account  
    private String title;
    private String username;
    private String password;
    
    
    // reference variables for windows
//    WindowCreatePassword window2;
//    WindowLogin window3;
//    WindowAddPasswords window4;
    
    
    public PasswordManagerFiles(){}
    
    
    // master password
    public void setMasterPassword(String masterPassword){
        this.masterPassword = masterPassword;
    }
    
    public String getMasterPassword(){
        return masterPassword;
    }
    
    public void setEnteredPassword(String enteredPassword){
        this.enteredPassword = enteredPassword;
    }
    
    public String getEnteredPassword(){
        return enteredPassword;
    }
    
    //title
    public void setTitle(String title){
        this.title = title;
    }
    
    public String getTitle(){
        return title;
    }
    
    //username
    public void setUsername(String username){
        this.username = username;
    }
    
    public String getUsername(){
        return username;
    }
    
    //password
    public void setPassword(String password){
        this.password = password;
    }
    
    public String getPassword(){
        return password;
    }
    
    
    public void writeMasterPassword(String masterPassword){
        try(FileWriter writer = new FileWriter("masterPassword.txt",true)){
            writer.write(masterPassword);
            
        }catch(IOException e){ }
    }
    
    public void writeAccountCredentials(String title, String username, String password){
        this.title = title;
        this.username = username;
        this.password = password;
        
         try(FileWriter writer = new FileWriter("database.txt",true)){
            writer.write("Title: "+title+"\nUsername: "+username+"\nPassword: "+password+"\n");
            
            
        }catch(IOException e){ }
    }
    
   
}

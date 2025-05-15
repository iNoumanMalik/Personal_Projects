//window 3
package passwordmanager;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.JTextField;
import javax.swing.ImageIcon;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
public class WindowLogin implements ActionListener{
    private String enteredPassword;
    

    
    JFrame frame = new JFrame();
    JPanel panel = new JPanel();
    JLabel label = new JLabel("Login");
    JLabel label2 = new JLabel("Master Password: ");
    JLabel label3 = new JLabel("Hey enter your details to login into your account");
    JLabel label4 = new JLabel("Password does not match!");       // for button
    JButton button = new JButton("Login");
    JTextField textField = new JTextField();
    ImageIcon icon;
    
    public WindowLogin(){
        frame.setSize(520, 520);
        frame.setTitle("iNomi Password Manager");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setBackground(new Color(164,152,228));
        frame.setLayout(null);
        frame.setLocationRelativeTo(null);
        
        panel.setLayout(null);
        panel.setBounds(75, 70, 350, 350);
        panel.setBackground(Color.WHITE);
       
        label.setBounds(130, 50, 300, 30);
        label.setFont(new Font("Verdana",Font.BOLD,25));
        label.setForeground(new Color(164,152,228));
        label2.setBounds(86, 145, 300, 30);
        label2.setFont(new Font("HP Simplified Jpan",Font.PLAIN,15));
        label3.setBounds(62, 81, 300, 30);
        label3.setFont(new Font("Calibri Light",Font.PLAIN,12));
        
       label4.setBounds(85, 235, 300, 30);
       label4.setFont(new Font("HP Simplified Jpan",Font.PLAIN,10));
       label4.setForeground(Color.RED);
       label4.setVisible(false);
       
        textField.setBounds(86, 175, 180,30);
        textField.setFont(new Font("Calibri Light",Font.PLAIN,16));
        textField.setBackground(new Color(246,246,246));
        
        button.setBounds(85,210, 180, 33);
        button.setFocusable(false);
        button.setBackground(new Color(164,152,228));
        button.setForeground(Color.BLACK);
        button.setFont(new Font("HP Simplified Jpan",Font.BOLD,14));
        button.addActionListener(this);
        
        panel.add(label);
        panel.add(label2);
        panel.add(label3);
        panel.add(label4);
        panel.add(textField);
        panel.add(button);
        
        frame.add(panel);
        frame.setVisible(true);
    }

   

    @Override
    public void actionPerformed(ActionEvent e) {
        enteredPassword = textField.getText();
        PasswordManagerFiles files = new PasswordManagerFiles();
        try(BufferedReader reader = new BufferedReader(new FileReader("masterPassword.txt"))){
            String line;
            while((line = reader.readLine()) != null){
                if((line.equals(enteredPassword)&& e.getSource() == button)){
                    frame.dispose();
                    WindowAddPasswords window4 = new WindowAddPasswords();
                }else if((!line.equals(enteredPassword)&& e.getSource() == button)){
                    label4.setVisible(true);
                }
            }
        }catch(IOException ee){
            
        }
        
        
    }
    
    public String getEnteredPassword(){
        return enteredPassword;
    }
    
}

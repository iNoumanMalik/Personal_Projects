//window 2
package passwordmanager;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.ImageIcon;
import javax.swing.JPasswordField;
import java.awt.Color;
import java.awt.Font;
import javax.swing.BorderFactory;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class WindowCreatePassword implements ActionListener{
    private String createdPassword;
    
    JFrame frame = new JFrame();
    JPanel panel = new JPanel();
    JLabel label = new JLabel("Create Password");
    JLabel label2 = new JLabel();          // for 'lock' icon
    JLabel label3 = new JLabel("Enter a password:");       // for 'Enter a password'
    JLabel label4 = new JLabel("Your password should contain at least 5 characters");       // for button
    JButton button = new JButton("Activate");
    JPasswordField passField = new JPasswordField(10);
    JPasswordField passField2 = new JPasswordField(10);
    ImageIcon icon = new ImageIcon("C:\\Users\\inoum\\Downloads\\locking.png");
//    ImageIcon icon2 = new ImageIcon("C:\\Users\\inoum\\Downloads\\key.png");
        
    public WindowCreatePassword(){
        frame.setSize(520, 520);
        frame.setTitle("iNomi Password Manager");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setBackground(new Color(164,152,228));
        frame.setLayout(null);
        frame.setLocationRelativeTo(null);
        
        panel.setLayout(null);
        panel.setBounds(75, 70, 350, 350);
        panel.setBackground(Color.WHITE);
        
       label.setBounds(30, 20, 200, 50);
       label.setFont(new Font("Arial",Font.BOLD,25));
       label.setForeground(new Color(164,152,228));
       
       label2.setBounds(160, 80, 80, 80);
       label2.setIcon(icon);
       
       label3.setBounds(50, 190, 200, 30);
       label3.setFont(new Font("HP Simplified Jpan",Font.PLAIN,14));
       label3.setForeground(Color.BLACK);
       
       label4.setBounds(50, 250, 300, 30);
       label4.setFont(new Font("HP Simplified Jpan",Font.PLAIN,10));
       label4.setForeground(Color.RED);
       label4.setVisible(false);

       button.setBounds(105, 290, 140, 30);
       button.setFocusable(false);
       button.setFont(new Font("HP Simplified Jpan",Font.BOLD,14));
       button.setBackground(new Color(164,152,228));
       button.setForeground(Color.BLACK);
       button.addActionListener(this);
        
       passField.setBounds(50, 220, 250,30);
       passField.setFont(new Font("Calibri Light",Font.PLAIN,16));
       passField.setBorder(BorderFactory.createMatteBorder(0, 0, 1, 0, Color.black));
//       passField.setText("password");
//       passField.setEchoChar((char) 0);
       
       passField2.setBounds(50, 220, 250,30);
       passField2.setFont(new Font("Calibri Light",Font.PLAIN,16));
       passField2.setBorder(BorderFactory.createMatteBorder(0, 0, 1, 0, Color.black));
//       passField2.setText("confirm password");
//       passField2.setEchoChar((char) 0);
       
       
        
        
        panel.add(label);
        panel.add(label2);
        panel.add(label3);
        panel.add(label4);
        

        panel.add(button);
        panel.add(passField);
        frame.add(panel);
        frame.setVisible(true);
        
    }

    @Override
    public void actionPerformed(ActionEvent e) {

        if(passField.getPassword().length > 4){
            createdPassword = new String (passField.getPassword());     // converting char array to String
            PasswordManagerFiles files = new PasswordManagerFiles();
            files.writeMasterPassword(createdPassword);
            if(e.getSource() == button){
          frame.dispose();
          WindowLogin window3 = new WindowLogin();

        }
            
        }else if((passField.getPassword().length < 5) && (e.getSource() == button)){
            label4.setVisible(true);

        }
        
        
    }
    
    public String getCreatedPassword(){
        return createdPassword;
    }

}

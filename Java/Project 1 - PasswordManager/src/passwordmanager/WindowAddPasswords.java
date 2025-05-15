//window 4
package passwordmanager;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.JTextField;


public class WindowAddPasswords implements ActionListener{
    JFrame frame = new JFrame();
    JPanel panel = new JPanel();
    JLabel label1 = new JLabel("Add Account:");
    JLabel label2 = new JLabel("Title");
    JLabel label3 = new JLabel("Username/Email");
    JLabel label4 = new JLabel("Password");
    JLabel label5 = new JLabel("Added Successfully!");
    JLabel label6 = new JLabel("Fields are empty!");
    JTextField textField1 = new JTextField();
    JTextField textField2 = new JTextField();
    JTextField textField3 = new JTextField();
    JButton button1 = new JButton("Add");
    JButton button2 = new JButton("View");
    
    public WindowAddPasswords(){
        frame.setSize(520, 520);
        frame.setTitle("iNomi Password Manager");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setBackground(Color.white);
        frame.setLayout(null);
        frame.setLocationRelativeTo(null);
        
        
        label1.setBounds(65, 30, 300, 30);
        label1.setFont(new Font("Verdana",Font.BOLD,20));
        label1.setForeground(new Color(164,152,228));
        
        label2.setBounds(70, 70, 300, 30);
        label2.setFont(new Font("HP Simplified Jpan",Font.PLAIN,15));
        label3.setBounds(70, 140, 300, 30);
        label3.setFont(new Font("HP Simplified Jpant",Font.PLAIN,15));
        label4.setBounds(70, 210, 300, 30);
        label4.setFont(new Font("HP Simplified Jpant",Font.PLAIN,15));
        
        // added successfully label
       label5.setBounds(70, 355, 300, 30);
       label5.setFont(new Font("HP Simplified Jpan",Font.PLAIN,14));
       label5.setForeground(Color.GREEN);
       label5.setVisible(false);
       
       // empty fields label
       label6.setBounds(70, 355, 300, 30);
       label6.setFont(new Font("HP Simplified Jpan",Font.PLAIN,14));
       label6.setForeground(Color.RED);
       label6.setVisible(false);
        
        textField1.setBounds(70, 100, 350,30);
        textField1.setFont(new Font("Calibri Light",Font.PLAIN,16));
        textField1.setBackground(new Color(246,246,246));
        textField2.setBounds(70, 170, 350,30);
        textField2.setFont(new Font("Calibri Light",Font.PLAIN,16));
        textField2.setBackground(new Color(246,246,246));
        textField3.setBounds(70, 240, 350,30);
        textField3.setFont(new Font("Calibri Light",Font.PLAIN,16));
        textField3.setBackground(new Color(246,246,246));
        
        button1.setBounds(70,320, 173, 30);
        button1.setFocusable(true);
        button1.setBackground(new Color(164,152,228));
        button1.setForeground(Color.BLACK);
        button1.setFont(new Font("HP Simplified Jpan",Font.BOLD,14));
        button1.addActionListener(this);
        
        button2.setBounds(245,320, 173, 30);
        button2.setFocusable(true);
        button2.setBackground(new Color(164,152,228));
        button2.setForeground(Color.BLACK);
        button2.setFont(new Font("HP Simplified Jpan",Font.BOLD,14));
        button2.addActionListener(this);

        frame.add(label1);
        frame.add(label2);
        frame.add(label3);
        frame.add(label4);
        frame.add(label5);
        frame.add(label6);
        frame.add(textField1);
        frame.add(textField2);
        frame.add(textField3);
        frame.add(button1);
        frame.add(button2);
        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String title = textField1.getText();
        String username = textField2.getText();
        String password = textField3.getText();
        
        if((!title.isEmpty()) && (!username.isEmpty()) && (!password.isEmpty()) && (e.getSource() == button1)){
            PasswordManagerFiles files = new PasswordManagerFiles();
            files.writeAccountCredentials(title, username, password);
            textField1.setText("");
            textField2.setText("");
            textField3.setText("");
            
            label6.setVisible(false);
            label5.setVisible(true);
            
        }else if((e.getSource() == button2)){
            frame.dispose();
            WindowDisplayCredentials window5 = new WindowDisplayCredentials();
            window5.displayCredentials();
        }else if((username.isEmpty()) || (password.isEmpty()) && (e.getSource() == button1)){
            label5.setVisible(false);
            label6.setVisible(true);
        }
    }
    
    
}

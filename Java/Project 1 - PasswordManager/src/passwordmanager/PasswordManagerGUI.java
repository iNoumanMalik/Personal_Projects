
package passwordmanager;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.ImageIcon;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class PasswordManagerGUI implements ActionListener{
    JFrame frame = new JFrame();
    JPanel panel = new JPanel();
    JLabel label1 = new JLabel("Security");
    JLabel label2 = new JLabel("Secure your data by setting up a master password!");
    JButton button1 = new JButton("Set up a Password");
    JButton button2 = new JButton("Remind me Later");
    
    ImageIcon icon1 = new ImageIcon("C:\\Users\\inoum\\Downloads\\iconSecurity.png");
    
    public PasswordManagerGUI(){
        frame.setSize(520, 520);
        frame.setTitle("iNomi Password Manager");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setBackground(new Color(164,152,228));
        frame.setLayout(null);
        frame.setLocationRelativeTo(null);
        
        panel.setLayout(null);
        panel.setBounds(75, 70, 350, 350);
        panel.setBackground(Color.WHITE);
        
       label1.setBounds(150, 60, 400, 50);
       label1.setFont(new Font("Arial",Font.BOLD,30));
       label1.setForeground(Color.WHITE);
       label1.setIcon(icon1);
       label1.setHorizontalTextPosition(JLabel.RIGHT);
       label1.setIconTextGap(10);
       
       label2.setBounds(70, 115, 450, 40);
       label2.setFont(new Font("Calibri Light",Font.PLAIN,18));
       label2.setForeground(Color.BLACK);
       
       button1.setBounds(150, 250, 200, 30);
       button1.setFocusable(false);
       button1.setFont(new Font("HP Simplified Jpan",Font.BOLD,14));
       button1.setBackground(Color.white);
       button1.addActionListener(this);
       button2.setBounds(150, 290, 200, 30);
       button2.setFocusable(false);
       button2.setFont(new Font("HP Simplified Jpan",Font.BOLD,14));
       button2.setBackground(Color.white);
       button2.addActionListener(this);
       // frame.add(panel);
       frame.add(label1);
       frame.add(label2);
       frame.add(button1);
       frame.add(button2);
        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == button1){
           frame.dispose();
           WindowCreatePassword window2 = new WindowCreatePassword();

        } else if( e.getSource() == button2){
           frame.dispose();
            WindowAddPasswords window4 = new WindowAddPasswords();

        }
    }
    
}

// window 5
package passwordmanager;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

public class WindowDisplayCredentials {
    JFrame frame = new JFrame();
    JLabel label = new JLabel("Your Credentials");
    JTextArea textArea = new JTextArea(200,200);
    JScrollPane scrollPane = new JScrollPane(textArea);
    
    
    
    public WindowDisplayCredentials(){
        
        frame.setSize(620, 720);
        frame.setTitle("iNomi Password Manager");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setBackground(Color.white);
        frame.setLayout(null);
        frame.setLocationRelativeTo(null);
        
        
        label.setBounds(220, 6, 300, 40);
        label.setFont(new Font("Verdana",Font.BOLD,18));
        label.setForeground(new Color(164,152,228));
        
        textArea.setEditable(false); // Make it read-only
        textArea.setLineWrap(true);  // Enable line wrapping
        textArea.setWrapStyleWord(true); // Wrap at word boundaries
        textArea.setFont(new Font("Arial",Font.PLAIN,16));
        
        scrollPane.setBounds(30, 40, 550, 600);
        scrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED);
        scrollPane.setHorizontalScrollBarPolicy(JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        
        
        frame.add(label);
        frame.add(scrollPane);
        frame.setVisible(true);
        
        
    }
    
    
    public void displayCredentials(){
        int count = 0;
        try(BufferedReader reader = new BufferedReader (new FileReader("database.txt"))){
            String line;
            while((line = reader.readLine()) != null){
                textArea.append(line+"\n");
                count++;
                if(count==3){
                    textArea.append("\n");
                    count=0;
                }
            }
            textArea.append("\n");
        }catch(IOException ee){
            ee.printStackTrace();
        }
    }
}

package maintexteditor;

import javax.swing.*;
import javax.swing.filechooser.FileNameExtensionFilter;
import java.awt.*;
import java.awt.event.*;
import java.io.*;

class TextEditorGUI {

    private JFrame frame;
    private JTextArea textArea;
    private TextEditor textEditor;

    public TextEditorGUI(TextEditor textEditor) {
        this.textEditor = textEditor;
        initializeGUI();
    }

    private void initializeGUI() {
        frame = new JFrame("Text Editor");
        textArea = new JTextArea();

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 600);
        frame.setLayout(new BorderLayout());

        textArea.setFont(new Font("Arial", Font.PLAIN, 16));
        JScrollPane scrollPane = new JScrollPane(textArea);
        frame.add(scrollPane, BorderLayout.CENTER);

        JMenuBar menuBar = new JMenuBar();
        JMenu fileMenu = new JMenu("File");
        JMenu editMenu = new JMenu("Edit");

        JMenuItem newFile = new JMenuItem("New");
        JMenuItem openFile = new JMenuItem("Open");
        JMenuItem saveFile = new JMenuItem("Save");
        JMenuItem exitApp = new JMenuItem("Exit");

        newFile.addActionListener(e -> newFile());
        openFile.addActionListener(e -> openFile());
        saveFile.addActionListener(e -> saveFile());
        exitApp.addActionListener(e -> System.exit(0));

        fileMenu.add(newFile);
        fileMenu.add(openFile);
        fileMenu.add(saveFile);
        fileMenu.addSeparator();
        fileMenu.add(exitApp);

        JMenuItem undoAction = new JMenuItem("Undo");
        JMenuItem redoAction = new JMenuItem("Redo");
        JMenuItem clearAction = new JMenuItem("Clear");

        undoAction.addActionListener(e -> undo());
        redoAction.addActionListener(e -> redo());
        clearAction.addActionListener(e -> clearText());

        editMenu.add(undoAction);
        editMenu.add(redoAction);
        editMenu.addSeparator();
        editMenu.add(clearAction);

        menuBar.add(fileMenu);
        menuBar.add(editMenu);

        frame.setJMenuBar(menuBar);

        textArea.addKeyListener(new KeyAdapter() {
            private String previousState = "";

            @Override
            public void keyReleased(KeyEvent e) {
              char keyChar = e.getKeyChar();
                String currentState = textArea.getText();
                if (Character.isWhitespace(keyChar)) {
                    if (!currentState.equals(previousState)) {
                        textEditor.saveState(currentState);
                        previousState = currentState;
                    }
                }
//                if (!currentState.equals(previousState)) {
//                    textEditor.saveState(currentState);
//                    previousState = currentState;
//                }
            }
        });
        
          

        frame.setVisible(true);
    }

    private void newFile() {
        textArea.setText("");
        textEditor.clearHistory();
    }

    private void openFile() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setFileFilter(new FileNameExtensionFilter("Text Files", "txt"));

        int result = fileChooser.showOpenDialog(frame);
        if (result == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();
            try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
                textArea.setText("");
                String line;
                while ((line = reader.readLine()) != null) {
                    textArea.append(line + "\n");
                }
                textEditor.clearHistory();
            } catch (IOException e) {
                JOptionPane.showMessageDialog(frame, "Error opening file", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }

    private void saveFile() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setFileFilter(new FileNameExtensionFilter("Text Files", "txt"));

        int result = fileChooser.showSaveDialog(frame);
        if (result == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(file))) {
                writer.write(textArea.getText());
            } catch (IOException e) {
                JOptionPane.showMessageDialog(frame, "Error saving file", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }

    private void undo() {
        String previousState = textEditor.undo(textArea.getText());
        textArea.setText(previousState);
    }

    private void redo() {
        String nextState = textEditor.redo(textArea.getText());
        textArea.setText(nextState);
    }

    private void clearText() {
        textEditor.saveState(textArea.getText());
        textArea.setText("");
    }
}

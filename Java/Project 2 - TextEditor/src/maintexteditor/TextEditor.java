package maintexteditor;


 class TextEditor {
    private StackWithLL<String> undoStack;
    private StackWithLL<String> redoStack;

    public TextEditor() {
        undoStack = new StackWithLL<>();
        redoStack = new StackWithLL<>();
    }

    public void saveState(String state) {
        undoStack.push(state);
        redoStack = new StackWithLL<>();
    }

    public String undo(String currentState) {
        if (!undoStack.isEmpty()) {
            redoStack.push(currentState);
            return undoStack.pop();
        }
        return currentState;
    }

    public String redo(String currentState) {
        if (!redoStack.isEmpty()) {
            undoStack.push(currentState);
            return redoStack.pop();
        }
        return currentState;
    }

    public void clearHistory() {
        undoStack = new StackWithLL<>();
        redoStack = new StackWithLL<>();
    }
}

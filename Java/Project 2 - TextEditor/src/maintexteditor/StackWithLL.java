
package maintexteditor;

class StackWithLL<T> {
    class Node {
        T data;
        Node link;
    }

    private Node top;

    public boolean isEmpty() {
        return top == null;
    }

    public void push(T value) {
        Node n = new Node();
        n.data = value;
        n.link = top;
        top = n;
    }

    public T pop() {
        if (isEmpty()) {
            System.out.println("Stack Underflow");
            return null;
        } else {
            T value = top.data;
            top = top.link;
            return value;
        }
    }

    public void peek() {
        if (!isEmpty()) {
            System.out.println(top.data);
        } else {
            System.out.println("Stack Underflow");
        }
    }

    public void print() {
        if (!isEmpty()) {
            Node temp = top;
            System.out.println("|_______________|");
            while (temp != null) {
                System.out.println("|\t" + temp.data + "\t |");
                System.out.println("|_______________|");
                temp = temp.link;
            }
        } else {
            System.out.println("Stack Underflow");
        }
    }
}
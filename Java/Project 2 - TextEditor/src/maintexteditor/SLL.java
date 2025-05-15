
package maintexteditor;


// why we write Node class. Hum inhein SLL k andr b likh skty thy. Node next mei Node bulit in data type h. Why w write start outside the NOde class
public class SLL<T> {

    class Node {

        T data;
        Node next;
    }
    Node start;

    public void insertAtStart(T value) {
        Node n = new Node();
        n.data = value;
        n.next = start;
        start = n;
    }

    public void insertAtEnd(T value) {
        Node n = new Node();
        n.data = value;
        n.next = null;

        if (start == null) {
            start = n;
        } else {
            Node t = start;
            while (t.next != null) {
                t = t.next;
            }
            t.next = n;
        }
    }

    public T deleteAtStart() {

        if (start == null) {
            return null;
        } else {
            T value = start.data;
            start = start.next;
            return value;
        }
    }

    public T deleteAtEnd() {
        if (start == null) {
            return null;
        } else if (start.next == null) {
            T value = start.data;
            start = null;
            return value;
        } else {
            Node t1 = start, t2 = null;
            while (t1.next != null) {
                t2 = t1;
                t1 = t1.next;
            }
            T value = t1.data;
            t2.next = null;
            return value;
        }

    }

    public void traverse() {
        if (start == null) {
            System.out.println("List is empty");
        } else {
            Node t = start;
            while (t.next != null) {
                System.out.print(t.data + "->");
                t = t.next;
            }
            System.out.println(t.data + "->null");
        }

    }

    public T search(T key) {
        if (start == null) {
            System.out.println("List is empty");
            return null;
        } else {
            Node t = start;
            while (t.next != null) {
                if (t.data == key) {
                    System.out.println("Found");
                    return t.data;
                }else{
                    t = t.next;
                }   
            }
            System.out.println("Not Found");
             return null;
        }
    }
    


}

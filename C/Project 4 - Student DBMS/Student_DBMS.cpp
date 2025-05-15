#include<iostream>
#include<fstream>
#include<string>
#include<cstdlib>       //exit(0)
#include<cctype>        //to uper
using namespace std;

ifstream in;
ofstream out,out2;

//static int id;
class userdata{
    private:
    string id;
    string name;
    int age;
    string sex;
    string program;
    string fathername;
    string roll_no;
    string contact;

    public:
    void admin_login();
    void credential();
    
};

  void userdata::admin_login(){
    string user="admin",pass="admin";
    cout<<"Welcome to Bolt Student Data Management Services";
    do{
        cout<<"\n\nLogin to Admin Account\n";
        cout<<"Username: ";
        cin>>user;
        if(user=="0"){
            cout<<"Exiting....!"<<endl;
            exit(0);
        }
        cout<<"Password: ";
        cin>>pass;
        if(pass=="0"){
            cout<<"Exiting....!"<<endl;
            exit(0);
        }
        if(user != "admin" || pass != "admin"){
            cout<<"Invalid Username or Password!(Press 0 to exit)"<<endl;
        }
    }while(user != "admin" || pass != "admin");
    }

    void userdata :: credential(){
        
        string ch1;
        cout<<"\n1. Add a Student"<<endl;
        cout<<"2. Search a Student"<<endl;
        cout<<"3. Remove a Student"<<endl;
        cout<<"4. Exit"<<endl;
        cout<<"Enter your choice: ";
        cin>>ch1;
        
        if(ch1=="1"){
        
        int flag = 0;
        string addmore;          //yes or no to add more students
            out.open("database.txt",ios::app);
            do{

            cout<<"\nAdd the following details:\n";
            cout<<"Unique ID: "<<endl;
            cin>>id;
            out<<id<<endl;
            cout<<"Name: ";
            cin.ignore();
            getline(cin,name);
            out<<name<<endl;
            cout<<"Age: ";
            cin>>age;
            out<<age<<endl;
            cout<<"Sex: ";
            cin>>sex;
            out<<sex<<endl;
            cout<<"Father Name: ";
            cin.ignore();
            getline(cin,fathername);
            out<<fathername<<endl;
            cout<<"Contact: ";
            cin.ignore();
            getline(cin,contact);
            out<<contact<<endl;
            cout<<"Program: ";
            cin>>program;
            out<<program<<endl;
            out<<"-"<<endl;
            flag = 1;
            if(flag == 1){
                cout<<"\nUser Added Successfully!"<<endl;
                cout<<"\nWant to add another student?(Yes or No!)"<<endl;
                cout<<"Enter: ";
                cin>>addmore;
                for(int i=0; i<addmore.length(); i++){
                    addmore[i]=toupper(addmore[i]);
                }
                if(addmore == "NO"){
                    credential();
                }
            }
            }while(addmore == "YES");
            in.close();
        
        }else if(ch1=="2"){
                in.open("database.txt");
                string searchid;
                cout<<"\nEnter ID to search user: ";
                cin>>searchid;
               // cin.ignore();
                string text;
                while(getline(in,text)){
                    if(text == searchid){
                        // in.clear();
                        // in.seekg(0,ios::beg);
                        while(getline(in,text)){
                        if(text != "-"){
                            cout<<text<<endl;
                        }else{
                            exit(0);
                        }
                        }
                    }
                }
                    in.close();
        }else if(ch1=="3"){
                string searchid;
                cout<<"Mention the ID of student: ";
                cin>>searchid;
                in.open("database.txt");
              //  out.open("database.txt");
                out2.open("temporary.txt");

                // ofstream CLEAR("database.txt");
                // CLEAR.close();
                string text;
                while(getline(in,text)){
                    if(text != searchid){
                            out2<<text<<endl;
                }else{
                    in.ignore(200,'-');
                }
                }
                in.close();

                in.open("temporary.txt");
                out.open("database.txt");
                string text2;
                while(getline(in,text2)){
                            out<<text2<<endl;
                }
            cout<<"/nStudent Data is removed Successfully!"<<endl;

        }else if(ch1=="4"){
            cout<<"Closing.....!"<<endl;
            exit(0);
        }
    }


int main()
{
    userdata students;
    students.admin_login();
    students.credential();

    
    return 0;
}
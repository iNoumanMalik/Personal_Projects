#include<iostream>
#include<fstream>
#include<string>
#include<cstdlib>
#include<cstdio>
using namespace std;



static int Count;


class login_registraion{
    private:
   
    string first_name;
    string second_name;
  
    string email;
    string password;
    int phone_no;
    
    string city;
    string country;
    
    int date;
    int month;
    int year;

 
    public:
    // when user enter invalid pass or email , 0/exit will let him to quit 
    const string ext = "exit";      
    const string ext_ch = "0";
    void input_data(ofstream &OUT,ifstream &IN){
    char choice;
    cout<<"Welcome!"<<endl;
    do{

    cout<<"1. Log into Your Account"<<endl;
    cout<<"2. Not having an account?Register Now!"<<endl;
    cin>>choice;
    cin.ignore();
    
    if(choice == '1' || choice == 'l' || choice == 'L'){
    string Ema, Pas;
    cout<<"Enter Email and Password"<<endl;
    IN.close();         // closing first before opening it to prevent it from wrong results
    IN.open("Database1.txt");

    // if user register first then there might be chance that the file pointer is positioned at the end so the next to lines helps to set the pointer back to begining
        IN.clear();
        IN.seekg(0,ios::beg);
    do{
    cout<<"Email: ";
    cin>>email;
    while(IN>>Ema){     // reads whitespace de-limited(word before encounter any space)
    if(Ema == email){
        // if the email user entered the text in any line of the file is same the break we don't need to check more
        break;
    }
    }
    cout<<"Password: ";
    cin>>password;
    
    while(IN>>Pas){
    if(Pas == password){
       
        break;
    }
    }
  
    string acc_data;        // variabe that will store the data from database file and print on screen

     if (Ema != email || Pas != password) {
            cout<<"(Press 0 or write exit to exit)"<<endl;
            cout << "Invalid Email or Password." << endl;
            if(email == ext || email == ext_ch && password  == ext || password == ext_ch){
                break;
            }
        }else if(Ema == email && Pas == password){
           int flag = 0;        // needed for next if condition

            cout<<"Login Successfully!"<<endl;
            cout<<"User Detail\n";
            IN.clear();                     // clear any error flags
            IN.seekg(0,ios::beg);           //set the file pointer to the beginning of file
            cin.ignore();
            while(getline(IN,acc_data)){

            cout<<acc_data<<endl;
           flag++;               
            }

          //  user will tell us after logging into account that he want to stay or log out
            if(flag!=0){        // just to ensure that data is successfully printed on screen before we are going to ask follwing questions
            char choice2;
            cout<<"1. Stay Logged In"<<endl;
            cout<<"2. Log Out?"<<endl;
            cout<<"3. Delete my account"<<endl;
            cout<<"4. Log into another account"<<endl;
            cin>>choice2;
            if(choice2=='1' ){
                cout<<"Done";
                exit(0);
            }else if(choice2 == '2'){
                cout<<"You Logged Out!"<<endl;
                exit(0);
            }else if(choice2 == '3'){
                 string filename = "Database1.txt";         // we can also directly use .txt names
                string temp_filename = "temp.txt";
                string linetxt;                             // a variable that will first store the read data from database1 and then stored it in temp.txt
                ifstream IN(filename);                      //opening with constructor
                ofstream OUT(temp_filename);
                while(getline(IN,linetxt)){                 // IN reads data from database1.txt and stores it in linetxt variable
                    OUT<<linetxt<<endl;                     //linetxt will store it in the temp.txt file
                }
                OUT.close();
                IN.close();
                ofstream CLEAR(filename);           // using CLEAR to delete content from database1.txt
                CLEAR.close();
                cout<<"Your account is no more present!"<<endl;
            }else{
                break;
            }
            }

            
        }
    }while(Ema != email || Pas != password);
    IN.close();
    // for registration
    } else if(choice == '2' || choice == 'r' || choice == 'R'){

    if(!OUT.is_open()){
        cout<<"Sorry! There might be some issue while creating your account."<<endl;
    }else{
        
    cout<<"Enter your details carefully!"<<endl;
    cout<<"First Name: ";
    cin>>first_name;
    OUT<<first_name<<" ";
    cout<<"Second Name: ";
    cin>>second_name;
    OUT<<second_name<<endl;
    cout<<"Entered Email: ";
    cin>>email;
    OUT<<email<<endl;
    cout<<"Created a Unique Password: ";
    cin>>password;
    OUT<<password<<endl;
    cout<<"Phone No.: ";
    cin>>phone_no;
    OUT<<phone_no<<endl;
    cout<<"City: ";
    cin>>city;
    OUT<<city<<endl;
    cout<<"Enter DOB: ";
    cin>>date>>month>>year;
    OUT<<date<<month<<year<<endl;

    cout<<"Account Created Successfully!"<<endl;
    
    }
    OUT.close();
    } else {
        cout<<"Please tell us what you want! Login or Register?"<<endl;
    }
    }while(1);
        }    

       
    };

                  
int main()
{
    ofstream out;
    ifstream in;
    login_registraion acc;
    out.open("Database1.txt",ios::app);
    acc.input_data(out,in);
    out.close();
    return 0;
}




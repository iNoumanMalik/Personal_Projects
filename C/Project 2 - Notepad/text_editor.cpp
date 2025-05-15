#include<iostream>
#include<string>
#include<fstream>
#include<cstdlib>
#include<cstdio>

using namespace std;

ofstream out,out2;
ifstream in;
char ch1,ch2;

void menu(){
    

    cout<<"-------Rio Text Editor-------\n";
    cout<<"       1. Create a new File"<<endl;
    cout<<"       2. Open an existing File"<<endl;
    cout<<"       3. Replace a file"<<endl;
    cout<<"       4. Exit"<<endl;
   
}

void decision(int* choice){
    cout<<"Enter your choice: ";
    cin>>*choice;
    if(*choice != 1 && *choice != 2 && *choice != 3 && *choice != 4){
        do{
        cout<<"Invalid Input!"<<endl;
        menu();
        cout<<"Please Entered the Correct Option:";
        cin>>*choice;
        }while(*choice != 1 && *choice != 2 && *choice != 3 && *choice != 4);
    }
}


void write_text();
void case1();
void case2();
void case3();
void case4();

void action(){
    int c;
    menu();
    decision(&c);
   
    switch(c){
        case 1:
        case1();
        break;

        case 2:
        case2();

        break;

        case 3:
        case3();
        break;

        case 4:
        case4();
        break;

        default:
        cout<<"Invalid Input!"<<endl;
        

    }
    out.close();
}

//main function
int main()
{
    action();
    return 0;
}


void write_text(){
        string choice_y_n;
        string text;
        do{

        cout<<"Want to write text?(Y for yes/N for main menu)"<<endl;
        cin>>choice_y_n;
        cin.ignore();
        if(choice_y_n == "y" || choice_y_n == "Y"){
            cout<<"(For next line press forward-slash 2 times)"<<endl;
            cout<<"***Write***"<<endl;
            getline(cin,text);
          
            out2<<text<<endl;
            while(in.get(ch1)){
                if(ch1 == '/'){
                    if(in.get(ch2)){
                        if(ch2 == '/'){
                            out<<"\n";
                    }
                    }else{
                        out<<ch2;
                    }
                }else{
                    out<<ch1;
                }
            }
            
        }else if(choice_y_n == "n" || choice_y_n == "N"){
            action();
        }else{
            cout<<"\nPlease enter correct option"<<endl;

        }
        }while(choice_y_n != "n" && choice_y_n != "N" && choice_y_n != "y" && choice_y_n != "Y");
        
      
}

void case1(){
    cout<<"Your file has been created."<<endl;
        // we will first write the data in default.txt and read data from default.txt and store the data in textfile.txt(keeping the \n instead of //)
        //data which will be written in the dafault.txt is the same which user input mean with backslashes and no next line, just in one line
        //in textfile.txt we will write the clean data. We read the data from default.txt, We copy it on the textfile.txt but when we see the two // we placed next instead of it.
        out2.open("default.txt");
        in.open("default.txt");
        out.open("textfile.txt");
        write_text();
        in.close();
        out.close();
        out2.close();
      
}

void case2(){
    string filename;
    cout<<"Enter the name of file: ";
    cin>>filename;
    out.open(filename,ios::app);
    cout<<"Your file is opened!"<<endl;
    cout<<"1. Write Text"<<endl;
    cout<<"2. Clear Text"<<endl;
    int case2_choice;
    cin>>case2_choice;
    cin.ignore();
    if(case2_choice == 1){
        out2.open("default.txt");
        in.open("default.txt");
        
        write_text();
        
    }else if(case2_choice == 2){
        in.open(filename);
        in.clear();
        in.seekg(0,ios::beg);
        in.close();
        out.close();
        ofstream CLEAR(filename);
        CLEAR.close();
    }else{
        cout<<"Wrong Input!"<<endl;
    }
}

void case3(){
    string file1,file2;
    cout<<"Enter the filename you want to replace: ";
    cin>>file1;
    cout<<"Enter the filename you want with which you want to replace: ";
    cin>>file2;

    // we will read the text from file2 and write it in file1
    out.open(file1);
    in.open(file2);
    

    //clearing file2 to add content of file1

    ofstream CLEAR(file1);
    CLEAR.close();

    //replacing
    string filetext;
    while(getline(in,filetext)){
        out<<filetext;
    }

    // after replacing ask user if he want to keep the file2 content or not
    cout<<"File Replaced Successfully!"<<endl;
    string choice_keep_content;
    do{
    cout<<"Do you want to keep the content of Source File?(y/n)";
    cin>>choice_keep_content;
    if(choice_keep_content == "y" || choice_keep_content == "Y"){
        break;
    }else if(choice_keep_content == "n" || choice_keep_content == "N"){
        cout<<"Content is erased";
        ofstream CLEAR(file2);
        CLEAR.close();
        break;
    }else{
        cout<<"Wrong Input!"<<endl;
    }
    }while(choice_keep_content != "y" && choice_keep_content != "Y" && choice_keep_content != "n" || choice_keep_content != "N");
    in.close();
    out.close();
}


void case4(){
    cout<<"Exiting..."<<endl;
    cout<<"Done!";
    exit(0);
}
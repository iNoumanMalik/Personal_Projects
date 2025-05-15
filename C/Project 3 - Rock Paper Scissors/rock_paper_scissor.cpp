#include<iostream>
#include<string>
#include<ctime>
#include<cstdlib>
using namespace std;

// it will return a randomly chosen word 
string randomGen(){
    srand(time(0));
    int randomNum = rand() % 3;
    switch ((randomNum))
    {
    case 0:
    return "Scissors";
    break;

    case 1:
    return "Rock";
    break;

    case 2:
    return "Paper";
    break;
    
    default:
    return "";
    break;
    }
}

// first page 
// If user entered wrong value,then it will take the input again until user enter the right one
void menu(char* choice){
    cout<<"\n\nWelcome to Rock Paper Scissors Game\n";
    do{

    cout<<"1. Start Game"<<endl;
    cout<<"2. Exit"<<endl;
    cout<<"Enter your choice: ";
    cin>>choice;
    if(*choice != '1' && *choice !='2'){
        cout<<"\nInvalid Choice!Please Enter the correct option."<<endl;
    }
    }while((*choice!='1')&& (*choice!='2'));
}

void game(){
    char c;
    string playagain_ch;        // for asking yes or no
    do{
    menu(&c);                   //it will give us user choice of Play Game or Exit
    if(c=='1'){
        int user_score=0,com_score=0;
        int attempts = 0;           //total 3 combats in 1 time play
        string user_ch;             //which user input 
        string com_ch;              //which the randomGen() will return
        do{
        for(int i=0; attempts<=3; i++){

        cout<<"\n**** Round "<<i+1<<" ****"<<endl;
        cout<<"\nWhat would you like to take: "<<endl;;
        cout<<"1.Rock\n2.Paper\n3.Scissors"<<endl;
        cin>>user_ch;
        com_ch = randomGen();
        if(user_ch == "Rock" || user_ch == "Paper" || user_ch == "Scissors"){       //if user write the right word only then go inside
            
        if(user_ch == "Rock" && com_ch == "Scissors" ){
            cout<<"You Choose: "<<user_ch<<"\nComputer Choose: "<<com_ch<<endl;
            user_score+=5;
             attempts++;
        }else if(user_ch == "Paper" && com_ch == "Scissors"){
            cout<<"You Choose: "<<user_ch<<"\nComputer Choose: "<<com_ch<<endl;
            com_score+=5;
             attempts++;
        }else if(user_ch == "Scissors" && com_ch == "Paper"){
            cout<<"You Choose: "<<user_ch<<"\nComputer Choose: "<<com_ch<<endl;
            user_score+=5;
             attempts++;
        }else if(user_ch == "Scissors" && com_ch == "Rock"){
            cout<<"You Choose: "<<user_ch<<"\nComputer Choose: "<<com_ch<<endl;
            com_score+=5;
             attempts++;
        }else if(user_ch == "Rock" && com_ch == "Paper"){
            cout<<"You Choose: "<<user_ch<<"\nComputer Choose: "<<com_ch<<endl;
            com_score+=5;
             attempts++;
        }else if(user_ch == "Paper" && com_ch == "Rock"){
            cout<<"You Choose: "<<user_ch<<"\nComputer Choose: "<<com_ch<<endl;
            user_score+=5;
             attempts++;
        }else if(user_ch == com_ch){
            cout<<"You Choose: "<<user_ch<<"\nComputer Choose: "<<com_ch<<endl;
            cout<<"Same!"<<endl;
        }
        if(attempts == 3){
            break;
        }
    cout<<"User Scores: "<<user_score<<endl;
    cout<<"Computer Scores: "<<com_score<<endl;
        }else{
            cout<<"Invalid Input!"<<endl;
            i=i-1;          // if user enter the wrong input(word) so there will be no combat and there's no need to count it in round
        }
        }
    }while(user_ch == com_ch);      // if user input and computer input will got same then 'attempts' will not increment, with this while condition it will take the input again from user for new round
    
    cout<<"\nYour Total Scores: "<<user_score<<endl;
    cout<<"Computer Total Scores: "<<com_score<<endl;
    if(user_score>com_score){
        cout<<"\nCongratulations You won!"<<endl;
        
    }else if(user_score<com_score){
        cout<<"You have lost"<<endl;
    }else{
        cout<<"Tie!"<<endl;
    }
        }else if(c=='2'){
            cout<<"Existing.....\n";
            exit(0);
        }else{
            cout<<"Invalid Input!";
        }

    cout<<"\nWant to Play Again?"<<endl;
    
    cout<<"Yes or No: ";
    cin>>playagain_ch;
    }while(playagain_ch == "Yes" || playagain_ch == "yes" || playagain_ch == "Y" || playagain_ch == "y");
}
int main()
{
    game();
    return 0;
}
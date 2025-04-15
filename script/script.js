//Question 1
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];

function generateReports(students) { //The time compelixty of this program is O(n) 
    let studentsGrades = [];
    for (let i = 0; i < students.length; i++) {//O(n) 
        let student = { name: students[i].name };
        let avgScore = 0;
        let scores = students[i].scores;

        for (let j = 0; j < scores.length; j++) {//O(1)
            avgScore += scores[j];
        }

        avgScore = avgScore / scores.length;

        let grade = '';
        if (avgScore >= 90) { //o(1)
            grade = "A";
        } else if (avgScore >= 80) {//o(1)
            grade = "B";
        } else if (avgScore >= 70) {//o(1)
            grade = "C";
        } else if (avgScore >= 60) {//o(1)
            grade = "D";
        } else {//o(1)
            grade = "F";
        }

        student.Score = avgScore;
        student.grade = grade;

        studentsGrades.push(student);
    }

    return studentsGrades;
}

console.log(generateReports(students));


//Question2
//The time compelixty of this program is O(1)
class BankAccount{
     constructor(ownerName,initialBalance) {
        this.ownerName=ownerName;
        this.initialBalance=initialBalance;
    }
    deposit(amount){
        this.initialBalance+=amount
        console.log(`You put ${amount} in your account ${this.ownerName} `)
    }
    withdraw(amount){
        if (this.initialBalance>amount){//o(1)
            this.initialBalance-=amount
            console.log(`You took ${amount} from your account ${this.ownerName}  `)
        } 
        else{//o(1)
            console.log("No enough amount in the account ")
        }
    }
    transfer(account,amount){
        if(this.initialBalance>amount){//o(1)
            this.withdraw(amount)//o(1)
            account.deposit(amount)//o(1)
            console.log(`${this.ownerName} done transfering ${amount} to the reciever ${account.ownerName}`)
        }
        else{
            console.log("the transfer aint done :No enough amount in the account")
        }
    }
    getSummary(){
        return `${this.ownerName} balance is ${this.initialBalance}`
    }
 }
const taha = new BankAccount("taha",500)
const ahmad = new BankAccount("ahmad",1500)
const nabiha = new BankAccount('Nabiha',100)
taha.withdraw(200)
nabiha.withdraw(1000)
taha.deposit(1000)
ahmad.transfer(taha,200)
nabiha.transfer(taha,120)
console.log(taha.getSummary())
console.log(ahmad.getSummary())

window.onload=initialize;

function initialize()
{
    console.log("In initialize()");//Display start message
   
}

function conditions()
{
    let num1 = 10;
    let num2 = 5;
    let text1= "Mark";
    let text2= "Mary";

    if(num1 == num2)
        console.log("Number 1 is equal to Number 2");
    else
        console.log("Number 1 is not equal to Number 2");

    if(num2 > num1)
        console.log("Number 2 is greater than Number 1");
    else if(num2 < num1)
        console.log("Number 2 is less than Number 1");
    else
        console.log("Number 2 is equal to Number 1");
    
    //comparisons with if statements and strings
    if(text1 == text2)
        console.log("Text 1 is equal to Text 2");
    else
        console.log("Text 1 is not equal to Text 2");
        
    if(text1 >= text2)
        console.log("Text 1 is greater than or equal to Text 2");
    else
        console.log("Text 1 is less than to Text 2");
    
    //Comparisons with a switch statement using numbers
    switch(num2)
    {
        case 0:
            console.log("Number 2 is equal to 0");
        case 1:
            console.log("Number 2 is equal to 1");
        case 2:
            console.log("Number 2 is equal to 2");
        case 3:
            console.log("Number 2 is equal to 3");
        case 4:
            console.log("Number 2 is equal to 4");
        case 5:
            console.log("Number 2 is equal to 5");
        default:
            console.log("Number 2 is unknown value");
            break;
    }

    //Comparison using ternary operator
    num1 == num2 ? console.log("Using Ternary Operator - Number 1 is equal to Number 2") : console.log("Using Ternary Operator - Number 1 is not equal to Number 2");
}

function loops()
{
    let shapes = new Array('Triangle', 'Circle', 'Square');

    //Loops
    for(index = 0; index < shapes.length; ++index)
    {
        console.log("Using for loop getting Array value of " + shapes[index] + " at " + index);
    }
    //For loop print all elements
    for(index = 0; index < shapes.length; ++index)
    {
        if(index % 2 == 0)
            console.log("Array value of " + shapes[index] + " at even index of " + index);
    }

    //while loop
    let i = 0;
    while(i < shapes.length)
    {
        console.log("Using while loop getting array value of " + shapes[i] + " at " + i);
        ++i;
    }

    //Do while loop
    i = 0;
    do
    {
        console.log("Using do while loop getting array value of " + shapes[i] + " at " + i);
        ++i;
    }while( i < shapes.length)

}

function objects()
{
    let person1 =
    {
        firstName: "Bob",
        lastName: "Johnson",
        age: 25,
        occupation: "Student"
    };
    console.log('This is Person 1 ' + person1.firstName + ' ' + person1.lastName + ' who is of age ' + person1.age + ' and is a ' + person1.occupation);
    //Create person 2 object
    let person2 = new Object();
    person2.firstName = "Billy";
    person2.lastName = "white";
    person2.age = 35;
    person2.occupation = "Professor";
    console.log('This is Person 2 ' + person2.firstName + ' ' + person2.lastName + ' who is of age ' + person2.age + ' and is a ' + person2.occupation);
    //Create person object w constructor
    function person(firstName, lastName, age, occupation)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
    }
    let person3 = new person("Mary", "Jackson", 50, "Dean");
    let person4 = new person("John", "Lennon", 80, "Musician");
    console.log('This is Person 3 ' + person3.firstName + ' ' + person3.lastName + ' who is of age ' + person3.age + ' and is a ' + person3.occupation);
    console.log('This is Person 4 ' + person4.firstName + ' ' + person4.lastName + ' who is of age ' + person4.age + ' and is a ' + person4.occupation);

    function EnhancedPerson(firstName, lastName, age, occupation)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
        this.display = function()
        {
            console.log('This is an Enhanced Person ' + this.firstName + ' ' + this.lastName + ' who is age of ' + this.age + ' and is a ' + this.occupation);
        };
    }
    let person5 = new EnhancedPerson("Paul", "McCartney", 78, "Musician");
    person5.display();
}
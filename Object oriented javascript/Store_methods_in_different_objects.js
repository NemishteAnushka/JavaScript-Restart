//now here one problem is when ever we call this function user.about and user.is18 methods will call and store same functions for about 100s or millions time according to users so now here we will create one object and store about and is18 function in that object and give refrence in function so that function will be stored in specific memory . it is right method

const userMethod = {
    about : function(){
        return `${this.firstName} ${this.lastName} is my name. I am ${this.age} year old`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
  
    return user;
  }
  const users = createUser(
    "Anuja",
    "Nemishte",
    "anuja@gmail.com",
    17,
    "pune,Maharastra"
  );
  console.log(users);
  const userInfo = users.about();
  console.log(userInfo);
  const is18 = users.is18();
  console.log(is18);
  

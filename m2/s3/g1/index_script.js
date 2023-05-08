class User{
    constructor(firstName,lastName,age,location){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }
    checkOlder(user){
        if (this.age > user.age){
            return this.firstName + " è più vecchio di "+ user.firstName
                }else
                    {return user.firstName + " è più vecchio di "+ this.firstName}
    }

} 
let user1 = new User("luca","brancato","27","italia")
let user2 = new User("francesco","rossi","47","italia")




